<template>
  <div class="goods-purchased">
    <p class="goods-title">已经购买的商品</p>
    <div class="goods-container">
      <div class="empty-list" v-if="goodsList.length === 0">暂无购买的商品</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: []
    }
  }
}
</script>

<style lang="less" scoped>
  .goods-purchased {
    .goods-title {
      color: #4ecb5f;
      font-size: 20px;
      padding: 10px;
      font-weight: bold;
    }
    .goods-container {
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