<template>
  <div class="miniPPTCard">
    <el-card :body-style="{ padding: '0px' }">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix" style="margin:10px 0;">
          <time class="time">{{ currentDate }}</time>
        </div>
        <div class="btns">
          <el-button type="primary" plain>预览</el-button>
          <el-button type="primary" plain>下载</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
    data() {
    return {
      currentDate: '2020-12-12 12:12:00'
    };
  }
};
</script>
<style lang="less" scoped>
.miniPPTCard{
    text-align: center;
    font-size: 14px;
    img{
        width: 100%;
        height: 100%;
    }
    .btns{
        display: flex;
        justify-content: space-around;
    }
}
</style>