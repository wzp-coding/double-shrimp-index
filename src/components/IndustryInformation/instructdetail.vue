<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>产业咨询</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div class="main">
        <div class="left" v-loading="loading">
          <div class="articleInfo">
            <!--文章相关信息-->
            <span style="font-size: 36px">{{ IdData.title }}"</span>
            <el-divider></el-divider>
            <div class="articleMain">
              <div>
                <el-avatar
                  style="border: 3px solid white"
                  :size="70"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </div>
              <div class="lxl-title">
                <h3>{{ IdData.summary }}</h3>
                <p style="display: flex">
                  发布时间 {{ IdData.creationTime | timefilters
                  }}<span style="margin-left: 15px" v-if="IdData.editor">
                    {{ IdData.editor }}报告</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="article">
            <div v-html="IdData.content" id="articleHtml"></div>
          </div>
        </div>
        <div class="right">
          <el-tabs v-model="activeName" @tab-click="showHot">
            <el-tab-pane label="最新资讯" name="first">
              <div
                class="tabList"
                v-for="(item, index) in newDatatabList"
                :key="index"
              >
                <div class="tabListPicture">
                  <el-image
                    :src="item.picture"
                    @click="TonewPath(item.id)"
                  ></el-image>
                </div>
                <div class="tabListWord">
                  <span @click="TonewPath(item.id)">{{ item.title }}</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="热门资讯" name="second" v-loading="loading1">
              <div
                class="tabList"
                v-for="(item, index) in numclicktabList"
                :key="index"
              >
                <div class="tabListPicture">
                  <el-image
                    :src="item.picture"
                    @click="TonewPath(item.id)"
                  ></el-image>
                </div>
                <div class="tabListWord">
                  <span @click="TonewPath(item.id)">{{ item.title }}</span>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <el-tabs v-model="activeName1" @tab-click="showMonth">
            <el-tab-pane label="本周热门" name="first1">
              <div
                class="tabList"
                v-for="(item, index) in WeekDatatabList"
                :key="index"
              >
                <div class="tabListPicture">
                  <el-image
                    :src="item.picture"
                    @click="TonewPath(item.id)"
                  ></el-image>
                </div>
                <div class="tabListWord">
                  <span @click="TonewPath(item.id)">{{ item.title }}</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane
              label="本月热门"
              @click="showMonth"
              name="second1"
              v-loading="loading2"
            >
              <div
                class="tabList"
                v-for="(item, index) in MonthData"
                :key="index"
              >
                <div class="tabListPicture">
                  <el-image
                    :src="item.picture"
                    @click="TonewPath(item.id)"
                  ></el-image>
                </div>
                <div class="tabListWord">
                  <span @click="TonewPath(item.id)">{{ item.title }}</span>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    timefilters(val) {
      if (val == null || val == "") {
        return "暂无时间";
      } else {
        let d = new Date(val); //val 为表格内取到的后台时间
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
          " " +
          hours +
          ":" +
          min +
          ":" +
          sec;
        return times;
      }
    },
  },
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      activeName: "first",
      activeName1: "first1",
      IdData: {},
      //按点击量查询
      numclicktabList: [],

      //按最新  时间
      newDatatabList: [],

      //每周
      WeekDatatabList: [],
      // 全部数据
      Alldata: [],
      //当前页面
      CurrentData: [],

      //每月
      MonthData: [],
      loading: true,
      loading1: true,
      loading2: true,
    };
  },
  created() {
    // 找到相应ID文章
    this.getshrimpIndustryData();

    //时间 最新
    this.getnewData();

    //每周
    this.getWeekData();
  },
  mounted() {
    console.log(this.$route.query.id);
  },
  methods: {
    //前往详情页 与更新详情页
    TonewPath(id) {
      console.log(id);
      this.$router.push({
        path: "/instructdetail",
        query: { id: id },
      });
      this.$router.go(0);
    },

    //找到相应ID文章
    async getshrimpIndustryData() {
      try {
        const { data: res } = await this.reqM2Service(
          `/info/information/${this.$route.query.id}/${this.$store.state.userData.userId}`,
          "",
          "get"
        );
        console.log("获取到文章");
        this.IdData = res.data;
        this.loading = false;
      } catch (error) {
        console.log("获取该ID文章信息失败");
      }
    },

    async getclickData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByClickNum/1/5",
        "",
        "get"
      );
      if (res.code === 20000) {
        this.numclicktabList = res.data.rows;
        this.loading1 = false;
      } else {
        console.log("获取点击量信息失败");
      }
    },

    async getnewData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByTime/1/6",
        "",
        "get"
      );
      if (res.code === 20000) {
        this.newDatatabList = res.data.rows;
        this.loading2 = false;
      } else {
        console.log("获取最新数据失败");
      }
    },

    showHot() {
      this.numclicktabList.length === 0
        ? this.getclickData()
        : (this.loading2 = false);
    },
    showMonth() {
      this.MonthData.length === 0 ? this.getMonthData() : "";
    },
    async getWeekData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickWeekly",
          "",
          "get"
        );
        if (res.code === 20000) {
          this.WeekDatatabList = res.data.slice(0, 6);
          this.loading3 = false;
        } else {
          console.log("获取每周数据失败");
        }
      } catch (error) {
        console.log("获取每周数据失败");
      }
    },
    async getMonthData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickMonthly",
          "",
          "get"
        );
        if (res.code === 20000) {
          this.MonthData = res.data.slice(0, 6);
          this.loading2 = false;
        } else {
          console.log("获取每月数据失败1");
        }
      } catch (error) {
        console.log("获取每月数据失败2");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.lxl-body {
  display: flex;
  justify-content: center; //对齐方式
  min-width: 1150px;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
}
.lxl-box {
  width: 1150px;
}
.main {
  margin-top: -25px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  .left {
    width: 69%;
    margin-bottom: 10px;
    .articleInfo {
      padding: 20px;
      margin: 13px 0 0 3px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      background-color: rgb(255, 250, 228);
      .articleMain {
        display: flex;
        .lxl-title {
          margin-top: 17px;
          margin-left: 5px;
        }
        p {
          padding-top: 6px;
          font-size: 13px;
          opacity: 0.9;
        }
      }
    }
    .article {
      width: 100%;
      font-size: 20.5px;
      padding: 17px 0 0 5px;
      #articleHtml {
        /deep/img {
          width: 98%;
          height: 310px;
        }
      }
    }
  }
  .right {
    width: 30%;
    .tabList {
      width: 100%;
      font-size: 14.21px;
      display: flex;
      justify-content: space-between;
      .tabListPicture {
        width: 40%;
        height: 100px;
        padding-bottom: 5px;
        .el-image {
          height: 100%;
          width: 100%;
        }
      }
      .tabListWord {
        width: 58%;
        span {
          color: #858585;
          cursor: pointer;
        }
        span:hover {
          color: black;
          font-weight: 800px;
        }
      }
    }
  }
}
</style>