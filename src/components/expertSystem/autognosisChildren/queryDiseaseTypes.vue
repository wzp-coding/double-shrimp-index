<template>
  <div class="queryDiseaseTypes">
    <el-row>
      <div class="little_title">{{title}}</div>
    </el-row>
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane label="病毒性疾病"
          ><div class="content">
            <el-row class="title">
              <el-col :span="24">病毒性疾病 </el-col>
            </el-row>
            <el-row class="choices">
              <el-col :span="24">
                <el-radio-group v-model="radio" @change="handleRadio">
                  <el-radio :label="3">白色斑点</el-radio>
                  <el-radio :label="6">肌肉为白浊色、不透明</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row class="commit">
              <el-col :span="12">
                <el-button type="primary">症状重选</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary">症状提交</el-button>
              </el-col>
            </el-row>
          </div></el-tab-pane
        >
        <el-tab-pane label="细菌性疾病"
          ><div class="content">
            <el-row class="title">
              <el-col :span="24">细菌性疾病 </el-col>
            </el-row>
            <el-row class="choices">
              <el-col :span="24">
                <el-radio-group v-model="radio" @change="handleRadio">
                  <el-radio :label="3">白色斑点</el-radio>
                  <el-radio :label="6">肌肉为白浊色、不透明</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row class="commit">
              <el-col :span="12">
                <el-button type="primary">症状重选</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary">症状提交</el-button>
              </el-col>
            </el-row>
          </div></el-tab-pane
        >
        <el-tab-pane label="真菌性疾病"
          ><div class="content">
            <el-row class="title">
              <el-col :span="24">真菌性疾病 </el-col>
            </el-row>
            <el-row class="choices">
              <el-col :span="24">
                <el-radio-group v-model="radio" @change="handleRadio">
                  <el-radio :label="3">白色斑点</el-radio>
                  <el-radio :label="3">黑色斑点</el-radio>
                  <el-radio :label="3">红色斑点</el-radio>
                  <el-radio :label="3">紫色斑点</el-radio>
                  <el-radio :label="3">黄色斑点</el-radio>
                  <el-radio :label="3">蓝色斑点</el-radio>
                  <el-radio :label="6">肌肉为白浊色、不透明</el-radio>
                  <el-radio :label="6">肌肉为白浊色、不透明</el-radio>
                  <el-radio :label="6">肌肉为白浊色、不透明</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row class="commit">
              <el-col :span="12">
                <el-button type="primary">症状重选</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary">症状提交</el-button>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="虫害病"
          ><div class="content">
            <el-row class="title">
              <el-col :span="24">虫害病 </el-col>
            </el-row>
            <el-row class="choices">
              <el-col :span="24">
                <el-radio-group v-model="radio" @change="handleRadio">
                  <el-radio :label="3">白色斑点</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row class="commit">
              <el-col :span="12">
                <el-button type="primary">症状重选</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary">症状提交</el-button>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="其它病害"
          ><div class="content">
            <el-row class="title">
              <el-col :span="24">其它病害 </el-col>
            </el-row>
            <el-row class="choices">
              <el-col :span="24">
                <el-radio-group v-model="radio" @change="handleRadio">
                  <el-radio :label="3">白色斑点</el-radio>
                  <el-radio :label="6">肌肉为白浊色、不透明</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row class="commit">
              <el-col :span="12">
                <el-button type="primary">症状重选</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary">症状提交</el-button>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: -1,
    };
  },
  props:["title"],
  methods: {
    handleRadio() {
      console.log(this.radio);
    },
  },
};
</script>
<style lang="less" scoped>
.queryDiseaseTypes {
    
  .content {
    .choices {
      margin: 20px 0 20px 10px;
      .el-radio {
        margin: 10px;
      }
    }
    .commit {
      margin: 40px 0 10px 10px;
    }
  }
}
</style>