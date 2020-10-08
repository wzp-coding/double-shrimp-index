<template>
  <div class="partTwo">
    <div class="title">
      专家问答
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
          <miniReplyCard></miniReplyCard>
          <miniReplyCard></miniReplyCard>
          <miniReplyCard></miniReplyCard>
          <miniReplyCard></miniReplyCard>
        </el-carousel-item>
        <el-carousel-item>
          <miniReplyCard></miniReplyCard>
          <miniReplyCard></miniReplyCard>
          <miniReplyCard></miniReplyCard>
          <miniReplyCard></miniReplyCard>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import miniReplyCard from "./miniReplyCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    miniReplyCard,
  },
};
</script>
<style lang="less" scoped>
.partTwo {
}
</style>