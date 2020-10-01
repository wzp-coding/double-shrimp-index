<template>
  <div>
    <el-row style="padding-top:20px;font-size:20px;border-bottom:1px solid #ddd;">
      <el-col :span="24"><div class="grid-content">农技专家<i class="el-icon-arrow-right" style="border:1px solid #000;border-radius:50%;float:right;cursor: pointer;"></i></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content bg-purple"><miniExpertCard></miniExpertCard></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple"><miniExpertCard></miniExpertCard></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple"><miniExpertCard></miniExpertCard></div></el-col
      >
    </el-row>
  </div>
</template>
<script>
import miniExpertCard from './miniExpertCard.vue'

export default {
    data () {
    return {
      
    }
  },
  components:{
    miniExpertCard
  }
};
</script>
<style lang="less">
</style>