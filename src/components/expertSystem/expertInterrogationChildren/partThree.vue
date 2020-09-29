<template>
    <div>
        <div class="title">推荐文章</div>
        <div>
            <miniArticleCard></miniArticleCard>
            <miniArticleCard></miniArticleCard>
            <miniArticleCard></miniArticleCard>
            <miniArticleCard></miniArticleCard>
        </div>
    </div>
</template>
<script>
import miniArticleCard from './miniArticleCard.vue'

export default {
    data () {
    return {
      
    }
  },
  components:{
    miniArticleCard
  }
}
</script>
<style lang="less">
    
</style>