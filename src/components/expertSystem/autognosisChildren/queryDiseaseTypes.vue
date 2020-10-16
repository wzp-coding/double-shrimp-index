<template>
  <div class="queryDiseaseTypes">
    <el-row>
      <div class="little_title">{{ title }}</div>
    </el-row>
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane
        v-for="(item,index) in labelList" :key="index"
         :label="item.littleTitle"
          ><div class="content">
            <el-row class="title">
              <el-col :span="24">{{item.littleTitle}} </el-col>
            </el-row>
            <el-row class="choices">
              <el-col :span="24">
                <el-radio-group v-model="radio" @change="handleRadio">
                  <el-radio
                  v-for="(item1,index1) in item.checkBoxs" :key="index1"
                   :label="item1">{{item1}}</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row class="commit">
              <el-col :span="12">
                <el-button type="primary">症状重选</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary" @click="submitDisease">症状提交</el-button>
              </el-col>
            </el-row>
          </div></el-tab-pane
        >
      </el-tabs>
    </el-row>
    <!--  -->
    <div class="lxl-content">
      <div class="lxl-card" v-for="item in 5" :key="item">
        <div>
          <el-image
            style="width: 100%; height: 200px"
            src="http://134.175.208.235/group1/M00/00/0A/rBAAD18hgoeAU6CaAAK1j4HbjSk344.png"
            :preview-src-list="srcList"
          ></el-image>
        </div>
        <div class="lxl-card-2">
          <p>气泡病虾病知识概览虾病知识概览虾病知识概览</p>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <!-- 查询结果 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "",
    };
  },
  props: ["title","labelList"],
  methods: {
    handleRadio() {
      console.log(this.radio);
    },
    // 点击提交症状
    submitDisease(){

    }
  },
};
</script>
<style lang="less" scoped>
.queryDiseaseTypes {
  .lxl-content {
    .el-pagination {
      width: 100%;
      padding: 20px;
      text-align: center;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .lxl-card {
      margin: 4px;
      height: 280px;
      width: 235px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      background-color: #fff;
      .lxl-card-2 {
        background-color: rgb(255, 255, 255);
        p {
          padding: 15px;
          text-align: center;
          font-weight: 10;
        }
      }
    }
  }
  .content {
    .choices {
      margin: 20px 0 20px 10px;
      .el-radio {
        margin: 10px;
      }
    }
  }
}
</style>