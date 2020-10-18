<template>
  <div class="user-view lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item to="/me">个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的店铺</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <el-container style="border: 1px solid #eee" class="user-container">
        <el-aside
          width="200px"
          class="user-left"
          style="background-color: rgb(238, 241, 246)"
        >
          <el-menu :default-active="isPath" active-text-color="#2696ff" router>
            <!-- active-text-color高亮颜色 -->
            <!-- router:是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
            <el-menu-item index="/expertOne">个人信息</el-menu-item>
            <el-menu-item index="/expertAnswer">消息问答</el-menu-item>
            <el-menu-item index="/articleManage">文章管理</el-menu-item>
          </el-menu>
        </el-aside>

        <el-container class="user-right">
          <el-header height="250px" class="user-header">
            <el-row class="user-headerbox">
              <el-col :span="6" class="user-avator">
                <div class="user-avator-image">
                  <el-avatar
                    shape="circle"
                    :size="100"
                    :src="userData.photo"
                  ></el-avatar>
                </div>
                <span class="user-avator-name">{{ userData.loginId }}</span>
                <span class="user-avator-identity">{{ userData.role }}</span>
              </el-col>
              <el-col :span="17" class="user-attestation">
                <div class="user-attestation-header">欢迎亲爱的店主！</div>
                <div class="user-attestation-main">
                  <div class="wait">
                    <div class="amount">
                      <el-badge :value="200" :max="99" class="item">
                        5615
                      </el-badge>
                    </div>
                    <div class="text">收入</div>
                  </div>
                  <span></span>
                  <div class="wait">
                    <div class="amount">
                      <el-badge :value="200" :max="99" class="item">
                        5615
                      </el-badge>
                    </div>
                    <div class="text">新增订单</div>
                  </div>
                  <span></span>
                  <div class="wait">
                    <div class="amount">
                      <el-badge :value="200" :max="99" class="item">
                        51
                      </el-badge>
                    </div>
                    <div class="text">订单完成</div>
                  </div>
                  <span></span>
                  <div class="wait">
                    <div class="amount">
                      <el-badge :value="0" :max="99" class="item">
                        0
                      </el-badge>
                    </div>
                    <div class="text">累积访问</div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPath: this.$route.path,
      userData: {},
    };
  },
  created() {
    console.log(this.$route.path);
    this.userData = this.$store.state.userData;
    console.log(this.userData);
  },
};
</script>

<style lang="less" scoped>
.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
  margin-bottom: 30px;
}
.lxl-box {
  width: 1150px;
}
@font-face {
  font-family: electronicFont;
  src: url("../../fonts/KaneDemo-OVMZO.otf");
}
.user-view {
  .user-container {
    .user-right {
      .user-headerbox {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        background-color: #f7f7f7;
        font-family: "electronicFont";
        .user-avator {
          min-height: 230px;
          background-color: #2696ff;
          border-radius: 2px;
          font-size: 1rem;
          color: #fff;
          text-align: center;
          .user-avator-image {
            display: flex;
            justify-content: center;
            margin-top: 10%;
            > * {
              border: ivory 1.5px solid;
            }
          }
          span {
            display: block;
            margin: 3px auto;
          }
          .user-avator-identity {
            display: inline-block;
            background-color: #ff7f17;
            padding: 2px 8px;
            border-radius: 16px;
          }
        }
        .user-attestation {
          min-height: 230px;
          background-color: #fff;
          border-radius: 2px;
          .user-attestation-header {
            font-size: 15px;
            color: #2696ff;
            padding: 10px 15px;
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
        padding: 5px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
