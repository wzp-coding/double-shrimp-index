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
      size:1,
      page:1
    };
  },
  props:["total","resetPage"],
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      
      this.$emit("pageChange", { page:val,size:this.size });
    },
  },
  watch:{
    resetPage(){
      if(this.resetPage){
        this.page = 1
        this.resetPage = !this.resetPage
      }
    }
  }
  
};
</script>
<style lang="less" scoped>
</style>