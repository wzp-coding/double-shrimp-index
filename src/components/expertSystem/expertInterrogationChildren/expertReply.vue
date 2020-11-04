<template>
  <div>
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
        专家问答
      </div>
      <div
        style="
          font-size: 0.8rem;
          margin-top: 6px;
          color: rgb(93, 183, 60);
          cursor: pointer;
        "
        @click="toReplyList()"
      >
        <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i>
      </div>
    </h3>
    <el-divider class="ccy-drvider"></el-divider>
    <el-row
      :gutter="20"
      v-for="(item, index) in quesList"
      :key="index"
      v-loading="loading"
    >
      <el-col :span="8" v-for="item1 in item" :key="item1.id"
        ><div class="grid-content bg-purple">
          <miniReplyCard :oneReply="item1"></miniReplyCard></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
import miniReplyCard from "./miniReplyCard.vue";

export default {
  data() {
    return {
      quesList: [[], []],
      loading: true,
    };
  },
  components: {
    miniReplyCard,
  },
  methods: {
    async getOneReplyById(ids) {
      let httpTasks = [];
      ids.forEach((id) => {
        httpTasks.push(
          this.reqM2Service(
            `/info/details/findByPost/${id}/1/1`,{},'get'
          )
        );
      });
      return this.$http.all(httpTasks);
    },
    async getRepliesList() {
      await this.reqM2Service(`/info/post/findAll/1/6`,{},'get')
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            let ids = [];
            res.rows.forEach((item) => ids.push(item.id));
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
                  if (this.quesList[0].length < 3) {
                    this.quesList[0].push(item);
                  } else {
                    this.quesList[1].push(item);
                  }
                });
              })
            );
          } else {
            this.$message({
              message: "获取帖子信息失败",
            });
          }
          this.loading = false;
        });
    },
    toReplyList(){
      this.$router.push({name:'wzp_replyList'})
    }
  },
  mounted() {
    this.getRepliesList();
    console.log(this.quesList)
  },
};
</script>
<style lang="less" scoped>
.ccy-drvider {
  margin: 10px 0 7px 0;
}
</style>