<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="grid-content">专家问答</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content bg-purple"><miniReplyCard></miniReplyCard></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple"><miniReplyCard></miniReplyCard></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple"><miniReplyCard></miniReplyCard></div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content bg-purple"><miniReplyCard></miniReplyCard></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple"><miniReplyCard></miniReplyCard></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple"><miniReplyCard></miniReplyCard></div></el-col
      >
    </el-row>
  </div>
</template>
<script>
import miniReplyCard from './miniReplyCard.vue'

export default {
  data () {
    return {
      
    }
  },
  components:{
    miniReplyCard
  }
};
</script>
<style lang="less">
</style>