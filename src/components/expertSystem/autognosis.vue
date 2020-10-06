<template>
  <div class="autognosis">
    <div class="container">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item>疾病自诊</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-tabs tab-position="left">
        <el-tab-pane label="病情查询"
          ><queryDisease></queryDisease
        ></el-tab-pane>
        <el-tab-pane label="病类名查询"
          ><queryDiseaseTypes title="病类名查询"></queryDiseaseTypes
        ></el-tab-pane>
        <el-tab-pane label="部位病害查询">
          <queryDiseaseTypes title="部位病害查询"></queryDiseaseTypes
        ></el-tab-pane>
        <el-tab-pane label="虾病知识概览">
          <diseaseKnowledges></diseaseKnowledges>
        </el-tab-pane>
      </el-tabs>
      <div class="photoDisease">
        <photoDisease></photoDisease>
      </div>
      <div class="waterfallReply">
        <waterfallReply></waterfallReply>
      </div>
    </div>
  </div>
</template>
<script>
import queryDisease from "./autognosisChildren/queryDisease";
import queryDiseaseTypes from "./autognosisChildren/queryDiseaseTypes";
import diseaseKnowledges from "./autognosisChildren/diseaseKnowledges";
import photoDisease from "./autognosisChildren/photoDisease";
import waterfallReply from "./autognosisChildren/waterfallReply";
export default {
  data() {
    return {};
  },
  components: {
    queryDisease,
    queryDiseaseTypes,
    diseaseKnowledges,
    photoDisease,
    waterfallReply,
  },
  methods: {},
};
</script>
<style lang="less" scoped>
/deep/a:-webkit-any-link {
  text-decoration: none;
}
/deep/.el-card.is-always-shadow {
  box-shadow: none;
}
.autognosis {
 /deep/ .container {
    width: 1150px;
    margin: auto;
    .breadcrumb {
      margin: 10px 0 10px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #ccc;
    }
    .little_title {
      font-size: 36px;
      border-bottom: 1px solid #eee;
      margin-bottom: 20px;
    }
    .el-tabs__header.is-left {
      border: 1px solid rgb(95, 138, 204);
      border-radius: 4px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
    }
    .el-tabs__item.is-left.is-active {
      background-color: rgb(95, 138, 204);
      color: #fff;
    }
    .content {
      border: 1px solid #5f8acc;
      border-radius: 4px;
      .title {
        background-color: rgb(95, 138, 204);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding: 10px 0 10px 10px;
      }
    }
  }
}
</style>