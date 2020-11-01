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
        农技文章
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
    <el-divider class="ccy-drvider"></el-divider>
    <el-row :gutter="20" v-loading="loading" v-for="(item, index) in articleList"
      :key="index">
      <el-col :span="8"  v-for="item1 in item" :key="item1.id"
        ><div class="grid-content"><miniArticleCard :oneArticle="item1"></miniArticleCard></div
      ></el-col>
    </el-row>
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
  methods: {
    async getRepliesList() {
      await this.reqM2Service(`/info/diseaseArticles/1/6`,{},"post")
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            res.rows.forEach((item) => {
              if (this.articleList[0].length < 3) {
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
    toArticleList() {
      this.$router.push({ name: "wzp_articleList" });
    },
  },
  mounted() {
    this.getRepliesList()
  },
  components: {
    miniArticleCard,
  },
};
</script>
<style lang="less" scoped>
.ccy-drvider {
  margin: 10px 0 7px 0;
}
</style>