<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/autognosis' }"
          >疾病自诊</el-breadcrumb-item
        >
        <el-breadcrumb-item>疾病详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div>
        <div class="someThing">
          <div class="lxl-1">
            <div>
              <h2><i class="el-icon-info"></i>病名</h2>
              <p style="margin-top: 3px">{{ diseaseInfo.diseaseName }}</p>
              <el-divider></el-divider>
              <h2><i class="el-icon-info"></i>症状</h2>
              <p style="margin-top: 3px">{{ diseaseInfo.symptom }}</p>
              <el-divider></el-divider>
              <h2><i class="el-icon-info"></i>预防</h2>
              <p style="margin-top: 3px">{{ diseaseInfo.solution }}</p>
            </div>
            <div>
              <div class="block">
                <el-image
                  :src="diseaseInfo.pic"
                ></el-image>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      diseaseInfo: {},
    };
  },
  methods: {
    async getDiseaseDeatailById(id) {
      await this.reqM1Service(`/education/diagnose/${id}`, {}, "get").then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          this.diseaseInfo = res;
          console.log("res: ", res);
        }
      });
    },
  },
  created() {
    let id = this.$route.query.id;
    this.id = id;
    // console.log('id: ', id);
  },
  async mounted() {
    await this.getDiseaseDeatailById(this.id);
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
  margin-bottom: 40px;
}
.lxl-box {
  width: 1150px;
}
.someThing {
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: rgb(245, 245, 245);
  display: flex;
  .lxl-1 {
    display: inherit;
    flex-direction: row;
    font-size: 13px;
    line-height: 30px;
    > * {
      flex: 1;
      padding: 10px;
    }
  }
}
/deep/.el-carousel__button {
  background-color: rgb(204, 123, 18) !important;
}
</style>