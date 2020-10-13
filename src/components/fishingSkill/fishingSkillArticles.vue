<template>
  <div class="content lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>渔技学堂</el-breadcrumb-item>
        <el-breadcrumb-item>渔技文章</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <!-- 上部分 -->
      <div class="nav">
        <el-card class="box-card">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">精选</el-menu-item>
            <el-menu-item index="2">最新</el-menu-item>
            <el-menu-item index="3">种植</el-menu-item>
            <el-menu-item index="4">养殖</el-menu-item>
            <el-menu-item index="5">农资农机</el-menu-item>
            <el-menu-item index="6">储藏加工</el-menu-item>
          </el-menu>
        </el-card>
        <el-card class="box-card">
          <h3 style="display: flex; justify-content: space-between">
            <div>
              <span
                style="
                  margin-right: 5px;
                  border-left: 6px solid rgb(93, 183, 60);
                "
              ></span>
              热门资讯
            </div>
            <div
              style="
                font-size: 0.8rem;
                margin-top: 6px;
                color: rgb(93, 183, 60);
              "
            >
              <span style="color: #9e9e9e"> 更多 </span>
              <i class="el-icon-caret-right"></i>
            </div>
          </h3>
          <el-divider class="ccy-drvider"></el-divider>
          <!-- 图片区 -->
          <el-row :gutter="20" class="illRow">
            <el-col :span="4.8" v-for="i in 10" :key="i" class="illpic">
              <div class="illCard">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                    class="illimage"
                  />
                  <div style="padding: 14px" class="illPicName">
                    <span>{{ i }}</span>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-card>
        <!-- 推荐文章区域 -->
        <el-card class="adviseArticle">
          <h3 style="display: flex; justify-content: space-between">
            <div>
              <span
                style="
                  margin-right: 5px;
                  border-left: 6px solid rgb(93, 183, 60);
                "
              ></span>
              热门资讯
            </div>
            <div
              style="
                font-size: 0.8rem;
                margin-top: 6px;
                color: rgb(93, 183, 60);
              "
            >
              <span style="color: #9e9e9e"> 更多 </span>
              <i class="el-icon-caret-right"></i>
            </div>
          </h3>
          <el-divider class="ccy-drvider"></el-divider>
          <el-row :gutter="20" class="articleRow">
            <el-col :span="4.8" v-for="item in article" :key="item.id">
              <div class="adviseArticleCard">
                <el-card :body-style="{ padding: '0px' }" class="adviseCard">
                  <img :src="item.src" class="advisedImage" />
                  <div style="padding: 14px">
                    <span>{{ item.title }}</span>
                    <div class="bottom clearfix">
                      <span class="title">惠农网·农技学堂</span>
                      <span class="title right">{{ item.count }}人阅读</span>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
          <div class="page">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="100"
              layout="prev, pager,next, total, jumper"
              :total="1000"
            >
            </el-pagination>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      article: [
        {
          id: 1,
          title: "题目1",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          count: 716,
        },
        {
          id: 2,
          title: "题目2",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          count: 720,
        },
        {
          id: 3,
          title: "题目3",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          count: 717,
        },
        {
          id: 4,
          title: "题目4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          count: 714,
        },
        {
          id: 5,
          title: "题目5",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          count: 714,
        },
        {
          id: 6,
          title: "题目5",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          count: 714,
        },
        {
          id: 7,
          title: "题目5",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          count: 714,
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.ccy-drvider {
  margin: 10px 0 7px 0;
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
.content {
  width: 1150px;
  margin: 0 auto;
}
.nav {
  margin-top: -10px;
}
.illpic{
  margin-top: 10px;
}
.nav {
  .el-menu-item {
    font-size: 18px;
    margin: 0 60px 0 10px;
    padding: 0;
  }
}
.nav {
  .el-menu--horizontal > .el-menu-item {
    color: #000;
  }
}
.nav {
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid #46c048;
    font-weight: 700;
    color: #46c048;
  }
}
.box-card {
  .el-card__header {
    padding: 18px 0;
  }
}
.lookMore {
  float: right;
  padding: 3px 0;
  margin-right: 21px;
}
.picToill {
  .el-button--text {
    color: #909399;
  }
}
.el-icon-circle-plus-outline {
  padding-left: 10px;
  color: #46c048;
}
.adviseArticle {
  .el-card__header {
    padding: 38px 0 25px 0;
  }
}
.title {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.right {
  float: right;
}
.image {
  width: 100%;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.Text {
  font-size: 23px;
  margin-left: 20px;
}
.illimage {
  width: 200px;
  height: 150px;
}
.illPicName {
  text-align: center;
}
.page {
  margin: 20px auto;
  text-align: center;
}
.page {
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #46c048;
  }
}
.page {
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #46c048;
  }
}
.illCard {
  .el-card {
    margin-left: 0;
  }
}
.advisedImage {
  width: 256px;
  height: 200px;
}
.adviseCard {
  padding-bottom: 25px;
}
.adviseArticleCard {
  .el-card {
    margin: 0;
  }
}
.articleRow {
  > * {
    margin-top: 10px;
  }
}
</style>