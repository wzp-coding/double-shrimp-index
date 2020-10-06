<template>
  <div>
    <div class="container">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item>专家问诊</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="three_part">
        <el-row :gutter="20" style="background:rgb(243, 243, 243);border-radius:4px;margin-left:0;margin-right:0;">
          <el-col :span="8" style="background:#fff;margin:5px;"><div class="grid-content"><partOne></partOne></div></el-col>
          <el-col :span="8" style="background:#fff;margin:5px;"><div class="grid-content"><partTwo></partTwo></div></el-col>
          <el-col :span="8" style="background:#fff;margin:5px;"><div class="grid-content"><partThree></partThree></div></el-col>
        </el-row>
      </div>
      <div class="experts">
        <expert></expert>
      </div>
      <div class="expert_reply">
        <expertReply></expertReply>
      </div>
      <div class="articles">
        <articles></articles>
      </div>
    </div>
  </div>
</template>
<script>
import articles from "./expertInterrogationChildren/articles.vue";
import expert from "./expertInterrogationChildren/expert.vue";
import expertReply from "./expertInterrogationChildren/expertReply.vue";
import partOne from "./expertInterrogationChildren/partOne.vue";
import partTwo from "./expertInterrogationChildren/partTwo.vue";
import partThree from "./expertInterrogationChildren/partThree.vue";
export default {
  data() {
    return {};
  },
  components: {
    partOne,
    partTwo,
    partThree,
    expert,
    articles,
    expertReply,
  },
};
</script>
<style lang="less" scoped>
/deep/ a:-webkit-any-link{
  text-decoration: none;
}
/deep/ .el-card.is-always-shadow{
    box-shadow: none;
  }
/deep/.block {
  .el-carousel__container {
    height: 560px;
  }
  .el-carousel__indicators.el-carousel__indicators--horizontal {
    .el-carousel__button {
      background-color: #ccc;
    }
  }
}
.container {
  width: 1150px;
  margin: auto;
  /deep/.breadcrumb{
    margin: 10px 0 10px 0;
    padding-bottom: 10px;;
    border-bottom: 2px solid #ccc;
  }
  
 /deep/ .three_part {
    width: 100%;
    .title {
    padding-top: 20px;
    font-size: 20px;
  }
    .el-col-8 {
      width: 32.43333%;
      height: 600px;
      border-radius: 4px;
    }
  }
  
}
</style>