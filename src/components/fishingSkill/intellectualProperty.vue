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
        <!-- 左侧栏 树形控件 分类 -->
      <div class="lsx-left">
        <div class="lefthead"><div class="leftheadleft">分类</div></div>
        <div class="leftsort">
          <!-- 养殖施药 -->
          <ul>           
            <li
              v-for="item in treeParentListBeed"
              :key="item.id"
              :treeParentList="item"
              @click="getTreeSonListBeed(item.id)"  
              class="leftsortParent"       
            >
               <i class="el-icon-caret-right"></i>{{ item.name}}
            <ul>
              <li 
              v-for="item in treeSonListBeed"
              :key="item.id"
              class="leftsortSon"            
              @click="handleTreeTableList(item.id)"
            >
              <div>
                {{ item.name}}
              </div>
              </li>
            </ul>
            </li>
          </ul>
          <!-- 仓储技术 -->
          <ul>           
            <li
              v-for="item in treeParentListStorage"
              :key="item.id"
              @click="getTreeSonListStorage(item.id)"
              class="leftsortParent"          
            >
                <i class="el-icon-caret-right"></i>{{ item.name}}
            <ul>
              <li 
              v-for="item in treeSonListStorage"
              :key="item.id"
              class="leftsortSon"              
              @click="handleTreeTableList(item.id)"
            >             
                {{ item.name}}             
              </li>
            </ul>
            </li>
          </ul>

          <!-- 其它 -->
          <ul>            
            <li
               v-for="item in treeParentListOther"
              :key="item.id"
              @click="fromTreeGetTableList(item.id)"  
              class="leftsortParent"              
            >
                <span style="padding-left: 15px;">{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>

        <!-- 右侧栏 -->
        <div class="lsx-right">     
            <!-- 搜索与添加区域 -->
            <div class="searchall">
            <el-row class="search" >
            <el-col :span="18">
            <el-input
              placeholder="请输入内容"
              v-model="queryInfo.query"
              clearable
              @clear="handleQueryAllBtn">
            <!-- 搜索 -->
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="handleQueryByKeysBtn"
            ></el-button>
            </el-input>           
            </el-col>
            </el-row>
            <!-- 返回->全部数据 -->
            <span @click="handleQueryAllBtn" class="el-icon-back">返回</span>

        </div>

            <!-- 右侧表格 -->
            <div>
            <el-table
              :data="tableList"
              style="width: 100%"
              v-loading="loading"
            >
              <el-table-column type="index">
              </el-table-column>          
              <el-table-column
                prop="title"
                label="题名"
                width="450px"
                align="left"
                header-align="center">
                <template slot-scope="scope">
                <router-link :to="{path:'intellectualPropertyArticle',query:{id:scope.row.id}}">{{scope.row.title}}</router-link>
                </template>
              </el-table-column>
              <el-table-column
                prop="editor"
                label="作者"
                width="150px"
                align="left"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="source"
                label="机构"
                width="140px"
                align="center"
                header-align="center">
              </el-table-column>
              <el-table-column
                prop="createDate"
                label="日期"
                width="140px"
                align="center"
                header-align="center"
                :formatter="formatDate">
              </el-table-column>
            </el-table>

            <!-- 分页区域 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryInfo.pagenum"
              :page-size="7"
              layout="prev, pager,next, total, jumper"
              :total="total"
              style="padding-left: 200px; padding-top: 10px;"
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
      },
      // 总数据条数
      total: 0,
      // 搜索分页
      // state:0 表示搜索全部，1表示按类型搜索，2表示按关键字搜索
      state: 0,
      // 加载页面
      loading: true,
      // 获取 第一个一级分类 养殖施药
      treeParentListBeed: [],
      // 获取 第二个一级分类 仓储技术
      treeParentListStorage:[],
      // 获取 第三个一级分类 其他 
      treeParentListOther: [],
      // 获取 养殖施药 的二级分类的数据
      treeSonListStorage:[],
      // 获取 仓储技术 的二级分类的数据
      treeSonListBeed:[],
      // 二级分类 根据id分页
      typeId: ""
      }
    },
    created () {
      // 右侧表格数据
      this.getTableList();
      // 左侧树形控件父母结点=>一级分类 
      // 养殖施药
      this.getTreeParentListBeed();
      // 仓储技术
      this.getTreeParentListStorage();
      // 其它
      this.getTreeParentListOther();
    },
    methods: {
      // 右侧表格数据
      async getTableList() {
        const { data: res } = await this.reqM2Service("/education/intellectualPropertyRights/findAll/"+ this.queryInfo.pagenum + "/7", {
        params: this.queryInfo
      },'get')
      console.log(res)

        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.tableList = res.data.rows;
        this.total = res.data.total;
        this.loading=false;
        // console.log(this.tableList);
      },

      // 搜索区域
      async getSearchTableList() {
        const { data: res } = await this.reqM12Service("/rights/search/time/"+ this.queryInfo.pagenum + "/7?key="+this.queryInfo.query,{
        params: this.queryInfo
      },'get')
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.tableList = res.data.rows;
        this.total = res.data.total;
        // console.log(this.tableList);
      },

      // 点击 返回 按钮
      handleQueryAllBtn() {
        this.state = 0;
        this.queryInfo.pagenum = 1;
        this.getTableList();
      },

      // 树形控件渲染右侧表格 分页
      handleTreeTableList(id) {
        this.state = 1;
        this.queryInfo.pagenum = 1;
        this.fromTreeGetTableList(id)
      },

      // 点击 搜索 按钮
      handleQueryByKeysBtn() {
        this.state = 2;
        this.queryInfo.pagenum = 1;
        this.getSearchTableList();
      },

      // 分页区域
      handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      if (this.state == 0) {
        this.getTableList();
      } 
      else if (this.state == 1) {
        this.fromTreeGetTableList(this.typeId);
      }
       else if (this.state == 2) {
        this.getSearchTableList();
      }
      },
      handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      if (this.state == 0) {
        this.getTableList();
      } 
      else if (this.state == 1) {
        this.fromTreeGetTableList(this.typeId);
      }
       else if (this.state == 2) {
        this.getSearchTableList();
      }
      },

      // 树形控件
      // 获取 第一个一级分类 养殖施药
      async getTreeParentListBeed() {
        const { data: res } = await this.reqM2Service(
          "/education/intellectualPropertyRightsTypes/findByLevel/1/1/1",
          "",
          "post"
        );
        console.log(res)
        if (res.code !== 20000) {
          return this.$message.error("获取列表失败！");
        }
        this.treeParentListBeed = res.data.rows;
        console.log(this.treeParentListBeed)
      },
      // 获取 第二个一级分类 仓储技术
      async getTreeParentListStorage() {
        const { data: res } = await this.reqM2Service(
          "/education/intellectualPropertyRightsTypes/findByLevel/1/2/1",
          "",
          "post"
        );
        console.log(res)
        if (res.code !== 20000) {
          return this.$message.error("获取列表失败！");
        }
        this.treeParentListStorage = res.data.rows;
        console.log(this.treeParentListStorage)
      },
      // 获取 第三个一级分类 其他 
      async getTreeParentListOther() {
        const { data: res } = await this.reqM2Service(
          "/education/intellectualPropertyRightsTypes/findByLevel/1/3/1",
          "",
          "post"
        );
        console.log(res)
        if (res.code !== 20000) {
          return this.$message.error("获取列表失败！");
        }
        this.treeParentListOther = res.data.rows;
        console.log(this.treeParentListOther)
      },
      // 获取 养殖施药 的二级分类的数据
      async getTreeSonListBeed(id) {
        const { data: res } = await this.reqM2Service(
          "/education/intellectualPropertyRightsTypes/findSon/"+id+"/1/7",
          "",
          "post"
        );
        
        if (res.code !== 20000) {
          return this.$message.error("获取列表失败！");
        }
        this.treeSonListBeed = res.data.rows;
        console.log(this.treeSonListBeed)
      },
      // 获取 仓储技术 的二级分类的数据
      async getTreeSonListStorage(id) {
        const { data: res } = await this.reqM2Service(
          "/education/intellectualPropertyRightsTypes/findSon/"+id+"/1/7",
          "",
          "post"
        );
        
        if (res.code !== 20000) {
          return this.$message.error("获取列表失败！");
        }
        this.treeSonListStorage = res.data.rows;
        console.log(this.treeSonListStorage)
      },
      // 按类型查找相对分类的数据 渲染到右侧表格中
      async fromTreeGetTableList(id) {
        this.typeId=id;
        const { data: res } = await this.reqM2Service(
          "/education/intellectualPropertyRights/findByType/"+
            id +
            "/" +
            this.queryInfo.pagenum +
            "/7",
          { params: this.queryInfo },
          "get"
        );
        if (res.code !== 20000) {
          return this.$message.error("获取列表失败！");
        }
        this.tableList = res.data.rows;
        this.total = res.data.total;
        console.log(this.tableList);
      },

      // 时间格式化
      formatDate(row, column) {
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
        return shortTimes;
      },
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
  flex: 18%;
  width: 300px;
  margin: 20px 0 0 0;
  border: 1px solid #bcd1e4;
}
// 左栏 分类 标题
  .lefthead {
  height: 40px;
  background-color: #6296c4;
    .leftheadleft {
    padding-top: 8px;
    color: #f7f7f7;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
    }
  }
  // 左栏分类内容样式
  .leftsort {
    width: 100%;
    li{
      list-style: none; 
    }
    .leftsortParent{
      padding-left: 20px;
      font-size: 15px;
      line-height: 1.8em;
      font-weight: 600;
      cursor:pointer;
      color: #5d5f61;
      padding-top: 10px;
    
    }
    .leftsortSon {
      padding-left: 25px;
      font-size: 14px;
      line-height: 1.8em;
      font-weight: 500;

      cursor:pointer;
      color: #78797a; 
    } 
  }  

// 右栏
.lsx-right {
  flex: 80%;
  padding-left: 20px;
  // 右栏 搜索栏
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
  // 右栏 返回 全部列表数据
  .el-icon-back{
    padding-top: 40px;
    float: right;
    opacity: 0.5;
    font-weight: 600;
    cursor:pointer;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>