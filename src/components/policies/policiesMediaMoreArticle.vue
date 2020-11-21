<template>
<div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item to="/policies"><span style="cursor:pointer">政策法规</span></el-breadcrumb-item>
        <el-breadcrumb-item>媒体频道</el-breadcrumb-item>
      </el-breadcrumb>      
      <el-divider></el-divider>

      <div class="lsx-all">
        <!-- 左栏列表内容 -->
        <div class="lsx-left" v-loading="loading">
          <div class="left23head">
              <div class="left23head_between"></div>
              <span class="left23head_title">媒体<b>·</b>POLICIES</span><div class="left23head_between"></div>
          </div>
          
            <div class="leftlist" v-for="item in tablemedialist" :key="item.id">        
                   <!-- 标题 -->
                  <h2 class="leftlist_title">
                    <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}
                    </router-link>
                  </h2>
                  <!-- 概要 -->
                  <div class="leftlist_summary"><span style="color: #3591b8;">[概要]</span>{{item.summary}}</div>

                  <!-- 时间 -->
                  <p class="leftlist__time_editor_clickNum">
                  {{ formatTime(item.creationTime) }}
                  <!-- 发布者 -->
                  <span style="padding-left: 4px">来源：</span>{{item.editor}}
                  <!-- 点击量 -->
                  <span style="padding-left: 4px">点击量：</span>{{item.clickNum}} </p>                                
            </div>
            <!-- 分页区域 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryInfo.pagenum"
              :page-size="queryInfo.pagesize"
              layout="prev, pager,next, total, jumper"
              :total="total"
              style="padding-left:160px;
              padding-top: 10px;
              padding-bottom: 3px"
              >
            </el-pagination>
          </div>      
      
          <!-- 右侧栏 -->
          <div class="lsx-right">
          <!-- 右侧栏第一栏标题区 -->
          <div class="right1head">
            <div class="right1headleft">官方</div>
          </div>        
          <!-- 右栏内容区 -->
          <div class="right2word" v-loading="loading">
            <ul>
              <li
                v-for="item in officiallist"
                :key="item.id"
                class="rightwordhead"
              >
                <template>
                  <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
                </template>
              </li>
            </ul>
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
      //  获取左栏列表数据
      tablemedialist:[],
      // 右栏官方列表
      officiallist: [],
      // 分页区域查询参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 8
      },
      // 总数据条数
      total: 0,
      loading: true,
     }
    },
    created() {
    //  获取左栏列表数据
    this.getTableMediaList();
   // 获取右栏官方列表
    this.getOfficialList();
  },
  methods: {
    //   获取左栏列表数据
    async getTableMediaList() {
      const { data: res } = await this.reqM2Service(
        "/info/policies/search/searchByTypeId/1316746032893267968/"+ this.queryInfo.pagenum+"/"+this.queryInfo.pagesize,
        {params: this.queryInfo},
        "post"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.tablemedialist = res.data.rows;
      this.total = res.data.total;
      this.loading=false;
      console.log(this.tablemedialist);
    },
    // 分页区域
      handleSizeChange(newSize) {
        this.queryInfo.pagesize = newSize
        this.getTableMediaList()
      },
      handleCurrentChange(newPage) {
        this.queryInfo.pagenum = newPage
        this.getTableMediaList()
      },
      // 获取官方列表数据
    async getOfficialList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/search/searchByTypeId/1327786510489096192/1/28`,
        "",
        "post"
      );
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.officiallist = res.data.rows;
      this.loading=false;
      console.log(this.officiallist);
    },
    // 时间格式化
    formatTime(date) {
      //date是传入的时间
      const d = new Date(date);
      const month =
        d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
      const hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
      const min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
      const sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
      const times =
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
      return times;
    },
  },
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
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
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  // 左栏
  .lsx-left {
    width: 70%;
  }
  // 右栏
  .lsx-right {
    width: 28%;
  }
}
// 左栏标题
.left23head {
    display: flex;
    color: #0079ca;
    height: 24px;
    font: 24px "微软雅黑";
    line-height: 24px;
    padding-bottom: 10px;
    .left23head_title{
        flex: 25%;
        text-align: center;
    }
    .left23head_between{
        background: url("./img/left_title.png");
        flex: 36%;
        height: 30px;
    }
}
// 左栏列表内容
.leftlist{
    padding: 8px;
    border-bottom: 1px solid #8d8d8c;
    a {
    color: #403a3e;
    }
    a:hover {
        color: #39b8ed;
    } 
    .leftlist_title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .leftlist__time_editor_clickNum {
        text-align: right;
        padding-top: 7px;
        font-size: 12px;
        color: #b7b7b5;
    }
    .leftlist_summary {
      padding-top: 20px;
      padding-bottom: 10px;
      text-indent:1em;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
}

// 右栏上标题
.right1head {
  height: 38px;
  display: flex;
  background-color: #f7f7f7;
  border-bottom: 1px solid #004787;
  margin-bottom: 10px;
  .right1headleft {
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

// 右栏官方列表内容区
.right2word {
  font-size: 14px;
  line-height: 2.4em;
  padding-left: 5px;
  padding-bottom: 10px;
  a {
    color: #403a3e;
  }
  a:hover {
    color: #39b8ed;
  }
  li {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
// 右栏官方列表加粗标题
.rightwordhead:nth-child(1) {
  padding-top: 15px;
  font-size: 16px;
  font-weight: 700;
}
.rightwordhead:nth-child(7n) {
  padding-top: 10px;
  font-size: 16px;
  font-weight: 700;
}

</style>