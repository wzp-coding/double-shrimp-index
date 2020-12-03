<template>
  <div class="shop-info">
    <el-row class="shop-info-title">基础信息</el-row>
    <el-row class="shop-info-header">
      <el-col class="shop-info-name">{{ shopInfo.merchantName }}</el-col>
      <el-col class="shop-info-time">注册时间：{{ shopInfo.created }}</el-col>
      <el-col class="shop-info-time">联系人：{{ shopInfo.createBy }} </el-col>
    </el-row>
    <el-row class="shop-info-shoper">
      <el-row style="font-weight: bold">商家介绍</el-row>
      <el-row class="shop-info-shoper-content">
        <el-col :span="12" class="content-left">{{
          shopInfo.merchantDesc
        }}</el-col>
        <el-col :span="12" class="content-right">
          <div>
            <div class="info-label">
              <i class="el-icon-s-home" style="margin: 3px 5px 0 0"></i>
              企业名称：
            </div>
            <div class="info-content">{{ shopInfo.merchantName }}</div>
          </div>
          <div>
            <div class="info-label">
              <i class="el-icon-s-custom" style="margin: 3px 5px 0 0"></i
              >法人代表：
            </div>
            <div class="info-content">{{ shopInfo.createBy }}</div>
          </div>
          <div>
            <div class="info-label">
              <i class="el-icon-s-check" style="margin: 3px 5px 0 0"></i
              >注册号：
            </div>
            <div class="info-content">{{ shopInfo.merchantNumber }}</div>
          </div>
          <div>
            <div class="info-label">
              <i class="el-icon-location" style="margin: 3px 5px 0 0"></i
              >经营地址：
            </div>
            <div class="info-content">{{ shopInfo.shopAddress }}</div>
          </div>
        </el-col>
      </el-row>
      <el-row style="font-weight: bold; margin: 20px 0">服务能力</el-row>
      <el-row class="shop-info-ability" type="flex">
        <el-col class="ability-item" :span="4">
          <p class="item-count">￥147.7万元</p>
          <p class="item-title">累积成交额</p>
        </el-col>
        <span></span>
        <el-col class="ability-item" :span="4">
          <p class="item-count">1084</p>
          <p class="item-title">订单笔数</p>
        </el-col>
        <span></span>
        <el-col class="ability-item" :span="4">
          <p class="item-count">5</p>
          <p class="item-title">店铺评分</p>
        </el-col>
        <span></span>
        <el-col class="ability-item" :span="4">
          <p class="item-count">1525</p>
          <p class="item-title">粉丝</p>
        </el-col>
        <span></span>
        <el-col class="ability-item" :span="4">
          <p class="item-count">3498</p>
          <p class="item-title">访客</p>
        </el-col>
        <span></span>
        <el-col class="ability-item" :span="4">
          <p class="item-count">7079</p>
          <p class="item-title">联系</p>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["shopInfo"],
};
</script>

<style lang="less" scoped>
.shop-info {
  .shop-info-title {
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
  .shop-info-header {
    font-size: 2rem;
    color: rgb(0, 0, 0);
    text-align: center;
    .shop-info-name {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    padding: 35px 0;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 50px;
      background-color: #fff;
      bottom: -25px;
      border-radius: 20px;
    }
  }
  .shop-info-shoper {
    padding: 8px;
    .shop-info-shoper-content {
      color: #7f767b;
      font-size: 14px;
      margin-top: 10px;
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;
      .content-left {
        padding-right: 40px;
      }
      .content-right {
        padding-left: 40px;
        border-left: 2px solid #eee;
        div {
          padding: 3px 0;
          display: flex;
          flex-wrap: wrap;
          .info-label {
            width: 100px;
          }
          .info-content {
            color: #000;
          }
        }
      }
    }
    .shop-info-ability {
      border: 1px solid #eee;
      align-items: center;
      .ability-item {
        text-align: center;
        padding: 70px 0;
        .item-count {
          color: red;
          font-weight: bold;
        }
        .item-title {
          color: #7f767b;
          font-size: 13px;
          margin-top: 10px;
        }
      }
      span {
        width: 1px;
        background-color: #eee;
        height: 80px;
      }
    }
  }
}
</style>