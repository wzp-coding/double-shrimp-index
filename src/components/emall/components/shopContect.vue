<template>
  <div class="shop-contect">
    <el-row class="shop-contect-title">联系方式</el-row>
    <el-row class="shop-contect-main" type="flex" justify="space-between">
      <el-col class="main-left" :span="15">
        <el-row class="main-left-title">广州市海珠区仲恺养猪</el-row>
        <el-row class="main-left-bottom">
          <el-row class="main-left-bottom-item">
            <el-col :span="4" class="item-label">
                <i class="el-icon-user"></i>
                联系人</el-col>
            <el-col :span="5">{{shopInfo.createBy}}</el-col>
          </el-row>
          <el-row class="main-left-bottom-item">
            <el-col :span="4" class="item-label">
                <i class="el-icon-mobile"></i>
                联系电话</el-col>
            <el-col :span="6">{{shopInfo.merchantPhone}}</el-col>
          </el-row>
          <el-row class="main-left-bottom-item">
            <el-col :span="4" class="item-label">
                <i class="el-icon-location-outline"></i>
                所在地区</el-col>
            <el-col :span="20">{{shopInfo.shopAddress}}</el-col>
          </el-row>
        </el-row>
      </el-col>
      <el-col class="main-right" :span="8">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['shopInfo']
};
</script>

<style lang="less" scoped>
.shop-contect {
  .shop-contect-title {
    position: relative;
    padding: 10px 8px;
    &::before {
      content: "";
      position: absolute;
      width: 0.3em;
      height: 1.2em;
      top: 0.7em;
      left: 0em;
      background-color: #00c9fd;
    }
  }
  .shop-contect-main {
    padding: 8px;
    .main-left {
      //   background-color: blue;
      margin-top: 20px;
      .main-left-title {
        padding: 10px 0 20px;
        font-weight: bold;
        border-bottom: 1px solid #eee;
      }
      .main-left-bottom {
        padding: 20px 0;
        .main-left-bottom-item {
            padding: 10px 0;
            font-size: 14px;
            .item-label {
                color: #7f767b;
            }
        }
      }
    }
    .main-right {
    //   background-color: red;
      img {
          width: 100%;
      }
    }
  }
}
</style>