<template>
  <div class="searchPart">
    <el-input
      placeholder="请输入内容"
      v-model="input"
      class="input-with-select"
    >
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="PPT" value="1"></el-option>
        <el-option label="PPTX" value="2"></el-option>
        <el-option label="PDF" value="3"></el-option>
        <el-option label="WORD" value="4"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      select: "PPT",
    };
  },
};
</script>
<style lang="less" scoped>
.searchPart{
    .el-input-group__prepend .el-select{
        width: 100px;
    }
}
</style>