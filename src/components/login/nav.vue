<template>
  <div>
    <div class="lxl-head">
      <div class="lxl-login">
        <div class="lxl-logo"></div>

        <div class="lxl-avatar" v-if="!isLogin">
          <router-link to="/login">
            <el-avatar
              :size="50"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </router-link>
          <router-link to="/login">登录</router-link>
          <router-link to="/reg">注册</router-link>
        </div>

        <div class="lxl-avatar" v-if="isLogin">
          <router-link to="/me"
            ><el-avatar :size="50" :src="userData != null ? userData.photo : userData1.photo"> </el-avatar
          ></router-link>

          <router-link to="/me">{{ userData != null ? userData.loginId : userData1.loginId }}</router-link>
          <el-link @click="outUser()">退出</el-link>
        </div>
      </div>
      <div class="lxl-nav">
        <el-menu
          :default-active="navPath"
          class="nav-menu"
          mode="horizontal"
          router
        >
          <el-submenu index="/industryMarket">
            <template slot="title">产业资讯</template>
            <el-menu-item index="/industryMarket">产业行情</el-menu-item>
            <el-menu-item index="/prawnNews">虾业专题</el-menu-item>
          </el-submenu>
          <!-- <span class="middle-thread"></span> -->
          <el-menu-item index="/policies">政策法规</el-menu-item>
          <!-- <span class="middle-thread"></span> -->
          <el-submenu index="/edu">
            <template slot="title">渔技学堂</template>
            <el-menu-item index="/edu">远程教育</el-menu-item>
            <el-menu-item index="/fishingSkillArticles">渔技文章</el-menu-item>
            <el-menu-item index="/powerPoint">演示文稿</el-menu-item>
            <el-menu-item index="/intellectualProperty">知识产权</el-menu-item>
          </el-submenu>
          <!-- <span class="middle-thread"></span> -->
          <el-menu-item index="/environmentalMonitoring">环境监控</el-menu-item>
          <!-- <span class="middle-thread"></span> -->
          <el-menu-item index="/productTraceability">产品溯源</el-menu-item>
          <!-- <span class="middle-thread"></span> -->
          <el-menu-item index="/knowledgeGraph">知识图谱</el-menu-item>
          <!-- <span class="middle-thread"></span> -->
          <el-submenu index="/expertInterrogation">
            <template slot="title">专家系统</template>
            <el-menu-item index="/expertInterrogation">专家问诊</el-menu-item>
            <el-menu-item index="/autognosis">疾病自诊</el-menu-item>
          </el-submenu>
          <!-- <span class="middle-thread"></span> -->
          <el-menu-item index="/visualizationPlatform">可视化平台</el-menu-item>
          <!-- <span class="middle-thread"></span> -->
          <el-menu-item index="/emall">电子商城</el-menu-item>
          <!-- <span class="middle-thread"></span> -->
          <el-menu-item index="/leaderPlace" v-if="baseId">领导仓</el-menu-item>
          <!-- <span class="middle-thread" v-if="baseId"></span> -->
          <el-menu-item index="/me">个人中心</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      visible: false,
      activeIndex: "",
      navPath: this.$route.path,
      userData1: {
        loginId: "登录",
        role: "游客",
        photo:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      },
      baseId: ''
    };
  },
  updated() {
    let data = JSON.parse(window.sessionStorage.getItem("userData"));
    if (data) {
      this.baseId = data.baseId;
    }
  },
  methods: {
    outUser() {
      this.baseId = ''
      // 调用vuex使用默认的值的覆盖原有的用户
      window.sessionStorage.setItem("token", "");
      window.sessionStorage.setItem("userData", null);
      this.$store.commit(("changeToken", ""));
      this.$store.commit("changeUserData", this.userData1);
      this.$store.commit("changeIsLogin", false);
      this.$store.commit('saveIp','')
      this.$message({
        showClose: true,
        message: "退出成功",
      });
      this.$router.push("/login");
    },
    hello() {
      alert("Hello World!");
    },
  },
  computed: {
    ...mapState(["userData", "isLogin"]),
    // 用来标识登录，并监控浏览器刷新后重新将session中的数据放到vuex中
    isLogin() {
      if (
        window.sessionStorage.getItem("userData")  &&
        window.sessionStorage.getItem("token") 
      ) {
        this.$store.dispatch("changeUserDataAsycn");
      }
      return this.$store.getters.getIsLogin;
    },
  },
  created() {
    if(window.localStorage.getItem('Ip')) {
      this.$store.state.ip = window.localStorage.getItem('Ip')
    }
  }
};
</script>
<style lang="less">
.lxl-login {
  height: 10rem;
  background-image: url("../../assets/picture4.jpg");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #409EFF;
}
.lxl-logo {
  height: 100px;
  width: 250px;
  margin-left: 5%;
  background-image: url("../../assets/theLogo.png");
  background-size: 100% 100%;
  background-repeat: no-repeat; 
  border-radius: 175px;
}
.lxl-avatar {
  height: 5rem;
  display: flex;
  align-items: center;
  > * {
    margin-right: 20px;
    font-weight: 600;
    font-size: 1rem;
    // color: white;
  }
  .el-avatar {
    border: ivory 1.5px solid;
  }
}
.lxl-nav {
  display: flex;
  justify-content: center;
}
.router-link-active {
  text-decoration: none;
}
a {
  text-decoration: none;
}

.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 120px !important;
  border: 1px solid #74b1c5 !important;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.5) !important;
}
.nav-menu {
  width: 75.7%;
  .middle-thread {
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #409eff;
    width: 1px !important;
    height: 10px;
  }
}
</style>