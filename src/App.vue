<template>
  <div id="app">
    <div class="lxl-head">
      <div class="lxl-login">
        <div class="lxl-logo"></div>
        <div class="lxl-avatar">
          <el-avatar
            :size="50"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <router-link to="/login">登录</router-link>
          <el-link>注册</el-link>
          <el-link>退出</el-link>
        </div>
      </div>
      <div class="lxl-nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          router="true"
        >
          <el-submenu :index="1">
            <template slot="title">产业资讯</template>
            <el-menu-item index="/industryMarket">产业行情</el-menu-item>
            <el-menu-item index="/prawnNews">虾业专题</el-menu-item>
          </el-submenu>
          <el-menu-item index="/policies">政策法规</el-menu-item>
          <el-submenu index="/industryMarket">
            <template slot="title">渔技学堂</template>
            <el-menu-item index="/edu">远程教育</el-menu-item>
            <el-menu-item index="/fishingSkillArticles">渔技文章</el-menu-item>
            <el-menu-item index="/figureLibrary">图文库</el-menu-item>
            <el-menu-item index="/powerPoint">演示文稿</el-menu-item>
            <el-menu-item index="/intellectualProperty">知识产权</el-menu-item>
          </el-submenu>
          <el-menu-item index="/environmentalMonitoring">环境监控</el-menu-item>
          <el-menu-item index="/productTraceability">产品溯源</el-menu-item>
          <el-menu-item index="/knowledgeGraph">知识图谱</el-menu-item>
          <el-submenu :index="2">
            <template slot="title">专家系统</template>
            <el-menu-item index="/expertInterrogation">专家问诊</el-menu-item>
            <el-menu-item index="/autognosis">疾病自诊</el-menu-item>
          </el-submenu>
          <el-submenu>
            <template slot="title">智能决策</template>
            <el-menu-item index="/breedingPlan">养殖规划</el-menu-item>
            <el-menu-item index="/waterQualityForecastAndWarning"
              >水质预测预警</el-menu-item
            >
            <el-menu-item index="/informationRecommendation"
              >信息推荐</el-menu-item
            >
            <el-menu-item index="/precisionFeeding">精准投喂</el-menu-item>
          </el-submenu>
          <el-menu-item index="/visualizationPlatform">可视化平台</el-menu-item>
          <el-menu-item index="/emall">电子商城</el-menu-item>
          <el-menu-item index="/me">个人中心</el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view></router-view>
    <div class="lxl-footer">aaaaaaaaaaaaaaa</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    alert();
    console.log(this.global.baseUrl);
  },
};
</script>

<script>
</script>
<style lang="less" scoped>
.lxl-login {
  height: 10rem;
  background-image: url("./assets/45c.jpeg");
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
}
.lxl-logo {
  height: 5rem;
  width: 350px;
  margin-left: 5%;
  background-image: url("./assets/logo-black1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.lxl-avatar {
  height: 5rem;
  display: flex;
  align-items: center;
  > * {
    margin-right: 20px;
    font-weight: 600;
    font-size: 1rem;
    color: white;
  }
}
.lxl-nav {
  display: flex;
  justify-content: center;
}
.lxl-footer {
  height: 10rem;
  width: 100%;
  background-color: black;
}
</style>

