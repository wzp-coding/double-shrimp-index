<template>
  <div class="shop-detail lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item to="/emall">电子商城</el-breadcrumb-item>
        <el-breadcrumb-item>店铺</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

      <!-- 店铺头部资料开始 -->
      <el-row class="shop-header zyh-header" type="flex" align="middle">
        <el-col :offset="3" class="shop-avator">
          <img :src="shopInfo.merchantLogo" alt="" />
        </el-col>
        <el-col :span="12" class="shop-name">
          <p>{{ shopInfo.merchantName }}</p>
          <p>
            <i class="el-icon-location"></i>
            {{ shopInfo.shopAddress }}
          </p>
        </el-col>
      </el-row>
      <!-- 店铺头部资料结束 -->

      <!-- 标签页开始 -->
      <el-tabs v-model="activeName" class="shop-nav">
        <el-tab-pane label="首页" name="homePage">
          <!-- 店铺详情首页 -->
          <shop-home-page
            :shopInfo="shopInfo"
            :shopId="shopId"
          ></shop-home-page>
        </el-tab-pane>
        <el-tab-pane label="店铺档案" name="shopDoc">
          <shop-info :shopInfo="shopInfo"></shop-info>
        </el-tab-pane>
        <el-tab-pane label="联系方式" name="contectWay">
          <shop-contect :shopInfo="shopInfo"></shop-contect>
        </el-tab-pane>
      </el-tabs>
      <!-- 标签页结束 -->
    </div>
  </div>
</template>

<script>
import shopHomePage from "./components/shopHomePage";
import shopInfo from "./components/shopInfo";
import shopContect from "./components/shopContect";

export default {
  components: {
    shopHomePage,
    shopInfo,
    shopContect,
  },
  data() {
    return {
      activeName: "homePage",
      shopId: this.$route.query.merchantId,
      shopInfo: { shopAddress: "" },
    };
  },
  methods: {
    
    // 获取店铺信息函数
    async getShopInfo() {
      const { data: res } = await this.reqM4Service(
        `/merchant/${this.shopId}`,
        "",
        "get"
      );
      if (res.code !== 20000) return this.$message.error("该店铺跑路了噢~");
      this.shopInfo = res.data;
      // 拼接具体地址
      this.shopInfo.shopAddress =
        res.data.merchantProvince +
        res.data.merchantCity +
        res.data.merchantTown +
        res.data.merchantAddress;
    },
  },
  created() {
    this.getShopInfo();
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: btt;
  src: url("../../fonts/btt.ttf");
}
.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
}
.lxl-box {
  width: 1150px;
}
.shop-detail {
  width: 1150px;
  margin: 0 auto;
  .shop-header {
    margin: 5px 0;
    margin-top: -10px;
    padding: 30px;
    width: 100%;
    background-color: rgb(0, 201, 253);
    font-family: btt;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    border-radius: 2px;
    .shop-avator {
      height: 90px;
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
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }
}
</style>