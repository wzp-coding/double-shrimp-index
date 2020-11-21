<template>
  <div class="partThree">
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
        推荐文章
      </div>
      <div
        style="
          font-size: 0.8rem;
          margin-top: 6px;
          color: rgb(93, 183, 60);
          cursor: pointer;
        "
        @click="toArticleList()"
      >
        <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i>
      </div>
    </h3>
    <div class="block">
      <el-carousel :interval="Number(5000)" v-loading="loading">
        <el-carousel-item v-for="(item, index) in articleList" :key="index">
          <miniArticleCard
            v-for="item2 in item"
            :key="item2.id"
            :oneArticle="item2"
          ></miniArticleCard>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import miniArticleCard from "./miniArticleCard.vue";

export default {
  data() {
    return {
      articleList: [[], []],
      loading: true,
    };
  },
  components: {
    miniArticleCard,
  },
  methods: {
    // 跳转到文章列表
    toArticleList() {
      this.$router.push({ name: "wzp_articleList" });
    },
    // 获取8篇文章进行展示
    async getArticleList() {
      await this.reqM2Service(
        `/info/diseaseArticles/findByRecommend/1/8`,
        {},
        "get"
      ).then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          console.log("res: ", res);
          res.rows.forEach((item) => {
            if (this.articleList[0].length < 4) {
              this.articleList[0].push(item);
            } else {
              this.articleList[1].push(item);
            }
          });
        } else {
          this.$message({
            message: "获取文章信息失败",
          });
        }
        this.loading = false;
      });
    },
  },
  async mounted() {
    await this.getArticleList();
  },
};
</script>
<style lang="less" scoped>
.partThree {
  /deep/.mini_article_card {
    &:nth-child(1) {
      margin: 10px 0 4px 0;
    }
  }
}
</style>