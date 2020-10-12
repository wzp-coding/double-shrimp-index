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
        ></category>
      </div>
      <div class="expertList-container">
        <div class="expert-item">
          <miniExpertCard></miniExpertCard>
        </div>
        <div class="expert-item">
          <miniExpertCard></miniExpertCard>
        </div>
        <div class="expert-item">
          <miniExpertCard></miniExpertCard>
        </div>
        <div class="expert-item">
          <miniExpertCard></miniExpertCard>
        </div>
        <div class="expert-item">
          <miniExpertCard></miniExpertCard>
        </div>
        <div class="expert-item">
          <miniExpertCard></miniExpertCard>
        </div>
        <div class="expert-item">
          <miniExpertCard></miniExpertCard>
        </div>
        <div class="expert-item">
          <miniExpertCard></miniExpertCard>
        </div>
        <div class="expert-item">
          <miniExpertCard></miniExpertCard>
        </div>
      </div>
      <div class="pagination">
        <pagination></pagination>
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
      expertCategoryList: [
        {
          id: "1",
          data: "养殖施药",
        },
        {
          id: "2",
          data: "加工生产",
        },
        {
          id: "3",
          data: "冷链物流",
        },
        {
          id: "4",
          data: "施药配方",
        },
      ],
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
    };
  },
  components: {
    category,
    pagination,
    miniExpertCard,
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