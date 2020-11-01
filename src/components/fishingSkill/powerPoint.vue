<template>
  <div class="powerPoint lxl-body">
    <div class="container lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>渔技学堂</el-breadcrumb-item>
        <el-breadcrumb-item>演示文稿</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

      <div class="search">
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
      </div>
      <div class="format">
        <label for="">格式： </label>
        <el-button v-for="(item, i) in formatList" :key="i">{{
          item
        }}</el-button>
      </div>
      <div class="lxl-card">
        <div class="PPT-item">
          <div v-for="(item, i) in 9" :key="i">
            <el-card class="card">
              <el-image
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              >
              </el-image>
              <div>
                <div>
                  <p style="padding: 10px">
                   编译和热更新（用于开发环境）

                  </p>
                </div>
                <div class="btns">
                  <i class="el-icon-download" style="color: green">下载</i>
                  <i
                    class="el-icon-view"
                    style="margin-right: 10px; color: #4398d0"
                    >查看</i
                  >
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      select: "",
      formatList: ["PPT", "PPTX", "PDF", "WORD"],
    };
  },
};
</script>
<style lang="less" scoped>
.searchPart {
  .el-input-group__prepend .el-select {
    width: 100px;
  }
}
.btns {
  display: flex;
  flex-direction: row-reverse;
}
.btns:hover{
  cursor: pointer;
}
.ccy-drvider {
  margin: 10px 0 7px 0;
}
.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
}
.lxl-box {
  width: 1150px;
}
.format {
  padding: 10px;
  > * {
    margin: 0 10px 0 10px;
  }
}
.pagination {
  width: 100%;
  margin: 20px;
  text-align: center;
}
.lxl-card {
  .PPT-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .card {
      margin: 5px;
      width: 275px;
    }
  }
}
</style>