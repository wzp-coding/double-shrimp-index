<template>
  <div class="mini_article_card">
    <el-card :body-style="{ padding: '0px' }">
      <div class="article_item">
        <div class="img">
          <img src="../../../assets/111111.png" alt="" />
        </div>
        <div class="info">
          <div class="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            assumenda.
          </div>
          <div class="detail_info">
            <span>Lorem, ipsum.</span>
            <span>768人阅读</span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.mini_article_card {
  &:nth-child(1){
     margin: 10px 0 10px 0;
   }
     margin-bottom: 10px;
  .article_item {
    display: flex;
    align-items: center;
    padding: 5px 0 0 5px;
    background: #f3f3f3;
    border-radius: 5px;
    .img {
        flex: 1;
      img {
          width: 100%;
          height: 100px;
      }
    }

    .info {
        flex: 2;
        display: flex;
        flex-direction: column;
        
      .title {
          font-size: 13px;
          font-weight: 700;
        margin-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        margin-bottom: 50px;
      }

      .detail_info {
          margin: 0 10px;
          font-size: 12px;
          margin-bottom: 10px;
          color: grey;
          display: flex;
          justify-content: space-between;
        span {
        }
      }
    }
  }
}
</style>