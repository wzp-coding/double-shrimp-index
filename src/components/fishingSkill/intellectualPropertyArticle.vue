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
        <el-breadcrumb-item>全文下载</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div class="article">
        <div>
          <el-button class="download"><a href="http://134.175.208.235/group1/M00/00/20/rBAAD1-JnKKACJO3AAA81Oz8uUg43.docx" download="http://134.175.208.235/group1/M00/00/20/rBAAD1-JnKKACJO3AAA81Oz8uUg43.docx">全文下载
          <i class="el-icon-download"></i></a></el-button>
        </div>
        <div class="passage" :data="passage">
          <h2 style="text-align:center;">{{passage.title}}</h2><br>
          <h3>成果完成人：</h3>
             <p>{{passage.editor}}</p>
          <h3>第一完成单位：</h3>
             <p>{{passage.source}}</p>
          <h3>关键词：</h3>
             <p>{{passage.title}}</p>
          <h3>中国分类号：</h3>
             <p>S964</p>
          <h3>成果简介：</h3>
             <p>{{passage.title}}</p>
          <h3>成果类别：</h3>
             <p>应用技术</p>
          <h3>成果水平：</h3>
             <p>未评价</p>
          <h3>研究起止时间：</h3>
             <p>2017-04——2019-02</p> 
          <h3>评价形式：</h3>
             <p>验收</p>
          <h3>成果入库时间：</h3>
             <p>2019</p>
          
        </div>       
        
      </div>
      

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
  //   mounted() {
  //   console.log(this.$route.query.id);
  // },
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
        console.log(res)
        if (res.code !== 20000) {
        return this.$message.error('获取列表失败！')
      }
        this.passage = res.data
        console.log(this.passage)
      }
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
    margin-left: 10px;
    line-height: 2.2em;
  }
  .download {
    width: 150px;
    height: 50px;
    float: right;
    background-color: #39b8ed;
    a{
      color: #fff;
      font-size: 16px;
      padding-bottom: 5px;
    }
    
  }
}
  .property {
    margin: 20px 10px 10px 10px;
    height: 100px;
}
</style>
