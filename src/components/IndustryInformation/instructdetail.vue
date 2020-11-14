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
        <!-- <div class="tr">
          <input type="text" placeholder="  搜索你想要的农产品资讯" />
          <i class="el-icon-search"></i>
        </div> -->
      </div>
      <el-divider></el-divider>
      <div class="main">
        <div class="left">
          <div class="LeftTop">
            <span style="font-size: 36px">{{ IdData.title }}</span>
            <el-divider></el-divider>
            <div class="pandc">
              <div class="pic">
                <el-avatar
                  style="border: 3px solid white"
                  :size="70"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </div>
              <div class="lxl-title">
                <h3>{{ IdData.editor | limitword }}</h3>
                <p style="display: flex">
                  发布时间 {{ IdData.creationTime | timefilters
                  }}<span style="margin-left: 15px" v-if="IdData.editor">
                    {{ IdData.editor | limitword }}报告</span
                  >
                </p>
              </div>
            </div>
          </div>
          <!-- 富文本内容填充区域 -->
          <div class="article">
            <div class="article" v-html="IdData.content" id="test"></div>
          </div>
        </div>

        <div class="right">
          <el-tabs v-model="activeName">
            <el-tab-pane label="最新资讯" name="first">
              <div
                class="list"
                v-for="(item, index) in newDataList"
                :key="index"
              >
                <div class="block">
                  <el-image
                    :src="item.picture"
                    @click="TonewPath(item.id)"
                  ></el-image>
                  <div class="rightspan">
                    <span @click="TonewPath(item.id)">{{ item.title }}</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="热门资讯" name="second">
              <div
                class="list"
                v-for="(item, index) in numclicklist"
                :key="index"
              >
                <div class="block">
                  <el-image
                    :src="item.picture"
                    @click="TonewPath(item.id)"
                  ></el-image>
                  <div class="rightspan">
                    <span @click="TonewPath(item.id)">{{ item.title }}</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <!-- <el-tabs v-model="activeName1">
            <el-tab-pane label="本周热门" name="first1">
              <div
                class="list"
                v-for="(item, index) in WeekDataList"
                :key="index"
              >
                <div class="block">
                  <el-image
                    :src="item.picture"
                    @click="TonewPath(item.id)"
                  ></el-image>
                  <div class="rightspan">
                    <span @click="TonewPath(item.id)">{{ item.title }}</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="本月热门" name="second1">
              <div class="list" v-for="(item, index) in MonthData" :key="index">
                <div class="block">
                  <el-image
                    :src="item.picture"
                    @click="TonewPath(item.id)"
                  ></el-image>
                  <div class="rightspan">
                    <span @click="TonewPath(item.id)">{{ item.title }}</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs> -->
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
    //限制文字个数
    limitword(val) {
      if (val == null || val == "" || val == 1) {
        return "暂无数据";
      } else {
        var len = val.length;
        if (len > 80) {
          str: "";
          str = val.substring(0, 80) + "......";
          return str;
        } else {
          return val;
        }
      }
    },
  },
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      activeName: "first",
      activeName1: "first1",
      //按点击量查询
      numclicklist: [],

      //按最新  时间
      newDataList: [],

      //每周
      WeekDataList: [],
      // 全部数据
      Alldata: [],
      //当前页面
      CurrentData: [],

      //每月
      MonthData: [],
      IdData: {},
    };
  },
  created() {
    //获取全部关于专题数据
    this.getshrimpIndustryData();
    //点击量 热度
    this.getclickData();
    //时间 最新
    this.getnewData();

    //每周
    // this.getWeekData();

    //每月
    // this.getMonthData();
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
          `/info/information/${this.$route.query.id}`,
          "",
          "get"
        );
        this.IdData = res.data;
        console.log("获取到文章");
        console.log(res);
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
      this.numclicklist = res.data.rows;
    },

    async getnewData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByTime/1/6",
        "",
        "get"
      );
      this.newDataList = res.data.rows;
    },

    async getWeekData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickWeekly/1/6",
          "",
          "get"
        );
        this.WeekDataList = res.data.rows;
      } catch (error) {
        console.log("获取吗每周数据失败");
      }
    },
    async getMonthData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickMonthly/1/5",
          "",
          "get"
        );
        this.MonthData = res.data.rows;
      } catch (error) {
        console.log("获取每月数据失败");
      }
    },
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: btt;
  src: url("../../fonts/btt.ttf");
}
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
.top {
  padding-top: 10px;
  margin-bottom: -19px;
  display: flex;
  justify-content: space-between;
  .tl {
    margin-top: -10px;
  }
  .tr {
    position: relative;
    input {
      padding-left: 5px;
      border: 2px solid #d8d8d8;
      border-radius: 100px;
      width: 198px;
      height: 38px;
      outline: none;
    }
    i {
      top: 13px;
      position: absolute;
      right: 20px;
    }
  }
}

.main {
  margin-top: -30px;
  .left {
    float: left;
    width: 67%;
    .LeftTop {
      width: 98%;
      display: block;
      padding: 20px;
      margin: 13px 0 0 3px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      background-color: rgb(255, 250, 228);
      font-family: "btt";
      span {
        display: block;
      }
      .pandc {
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
      #test {
        /deep/img {
          width: 98%;
          height: 310px;
        }
      }
      .block .el-image {
        width: 98%;
        height: 310px;
        padding: 20px 0 35px 0;
      }
    }
  }
  .right {
    float: right;
    width: 30%;
    .el-image {
      cursor: pointer;
    }
    .rightspan {
      span {
        color: #858585;
        cursor: pointer;
      }
      span:hover {
        color: black;
        font-weight: 800px;
      }
    }

    .el-tabs {
      padding-top: 8px;
    }
    .list {
      padding-top: 13px;
      width: 100%;
      font-size: 13px;
      .block {
        display: flex;
        display: block;
        width: 100%;
        height: 110px;
        padding-bottom: 5px;
        .el-image {
          position: absolute;
          width: 30%;
          height: 100px;
          float: left;
          display: block;
        }
        .rightspan {
          width: 68%;
          display: flex;
          float: right;
        }
      }
    }
  }
}
</style>