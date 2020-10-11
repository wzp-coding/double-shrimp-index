<template>
  <div class="user-view">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>当前位置</el-breadcrumb-item>
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <hr /> -->
    <el-container
      style="border: 1px solid #eee"
      class="user-container"
    >
      <el-aside
        width="200px"
        class="user-left"
        style="background-color: rgb(238, 241, 246)"
      >
        <el-menu
          default-active="/meHomePage"
          active-text-color="#4ecb5f"
          router
        >
          <!-- active-text-color高亮颜色 -->
          <!-- router:是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
          <el-menu-item index="/meHomePage" >首页</el-menu-item>
          <el-menu-item index="/goodsPurchased">已购买的货品</el-menu-item>
          <el-menu-item index="/favorite">收藏夹</el-menu-item>
          <el-menu-item index="/addressMan">收货地址管理</el-menu-item>
          <el-menu-item index="/refund">退货退款</el-menu-item>
          <el-menu-item index="/changePassword">修改密码</el-menu-item>
        </el-menu>
      </el-aside>

      <el-container class="user-right">
        <el-header height="250px" class="user-header">
          <el-row class="user-headerbox">
            <el-col :span="6" class="user-avator">
              <div class="user-avator-image">1</div>
              <span class="user-avator-name">哒哒哒</span>
              <span class="user-avator-identity">批发商</span>
              <span class="user-avator-time">晚上好</span>
            </el-col>
            <el-col :span="17" class="user-attestation">
              <div class="user-attestation-header">认证情况</div>
              <div class="user-attestation-main">
                <div class="wait">
                  <div class="amount">0</div>
                  <div class="text">待付款</div>
                </div>
                <span></span>
                <div class="wait">
                  <div class="amount">0</div>
                  <div class="text">待发货</div>
                </div>
                <span></span>
                <div class="wait">
                  <div class="amount">0</div>
                  <div class="text">待收货</div>
                </div>
                <span></span>
                <div class="wait">
                  <div class="amount">0</div>
                  <div class="text">待退款</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-main class="user-main">
            <div class="user-mainbox">
                <router-view></router-view>
            </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.user-view {
  width: 1150px;
  // width: 76%;
  margin: 10px auto;
  .user-container {
    // min-height: 500px;
    margin-top: 10px;
    .user-right {
      // min-height: 700px;
      .user-headerbox {
        padding: 10px 0;
        // box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        background-color: #f5f5f5;
        .user-avator {
          min-height: 230px;
          background-color: #4ecb5f;
          border-radius: 2px;
          font-size: 14px;
          color: #fff;
          text-align: center;
          .user-avator-image {
            width: 90px;
            height: 100px;
            border-radius: 70%;
            margin: 20px auto 15px;
            background-color: #fff;
          }
          span {
            display: block;
            margin: 3px auto;
          }
          .user-avator-identity {
            display: inline-block;
            background-color: #3ca24d;
            padding: 2px 8px;
            border-radius: 16px;
          }
        }
        .user-attestation {
          min-height: 230px;
          background-color: #fff;
          border-radius: 2px;
          .user-attestation-header {
            font-size: 20px;
            padding: 10px 15px;
            // width: 100%;
            // height: 48.4px;
            border-bottom: 2px solid #f5f5f5;
          }
          .user-attestation-main {
            width: 100%;
            height: 180px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-evenly;
            span {
              height: 60%;
              width: 2px;
              background-color: #e7e7e7;
            }
            .wait {
              width: 24%;
              height: 90%;
            //   background-color: #cdcdab;
              text-align: center;
              .amount {
                  font-size: 25px;
                  margin-top: 30%;
              }
            }
          }
        }
      }
      .user-mainbox {
          width: 100%;
          // height:300px;
          background-color: #f5f5f5;
          padding: 10px;
          box-sizing: border-box;
      }
    }
  }
}
</style>
