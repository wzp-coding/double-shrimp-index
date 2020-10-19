<template>
  <div class="lxl-card">
    <div>
      <el-button type="primary" @click="toExpertManage()" plain>注册专家</el-button>
    </div>
  </div>
</template>
<script>
export default{
    data() {
        return {
            
        }
    },
    methods: {
        toExpertManage(){
            this.$router.push("/expertSystemManage")
        }
    },
}
</script>
<style lang="less" scoped>
.lxl-card {
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 80px;
}
</style>