<template>
  <div>
    <div class="lxl-body">
      <div class="lxl-box">
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          class="lxl-breadcrumb"
        >
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item>专家系统</el-breadcrumb-item>
          <el-breadcrumb-item>专家问诊</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <!-- 热门专家 专家问答 推荐文章 -->
        <div class="three_part">
          <el-row :gutter="10">
            <el-col :span="8"
              ><div class="grid-content"><partOne></partOne></div
            ></el-col>
            <el-col :span="8"
              ><div class="grid-content"><partTwo></partTwo></div
            ></el-col>
            <el-col :span="8"
              ><div class="grid-content"><partThree></partThree></div
            ></el-col>
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
.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
}
.lxl-box {
  width: 1150px;
}
.three_part {
  margin-top: -18px;
  .el-row > .el-col {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
}
</style>