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
      <!--  -->
      <el-input placeholder="搜索您要的文章" prefix-icon="el-icon-search">
        <div slot="append">
          <el-button icon="el-icon-search">搜索</el-button>
        </div>
      </el-input>
      <!-- 上部分 -->
      <div class="nav">
        <el-card class="box-card">
          <el-menu
            default-active="0"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="0" @click="handleSelect(0)">首页</el-menu-item>
            <el-menu-item
              v-for="item in navCate"
              :key="item.id"
              :index="item.id"
              >{{ item.name }}</el-menu-item
            >
          </el-menu>
        </el-card>
        <el-card class="box-card" v-if="cardShow == true">
          <h3 style="display: flex; justify-content: space-between">
            <div>
              <span
                style="
                  margin-right: 5px;
                  border-left: 6px solid rgb(93, 183, 60);
                "
              ></span>
              最新文章
            </div>
            <div
              style="
                font-size: 0.8rem;
                margin-top: 6px;
                color: rgb(93, 183, 60);
              "
            >
              <span
                style="color: #9e9e9e; cursor: pointer"
                @click="getMoreArticle(1)"
              >
                更多
              </span>
              <i class="el-icon-caret-right"></i>
            </div>
          </h3>
          <el-divider class="ccy-drvider"></el-divider>
          <!-- 图片区 -->
          <el-row :gutter="20" class="illRow">
            <el-col
              :span="6"
              v-for="item in latestArticle"
              :key="item.id"
              class="illpic"
            >
              <div class="illCard">
                <el-card :body-style="{ padding: '0px' }">
                  <el-image
                    :src="item.pic"
                    class="illimage"
                    @click="
                      $router.push('/fishingSkillArticlesDetail?id=' + item.id)
                    "
                  >
                    <div slot="error" class="image-slot">
                      <el-image
                        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg"
                        @click="
                          $router.push(
                            '/fishingSkillArticlesDetail?id=' + item.id
                          )
                        "
                      ></el-image>
                    </div>
                  </el-image>
                  <div style="padding: 14px" class="illPicName">
                    <span
                      @click="
                        $router.push(
                          '/fishingSkillArticlesDetail?id=' + item.id
                        )
                      "
                      >{{ item.title | ellipsis }}</span
                    >
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
              {{ articleType }}
            </div>
            <div
              style="
                font-size: 0.8rem;
                margin-top: 6px;
                color: rgb(93, 183, 60);
              "
            >
              <span
                v-if="moreButtonShow"
                style="color: #9e9e9e; cursor: pointer"
                @click="moreArticle(onId)"
              >
                更多
              </span>
              <i v-if="moreButtonShow" class="el-icon-caret-right"></i>
            </div>
          </h3>
          <el-divider class="ccy-drvider"></el-divider>
          <el-row :gutter="20" class="articleRow">
            <el-col :span="4.8" v-for="(item, i) in adviseArticle" :key="i">
              <div class="adviseArticleCard">
                <el-card :body-style="{ padding: '0px' }" class="adviseCard">
                  <el-image
                    :src="item.pic"
                    class="advisedImage"
                    @click="
                      $router.push('/fishingSkillArticlesDetail?id=' + item.id)
                    "
                  >
                    <div slot="error" class="image-slot">
                      <el-image
                        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg"
                        @click="
                          $router.push(
                            '/fishingSkillArticlesDetail?id=' + item.id
                          )
                        "
                      ></el-image>
                    </div>
                  </el-image>
                  <div style="padding: 14px">
                    <span
                      @click="
                        $router.push(
                          '/fishingSkillArticlesDetail?id=' + item.id
                        )
                      "
                      >{{ item.title }}</span
                    >
                    <div class="bottom clearfix">
                      <span class="title">渔技学堂</span>
                      <span class="title right">{{ item.clickNum }}人阅读</span>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
          <div class="page">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :hide-on-single-page="true"
              :page-size="8"
              layout="prev, pager,next, total, jumper"
              :total="adviseArticleTotal"
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
      // 导航分类
      navCate: [],
      // 文章类型名字
      articleType: "",
      // 最新文章是否显示
      cardShow: true,
      // 最新文章
      latestArticle: [],
      // 推荐文章
      adviseArticle: [
        {
          id: 1,
          pic:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg",
          title: "文本1",
          clickNum: 0,
        },
        {
          id: 2,
          pic:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg",
          title: "文本2",
          clickNum: 5,
        },
        {
          id: 3,
          pic:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg",
          title: "文本3",
          clickNum: 2,
        },
        {
          id: 4,
          pic:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg",
          title: "文本4",
          clickNum: 8,
        },
        {
          id: 5,
          pic:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg",
          title: "文本5",
          clickNum: 10,
        },
        {
          id: 6,
          pic:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg",
          title: "文本6",
          clickNum: 12,
        },
        {
          id: 7,
          pic:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg",
          title: "文本7",
          clickNum: 1,
        },
        {
          id: 8,
          pic:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg",
          title: "文本8",
          clickNum: 3,
        },
      ],
      // 推荐文章数量
      adviseArticleTotal: 0,
      // 推荐文章的页码
      Pagenum: 1,
      // 当初所处分类的id
      onId: 0,
      // “更多”按钮是否显示
      moreButtonShow: true,
    };
  },
  created() {
    this.getArticlesTypes();
    this.getLateArticles();
    this.getAdviseArticle();
  },
  methods: {
    async getArticlesTypes() {
      const { data: res } = await this.reqM2Service(
        "/education/technicalArticlesTypes",
        "",
        "get"
      );
      // console.log(res)
      if (res.code !== 20000) {
        return this.$message.error("获取分类数据失败！");
      }
      this.navCate = res.data;
      this.activeIndex = this.navCate[0].id;
    },
    async getLateArticles() {
      const { data: res } = await this.reqM2Service(
        "/education/technicalArticles/findByTime/1/8",
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取文章数据失败！");
      }
      this.latestArticle = res.data.rows;
      if (this.cardShow == false) {
        this.cardShow = true;
        this.moreButtonShow = true;
      }
    },
    async getAdviseArticle() {
      const { data: res } = await this.reqM2Service(
        `/education/technicalArticles/findByRecommend/${this.Pagenum}/8`,
        "",
        "get"
      );
      if (res.code !== 20000) {
        return this.$message.error("获取推荐文章数据失败！");
      }
      console.log(res);
      if (res.data.rows) {
        this.adviseArticle = res.data.rows;
      }
      this.articleType = "推荐文章";
    },
    async getArticlesByTypes(typeId) {
      const { data: res } = await this.reqM2Service(
        `/education/technicalArticles/search/searchByTypeId/${typeId}/${this.Pagenum}/16`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取该类型文章数据失败！");
      }
      this.cardShow = false;
      this.moreButtonShow = false;
      this.adviseArticleTotal = res.data.total;
      this.adviseArticle = res.data.rows;
      this.navCate.forEach((element) => {
        if (element.id === typeId) {
          this.articleType = element.name;
        }
      });
    },
    async getMoreArticle(Id) {
      this.onId = Id;
      if (Id == 1) {
        const { data: res } = await this.reqM2Service(
          `/education/technicalArticles/findByTime/${this.Pagenum}/8`,
          "",
          "get"
        );
        if (res.code !== 20000) {
          return this.$message.error("获取该类型文章数据失败！");
        }
        this.cardShow = false;
        this.adviseArticleTotal = res.data.total;
        this.adviseArticle = res.data.rows;
        this.articleType = "最新文章";
        this.moreButtonShow = false;
      }
    },
    async moreArticle(typeId) {
      console.log("onId:" + typeId);
    },
    handleSelect(index) {
      this.onId = index;
      console.log(index);
      this.Pagenum = 1;
      if (index === "0") {
        this.getLateArticles();
        this.getAdviseArticle();
      } else {
        this.getArticlesByTypes(index);
      }
    },
    handleCurrentChange(newPage) {
      this.Pagenum = newPage;
      this.getMoreArticle(this.onId);
    },
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 14) {
        return value.slice(0, 14) + "...";
      }
      return value;
    },
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
.illpic {
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
  width: 100%;
  height: 150px;
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
    cursor: pointer;
    img {
      width: 220px;
    }
  }
}
.advisedImage {
  width: 256px;
  height: 200px;
}
.adviseCard {
  padding-bottom: 25px;
  cursor: pointer;
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