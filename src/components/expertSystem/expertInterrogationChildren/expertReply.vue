<template>
  <div>
    <el-row
      style="padding-top: 20px; font-size: 20px; border-bottom: 1px solid #ddd"
    >
      <el-col :span="24"
        ><div class="grid-content">
          专家问答
          <div style="float: right; cursor: pointer">
            <span style="color: #ddd; font-size: 14px">查看更多&nbsp;</span>
            <i
              class="el-icon-arrow-right"
              style="border: 1px solid #000; border-radius: 50%"
            ></i>
          </div></div
      ></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <miniReplyCard></miniReplyCard></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <miniReplyCard></miniReplyCard></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <miniReplyCard></miniReplyCard></div
      ></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <miniReplyCard></miniReplyCard></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <miniReplyCard></miniReplyCard></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <miniReplyCard></miniReplyCard></div
      ></el-col>
    </el-row>
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
</style>