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
            v-model="queryInfo.query"
            clearable
            @clear="pptList"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search" @click="searchPPTList"></el-button>
          </el-input>
        </div>
      </div>
      <div class="format">
        <label for="">类型： </label>
        <el-button @click="pptList">全部</el-button>
        <el-button v-for="item in formattab" :key="item.id" @click="formatList(item.id)">{{
          item.name
        }}</el-button>
        
      </div>
      <div class="lxl-card">
        <div class="PPT-item">
          <!-- v-for="(item, i) in 10" :key="i" -->
          <div v-for="item in pptlist" :key="item.id">
            <el-card class="card">
              <el-image
                :src="item.pic"
                class="image"
              >
              </el-image>
              <div>
                <div>
                  <p style="padding: 10px">
                   {{item.title}}

                  </p>
                </div>
                <div class="btns">
                  <a :href="item.contentUrl" :download="item.contentUrl">
                    <i class="el-icon-download" style="color: green" @click="pptList">下载</i></a>
                  <i
                    class="el-icon-view"
                    style="margin-right: 10px; color: #4398d0"
                    @click="bindPreview(item.contentUrl)"
                    >查看</i
                  >
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div class="pagination">
         <!-- 分页区域 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryInfo.pagenum"
              :page-size="queryInfo.pagesize"
              layout="prev, pager,next, total, jumper"
              :total="total"
              style="padding-left: 200px;
              padding-top: 10px;"
              >
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
      formattab: [],
      // 所有演示文稿
      pptlist: [],
      // 分页区域查询参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 12,
      },
      // 总数据条数
      total: 0,
      
    }
  },
  created () {
    // 所有演示文稿
    this.pptList();
    // 搜索演示文稿
    this.searchPPTList();
    this.formatTab();
    this.formatList();

  },
  methods: {
    async pptList() {
        const { data: res } = await this.reqM2Service("/education/manuscripts/findAll/"+ this.queryInfo.pagenum+"/"+this.queryInfo.pagesize,{
        params: this.queryInfo
      },'get')
      console.log(res)

        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.pptlist = res.data.rows
        this.total = res.data.total
        console.log(this.pptlist)
      },
      // 分页区域
      handleSizeChange(newSize) {
        this.queryInfo.pagesize = newSize
        this.pptList()
      },
      handleCurrentChange(newPage) {
        this.queryInfo.pagenum = newPage
        this.pptList()
      },
      // 搜索演示文稿
      async searchPPTList() {
        const { data: res } = await this.reqM13Service("/education/search/time/"+ this.queryInfo.pagenum+"/"+this.queryInfo.pagesize+"/2?key="+this.queryInfo.query,{
        params: this.queryInfo
      },'get')
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.pptlist = res.data.rows
        this.total = res.data.total
        console.log(this.pptlist)
      },
      // 查找演示文稿类型
      async formatTab() {
        const { data: res } = await this.reqM2Service("/education/manuscriptsTypes" , "" ,'get')
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.formattab = res.data;
        console.log(this.formattab);
        
      },
      // 按类型查找
      async formatList(id) {
        const { data: res } = await this.reqM2Service("/education/manuscripts/search/searchByTypeId/" + id +"/"+ this.queryInfo.pagenum+"/"+this.queryInfo.pagesize,
         "" , 'get')
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.pptlist = res.data.rows
        this.total = res.data.total
        console.log(this.pptlist)
      },
      
      bindPreview(url) {
        console.log(url);
        // console.log(/(doc)|(ppt)|(pptx)|(xls)/.test(url));
        // 跳转到空白页面预览，得等域名部署后
        if (/(doc)|(ppt)|(pptx)|(xls)/.test(url)) {
          url =
            "http://view.officeapps.live.com/op/view.aspx?src=" + encodeURIComponent(url);
           // 测试
          url =
          "https://view.officeapps.live.com/op/view.aspx?src=http%3a%2f%2fvideo.ch9.ms%2fbuild%2f2011%2fslides%2fTOOL-532T_Sutter.pptx";
        }
        // console.log(url);
        window.open(url);
    }
  }
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
.image {
  width: 235px;
  height: 180px;
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