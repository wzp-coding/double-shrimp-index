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
        <div class="lsx-left">
          <div class="left23head">
              <div class="left23head_between"></div>
              <span class="left23head_title">媒体<b>·</b>POLICIES</span><div class="left23head_between"></div>
          </div>
          
            <div class="leftlist" v-for="item in tablemedialist" :key="item.id">
                  <!-- <div style="flex:15%"><img :src="item.picture" width="100px" height="100px"></div> -->                
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
            <!-- 右侧栏第一栏内容区 -->
            <!-- 专家列表 -->
            <div class="right1rword">
                <ul>
                  <li v-for="item in expertlist" :key="item.id">
                    <template>
              <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
              </template>
                  </li>
                </ul>
            </div>
            
        
            <!-- 右栏第二栏内容区 -->
            <!-- 按点击量查询政策法规 -->
            <div class="right2word">
              <ul style="list-style-type: disc">
                <li
                  v-for="item in clicklist1"
                  :key="item.id"
                  class="rightwordhead"
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
                  class="rightwordhead"
                >
                  <template>
              <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
              </template>
                </li>
              </ul>
    
            <!-- 查看更多 -->
            <div class="right23more">
              <router-link to="policiesExpertMoreArticle"
                  >更多 <i class="el-icon-d-arrow-right"></i>
                </router-link>
            </div>
              <!-- 推荐政策法规 -->
              <ul>
                <li
                  v-for="item in recommendlist"
                  :key="item.id"
                  class="rightwordhead"
                >
                  <template>
              <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
              </template>
                </li>
              </ul>

              <!-- 右栏第三栏 -->
              <!-- 按时间查询政策法规 -->
              <ul style="list-style-type: disc">
                <li
                  v-for="item in timelist"
                  :key="item.id"
                  class="rightwordhead"
                >
                  <template>
              <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
              </template>
                </li>
              </ul>
              <!-- 查看更多 -->
              <div class="right23more">
                <router-link to="policiesMediaMoreArticle" @click.native="flushCom"
                    >更多 <i class="el-icon-d-arrow-right"></i>
                  </router-link>
              </div>
           </div>

           <!-- 右下按钮区 -->
            <div class="tage">
              <el-tag round>专家</el-tag>
              <el-tag round>火参果资源</el-tag>
              <el-tag round>橄榄</el-tag>
              <el-tag round>红豆杉货源</el-tag>
              <el-tag round>火鸡蛋</el-tag>
              <el-tag round>豆芽货源</el-tag>
              <el-tag round>洋葱货源</el-tag>
              <el-tag round>红薯批发</el-tag>
              <el-tag round>黄瓜货源</el-tag>
              <el-tag round>猪货源</el-tag>
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
      // 左栏第二栏专家列表
      expertlist: [],
      // 左栏第三栏媒体列表
      medialist: [],
      // 按点击量查询政策法规第一页     
      clicklist1: [],
      // 按点击量查询政策法规第二页
      clicklist2: [],
      // 查询推荐政策法规
      recommendlist: [],
      // 按时间查询政策法规
      timelist: [],
      // 分页区域查询参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 8
      },
      // 总数据条数
      total: 0,
     }
    },
    created() {
    //  获取左栏列表数据
    this.getTableMediaList();
    // 获取专家列表数据
    this.getExpertList();
    // 获取媒体列表数据
    this.getMediaList();
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
      this.total = res.data.total
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



    // 获取专家列表数据
    async getExpertList() {
      const { data: res } = await this.reqM2Service(
        "/info/policies/search/searchByTypeId/1316746002186768384/1/8",
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
    

    // 获取媒体列表数据
    async getMediaList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/search/searchByTypeId/1316746032893267968/1/8`,
        "",
        "post"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.medialist = res.data.rows;
    //   console.log(this.medialist);
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
    //   console.log(this.clicklist1);
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
    //   console.log(this.clicklist2);
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
    //   console.log(this.recommendlist);
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
    //   console.log(this.timelist);
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
    // 刷新页面（）
    flushCom:function(){
    //router是路由实例,例如:var router = new Router({})
    //router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)
    this.$router.go(0);
    }
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
      padding-top: 10px;
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
  .right1rword {
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


// 右栏第二栏
  .right2word {
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

  .right23more {
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
  .rightwordhead:nth-child(1) {
    font-size: 15px;
    font-weight: 800;
  }

  .tage {
    padding-top: 20px;
  }
  .el-tag {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
    margin: 0 5px 10px 10px;
    font-size: 14px;
    padding-top: 5px;
    height: 40px;
    cursor: pointer;
  }

</style>