<template>
  <div class="expertOwnReply">
    <h3
      style="
        display: flex;
        justify-content: space-between;
        margin: 15px 5px 5px 4px;
      "
    >
      <div>
        <span
          style="margin-right: 5px; border-left: 6px solid rgb(93, 183, 60)"
        ></span>
        关于我的帖子
      </div>
    </h3>
    <el-divider class="ccy-drvider"></el-divider>
    <el-row v-for="item in quesList" :key="item.id">
      <miniReplyCard
        :oneReply="item"
        :showReplyBtn="showReplyBtn"
      ></miniReplyCard>
    </el-row>
    <h4 style="text-align:center" v-if="quesList.length == 0">暂无相关帖子</h4>
    <div class="pagination" v-if="quesList.length != 0">
      <pagination
        :total="total"
        :resetPage="resetPage"
        :size="size"
        @pageChange="handlePageChange"
      ></pagination>
    </div>
  </div>
</template>
<script>
import miniReplyCard from "../expertInterrogationChildren/miniReplyCard";
import pagination from "../expertListChildren/pagination";
export default {
  props: ["expertId"],
  data() {
    return {
      quesList: [],
      total: 50,
      size: 5,
      resetPage: false,
      showReplyBtn: false,
      userExpertId: "",
    };
  },
  components: {
    miniReplyCard,
    pagination,
  },
  methods: {
    // 根据用户id获取用户的专家信息
    async getExpertInfoByUserId(id) {
      await this.reqM2Service(`/info/experts/findByUser/${id}`, {}, "get").then(
        (res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.userExpertId = res.id;
            console.log("this.userExpertId: ", this.userExpertId);
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
    // 传入帖子id数组，并发请求回复内容
    async getOneReplyById(ids) {
      let httpTasks = [];
      ids.forEach((id) => {
        httpTasks.push(
          this.reqM2Service(`/info/details/findByPost/${id}/1/1`, {}, "get")
        );
      });
      return this.$http.all(httpTasks);
    },
    // 获取5个帖子问题进行展示
    async getRepliesList(expertsId, page = 1, size = 5) {
      await this.reqM2Service(
        `/info/post/findByExperts/${expertsId}/${page}/${size}`,
        {},
        "get"
      ).then((res) => {
        res = res.data;
        console.log(res);
        if (res.code === 20000) {
          res = res.data;
          this.total = res.total;
          let ids = [];
          res.rows.forEach((item) => ids.push(item.id));
          // 根据id数组并发请求回复
          this.getOneReplyById(ids).then(
            this.$http.spread((...data) => {
              console.log("data: ", data);
              data.forEach((item, index) => {
                this.$set(
                  res.rows[index],
                  "reply",
                  item.data.data.rows?.[0]?.reply
                );
                this.$set(
                  res.rows[index],
                  "replierId",
                  item.data.data.rows?.[0]?.replier
                );
                this.$set(
                  res.rows[index],
                  "replierName",
                  item.data.data.rows?.[0]?.replierName
                );
                this.$set(
                  res.rows[index],
                  "replierName",
                  item.data.data.rows?.[0]?.replierName
                );
                this.$set(
                  res.rows[index],
                  "replyId",
                  item.data.data.rows?.[0]?.id
                );
              });
              this.quesList = res.rows;
              // console.log('this.quesList: ', this.quesList);
            })
          );
        } else {
          this.$message({
            message: "获取帖子信息失败",
          });
        }
      });
    },
    // 处理换页请求
    handlePageChange({ page, size }) {
      // console.log('size: ', size);
      // console.log('page: ', page);
      this.getRepliesList(this.expertId, page, size);
      // 取消重置换页
      this.resetPage = false;
    },
  },
  async created() {
    // 先判断登录的用户是否是专家
    let isExpert = await this.judgeUserIsExpert(
      this.$store.state.userData.userId
    );
    if (isExpert) {
      // 再判断该页面对应的专家是否是用户专家
      await this.getExpertInfoByUserId(this.$store.state.userData.userId);
      if (this.userExpertId == this.expertId) {
        // 如果登录用户专家id等于该页面的专家id，则可以回复
        this.showReplyBtn = true;
      }
    }
  },
  mounted() {
    this.getRepliesList(this.expertId);
  },
};
</script>
<style lang="less" scoped>
.ccy-drvider {
  margin: 10px 0 7px 0;
}
.expertOwnReply {
  /deep/.el-card {
    border: none;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    .ques_item {
      background-color: #fff;
      border-radius: 0;
      .mid {
        height: 100%;
      }
    }
  }
}
</style>