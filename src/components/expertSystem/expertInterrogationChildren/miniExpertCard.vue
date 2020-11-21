<template>
  <div class="mini_expert_card">
    <!-- 展示专家信息开始 -->
    <el-card :body-style="{ padding: '0px' }">
      <div class="experts_item">
        <div class="up">
          <div class="info">
            <img :src="oneExpert ? oneExpert.picture : ''" alt="" />
            <div class="name_address">
              <div class="name">
                <span>{{
                  oneExpert
                    ? oneExpert.name
                      ? oneExpert.name
                      : "匿名"
                    : "匿名"
                }}</span>
                <span style="padding: 0 10px">|</span>
                <el-button
                  type="text"
                  style="cursor: pointer"
                  @click="toExpertDetail"
                  >详情</el-button
                >
              </div>
              <div class="address">
                {{ oneExpert ? oneExpert.address : "无法获取" }}
              </div>
            </div>
          </div>
          <div class="replies">
            <div class="action">
              <span class="action_title">咨询量</span>
              <span class="action_num">{{
                oneExpert
                  ? oneExpert.consultingNum
                    ? oneExpert.consultingNum
                    : 0
                  : 0
              }}</span>
            </div>
            <div class="action">
              <span class="action_title">回复量</span>
              <span class="action_num">{{
                oneExpert
                  ? oneExpert.repliesNum
                    ? oneExpert.repliesNum
                    : 0
                  : 0
              }}</span>
            </div>
            <div class="action">
              <span class="action_title">回复率</span>
              <span class="action_num"
                >{{ isNaN(repliesRate) ? 0 : repliesRate }}%</span
              >
            </div>
          </div>
          <div class="major">
            <span>擅长&nbsp;:</span> {{ oneExpert ? oneExpert.goodAt : "暂无" }}
          </div>
          <div class="onlineTime">
            在线时间：{{ oneExpert ? oneExpert.onlineTime : "暂无" }}
          </div>
        </div>
        <div class="down">
          <el-button
            type="primary"
            round
            icon="el-icon-chat-dot-round"
            @click="addQues"
            >我要提问</el-button
          >
        </div>
      </div>
    </el-card>
    <!-- 展示专家信息结束 -->
    <!-- 我要提问 -->
    <addQuestion
      :show="show"
      @changeShow="changeShow"
      :expertId="expertId"
    ></addQuestion>
  </div>
</template>
<script>
import addQuestion from "./addQuestion";
export default {
  components: {
    addQuestion,
  },
  props: ["oneExpert"],
  data() {
    return {
      // 传入我要提问组件的属性
      show: false,
      expertId: "",
      // 本组件的属性
      userExpertId:""
    };
  },
  methods: {
    // 跳转到专家详情页面
    toExpertDetail() {
      this.$router.push({
        name: "wzp_expertDetail",
        params: { id: this.oneExpert.id },
      });
      location.reload();
    },
    changeShow() {
      this.show = !this.show;
    },
    // 根据用户id获取用户的专家信息
    async getExpertInfoByUserId(id) {
      await this.reqM2Service(`/info/experts/findByUser/${id}`, {}, "get").then(
        (res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.userExpertId = res.id;
            // this.userExpertName = res.name;
            // console.log("this.userExpertName: ", this.userExpertName);
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
    // 点击我要提问按钮
    async addQues() {
      // 判断提问的专家是否是用户本身专家
      // 先判断登录的用户是否是专家
      let isExpert = await this.judgeUserIsExpert(
        this.$store.state.userData.userId
      );
      if (isExpert) {
        // 再判断该页面对应的专家是否是用户专家
        await this.getExpertInfoByUserId(this.$store.state.userData.userId);
        if (this.userExpertId == this.oneExpert.id) {
          // 如果登录用户专家id等于该页面的专家id，则不可以提问
          this.$message({
            message:'禁止自问自答'
          })
          return;
        }
      }
      // 判断用户登录了没
      if (this.judgeUserIsLogin()) {
        // 将被提问的专家id传入
        this.expertId = this.oneExpert.id;
        // 用户登录了
        this.show = true;
      } else {
        // 用户未登录，跳转到登录页面
        this.$router.push({ path: "/login" });
      }
    },
    // 判断用户是否登录了
    judgeUserIsLogin() {
      if (window.sessionStorage.getItem("token")) {
        return true;
      } else {
        this.$message({
          message: "用户未登录，请先登录",
        });
        return false;
      }
    },
  },
  computed: {
    repliesRate() {
      if (this.oneExpert) {
        return (
          Math.floor(
            (this.oneExpert.repliesNum / this.oneExpert.consultingNum) * 10000
          ) / 100
        );
      }
      return 0;
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
.mini_expert_card {
  // margin: 10px 0;
  .experts_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5px 0 0 5px;
    background: #e0f0e0;
    border-radius: 5px;
    .up {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 10px 0 20px 0;
      .info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .name_address {
          .name {
            font-size: 18px;
          }

          a {
            font-size: 16px;
            color: green;
          }
        }

        .address {
          font-size: 12px;
          color: grey;
        }
      }
    }

    .replies {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .action {
        .action_num {
          color: rgb(255, 134, 139);
          font-size: 14px;
          margin-left: 8px;
        }
        .action_title {
          font-size: 13px;
        }
      }
    }

    .major {
      margin: 10px 0;
      color: grey;
      font-size: 14px;
      margin-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .onlineTime {
      margin-left: 10px;
      font-size: 13px;
    }
    .down {
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      justify-content: center;
      .el-button.is-round {
        padding: 10px 30px;
      }
    }
  }
}
</style>