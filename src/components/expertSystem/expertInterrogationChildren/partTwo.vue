<template>
  <div class="partTwo">
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
        @click="toReplyList"
      >
        <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i>
      </div>
    </h3>
    <div class="block">
      <el-carousel :interval="Number(5000)" v-loading="loading">
        <el-carousel-item v-for="(item, index) in quesList" :key="index">
          <miniReplyCard
            v-for="item2 in item"
            :key="item2.id"
            :oneReply="item2"
          ></miniReplyCard>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import miniReplyCard from "./miniReplyCard.vue";

export default {
  data() {
    return {
      quesList: [[], []],
      loading:true
    };
  },
  components: {
    miniReplyCard,
  },
  methods: {
    // 跳转到帖子列表
    toReplyList(){
      this.$router.push({name:'wzp_replyList'})
    },
    // 传入帖子id数组，并发请求回复内容
    async getOneReplyById(ids) {
      let httpTasks = [];
      ids.forEach((id) => {
        httpTasks.push(
          this.$http.get(
            `http://106.75.154.40:9012/info/details/findByPost/${id}/1/1`
          )
        );
      });
      return this.$http.all(httpTasks);
    },
    // 获取8个帖子问题进行展示
    async getRepliesList() {
      await this.$http
        .get(`http://106.75.154.40:9012/info/post/findAll/1/8`)
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            let ids= []
            res.rows.forEach((item) => ids.push(item.id));
            this.getOneReplyById(ids).then(
              this.$http.spread((...data) => {
                data.forEach((item, index) => {
                  this.$set(res.rows[index], "reply", item.data.data.rows?.[0]?.reply);
                });
                res.rows.forEach((item) => {
                  if (this.quesList[0].length < 4) {
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
          this.loading = false
        });
    },
  },
 async mounted() {
   await this.getRepliesList();
  },
};
</script>
<style lang="less" scoped>
</style>