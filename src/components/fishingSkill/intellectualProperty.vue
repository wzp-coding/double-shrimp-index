<template>
    <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>政策法规</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

     <!-- 内容区 -->
      <div class="all">
        <div class="left">
          <!-- 左栏栏第一栏 -->
          <div class="lsec1">
            <!-- 标题区 -->
            <div class="lsec1head">
              <div class="lsec1headl">专家</div>
            </div>
            <!-- 内容区 -->
            <div class="lsec1rword0">
              <div class="lsec1rword">
               <ul>
                <li v-for="item in zjlist"
                    :key="item.id">
                  <a href="#">{{ item.title }}</a>
                </li>
              </ul>
              </div>
            </div>
          </div>

          <!-- 左栏第二栏 -->
          <div class="lsec2">
            
            <!-- 内容区 -->
            <div class="lsec2word">
               <ul style="list-style-type:disc">
                <li v-for="item in djlist1"
                    :key="item.id"
                    class="lsec1rwordhead">
                  <a href="#">{{ item.title }}</a>
                </li>
              </ul>
            </div>

            <div class="lsec2word">
                <ul style="list-style-type:disc">
                  <li v-for="item in djlist2"
                      :key="item.id"
                      class="lsec1rwordhead">
                    <a href="#">{{ item.title }}</a>
                  </li>
                </ul>
            </div>

            <!-- 查看更多 -->
            <div class="lsec2more">
              <a href="#">查看更多</a>
            </div>
            
            <!-- 内容区 -->
            <div class="lsec2word">
                <ul>
                  <li v-for="item in tjlist"
                      :key="item.id"
                      class="lsec1rwordhead">
                    <a href="#">{{ item.title }}</a>
                  </li>
                </ul>
            </div>

              <div class="lsec2word">
                <ul style="list-style-type:disc">
                  <li v-for="item in sjlist"
                      :key="item.id"
                      class="lsec1rwordhead">
                    <a href="#">{{ item.title }}</a>
                  </li>
                </ul>
              </div>
          </div>
        </div>


        <!-- 右侧栏 -->
        <div class="right">     
            <!-- 搜索与添加区域 -->
            <!-- v-model="queryInfo.query" -->
            <el-row class="search">
            <el-col :span="16">
            <el-input
              placeholder="请输入内容"
              v-model="queryInfo.query"
              clearable
              @clear="getTableList"
            >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getTableList"
            ></el-button>
            </el-input>
            </el-col>
            </el-row>

            <!-- 右侧表格 -->
            <div>
            <el-table
              :data="tableList"
              ref="multipleTable"
              tooltip-effect="dark"
              style="width: 100%"
              stripe
            >
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column type="index">
            </el-table-column>          
            <el-table-column
              prop="title"
              label="题名"
              width="280px">
              <template slot-scope="scope">
              <router-link :to="{path:'intellectualPropertyArticle',query:{id:scope.row.id}}">{{scope.row.title}}</router-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="editor"
              label="作者"
              width="120px">
            </el-table-column>
            <el-table-column
              prop="source"
              label="机构"
              width="110px"
              align="left"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="createDate"
              label="日期"
              width="110px"
              align="right"
              header-align="center">
            </el-table-column>
            <!-- <el-table-column
              prop="file"
              label="刊物"
              width="100px"
              align="center"
              header-align="center">
            </el-table-column> -->
            <el-table-column
              label="下载"
              width="110px"
              prop="file"
              align="center"
              header-align="center">
              <a href="http://134.175.208.235/group1/M00/00/20/rBAAD1-JnKKACJO3AAA81Oz8uUg43.docx" download="http://134.175.208.235/group1/M00/00/20/rBAAD1-JnKKACJO3AAA81Oz8uUg43.docx"><el-button icon="el-icon-download" size="mini"></el-button></a>
            </el-table-column>
            </el-table>

            <!-- 分页区域 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryInfo.pagenum"
              :page-size="queryInfo.pagesize"
              layout="prev, pager,next, total, jumper"
              :total="total"
              style="margin-left: 200px;
              margin-top: 5px;"
              >
            </el-pagination>
        
            </div>  
        </div>

      </div>
    </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      tableList: [],
      input: '',
      // 查询参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 7
      },
      // 总数据条数
      total: 0,
      zjlist: [],
      djlist1: [],
      djlist2: [],
      tjlist: [],
      sjlist: []
      }
    },
    created () {
      this.getTableList()
      this.getZjList()
      this.getDjList1()
      this.getDjList2()
      this.getTjList()
      this.getSjList()
    },
  // +  +  
    methods: {
      async getTableList() {
        const { data: res } = await this.reqM2Service("/education/intellectualPropertyRights/findAll/"+ this.queryInfo.pagenum+"/"+this.queryInfo.pagesize,{
        params: this.queryInfo
      },'get')
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.tableList = res.data.rows
        this.total = res.data.total
        console.log(this.tableList)
      },
      handleSizeChange(newSize) {
        this.queryInfo.pagesize = newSize
        this.getTableList()
      },
      handleCurrentChange(newPage) {
        this.queryInfo.pagenum = newPage
        this.getTableList()
      },

      // 获取专家列表数据
    async getZjList() {
        const { data: res } = await this.reqM2Service(`/info/policies/search/searchByTypeId/1316746002186768384/1/8`,'','post')
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.zjlist = res.data.rows
        console.log(this.zjlist)
    },

      // 按点击量查询政策法规第一页
    async getDjList1() {
        const { data: res } = await this.reqM2Service(`/info/policies/findByClickNum/1/4`,'','get')
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.djlist1 = res.data.rows
        console.log(this.djlist1)
    },
    // 按点击量查询政策法规第二页
    async getDjList2() {
        const { data: res } = await this.reqM2Service(`/info/policies/findByClickNum/2/4`,'','get')
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.djlist2 = res.data.rows
        console.log(this.djlist2)
    },

    // 查询推荐政策法规
    async getTjList() {
        const { data: res } = await this.reqM2Service(`/info/policies/findByRecommend/1/4`,'','get')
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.tjlist = res.data.rows
        console.log(this.tjlist)
    },

    // 按时间查询政策法规
    async getSjList() {
        const { data: res } = await this.reqM2Service(`/info/policies/findByTime/1/4`,'','get')
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.sjlist = res.data.rows
        console.log(this.sjlist)
    },       
  }
}
</script>
<style lang="less" scoped>
body {
  margin: 0;
  padding: 0;
}
a {
    text-decoration: none;
    color: black;
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
  height: 100%;
}


// 内容区
.all {
  display: flex;
  margin: 25px 10px 25px 10px;
}

// 左栏
.left {
  flex: 20%;
  padding: 40px 25px 0 0;
}


// 左栏上
.lsec1 {
  width: 285px;
  flex: 25%;
  // 左栏上标题
  .lsec1head {
  width: 285px;
  height: 32px;
  background-color: #f7f7f7;
  border-bottom: 2px solid #004787;
    .lsec1headl {
    height: 18px;
    width: 50px;
    background-color: #004787;
    color: #f7f7f7;
    font-size: 16px;
    padding: 6px 15px 8px 20px;
    border-bottom: none;
    border-top-left-radius: 4px;     
    border-top-right-radius: 4px; 
    text-shadow: 1px 2px 3px rgba(0,0,0,0.4);
    }
  }

  // 左栏第一栏
  .lsec1rword0 {
    width: 265px;
    margin: 10px 3px 10px 10px;
    .lsec1rword {
    font-size: 13px;
    line-height: 2.2em;
    margin-bottom: 10px;
    a {
      color: #403a3e;
    }
    a:hover {
    color: #39b8ed;
    }
    li {
      white-space:nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
    }
    }
  }
}


// 左栏第二栏
.lsec2 {
  width: 285px;
  flex: 45%;
  .lsec2word {
    font-size: 13px;
    line-height: 2em;
    margin-bottom: 10px;
    margin-left: 10px;
    a {
      color: #403a3e;
    }
    a:hover {
    color: #39b8ed;
    }
    ul {
      list-style-position:inside
    }
    li {
      white-space:nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
    }
  }
  .lsec2more {
  width: 285px;
  height: 20px;
  font-size: 12px;
  border-bottom: 1px solid #b7b7b5;
  margin-bottom: 5px;
    a{
      float: right;
      color: #b7b7b5;
    }
    a:hover {
      color: black;
    }
  }
}
.lsec1rwordhead:nth-child(1) {
  font-size: 15px;
  font-weight: 800;
}

// 右栏
.right {
  flex: 80%;
  .search {
    margin-left: 20px;
  }
}
</style>





