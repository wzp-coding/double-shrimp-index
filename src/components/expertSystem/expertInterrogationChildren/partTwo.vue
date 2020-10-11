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
        @click="toExpertList()"
      >
        <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i>
      </div>
    </h3>
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