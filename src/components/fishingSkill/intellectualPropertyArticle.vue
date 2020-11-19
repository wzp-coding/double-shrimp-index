<template>
    <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>渔技学堂</el-breadcrumb-item>       
        <el-breadcrumb-item><template>
              <router-link to="/intellectualProperty"><span style="cursor:pointer">知识产权</span></router-link>
              </template></el-breadcrumb-item>
        <el-breadcrumb-item>阅读原文</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <!-- 内容区 -->
      <div class="article" :data="passage">
        <div>
          <el-button class="read"><a :href="passage.file">原文链接<i class="el-icon-share el-icon--right"></i></a></el-button>
        </div>
        <div class="passage">
          <h2 style="text-align:center;">{{passage.title}}</h2><br>
          <h3>作者：</h3>
             <p>{{passage.editor}}</p>
          <h3>机构：</h3>
             <p>{{passage.source}}</p>
          <h3>简介：</h3>
             <p>{{passage.title}}</p>        
          <h3>发布时间：</h3>
             <p>{{formatTime(passage.createDate)}}</p> 
        </div>       
      </div>
      <!-- 相关专利、标准 -->
      <div class="property" :data="passage">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="相关专利发明" name="first">{{passage.invention}}</el-tab-pane>
          <el-tab-pane label="相关标准" name="second">{{passage.standard}}</el-tab-pane>
          </el-tabs>
        </template>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
        activeName: 'first',
        id: '',
        passage: []
      }
    },
    created() {
      this.getPassage()
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
      // getId() {
      //   this.id=this.$route.query.id
      //   console(id)
      // }
      async getPassage() {
        const { data: res } = await this.reqM2Service("/education/intellectualPropertyRights/"+this.$route.query.id,'','get')
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.passage = res.data
        console.log(this.passage)
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
      // 截取年月日
      let shortTimes = times.substring(0, 10);
      return shortTimes;
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
}
div a:hover {
  color: black;
}
li a:hover {
  color: #39b8ed;
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
.article {
  .passage {
    padding-left: 10px;
    line-height: 2.2em;
  }
  .read {
    width: 150px;
    height: 50px;
    float: right;
    background-color: #39b8ed;
    a{
      color: #fff;
      font-size: 17px;
      padding-bottom: 5px;
    }
  }
}
  .property {
    font-size: 13px;
    padding-bottom: 20px;
    color: #6f7072;
}
</style>
