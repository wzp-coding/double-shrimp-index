<template>
  <div class="expertList lxl-body">
    <div class="container lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right "
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'wzp_expertInterrogation' }"
          >专家问诊</el-breadcrumb-item
        >
        <el-breadcrumb-item>专家列表</el-breadcrumb-item>
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
          :labelList="expertCategoryList"
          :name="'分类'"
          @changeLabel="changeExpertSort"
        ></category>
      </div>
      <div class="expertList-container" v-loading="loading">
        <div class="expert-item" v-for="item in expertList" :key="item.id">
          <miniExpertCard :oneExpert="item"></miniExpertCard>
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
import miniExpertCard from "./expertInterrogationChildren/miniExpertCard";
export default {
  data() {
    return {
      expertCategoryList: [],
      sortList: [
        {
          id: "1",
          data: "咨询量从高到低",
        },
        {
          id: "2",
          data: "回复量从高到低",
        },
        {
          id: "3",
          data: "回复率从高到低",
        },
        {
          id: "4",
          data: "有用量从高到低",
        },
      ],
      expertList: [],
      total: 50,
      size:9,
      loading: true,
      expertTypeId: "0",
      sortTypeId: "0",
      resetPage: false,
    };
  },
  components: {
    category,
    pagination,
    miniExpertCard,
  },
  methods: {
    // 获取专家类型
    getExpertCategoryList() {
      this.reqM2Service(`/info/expertsType`,{},'get')
      .then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          console.log(res);
          res.forEach((item) => {
            this.expertCategoryList.push({ id: item.id, data: item.name });
          });
        } else {
          this.$message({
            message: "获取专家类型失败",
          });
        }
      });
    },
    // 改变专家类型
    changeExpertSort({ id }) {
      this.expertTypeId = id;
      console.log('this.expertTypeId: ', this.expertTypeId);
      console.log('this.sortTypeId: ', this.sortTypeId);
      this.getExpertListBySortAndType(this.sortTypeId,this.expertTypeId)
      // 重置换页
      this.resetPage = true;
    },
    // 根据排序方式获取(全部)类型的专家
    getExpertListBySortWay(id = "0", page = 1, size = 9) {
      let httpUrl = "";
      switch (id) {
        // 咨询量
        case "1":
          httpUrl = `/info/experts/findByConsultingNum/${page}/${size}`;
          break;
        // 回复量
        case "2":
          httpUrl = `/info/experts/findByRepliesNum/${page}/${size}`;
          break;
        // 回复率
        case "3":
          httpUrl = `/info/experts/findByRepliesPercent/${page}/${size}`;
          break;
        // 有用量
        case "4":
          httpUrl = `/info/experts/findByPraiseNum/${page}/${size}`;
          break;
        // 默认
        default:
          httpUrl = `/info/experts/findByConsultingNum/${page}/${size}`;
      }
      this.reqM2Service(httpUrl,{},'post').then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          console.log('res: ', res);
          this.total = res.total;
          this.expertList = [];
          res.rows.forEach((item) => this.expertList.push(item));
        } else {
          this.$message({
            message: "获取专家信息失败",
          });
        }
        this.loading = false;
      });
    },
    // 点击不同的排序方式时，获取专家列表排序方式
    changeSortWay({ id }) {
      this.sortTypeId = id;
      // console.log('this.expertTypeId: ', this.expertTypeId);
      // console.log('this.sortTypeId: ', this.sortTypeId);
      this.getExpertListBySortAndType(this.sortTypeId,this.expertTypeId);
      // 重置换页
      this.resetPage = true;
    },
    // 根据sortTypeId，expertTypeId来发送请求
    getExpertListBySortAndType(
      sortTypeId = "0",
      expertTypeId = "0",
      page = 1,
      size = 9
    ) {
      // console.log('sortTypeId: ', sortTypeId);
      // console.log('expertTypeId: ', expertTypeId);
      // 按全部类型专家搜索，再判断是哪种排序方式就行了
      if (expertTypeId == "0") {
        this.getExpertListBySortWay(sortTypeId, page, size);
      } else {
        // 如果不是搜索全部专家而只是某种类型的专家
        // 则需要再判断是哪种排序方式的
        let httpUrl = "";
        switch (sortTypeId) {
          // 咨询量
          case "1":
            httpUrl = `/info/experts/findByTypeAndConsultingNum/${expertTypeId}/${page}/${size}`;
            break;
          // 回复量
          case "2":
            httpUrl = `/info/experts/findByTypeAndRepliesNum/${expertTypeId}/${page}/${size}`;
            break;
          // 回复率
          case "3":
            httpUrl = `/info/experts/findByTypeAndRepliesPercent/${expertTypeId}/${page}/${size}`;
            break;
          // 有用量
          case "4":
            httpUrl = `/info/experts/findByTypeAndPraiseNum/${expertTypeId}/${page}/${size}`;
            break;
          // 默认
          default:
            httpUrl = `/info/experts/findByTypeAndConsultingNum/${expertTypeId}/${page}/${size}`;
        }
        // this.$http.post(httpUrl)
        this.reqM2Service(httpUrl,{},'post')
        .then(res=>{
          res = res.data;
          // console.log('res: ', res);
          if (res.code === 20000) {
            res = res.data;
            this.total = res.total;
            this.expertList = [];
            res.rows.forEach((item) => this.expertList.push(item));
          } else {
            this.$message({
              message: "获取专家信息失败",
            });
          }
          this.loading = false;
        })
      }
    },
    // 处理换页请求
    handlePageChange({ page, size }) {
      // console.log('size: ', size);
      // console.log('page: ', page);
      // console.log('this.expertTypeId: ', this.expertTypeId);
      // console.log('this.sortTypeId: ', this.sortTypeId);
      this.getExpertListBySortAndType(this.sortTypeId,this.expertTypeId,page,size);
      // 取消重置换页
      this.resetPage = false;
    },
  },
  mounted() {
    // 请求专家分类类型
    this.getExpertCategoryList();
    // 默认请求咨询量从高到低的全部专家
    this.getExpertListBySortAndType(this.sortTypeId,this.expertTypeId)
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
.expertList {
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
    .expertList-container {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .expert-item {
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