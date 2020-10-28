<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-container>
        <el-aside width="200px"></el-aside>
        <el-main>Main</el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  lang="less" scoped>
.lxl-body {
  display: flex;
  justify-content: center; //对齐方式
  min-width: 1150px;
  .lxl-breadcrumb {
    margin-left: 18px;
  }
}
.lxl-box {
  width: 1150px;
}
*{
  padding: 0;
  margin: 0;
}
.el-aside{
  height: 100px;
  background-color:pink ;
}
.el-main{
 height: 100px;
}
</style>