<template>
  <div class="recommendReply">
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
        其他问题
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
     <el-divider class="ccy-drvider"></el-divider>
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
<style lang="less" scoped>
.ccy-drvider {
  margin: 10px 0 7px 0;
}
.recommendReply{
  /deep/.el-card{
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