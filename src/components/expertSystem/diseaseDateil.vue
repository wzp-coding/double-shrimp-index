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
      <div class="main">
        <!-- title begin -->
        <div class="title">
          <h1>{{diseaseInfo[0].diseaseName}}</h1>
          <br>
        </div>
        <!-- title end -->
        <!-- picture begin -->
        <div class="picture">
          <img :src="diseaseInfo[0].pic" alt="图片区">
        </div>
        <br>
        <!-- picture end -->
        <!-- content begin -->
        <div class="content">
          <div>
            <h2 class="a">症状</h2>
          </div>
          <p>{{diseaseInfo[0].symptom}}</p>
          <br>
          <div>
            <h2 class="b">预防措施</h2>
          </div>
          <p>{{diseaseInfo[0].solution}}</p>
        </div>
        <!-- content end -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      diseaseInfo: [],
    };
  },
  created() {
    let id = this.$route.query.id;
    this.id = id;
    this.getDiseaseDeatailById(this.id)
  },
  methods: {
    async getDiseaseDeatailById(id) {
      await this.reqM1Service(`/education/diagnose/${id}`, {}, "get").then((res) => {
        res = res.data;
        if (res.code === 20000) {
          this.diseaseInfo.push({
            diseaseName:res.data.diseaseName,
            symptom:res.data.symptom,
            solution:res.data.solution,
            pic:res.data.pic

          })
          console.log(this.diseaseInfo);
        }
      });
    },
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
/deep/.el-table th>.cell {
  text-align: center;
}
/deep/.el-table .cell {
  text-align: center;
}
/deep/.el-carousel__button {
  background-color: rgb(204, 123, 18) !important;
}
// title
.title {
  display: flex;
  justify-content: center;
  padding-bottom: 30px  ;
}
// picture
.picture {
  display: flex;
  justify-content: center;
}
.picture img {
  background-size: contain;
  width: 381px;
  height: 200px;
}
h1 {
  font-size: 34px;
  font-weight: 400;
  line-height: 1.15;
}
// content
.content {
  width: 1000px;
}
.content div {
    border-left: 12px solid #4F9CEE;
}
.content h2 {
  font-size: 22px;
  padding: 0 8px 0 18px;
  background-color: white;
  font-weight: 400;
}
.content p {
  font-size: 14px;
  color: #333;
  text-indent: 2em;
  line-height: 40px;
  margin-top: 15px; 
  letter-spacing: 1.5px; 
}
  
</style>