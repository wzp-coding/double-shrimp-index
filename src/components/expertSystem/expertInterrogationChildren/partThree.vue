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
        @click="toExpertList()"
      >
        <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i>
      </div>
    </h3>
    <div class="block">
      <el-carousel interval="5000" v-loading="loading">
        <el-carousel-item>
          <miniArticleCard></miniArticleCard>
          <miniArticleCard></miniArticleCard>
          <miniArticleCard></miniArticleCard>
          <miniArticleCard></miniArticleCard>
        </el-carousel-item>
        <el-carousel-item>
          <miniArticleCard></miniArticleCard>
          <miniArticleCard></miniArticleCard>
          <miniArticleCard></miniArticleCard>
          <miniArticleCard></miniArticleCard>
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
      loading: true,
    };
  },
  components: {
    miniArticleCard,
  },
  mounted() {
    this.loading = false;
  },
};
</script>
<style lang="less" scoped>
</style>