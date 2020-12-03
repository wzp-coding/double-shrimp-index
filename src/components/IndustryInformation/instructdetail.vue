<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <div class="top">
        <div class="tl">
          <el-breadcrumb
            separator-class="el-icon-arrow-right"
            class="lxl-breadcrumb"
          >
            <el-breadcrumb-item>当前位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/industryMarket' }"
              >产业资讯</el-breadcrumb-item
            >
            <el-breadcrumb-item>详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="main">
        <div class="left" style="margin-top: 17px">
          <div class="LeftTop" :data="IdData">
            <span
              style="
                font-size: 37px;
                font-family: Microsoft Yahei;
                font-weight: 700;
              "
              >{{ IdData.title }}</span
            >
            <div class="articleMain" style="margin-top: 17px">
              <div>
                <el-avatar
                  style="border: 3px solid white"
                  :size="70"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </div>
              <div class="lxl-title">
                <span>{{ IdData.editor }}报告</span>
                <p style="display: flex">
                  发布时间 {{ IdData.creationTime | timefilters }}
                </p>
              </div>
            </div>
          </div>
          <div class="article">
            <h3 style="margin-bottom: 10px; font-weight: 510">
              {{ IdData.summary }}
            </h3>
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
      isRouterAlive:false
    };
  },
  created() {
    this.getnewData();
    this.getshrimpIndustryData();
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    $route() {
      this.$router.go(0)
    },
  },
  methods: {
    //前往详情页 与更新详情页
    TonewPath(id) {
      this.$router.push({
        path: "/instructdetail",
        query: { id: id },
      });
      this.$router.go(0);
    },
    handleScroll() {
      let a = document.body.scrollTop + document.documentElement.scrollTop;
      if (a > 235 && this.WeekDatatabList.length === 0) {
        this.getWeekData();
      }
    },
    //找到相应ID文章
    async getshrimpIndustryData() {
      console.log(this.$route.query.id)
      try {
        const { data: res } = await this.reqM2Service(
          `/info/information/${this.$route.query.id}/${this.$store.state.userData.userId}`,
          "",
          "get"
        );
        console.log("获取到文章");
        this.IdData = res.data;
        console.log(res.data)
        this.loading = false;
      } catch (error) {
        console.log("获取该ID文章信息失败");
        this.$router.go(0)
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
        this.$router.go(0)
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
        this.$router.go(0)
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
          "/info/shrimpIndustry/findByClickWeekly/1/6",
          "",
          "get"
        );
        if (res.code === 20000) {
          this.WeekDatatabList = res.data.rows;
          this.loading3 = false;
        } else {
          console.log("获取每周数据失败");
        }
      } catch (error) {
        console.log("获取每周数据失败");
        this.$router.go(0)
      }
    },
    async getMonthData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickMonthly/1/6",
          "",
          "get"
        );
        if (res.code === 20000) {
          this.MonthData = res.data.rows;
          this.loading2 = false;
        } else {
          console.log("获取每月数据失败1");
        }
      } catch (error) {
        console.log("获取每月数据失败2");
        this.$router.go(0)
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
    .articleMain {
      display: flex;
      flex-wrap: nowrap;
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
    .article {
      width: 100%;
      font-size: 19px;
      padding: 17px 0 0 5px;
      #articleHtml {
        /deep/img {
          width: 98%;
          margin: 8px 0;
          height: 370px;
        }
      }
    }
  }
  .right {
    width: 30%;
    height: 1368px;
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