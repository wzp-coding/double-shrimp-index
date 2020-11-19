<template>
  <div class="articleList lxl-body">
    <div class="container lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right "
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'wzp_expertInterrogation' }"
          >专家问诊</el-breadcrumb-item
        >
        <el-breadcrumb-item>文章列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div class="sortWay">
        <category
          :default="'默认'"
          :labelList="sortList"
          :name="'排列方式'"
          @changeLabel="changeSortWay"
        ></category>
      </div>
      <div class="expertSort">
        <category
          :default="'全部'"
          :labelList="ArticleCategoryList"
          :name="'分类'"
          @changeLabel="changeArticleSort"
        ></category>
      </div>
      <div class="articleList-container" v-loading="loading">
        <div class="reply-item" v-for="item in articleList" :key="item.id">
          <miniArticleCard :oneArticle="item"></miniArticleCard>
        </div>
      </div>
      <div class="pagination">
        <pagination
          :total="total"
          :resetPage="resetPage"
          :size="size"
          @pageChange="handlePageChange"
        ></pagination>
      </div>
    </div>
  </div>
</template>
<script>
import category from "./expertListChildren/category";
import pagination from "./expertListChildren/pagination";
import miniArticleCard from "./expertInterrogationChildren/miniArticleCard";
export default {
  data() {
    return {
      ArticleCategoryList: [],
      sortList: [
        {
          id: "1",
          data: "点击量从高到低",
        },
        {
          id: "2",
          data: "最新发布时间",
        },
      ],
      articleList: [],
      total: 50,
      loading: true,
      articleTypeId: "0",
      sortTypeId: "0",
      resetPage: false,
      size: 9,
    };
  },
  components: {
    category,
    pagination,
    miniArticleCard,
  },
  methods: {
    // 获取文章类型
    getArticleCategoryList() {
      this.reqM2Service(`/info/diseaseArticlesTypes`, {}, "get").then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          console.log(res);
          res.forEach((item) => {
            this.ArticleCategoryList.push({ id: item.id, data: item.name });
          });
        } else {
          this.$message({
            message: "获取文章类型失败",
          });
        }
      });
    },
    // 改变文章类型
    changeArticleSort({ id }) {
      this.articleTypeId = id;
      //   console.log('this.articleTypeId: ', this.articleTypeId);
      //   console.log('this.sortTypeId: ', this.sortTypeId);
      this.getArticleListBySortAndType(this.sortTypeId, this.articleTypeId);
      // 重置换页
      this.resetPage = true;
    },
    // 根据排序方式分页获取(全部)类型的文章
    getArticleListBySortWay(id = "0", page = 1, size = 9) {
      let httpUrl = "";
      switch (id) {
        // 点击量
        case "1":
          httpUrl = `/info/diseaseArticles/findByClickNum/${page}/${size}`;
          break;
        // 发布时间
        case "2":
          httpUrl = `/info/diseaseArticles/findByTime/${page}/${size}`;
          break;
        // 默认
        default:
          httpUrl = `/info/diseaseArticles/findByTime/${page}/${size}`;
      }
      this.reqM2Service(httpUrl, {}, "get").then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          console.log("res: ", res);
          this.total = res.total;
          this.articleList = res.rows;
        } else {
          this.$message({
            message: "获取文章信息失败",
          });
        }
        this.loading = false;
      });
    },
    // 点击不同的排序方式时，获取文章列表排序方式
    changeSortWay({ id }) {
      this.sortTypeId = id;
      //   console.log('this.articleTypeId: ', this.articleTypeId);
      //   console.log('this.sortTypeId: ', this.sortTypeId);
      this.getArticleListBySortAndType(this.sortTypeId, this.articleTypeId);
      // 重置换页
      this.resetPage = true;
    },
    // 根据sortTypeId，articleTypeId来发送请求
    getArticleListBySortAndType(
      sortTypeId = "0",
      articleTypeId = "0",
      page = 1,
      size = 9
    ) {
      //   console.log('sortTypeId: ', sortTypeId);
      //   console.log('articleTypeId: ', articleTypeId);
      // 按全部类型文章搜索，再判断是哪种排序方式就行了
      if (articleTypeId == "0") {
        this.getArticleListBySortWay(sortTypeId, page, size);
      } else {
        // 如果不是搜索全部文章而只是某种类型的专家
        // 则需要再判断是哪种排序方式的
        let httpUrl = "";
        switch (sortTypeId) {
          // 点击量
          case "1":
            httpUrl = `/info/diseaseArticles/findByClickAndType/${articleTypeId}/${page}/${size}`;
            break;
          // 发布时间
          case "2":
            httpUrl = `/info/diseaseArticles/findByTimeAndType/${articleTypeId}/${page}/${size}`;
            break;
          // 默认
          default:
            httpUrl = `/info/diseaseArticles/findByTimeAndType/${articleTypeId}/${page}/${size}`;
        }
        this.reqM2Service(httpUrl, {}, "get").then((res) => {
          console.log("res: ", res);
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.total = res.total;
            this.articleList = res.rows;
          } else {
            this.$message({
              message: "获取文章信息失败",
            });
          }
          this.loading = false;
        });
      }
    },
    // 处理换页请求
    handlePageChange({ page, size }) {
      //   console.log('size: ', size);
      //   console.log('page: ', page);
      //   console.log('this.articleTypeId: ', this.articleTypeId);
      //   console.log('this.sortTypeId: ', this.sortTypeId);
      this.getArticleListBySortAndType(
        this.sortTypeId,
        this.articleTypeId,
        page,
        size
      );
      // 取消重置换页
      this.resetPage = false;
    },
  },
  mounted() {
    // 请求帖子分类类型
    this.getArticleCategoryList();
    // 默认请求发布时间从高到低的全部专家
    this.getArticleListBySortAndType(this.sortTypeId, this.articleTypeId);
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
  margin-bottom: 40px;
}
.lxl-box {
  width: 1150px;
}
/deep/ .el-card.is-always-shadow {
  box-shadow: none;
}
.articleList {
  /deep/.mini_reply_card {
    &:nth-child(1) {
      margin: 10px 0 4px 0;
    }
  }
  .container {
    width: 1150px;
    margin: auto;
    .breadcrumb {
      margin: 10px 0 10px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #ccc;
    }
    .sortWay {
      margin-bottom: 10px;
      padding-bottom: 10px;
    }
    .articleList-container {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .reply-item {
        width: 32%;
        margin: 7px;
      }
    }
    .pagination {
      text-align: center;
      margin: 20px 0;
    }
  }
}
</style>