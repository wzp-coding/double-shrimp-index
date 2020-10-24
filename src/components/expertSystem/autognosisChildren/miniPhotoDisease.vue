<template>
  <div class="mini_photo_disease">
    <el-card :body-style="{ padding: '0px' }">
      <div class="article_item">
        <div class="img">
          <img :src="info.pic" alt="" />
        </div>
        <div class="info">
          <router-link
          :to="{ path: '/autognosis/diseaseDateil', query: { id: info.id } }"
        >
          <div class="title">
            {{info.diseaseName}}
          </div>
          </router-link>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props:["info"],
  mounted(){
    console.log('this.info: ', this.info);
  }
};
</script>
<style lang="less" scoped>
.mini_photo_disease {
  &:nth-child(1) {
    margin: 10px 0 10px 0;
  }
  margin-bottom: 10px;
  .article_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 5px 0 5px;
    background: #f3f3f3;
    border-radius: 5px;
    .img {
      flex: 1;
      img {
        width: 100%;
        height: 180px;
      }
    }

    .info {
      flex: 2;
      display: flex;
      flex-direction: column;

      .title {
        text-align: center;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        margin-bottom: 10px;
      }
    }
  }
}
</style>