<template>
  <div>
    <div class="title">
      推荐文章
      <div style="float: right; cursor: pointer">
        <span style="color: #ddd; font-size: 14px">查看更多&nbsp;</span>
        <i
          class="el-icon-arrow-right"
          style="border: 1px solid #000; border-radius: 50%"
        ></i>
      </div>
    </div>
    <div class="block">
      <el-carousel>
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
    return {};
  },
  components: {
    miniArticleCard,
  },
};
</script>
<style lang="less">
.title {
  padding-top: 20px;
  font-size: 20px;
}
</style>