<template>
  <div class="autognosis lxl-body">
    <div class="container lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>疾病自诊</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
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
.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
  margin-bottom: 40px;
}
.lxl-box {
  width: 1150px;
}
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
    }
    .little_title {
      font-size: 26px;
      margin-bottom: 20px;
    }
    .el-tabs__header.is-left {
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
    }
    .el-tabs__item.is-left.is-active {
      background-color: rgb(135, 204, 95);
      color: #fff;
    }
    .content {
      margin: 5px;
      padding: 10px;
      .title {
        width: 19%;
        color: white;
        background: linear-gradient(
          to top,
          #57b7cf 0%,
          rgba(135, 204, 95, 1) 100%
        );
        padding: 18px;
        text-align: center;
        font-size: 1.3rem;
      }
    }
  }
}
</style>