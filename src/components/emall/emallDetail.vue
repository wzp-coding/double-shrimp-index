<template>
    <div class="lxl-body">
      <div class="lxl-box">
        <!-- 面包屑导航区域 -->
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          class="lxl-breadcrumb"
        >
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/emall' }">电子商城</el-breadcrumb-item>
          <el-breadcrumb-item>商品详情页面</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 商品图片介绍与购买 -->
        <div class="goodsIntroduceArea">
            <el-row :gutter="20">
          <!-- 左侧图片 -->
          <el-col :span="9">
            <div class="goodDetails_name_img">
              <div style="width: 400px;height: 400px">
                <img :src="ImgUrl" style="width: 100%;height: 100%">
              </div>
              <div class="little_img" >
                <ul v-for="(img, index) in imgUrl" :key="index">
                  <li @click='getIndex(img.url)'>
                    <img :src="img.url" style="width: 60px; height: 60px" >
                  </li>
                </ul>
              </div>
            </div>
          </el-col>

          <!-- 右侧介绍 -->
          <el-col :span="15">
            <!-- 标题 -->
            <div>
              <el-tag effect="dark" type="danger" size="mini">优选</el-tag>
              <span class="goodsTitle">潜江小龙虾</span>
            </div>
            <!-- 更新时间 -->
            <div class="updateTime">更新时间：2020年9月27日 20:28:00</div>
            <!-- 价格 -->
            <div class="priceBackground">
              <span style="font-size: 14px; color: #aaa">价格</span>
              <span style="font-size: 24px; color: red">8-60元</span>
            </div>
            <!-- 发货地址 -->
            <div class="address">
              <span style="color: #aaa">发货地址：</span>
              <span>湖北省潜江市</span>
            </div>
            <el-divider></el-divider>
            <!-- 阅读量 -->
            <div>
              <el-row>
                <el-col :span="11" class="numInfo">共<span class="number">119674</span>人看过</el-col>
                <el-col :span="2" class="numInfo">|</el-col>
                <el-col :span="11" class="numInfo">累积评价<span class="number">712</span></el-col>
              </el-row>
            </div>
            <el-divider></el-divider>
            <!-- 规格选择 -->
            <div>
              <el-row>
                <el-col :span="3" style="font-size: 14px">规格选择：</el-col>
                <el-col :span="21" class="classButton">
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                </el-col>
              </el-row>
            </div>
            <!-- 购买区域 -->
            <div class="buyButton">
              <el-button style="margin-right: 20px">加入购物车</el-button>
              <el-button type="primary">立即采购</el-button>
            </div>
          </el-col>

        </el-row>
        </div>
        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 商品详情 -->
        <div>
          <el-row>
            <el-col :span="5">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>优选商家</span>
                </div>
                <div class="userInfo">
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <span>潜江市xxxxxxx</span>
                </div>
              </el-card>
              <el-card :body-style="{ padding: '5px' }">
                  <div slot="header" class="clearfix">
                    <span>商家还供应</span>
                  </div>
                  <div class="otherCard" v-for="i in 4" :key="i">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <span>好吃的汉堡</span>
                    <div class="otherPrice">￥25元/斤</div>
                  </div>
                </el-card>
            </el-col>

            <!-- 商品详情 -->
            <el-col :span="19">
              <div class="goodsDetail">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                  <el-tab-pane label="商品详情" name="first">
                    <div class="goodsAttibute">
                      <h4 style="
                  margin-right: 5px;
                  border-left: 6px solid #409EFF;
                ">商品属性</h4>
                      <span>品种名：潜江小龙虾</span>
                      <span>规格：中青4-6钱</span>
                      <span>用途：食用</span>
                      <span>饲养方式：人工养殖</span>
                      <span>产地：湖北省潜江市潜江市</span>
                      <h4 style="
                  margin-right: 5px;
                  margin-top: 25px;
                  border-left: 6px solid #409EFF;
                ">商品详情</h4>
                    <div style="margin-top: 20px;">阿巴阿巴阿巴阿巴阿巴</div>
                    </div>
                    
                  </el-tab-pane>
                  <el-tab-pane label="采购评价" name="second">
                    <div>
                      <h4 style="margin-right: 5px; border-left: 6px solid #409EFF;">采购评价</h4>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-col>
          </el-row>
        </div>

      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        imgUrl: [
            { url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' },
            { url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg' },
            { url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' },
            { url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' },
        ],
        ImgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        activeName: 'first'
      }
    },
    methods: {
      getIndex(imgUrl){
        this.ImgUrl = imgUrl;
      }
    }
}
</script>

<style lang="less">
.ccy-drvider {
  margin: 10px 0 7px 0;
}
.lxl-body {
  display: flex;
  justify-content: center;
}
.lxl-breadcrumb {
  margin-top: 25px;
  margin-left: 18px;
  margin-bottom: -10px;
}
.lxl-box {
  width: 1150px;
  margin: 0 auto;
}
.goodsIntroduceArea {
  margin-bottom: 80px;
}
.little_img ul {
    list-style: none;
    li {
        float: left;
        margin-top: 20px;
        margin-right: 10px;
        cursor: pointer;
    }
}
.goodsTitle {
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;
}
.updateTime {
  font-size: 12px;
  color: #aaa;
  margin-top: 5px;
}
.priceBackground {
  width: 100%;
  height: 120px;
  margin-top: 10px;
  background: #ddd;
  span {
    line-height: 120px;
    margin-left: 20px;
  }
}
.address {
  font-size: 14px;
  margin-top: 10px;
}
.numInfo {
  text-align: center;
  color: #aaa;
}
.number {
  color: orange
}
.classButton {
  .el-button {
    width: 170px;
    text-align: center;
    margin-left: 10px;
    margin-top: 10px;
  }
}
.buyButton {
  margin: 30px 0 0 80px;
  .el-button {
    width: 150px;
  }
}
.userInfo {
  height: 40px;
}
.otherPrice {
  color: red;
}
.image {
  width: 210px;
}
.otherCard {
  margin-top: 20px;
}
.goodsDetail {
  .el-tabs {
    margin-left: 20px;
  }
  .el-tabs__item {
    width: 200px;
    text-align: center;
  }
}
.goodsAttibute {
  span {
    display: inline-block;
    width: 200px;
    margin-right: 20px;
    margin-top: 20px;
  }
}
</style>
