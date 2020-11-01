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
      <miniReplyCard :oneReply="item"></miniReplyCard>
    </el-row>
    <div class="pagination">
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
  props:["expertId"],
  data() {
    return {
      quesList: [],
      total: 50,
      size: 5,
      resetPage: false,
    };
  },
  components: {
    miniReplyCard,
    pagination,
  },
  methods: {
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
    async getRepliesList(expertsId, page=1, size=5) {
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
              data.forEach((item, index) => {
                this.$set(
                  res.rows[index],
                  "reply",
                  item.data.data.rows?.[0]?.reply
                );
              });
              this.quesList = res.rows;
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
      this.getRepliesList(this.expertId,page,size);
      // 取消重置换页
      this.resetPage = false;
    },
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