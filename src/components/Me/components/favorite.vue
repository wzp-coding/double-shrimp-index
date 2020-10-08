<template>
  <div class="favorite">
    <p class="favorite-title">全部宝贝</p>
    <div class="favorite-container">
      <div class="empty-list" v-if="favoriteList.length === 0">暂无收藏的商品</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteList: []
    }
  }
}
</script>

<style lang="less" scoped>
  .favorite {
    .favorite-title {
      color: #4ecb5f;
      font-size: 20px;
      padding: 10px;
      font-weight: bold;
    }
    .favorite-container {
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 100%;
      min-height: 300px;
      margin: 10px auto;
      .empty-list {
        width: 100%;
        height: 300px;
        line-height: 300px;
        text-align: center;
        color: #4ecb5f;
        font-size: 25px;
        font-weight: bold;
      }
    }
  }
</style>