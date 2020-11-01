<template>
  <div class="recommendReply">
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
        其他问题
      </div>
      <div
        style="
          font-size: 0.8rem;
          margin-top: 6px;
          color: rgb(93, 183, 60);
          cursor: pointer;
        "
        @click="toExpertList()"
      >
        <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i>
      </div>
    </h3>
    <el-divider class="ccy-drvider"></el-divider>
    <el-row v-for="item in quesList" :key="item.id">
      <miniReplyCard :oneReply="item"></miniReplyCard>
    </el-row>
  </div>
</template>
<script>
import miniReplyCard from "../expertInterrogationChildren/miniReplyCard";

export default {
  data() {
    return {
      quesList: [],
    };
  },
  components: {
    miniReplyCard,
  },
  methods: {
    // 传入帖子id数组，并发请求回复内容
    async getOneReplyById(ids) {
      let httpTasks = [];
      ids.forEach((id) => {
        httpTasks.push(
          this.reqM2Service(
            `/details/findByPost/${id}/1/1`,{},'get'
          )
        );
      });
      return this.$http.all(httpTasks);
    },
    // 获取4个帖子问题进行展示
    async getRepliesList() {
      await this.reqM2Service(`/post/findAll/1/4`,{},"get")
        .then((res) => {
          res = res.data;
          console.log(res)
          if (res.code === 20000) {
            res = res.data;
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
                res.rows.forEach((item) => {
                  this.quesList.push(item);
                });
              })
            );
          } else {
            this.$message({
              message: "获取帖子信息失败",
            });
          }
        });
    },
    
  },
  mounted(){
      this.getRepliesList()
  }
};
</script>
<style lang="less" scoped>
.ccy-drvider {
  margin: 10px 0 7px 0;
}
.recommendReply {
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