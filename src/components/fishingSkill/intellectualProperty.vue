<template>
    <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>渔技学堂</el-breadcrumb-item>
        <el-breadcrumb-item>知识产权</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

     <!-- 内容区 -->
      <div class="lsx-all">
        <!-- 左侧栏 -->
          <div class="lsx-left">
            <!-- 左栏第一栏标题区 -->
            <div class="left1head">
              <div class="left1headleft">官方</div>
            </div>
            <!-- 左栏第一栏内容区 -->
            <!-- 专家列表 -->
            <div class="left1rword">
                <ul>
                  <li v-for="item in expertlist" :key="item.id">
                    <template>
                      <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
                    </template>
                  </li>
                </ul>
            </div>
            <br>
        
            <!-- 左栏第二栏内容区 -->
            <!-- 按点击量查询政策法规 -->
            <div class="left2word">
              <ul style="list-style-type: disc">
                <li
                  v-for="item in clicklist1"
                  :key="item.id"
                  class="leftwordhead"
                >
                <template>
                  <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
                </template>
                </li>
              </ul>

              <ul style="list-style-type: disc">
                <li
                  v-for="item in clicklist2"
                  :key="item.id"
                  class="leftwordhead"
                >
                <template>
                  <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
                </template>
                </li>
              </ul>
    
            <!-- 查看更多 -->
            <div class="left23more">
              <router-link to="policiesExpertMoreArticle"
                  >更多 <i class="el-icon-d-arrow-right"></i>
                </router-link>
            </div>
              <!-- 推荐政策法规 -->
              <ul>
                <li
                  v-for="item in recommendlist"
                  :key="item.id"
                  class="leftwordhead"
                >
                <template>
                  <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
                </template>
                </li>
              </ul>

              <!-- 左栏第三栏 -->
              <!-- 按时间查询政策法规 -->
              <ul style="list-style-type: disc">
                <li
                  v-for="item in timelist"
                  :key="item.id"
                  class="leftwordhead"
                >
                <template>
                  <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
                </template>
                </li>
              </ul>
              <!-- 查看更多 -->
              <div class="left23more">
                <router-link to="/policiesMediaMoreArticle"
                    >更多 <i class="el-icon-d-arrow-right"></i>
                  </router-link>
              </div>
           </div>

          
        </div>


        <!-- 右侧栏 -->
        <div class="lsx-right">     
            <!-- 搜索与添加区域 -->
            <!-- v-model="queryInfo.query" -->
            <div class="searchall">
            <el-row class="search" >
            <el-col :span="16">
            <el-input
              placeholder="请输入内容"
              v-model="queryInfo.query"
              clearable
              @clear="getTableList">
              
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getSearchTableList"
            ></el-button>
            </el-input>           
            </el-col>
            </el-row>
            
            <i class="el-icon-refresh-right" style="cursor:pointer" @click="getTableList">
              <span style="font-size: 13px;font-weight: 500;">列表</span>
            </i>
        </div>
            <!-- 右侧表格 -->
            <div>
            <el-table
              :data="tableList"
              style="width: 100%"
            >
            <el-table-column type="index">
            </el-table-column>          
            <el-table-column
              prop="title"
              label="题名"
              width="290px"
              align="left"
              header-align="center">
              <template slot-scope="scope">
              <router-link :to="{path:'intellectualPropertyArticle',query:{id:scope.row.id}}">{{scope.row.title}}</router-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="editor"
              label="作者"
              width="120px"
              align="left"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="source"
              label="机构"
              width="120px"
              align="left"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="createDate"
              label="日期"
              width="120px"
              align="right"
              header-align="center"
              :formatter="formatDate">
            </el-table-column>
            <el-table-column
              label="下载"
              width="110px"
              prop="file"
              align="center"
              header-align="center">
              <template slot-scope="scope">
              <a :href="scope.row.file" :download="scope.row.file">
              <el-button icon="el-icon-download" size="mini" @click="getTableList"></el-button>
              </a>

              </template>
              
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
              style="padding-left: 200px;
              padding-top: 10px;"
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
      // 右侧表格数据
      tableList: [],
      // 输入框
      input: '',
      // 分页区域查询参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 7
      },
      // 总数据条数
      total: 0,
      // 左栏数据
      // 专家数据
      expertlist: [],
      // 按点击量查询政策法规第一页
      clicklist1: [],
      // 按点击量查询政策法规第二页
      clicklist2: [],
      // 查询推荐政策法规
      recommendlist: [],
      // 按时间查询政策法规
      timelist: [],
      }
    },
    created () {
      // 右侧表格数据
      this.getTableList();
      // 右侧搜索表格数据
      this.getSearchTableList();
      // 获取专家列表数据
      this.getExpertList();
      // 按点击量查询政策法规第一页
      this.getClickList1();
      // 按点击量查询政策法规第二页
      this.getClickList2();
      // 查询推荐政策法规
      this.getRecommendList();
      // 按时间查询政策法规
      this.getTimeList();
    },

    methods: {
      // 右侧表格数据
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
      // 搜索区域
      
      async getSearchTableList() {
        const { data: res } = await this.reqM13Service("/rights/search/time/"+ this.queryInfo.pagenum+"/"+this.queryInfo.pagesize+"?key="+this.queryInfo.query,{
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


      // 分页区域
      handleSizeChange(newSize) {
        this.queryInfo.pagesize = newSize
        this.getTableList()
      },
      handleCurrentChange(newPage) {
        this.queryInfo.pagenum = newPage
        this.getTableList()
      },

      // 获取专家列表数据
    async getExpertList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/search/searchByTypeId/1316746002186768384/1/8`,
        "",
        "post"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.expertlist = res.data.rows;
      console.log(this.expertlist);
    },

    // 按点击量查询政策法规第一页
    async getClickList1() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/findByClickNum/1/4`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.clicklist1 = res.data.rows;
      console.log(this.clicklist1);
    },
    // 按点击量查询政策法规第二页
    async getClickList2() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/findByClickNum/2/4`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.clicklist2 = res.data.rows;
      console.log(this.clicklist2);
    },

    // 查询推荐政策法规
    async getRecommendList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/findByRecommend/1/4`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.recommendlist = res.data.rows;
      console.log(this.recommendlist);
    },

    // 按时间查询政策法规
    async getTimeList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/findByTime/1/4`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.timelist = res.data.rows;
      console.log(this.timelist);
    },

    // 时间格式化
    formatDate(row, column) {
    // 获取单元格数据
    // let data = row[column.property]
    
    let d = new Date(row[column.property]);
      let month =
        d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
      let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
      let min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
      let sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
      let times =
        d.getFullYear() +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        min +
        ":" +
        sec;

        // 截取年月日
        let shortTimes = times.substring(0,10);
      return shortTimes;}
  }
}
</script>

<style lang="less" scoped>
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
.lsx-all {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}

// 左栏
.lsx-left {
  flex: 29%;
  width: 300px;
  padding: 20px 0 0 0;
  // 左栏上标题
  .left1head {
    height: 38px;
    display: flex;
    background-color: #f7f7f7;
    border-bottom: 1px solid #004787;
    .left1headleft {
      height: 30px;
      width: 60px;
      padding-top: 8px;
      color: #004787;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      border-bottom: none;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
    }
  }
  .left1rword {
    font-size: 13px;
    line-height: 2em;
    padding-left: 10px;
    a {
      color: #403a3e;
    }
    li {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    a:hover {
      color: #39b8ed;
    }
  }
// 左栏第二栏
  .left2word {
    width: 100%;
    font-size: 13px;
    line-height: 2em;
    padding-left: 10px;
    a {
      color: #403a3e;
    }
    a:hover {
      color: #39b8ed;
    }
    ul {
      list-style-position: inside;
    }
    li {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .left23more {
    width: 100%;
    height: 20px;
    line-height: 2em;
    font-size: 13px;
    border-top: 1px solid #b7b7b5;
    a {
      float: right;
      color: #b7b7b5;
    }
    a:hover {
      color: black;
    }
  }
  .leftwordhead:nth-child(1) {
    font-size: 15px;
    font-weight: 800;
  }
}




// 右栏
.lsx-right {
  flex: 70%;
  padding-left: 20px;
  .searchall{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .search {
    padding-left: 20px;
    padding-top: -10px;
    flex: 45%;
  }
  .el-icon-refresh-right{
    padding-top: 40px;
    float: right;
    opacity: 0.5;
    font-weight: 600;
  }
  
}

</style>





