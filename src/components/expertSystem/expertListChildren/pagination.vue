<template>
  <div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      :page-size="size"
      layout="prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      flag: this.resetPage,
    };
  },
  props: ["total", "resetPage", "size"],
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit("pageChange", { page: val, size: this.size });
    },
  },
  watch: {
    resetPage() {
      this.flag = this.resetPage;
      if (this.flag) {
        this.page = 1;
        this.flag = !this.flag;
      }
    },
  },
};
</script>
<style lang="less" scoped>
</style>