<template>
  <div
    class="autognosis lxl-body" 
  >
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
          ><queryDiseaseTypes
            title="病类名查询"
            :labelList="labelList1"
          ></queryDiseaseTypes
        ></el-tab-pane>
        <el-tab-pane label="部位病害查询">
          <queryDiseaseTypes
            title="部位病害查询"
            :labelList="labelList2"
          ></queryDiseaseTypes
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
    return {
      labelList1: [
        {
          littleTitle: "病毒性疾病",
          checkBoxs: ["白色斑点", "肌肉为白浊色、不透明"],
        },
        {
          littleTitle: "细菌性疾病",
          checkBoxs: [
            "丝状细菌生长，生长缓慢",
            "头鳃区呈黑色或黄色，污物粘附于鳃上",
            "腹面发出荧光",
            "游泳足呈红色",
            "消化道呈红色",
            "体表和附肢上有黑褐色溃疡",
            "眼球肿胀，溃烂",
          ],
        },
        {
          littleTitle: "真菌性疾病",
          checkBoxs: ["霉菌侵入卵或幼体全身，不能发育"],
        },
        {
          littleTitle: "虫害病",
          checkBoxs: ["体表具黑灰色毛状物"],
        },
        {
          littleTitle: "其他病害",
          checkBoxs: [
            "溃疡性斑点，呈铁锈色或烧焦状",
            "甲壳薄而软，壳下有积水",
            "腹部弯曲，尾部弯于胸下呈抱尾状",
            "在夜间看到池水中有荧光",
            "夜间大量对虾脱壳并死亡",
          ],
        },
      ],
      labelList2: [
        {
          littleTitle: "肌肉",
          checkBoxs: ["肌肉为白浊色、不透明"],
        },
        {
          littleTitle: "体表",
          checkBoxs: [
            "白色斑点",
            "丝状细菌生长，生长缓慢",
            "体表具黑灰色毛状物，不摄食",
            "体表和附肢上有黑褐色溃疡",
          ],
        },
        {
          littleTitle: "肠",
          checkBoxs: ["消化道呈红色"],
        },
        {
          littleTitle: "四肢",
          checkBoxs: [
            "游泳足呈红色，活动力差",
            "体表和附肢上有黑褐色溃疡",
            "附肢有溃疡性斑点，呈铁锈色或烧焦状",
          ],
        },
        {
          littleTitle: "其他部位",
          checkBoxs: [
            "头鳃区呈黑色或黄色，污物粘附于鳃上",
            "甲壳薄而软，壳下有积水",
            "腹面发出荧光",
            "在夜间看到池水中有荧光",
            "霉菌侵入卵或幼体全身，不能发育",
            "腹部弯曲，尾部弯于胸下呈抱尾状",
            "眼球肿胀，溃烂",
            "夜间大量对虾脱壳并死亡",
          ],
        },
      ],
    };
  },
  components: {
    queryDisease,
    queryDiseaseTypes,
    diseaseKnowledges,
    photoDisease,
    waterfallReply,
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>
.lxl-body {
  height: 100%;
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
  margin-bottom: 40px;
}
/deep/.lxl-box {
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