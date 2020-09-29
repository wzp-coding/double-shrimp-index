<template>
  <div>
    <div class="container">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">专家问诊</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="three_part">
        <el-row :gutter="20" style="background:rgb(243, 243, 243);border-radius:4px;">
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
<style lang="less">
.container {
  width: 1150px;
  margin: auto;
  .breadcrumb{
    margin: 10px 0 20px 0;
    padding-bottom: 10px;;
    border-bottom: 2px solid #ccc;
  }
  .three_part {
    width: 100%;
  }
  .el-col-8 {
    width: 32.43333%;
  }
  .el-card.is-always-shadow{
    box-shadow: none;
  }
}
</style>