<template>
  <div class="articleManage">
      <div class="title">文章管理</div>
    <el-table :data="articleList" style="width: 100%" max-height="250">
      <el-table-column fixed prop="creationTime" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="reply" label="文章题目" width="500"> </el-table-column>
      <el-table-column prop="status" label="审核状态" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, replyList)"
            type="text"
            size="small"
          >
            删除
          </el-button>
          <el-button
            @click="handleEdit(scope.$index, scope.row)"
            type="text"
            size="small"
            >编辑</el-button
          >
          <el-button
            @click="handleDetail(scope.$index, scope.row)"
            type="text"
            size="small"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :total="total"
      :resetPage="resetPage"
      @pageChange="handlePageChange"
    ></pagination>
  </div>
</template>
<script>
import pagination from "../expertListChildren/pagination";
export default {
  data() {
    return {
      articleList: [],
      total: 50,
      resetPage: false,
    };
  },
  components: {
    pagination,
  },
  methods: {
    // 处理换页请求
    handlePageChange({ page, size }) {
      console.log("size: ", size);
      console.log("page: ", page);
      // 取消重置换页
      this.resetPage = false;
    },
  },
};
</script>
<style  lang="less">
.articleManage{
    .title{
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
        font-weight: 500;
    }
}
    
</style>