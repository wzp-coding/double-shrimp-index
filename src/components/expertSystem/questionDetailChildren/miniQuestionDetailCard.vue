<template>
  <div class="miniQuestionDetailCard">
    <div class="que_item">
      <!-- 问题区域 -->
      <div class="wzp-que">
        <div class="que_text" style="position:relative;">
          <div class="up">
            <span class="queicon">问</span>
            <span class="quetext"> {{ quesInfo.title }} </span>
            <div class="res_time">
              {{ quesInfo.userName ? quesInfo.userName : "匿名" }}
              {{ this.formatTime(quesInfo.creationTime) }}
            </div>
          </div>
          <div class="demo-image__preview;" style="margin-top: 10px">
            <div
              class="images_content"
              v-if="quesInfo.images ? quesInfo.images.length != 0 : false"
            >
              <el-image
                v-for="(item, index) in quesInfo.images"
                :key="index"
                style="width: 100px; height: 100px; margin-right: 10px"
                :src="item"
                :preview-src-list="quesInfo.images"
                fit="cover"
              >
              </el-image>
            </div>
          </div>
          <div
            class="showBtn"
            style="position: absolute; bottom: 0px; right: 0px"
            v-if="showBtn"
          >
            <el-button type="primary" plain @click="handleReply">{{
              btnContent
            }}</el-button>
          </div>
        </div>
      </div>
      <!-- 回复对话框 -->
      <publicReply
        :info="dialogInfo"
        :title="dialogTitle"
        :type="dialogType"
        :show="show"
        @changeShow="changeShow"
      ></publicReply>
    </div>
  </div>
</template>
<script>
import publicReply from "../expertManage/expertManageChildren/publicReply";
export default {
  data() {
    return {
      // 传递给对话框组件的属性
      dialogTitle: "",
      dialogType: "",
      show: false,
      dialogInfo: {
        replyId: "",
        quesId: "",
        replierId: "",
        replierName: "",
        reply: "",
        images: "",
        experts: true,
      },
      // 本组件的属性
      showBtn: false,
      btnContent: "",
      userExpertId: "",
      userExpertName: "",
      isExpert: false,
    };
  },
  components: {
    publicReply,
  },
  props: ["quesInfo"],
  watch: {
    async quesInfo() {
      console.log("this.quesInfo: ", this.quesInfo);
      if (this.quesInfo.userId) {
        // 判断是不是发帖人或者被提问的专家
        if (this.$store.state.userData.userId == this.quesInfo.userId) {
          // 发帖人
          this.showBtn = true;
          this.btnContent = "我要追问";
        } else {
          // 先判断登录的用户是否是专家
          this.isExpert = await this.judgeUserIsExpert(
            this.$store.state.userData.userId
          );
          if (this.isExpert) {
            // 再判断该页面对应的专家是否是用户专家
            await this.getExpertInfoByUserId(this.$store.state.userData.userId);
            if (this.userExpertId == this.quesInfo.expertsId) {
              // 如果登录用户专家id等于该页面的专家id，则可以回复
              this.showBtn = true;
              this.btnContent = "我要回复";
            }
          }
        }
      }
    },
  },
  methods: {
    // 点击我要回复或者追问按钮
    handleReply() {
      this.changeShow();
      this.dialogType = "add";
      if (this.isExpert) {
        this.dialogTitle = "添加回复";
        this.dialogInfo.replierId = this.userExpertId;
        this.dialogInfo.replierName = this.userExpertName;
      } else {
        this.dialogTitle = "继续追问";
        this.dialogInfo.replierId = this.quesInfo.userId;
        this.dialogInfo.replierName = this.quesInfo.userName;
      }
      this.dialogInfo.quesId = this.quesInfo.id;
    },
    // 控制显示修改或者添加界面
    changeShow() {
      this.show = !this.show;
    },
    formatTime(date) {
      //date是传入的时间
      const d = new Date(date);
      const month =
        d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
      const hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
      const min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
      const sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
      const times =
        d.getFullYear() +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        min +
        ":" +
        sec;
      return times;
    },
    // 根据用户id获取用户的专家信息
    async getExpertInfoByUserId(id) {
      await this.reqM2Service(`/info/experts/findByUser/${id}`, {}, "get").then(
        (res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.userExpertId = res.id;
            this.userExpertName = res.name;
            console.log("this.userExpertName: ", this.userExpertName);
            // console.log("this.userExpertId: ", this.userExpertId);
          } else {
            this.$message({
              message: "获取用户专家信息失败",
            });
          }
          this.loading = false;
        }
      );
    },
    // 根据userId判断该用户是否是专家
    async judgeUserIsExpert(id) {
      let flag = false;
      await this.reqM2Service(`/info/experts/isExperts/${id}`, {}, "get").then(
        (res) => {
          res = res.data;
          if (res.code == 20000) {
            // console.log("res: ", res);
            flag = res.flag;
          }
        }
      );
      return flag;
    },
  },
  async created() {},
};
</script>
<style lang="less" scoped>
.res_time {
  margin-top: 8px;
  color: #ccc;
  font-size: 12px;
}
.miniQuestionDetailCard {
  /deep/ .que_item {
    .que_text {
      .ccy-drvider {
        margin: 10px 0 7px 0;
      }
      .up {
        .queicon {
          padding: 4px 4px;
          background-color: rgb(103, 212, 86);
          border-radius: 4px;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          margin-right: 3px;
        }

        .quetext {
          font-weight: 200;
        }
      }

      .img_content {
        img {
        }
      }
    }

    .info {
      display: flex;
      justify-content: space-between;
      color: #ccc;
      font-size: 12px;
      margin-top: 20px;
      .left {
        img {
          width: 20px;
          height: 20px;
          background-color: greenyellow;
          border-radius: 50%;
        }

        .user_name {
        }
      }

      .update_time {
      }
    }
  }
}
</style>