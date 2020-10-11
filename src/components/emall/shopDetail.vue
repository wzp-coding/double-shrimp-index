<template>
  <div class="shop-detail">
    <!-- 店铺头部资料开始 -->
    <el-row class="shop-header" type="flex" align="middle">
      <el-col :offset="3" class="shop-avator">
        <img
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          alt=""
        />
      </el-col>
      <el-col :span="6" class="shop-name">
        <p>广州市仲恺农业信科院养猪场</p>
        <p>
          <i class="el-icon-location"></i>
          广州市海珠区
        </p>
      </el-col>
    </el-row>
    <!-- 店铺头部资料结束 -->

    <!-- 标签页开始 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" class="shop-nav">
      <el-tab-pane label="首页" name="homePage">
        <!-- 店铺详情首页 -->
        <shop-home-page></shop-home-page>
      </el-tab-pane>
      <el-tab-pane label="店铺档案" name="shopDoc">
        <shop-info></shop-info>
      </el-tab-pane>
      <el-tab-pane label="联系方式" name="contectWay">
        <shop-contect></shop-contect>
      </el-tab-pane>
    </el-tabs>
    <!-- 标签页结束 -->
  </div>
</template>

<script>
import shopHomePage from './components/shopHomePage'
import shopInfo from './components/shopInfo'
import shopContect from './components/shopContect'

export default {
  components: {
    shopHomePage,
    shopInfo,
    shopContect
  },
  data() {
    return {
      activeName: "homePage",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.shop-detail {
  width: 1150px;
  margin: 0 auto;
  .shop-header {
    margin: 5px 0;
    width: 100%;
    height: 100px;
    background-color: #00c9fd;
    border-radius: 2px;
    .shop-avator {
      height: 80%;
      background-color: #fff;
      border-radius: 4px;
      width: 90px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .shop-name {
      height: 60%;
      // background-color: red;
      color: #fff;
      font-size: 14px;
      margin-left: 15px;
      p:nth-child(1) {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }
}
</style>