<template>
  <div class="mini_article_card">
    <el-card :body-style="{ padding: '0px' }">
      <div class="article_item">
        <div class="img">
          <img :src="oneArticle?(oneArticle.picture):'../../../assets/error.jpg'" alt="暂无" />
        </div>
        <div class="info">
          <div class="title">
            {{oneArticle?oneArticle.title:'暂无'}}
          </div>
          <div class="detail_info">
            <span>{{oneArticle?oneArticle.editor:'暂无'}}</span>
            <span>{{oneArticle?oneArticle.clickNum:'0'}}人阅读</span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props:["oneArticle"]
};
</script>
<style lang="less" scoped>
.mini_article_card {
  &:nth-child(1) {
    margin: 10px 0 4px 0;
  }
  margin-bottom: 4px;
  .article_item {
    display: flex;
    align-items: center;
    padding: 5px 0 0 5px;
    background: #e0f0e0;
    border-radius: 5px;
    .img {
      flex: 1;
        height: 109px;
      img {
        height: 100%;
        width: 100%;
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
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        margin-top: -20px;
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