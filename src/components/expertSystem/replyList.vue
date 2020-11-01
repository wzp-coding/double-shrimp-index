<template>
  <div class="replyList lxl-body">
    <div class="container lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right "
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'wzp_expertInterrogation' }"
          >专家问诊</el-breadcrumb-item
        >
        <el-breadcrumb-item>帖子列表</el-breadcrumb-item>
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
          :labelList="QuesCategoryList"
          :name="'分类'"
          @changeLabel="changeQuesSort"
        ></category>
      </div>
      <div class="replyList-container" v-loading="loading">
        <div class="reply-item" v-for="item in replyList" :key="item.id">
          <miniReplyCard :oneReply="item"></miniReplyCard>
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
import miniReplyCard from "./expertInterrogationChildren/miniReplyCard";
export default {
  data() {
    return {
      QuesCategoryList: [],
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
      replyList: [],
      total: 50,
      loading: true,
      quesTypeId: "0",
      sortTypeId: "0",
      resetPage: false,
      size: 9,
    };
  },
  components: {
    category,
    pagination,
    miniReplyCard,
  },
  methods: {
    // 传入帖子id数组，并发请求回复内容
    async getOneReplyById(ids) {
      let httpTasks = [];
      ids.forEach((id) => {
        httpTasks.push(
          this.$http.get(
            `http://106.75.154.40:9012/info/details/findByPost/${id}/1/1`
          )
        );
      });
      return this.$http.all(httpTasks);
    },
    // 获取帖子类型
    getQuesCategoryList() {
      this.reqM2Service(`/postTypes`, {}, "get").then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          console.log(res);
          res.forEach((item) => {
            this.QuesCategoryList.push({ id: item.id, data: item.name });
          });
        } else {
          this.$message({
            message: "获取帖子类型失败",
          });
        }
      });
    },
    // 改变帖子类型
    changeQuesSort({ id }) {
      this.quesTypeId = id;
      //   console.log('this.quesTypeId: ', this.quesTypeId);
      //   console.log('this.sortTypeId: ', this.sortTypeId);
      this.getQuesListBySortAndType(this.sortTypeId, this.quesTypeId);
      // 重置换页
      this.resetPage = true;
    },
    // 根据排序方式获取(全部)类型的帖子
    getQuesListBySortWay(id = "0", page = 1, size = 9) {
      let httpUrl = "";
      switch (id) {
        // 点击量
        case "1":
          httpUrl = `/post/findByClickNum/${page}/${size}`;
          break;
        // 发布时间
        case "2":
          httpUrl = `/post/findByTime/${page}/${size}`;
          break;
        // 默认
        default:
          httpUrl = `/post/findByTime/${page}/${size}`;
      }
      this.reqM2Service(httpUrl, {}, "get").then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          console.log("res: ", res);
          this.total = res.total;
          this.replyList = [];
          let ids = [];
          res.rows.forEach((item) => ids.push(item.id));
          this.getOneReplyById(ids).then(
            this.$http.spread((...data) => {
              data.forEach((item, index) => {
                this.$set(
                  res.rows[index],
                  "reply",
                  item.data.data.rows?.[0]?.reply
                );
              });
              res.rows.forEach((item) => {
                this.replyList.push(item);
              });
              console.log("this.replyList: ", this.replyList);
            })
          );
        } else {
          this.$message({
            message: "获取帖子信息失败",
          });
        }
        this.loading = false;
      });
    },
    // 点击不同的排序方式时，获取专家列表排序方式
    changeSortWay({ id }) {
      this.sortTypeId = id;
      //   console.log('this.quesTypeId: ', this.quesTypeId);
      //   console.log('this.sortTypeId: ', this.sortTypeId);
      this.getQuesListBySortAndType(this.sortTypeId, this.quesTypeId);
      // 重置换页
      this.resetPage = true;
    },
    // 根据sortTypeId，expertTypeId来发送请求
    getQuesListBySortAndType(
      sortTypeId = "0",
      quesTypeId = "0",
      page = 1,
      size = 9
    ) {
      //   console.log('sortTypeId: ', sortTypeId);
      //   console.log('quesTypeId: ', quesTypeId);
      // 按全部类型帖子搜索，再判断是哪种排序方式就行了
      if (quesTypeId == "0") {
        this.getQuesListBySortWay(sortTypeId, page, size);
      } else {
        // 如果不是搜索全部专家而只是某种类型的专家
        // 则需要再判断是哪种排序方式的
        let httpUrl = "";
        switch (sortTypeId) {
          // 点击量
          case "1":
            httpUrl = `/post/findByTypeAndClick/${quesTypeId}/${page}/${size}`;
            break;
          // 发布时间
          case "2":
            httpUrl = `/post/findByTypeAndTime/${quesTypeId}/${page}/${size}`;
            break;
          // 默认
          default:
            httpUrl = `/post/findByTypeAndTime/${quesTypeId}/${page}/${size}`;
        }
        this.reqM2Service(httpUrl, {}, "get").then((res) => {
          console.log("res: ", res);
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.total = res.total;
            let ids = [];
            this.replyList = [];
            res.rows.forEach((item) => ids.push(item.id));
            this.getOneReplyById(ids).then(
              this.$http.spread((...data) => {
                data.forEach((item, index) => {
                  this.$set(
                    res.rows[index],
                    "reply",
                    item.data.data.rows?.[0]?.reply
                  );
                });
                res.rows.forEach((item) => {
                  this.replyList.push(item);
                });
                console.log("this.replyList: ", this.replyList);
              })
            );
          } else {
            this.$message({
              message: "获取帖子信息失败",
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
      //   console.log('this.quesTypeId: ', this.quesTypeId);
      //   console.log('this.sortTypeId: ', this.sortTypeId);
      this.getQuesListBySortAndType(
        this.sortTypeId,
        this.quesTypeId,
        page,
        size
      );
      // 取消重置换页
      this.resetPage = false;
    },
  },
  mounted() {
    // 请求帖子分类类型
    this.getQuesCategoryList();
    // 默认请求发布时间从高到低的全部专家
    this.getQuesListBySortAndType(this.sortTypeId, this.quesTypeId);
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
.replyList {
  .container {
     /deep/ .mini_reply_card .ques_item .mid{
          height: 60px;
      }
    /deep/  .mini_reply_card .ques_item .mid .que_text.reply_text .quetext.replytext {
    -webkit-line-clamp: 3;
}
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
    .replyList-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .reply-item {
        width: 32%;
      }
    }
    .pagination {
      text-align: center;
      margin: 20px 0;
    }
  }
}
</style>