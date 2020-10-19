<template>
  <div class="lxl-card">
    <div>
      <el-button type="primary" @click="toShopManage()" plain>申请成为店主</el-button>
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
        toShopManage(){
            this.$router.push("/shopMangerDetail")
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