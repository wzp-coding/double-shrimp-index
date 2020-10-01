<template>
  <div class="partTwo">
    <div class="title">
      专家问答<i
        class="el-icon-arrow-right"
        style="
          border: 1px solid #000;
          border-radius: 50%;
          float: right;
          cursor: pointer;
        "
      ></i>
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
<style lang="less">
.partTwo {
  .title {
    padding-top: 20px;
    font-size: 20px;
  }
  .expertReply {
    display: flex;
    flex-direction: column;
  }
}
</style>