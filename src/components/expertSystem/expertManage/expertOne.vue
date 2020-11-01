<template>
  <div class="expertOne" v-loading="loading">
    <div class="title">个人信息</div>
    <el-card shadow="always">
      <span>名字：{{expertInfo.name}}</span>
    </el-card>
    <el-card shadow="always">
      <span>身份：{{expertInfo.state == 1?'专家':''}}</span>
    </el-card>
    <el-card shadow="always">
      <span>认证情况：{{expertInfo.state == 1?'已经认证为专家':''}}</span>
    </el-card>
    <el-card shadow="always">
      <span>擅长：{{expertInfo.goodAt}}</span>
    </el-card>
    <el-card shadow="always">
      <span>在线时间：{{expertInfo.onlineTime}}</span>
    </el-card>
    <el-card shadow="always">
      <span>地址：{{expertInfo.address}}</span>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId:'1264238099769200640',
      loading:true,
      expertInfo:{}
    }
  },
  methods:{
    getExpertInfoByUserId(id){
      this.$http
        .get(`http://106.75.154.40:9012/info/experts/findByUser/${id}`)
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.expertInfo = res;
          } else {
            this.$message({
              message: "获取专家信息失败",
            });
          }
          this.loading = false
        });
    }
  },
  mounted(){
    this.getExpertInfoByUserId(this.userId)
  }
};
</script>
<style lang="less">
.expertOne {
  .title {
    text-align: center;
    font-size: 18px;
    padding: 10px 0;
    font-weight: 500;
  }
}
</style>