<template>
<div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item to="/policies"><span style="cursor:pointer;">政策法规</span></el-breadcrumb-item>
        <el-breadcrumb-item>政策详读</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

      <div class="lsx-all">
        <!-- 左侧栏列表 -->
      <div class="lsx-left" v-loading="loading"> 
          <div class="passage" :data="passage">
          <!-- 标题 -->
          <h3 class="passage_title">{{passage.title}}</h3>
             <p class="passage_notes">
                来源：{{passage.editor}}
                <span style="padding-left:15px">时间：</span>{{formatTime(passage.creationTime)}}</p> 
              <p class="passage_summary">
                {{passage.summary}} </p>
              <p class="passage_content" v-html="passage.content">{{passage.content}} </p>
        </div> 
      </div>
      
      <!-- 右侧栏 -->
          <div class="lsx-right">
            <!-- 右侧栏第一栏标题区 -->
            <div class="right1head">
              <div class="right1headleft">官方</div>
            </div>
            <!-- 右侧官方列表 -->
            <div class="right2word" v-loading="loading">
            <ul>
              <li
                v-for="item in officiallist"
                :key="item.id"
                class="rightwordhead"
              >
                <template>
                  <router-link :to="{path:'policiesListArticle',query:{id:item.id}}" @click.native="flushCom">{{ item.title }}</router-link>
                  >
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
      // 左栏文章详情页
      passage: [],
      // 右栏官方列表
      officiallist: [],
      loading: true,
     }
    },
    created() {
    // 获取右栏官方列表
    this.getOfficialList();
    // 左栏文章详情页
    this.getPassage();
  },
  methods: {
      // 左栏文章详情页
    async getPassage() {
        const { data: res } = await this.reqM2Service("/info/information/"+this.$route.query.id,'','get')
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.passage = res.data;
        this.loading=false;
        console.log(this.passage);
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
    // 刷新页面（）
    flushCom:function(){
    //router是路由实例,例如:var router = new Router({})
    //router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)
    this.$router.go(0);
    }
　}
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
}
  // 左栏
  .lsx-left {
    width: 70%;
  }
  // 右栏
  .lsx-right {
    width: 28%;
  }
.passage{
  .passage_title{
    font-size: 28px;
    font-weight: 800;
    line-height: 2.2em;
    text-align: center;
  }
  .passage_notes{
    font-size: 14px;
    color: #686667;
    text-align: right;
    line-height: 2em;
    border-bottom: 1px solid #9e9c9d;
    padding-top: 10px;
  }
  .passage_summary{
    text-align: justify;
    text-indent:2em;
    line-height: 1.8em;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 15px;
    font-size: 16px;
    font-weight: 600;
    color: #464344;

  }
  .passage_content{
    padding-top: 10px;
    text-align: justify;
    text-indent:2em;
    font-size: 17px;
    line-height: 1.8em;
    padding-bottom: 10px;
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
  line-height: 2.0em;
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