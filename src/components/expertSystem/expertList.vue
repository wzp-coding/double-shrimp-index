<template>
  <div class="expertList lxl-body">
    <div class="container lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right "
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'expertInterrogation' }"
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
        ></category>
      </div>
      <div class="expertSort">
        <category
          :default="'全部'"
          :labelList="expertCategoryList"
          :name="'分类'"
          @changeLabel="changeCategory"
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
      loading: true,
      expertTypeId:'0',
      resetPage:false
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
      this.$http
        .get(`http://106.75.154.40:9012/info/expertsType`)
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
    changeCategory({ id }) {
      console.log(id);
      this.expertTypeId=id
      if(id !== "0"){
        this.getExpertListById(id)
      }else{
        this.getExpertList()
      }
      this.resetPage = true
    },
    // 根据类型获取专家列表
    getExpertListById(id, page = 1, size = 1) {
      this.$http
        .post(
          `http://106.75.154.40:9012/info/experts/findByTypeId/${id}/${page}/${size}`
        )
        .then((res) => {
          res = res.data;
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
        });
    },
    // 获取专家列表排序方式

    // 获取全部专家列表分页
    getExpertList(page=1, size=1) {
      this.$http
        .get(`http://106.75.154.40:9012/info/experts/findAll/${page}/${size}`)
        .then((res) => {
          res = res.data;
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
        });
    },
    handlePageChange({ page, size }) {
      // console.log('父组件:'+page+size)
      if(this.expertTypeId !== '0'){
        this.getExpertListById(this.expertTypeId,page,size)
      }else{
        this.getExpertList(page, size);
      }
      this.resetPage = false
    },
  },
  mounted() {
    this.getExpertCategoryList();
    this.getExpertList(1, 1);
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
      justify-content: space-between;
      flex-wrap: wrap;
      .expert-item {
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