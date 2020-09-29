<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="grid-content">最新文章</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content"><miniArticleCard></miniArticleCard></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content"><miniArticleCard></miniArticleCard></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content"><miniArticleCard></miniArticleCard></div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content"><miniArticleCard></miniArticleCard></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content"><miniArticleCard></miniArticleCard></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content"><miniArticleCard></miniArticleCard></div></el-col
      >
    </el-row>
  </div>
</template>
<script>
import miniArticleCard from './miniArticleCard.vue'

export default {
    data () {
    return {
      
    }
  },
  methods:{

  },
  mounted(){
  },
  components:{
    miniArticleCard
  }
};
</script>
<style lang="less">

</style>