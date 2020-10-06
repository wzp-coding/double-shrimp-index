<template>
  <div class="recommendReply">
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
    <el-row>
        <miniReplyCard></miniReplyCard>
    </el-row>
    <el-row>
        <miniReplyCard></miniReplyCard>
    </el-row>
    <el-row>
        <miniReplyCard></miniReplyCard>
    </el-row>
    <el-row>
        <miniReplyCard></miniReplyCard>
    </el-row>
  </div>
</template>
<script>
import miniReplyCard from "../expertInterrogationChildren/miniReplyCard";

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
.recommendReply{
  .el-card{
    border:none;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  .ques_item{
    background-color: #fff;
    border-radius: 0;
    .mid{
      height: 100%;
    }
  }
  }
}
</style>