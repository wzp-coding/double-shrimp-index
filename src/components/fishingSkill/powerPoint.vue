<template>
  <div class="powerPoint">
    <div class="container">
        <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item>渔技学堂</el-breadcrumb-item
          >
          <el-breadcrumb-item>演示文稿</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="search">
        <searchPart></searchPart>
      </div>
      <div class="format">
        <category
          :default="'全部'"
          :labelList="formatList"
          :name="'格式'"
        ></category>
      </div>
      <div class="content">
        <div class="PPT-item">
          <miniPPTCard></miniPPTCard>
        </div>
        <div class="PPT-item">
          <miniPPTCard></miniPPTCard>
        </div>
        <div class="PPT-item">
          <miniPPTCard></miniPPTCard>
        </div>
        <div class="PPT-item">
          <miniPPTCard></miniPPTCard>
        </div>
        <div class="PPT-item">
          <miniPPTCard></miniPPTCard>
        </div>
        <div class="PPT-item">
          <miniPPTCard></miniPPTCard>
        </div>
        <div class="PPT-item">
          <miniPPTCard></miniPPTCard>
        </div>
        <div class="PPT-item">
          <miniPPTCard></miniPPTCard>
        </div>
      </div>
      <div class="pagination">
          <pagination></pagination>
      </div>
    </div>
  </div>
</template>
<script>
import searchPart from "./powerPointChildren/searchPart";
import miniPPTCard from "./powerPointChildren/miniPPTCard";
import category from "../expertSystem/expertListChildren/category";
import pagination from '../expertSystem/expertListChildren/pagination'
export default {
  data() {
    return {
      formatList: [
        {
          id: "1",
          data: "PPT",
        },
        {
          id: "2",
          data: "PPTX",
        },
        {
          id: "3",
          data: "PDF",
        },
        {
          id: "4",
          data: "WORD",
        },
      ],
    };
  },
  components: {
    searchPart,
    miniPPTCard,
    category,
    pagination
  },
};
</script>
<style lang="less" scoped>
.powerPoint {
  /deep/.container {
    width: 1150px;
    margin: auto;
    .breadcrumb {
      margin: 10px 0 10px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #ccc;
    }
    .search {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .format {
      .category .category-component .name {
        width: 70px;
      }
    }
    .content{
        display: flex;
        justify-content: space-between;
      flex-wrap: wrap;
        .PPT-item{
            width: 24%;
            margin-top: 20px;
        }
    }
    .pagination{
        text-align: center;
        margin: 20px 0;
    }
  }
}
</style>