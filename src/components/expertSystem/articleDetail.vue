<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'wzp_expertInterrogation' }"
          >专家问诊</el-breadcrumb-item
        >
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div>
        <div class="headInfo someThing">
          <h2 class="title">{{ articleInfo.title }}</h2>
          <div class="info">
            <span class="editor">{{ articleInfo.editor }}</span>
            <el-divider direction="vertical"></el-divider>
            <span class="creationTime">{{ this.formatTime(articleInfo.creationTime) }}</span>
            <el-divider direction="vertical"></el-divider>
            <span class="clickNum">点击量：{{ articleInfo.clickNum }} </span>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="someThing">
          <div class="lxl-1">
            <div>
              <h2><i class="el-icon-info"></i>文章概要</h2>
              <p style="margin-top: 3px">{{ articleInfo.summary }}</p>
              <el-divider></el-divider>
              <h2><i class="el-icon-info"></i>文章内容</h2>
              <p style="margin-top: 3px" v-html="articleInfo.content"></p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      articleInfo: {},
    };
  },
  methods: {
    async getArticleDeatailById(id) {
      await this.reqM2Service(`/info/information/${id}`, {}, "get").then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          this.articleInfo = res;
          console.log("res: ", res);
        }
      });
    },
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
        " " +
        hours +
        ":" +
        min +
        ":" +
        sec;
      return times;
    },
  },
  created() {
    let id = this.$route.params.id;
    this.id = id;
    console.log("id: ", id);
  },
  async mounted() {
    await this.getArticleDeatailById(this.id);
  },
};
</script>
<style lang="less" scoped>
.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
  margin-bottom: 40px;
}
.lxl-box {
  width: 1150px;
}
.headInfo.someThing {
  display: flex;
  flex-direction: column;
  .title {
    font-size: 1.5em;
    padding-bottom: 10px;
    padding-left: 10px;
  }
  .info {
    padding-left: 10px;
    font-size: 13px;
    color: rgb(140, 140, 140);
    .editor {
      font-weight: 700;
    }
    .creationTime {
    }
    .clickNum {
    }
  }
}
.someThing {
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: rgb(245, 245, 245);
  display: flex;
  .lxl-1 {
    display: inherit;
    flex-direction: row;
    font-size: 13px;
    line-height: 30px;
    > * {
      flex: 1;
      padding: 10px;
    }
  }
}
/deep/.el-carousel__button {
  background-color: rgb(204, 123, 18) !important;
}
</style>