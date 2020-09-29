<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="grid-content">农技专家</div></el-col>
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