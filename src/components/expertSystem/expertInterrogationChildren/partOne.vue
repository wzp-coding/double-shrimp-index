<template>
  <div>
    <div class="title">
      热门专家
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
          <miniExpertCard></miniExpertCard>
          <miniExpertCard></miniExpertCard>
        </el-carousel-item>
        <el-carousel-item>
          <miniExpertCard></miniExpertCard>
          <miniExpertCard></miniExpertCard>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import miniExpertCard from "./miniExpertCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    miniExpertCard,
  },
};
</script>
<style lang="less">
.title {
  padding-top: 20px;
  font-size: 20px;
}
.block {
  .el-carousel__container {
    height: 560px;
  }
  .el-carousel__indicators.el-carousel__indicators--horizontal {
    .el-carousel__button {
      background-color: #ccc;
    }
  }
}
</style>