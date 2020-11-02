<template>
  <div>
  11111产业资讯
  </div>
</template>
<script>
export default {
  //局部时间过滤器
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
    //过滤器2
    timefilter(val) {
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
        let times = d.getFullYear() + "-" + month + "-" + day;
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
      //查询全部产业资讯
      // datalist: [],
      searchInput: "",

      //每周精品
      weekliList: [
        {
          picture:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          picture:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
      ],

      //精彩专题1
      jingcai1List: [],

      queryInfo1: {
        Infopage1: 1,
        Infosize1: 12,
        Infototal1: null,
        TypeID1: "1316745747953225728",
      },

      //精彩专题 2
      jingcai2List: [],

      queryInfo2: {
        Infopage2: 1,
        Infosize2: 4,
        Infototal2: null,
        TypeID2: "1320648223462920192",
      },

      //精彩专题3 分页
      queryInfo3: {
        //当前页
        Currentpage: 1,
        //每页条数
        pagesize: 5,
        //总条数
        total: null,
        TypeID3: "1316743601669148672",
      },

      //精彩专题3 数组
      pagelist: [],

      //根据类型ID查询
      TypeIdData: [],

      TempList: [
        {
          picture:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          title: "暂无数据",
        },
      ],

      //最新资讯
      NewDataList: [],

      //每月精彩资讯
      MonthDataList: [],

      //热度 点击量
      waybytime: "info/shrimpIndustry/findByTime",
      waybyclick: "info/shrimpIndustry/findByClickNum",
      waybyrecommed: "info/shrimpIndustry/findByRecommend",
      waybyweek: "info/shrimpIndustry/findByClickWeekly",
      waybymonth: "info/shrimpIndustry/findByClickMonthly",
      waybyall: "info/shrimpIndustry",
      ClickDataList: [],

      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
  created() {
    // //每周精品
    this.getWeekData();
    // //精彩专题 1 按类型查询 对虾养殖
    this.getjingcai1();

    // //精彩专题2
    this.getjingcai2();
    //   //精彩专题3
    this.getjingcai3();

    // //最新资讯
    this.getNewData();

    // //每月
    this.getMonthData();

    //点击量 热度
    this.getClickData();
  },
  methods: {
    //前往详情页
    TonewPath(id) {
      this.$router.push({
        path: "/instructdetail",
        query: { id: id },
      });
    },
    //前往更多页面
    ToMorePage(id) {
      this.$router.push({
        path: "/instructpagedetail",
        query: { id: id },
      });
    },
    //
    ToOtherMore(path) {
      this.$router.push({
        path: "/industryothermore",
        query: { path: path },
      });
    },

    //每周精品
    async getWeekData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByClickWeekly",
        "",
        "get"
      );
      if (res.code === 20000) {
        console.log("2" + res);
        console.log(res);
        console.log("获取每周精品数据成功");
        this.weekliList = res.data;
        console.log(res);
        console.log(this.weekliList);
      }
    },

    //精彩专题 1 对虾养殖
    async getjingcai1() {
      const { data: res } = await this.reqM2Service(
        `/info/shrimpIndustry/search/searchByTypeId/${this.queryInfo1.TypeID1}/${this.queryInfo1.Infopage1}/${this.queryInfo1.Infosize1}`,
        "",
        "post"
      );
      if (res.code === 20000) {
        console.log("3" + res);
        console.log(res);
        console.log("获取精彩专题1数据成功");
      }
      this.jingcai1List = res.data.rows;
      this.queryInfo1.Infototal1 = res.data.rows.length;
    },

    //精彩专题2 1320648223462920192
    async getjingcai2() {
      const { data: res } = await this.reqM2Service(
        `/info/shrimpIndustry/search/searchByTypeId/${this.queryInfo2.TypeID2}/${this.queryInfo1.Infopage1}/${this.queryInfo1.Infosize1}`,
        "",
        "post"
      );
      if (res.code === 20000) {
        console.log("4" + res);
        console.log(res);
        console.log("获取精彩专题2数据成功");
        this.jingcai2List = res.data.rows;

      }
    },

    // 根据类型ID查询 精彩专题3  财富手册
    async getjingcai3() {
      const { data: res } = await this.reqM2Service(
        `/info/shrimpIndustry/search/searchByTypeId/${this.queryInfo3.TypeID3}/${this.queryInfo3.Currentpage}/${this.queryInfo3.pagesize}`,
        "",
        "post"
      );
      if (res.code === 20000) {
        console.log("5" + res);
        console.log("获取精彩专题3数据成功");
      }
      this.pagelist = res.data.rows;
      this.queryInfo3.total = res.data.rows.length;
    },
    handleCurrentChange(newpage) {
      //改变页码
      this.queryInfo3.Currentpage = newpage;
      this.getjingcai3();
    },
    //最新
    async getNewData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByTime",
        "",
        "get"
      );
      this.NewDataList = res.data;
      if (res.code === 20000) {
        console.log("6" + res);
        console.log("获取最新数据成功");
      }
    },
    //每月
    async getMonthData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByClickMonthly",
        "",
        "get"
      );
      this.MonthDataList = res.data;
      if (res.code === 20000) {
        console.log("7" + res);
        console.log("获取每月数据成功");
      }
    },
    //热门点击量
    async getClickData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickNum/1/7",
          "",
          "get"
        );
        console.log("8" + res);
        console.log(res);
        console.log("获取点击量数据成功");
        if (res.code === 20000) {
          this.ClickDataList = res.data.rows;
        } else {
          this.$message.error("网络错误 20001");
        }
      } catch (error) {
        this.$message.error("网络错误 19999");
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
    margin-left: 18px;
  }
}
.lxl-box {
  width: 1150px;
}
.ccy-css {
  color: #858585;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 13px;
}
.ccy-css > li:hover {
  color: black;
  font-weight: 800px;
}
.ccy-css:first-line {
  color: black;
  text-decoration: none;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 700;
}
.top {
  padding-top: 10px;
  margin-bottom: -19px;
  display: flex;
  justify-content: space-between;
  .tr {
    position: relative;
    input {
      padding-left: 10px;
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
.el-image {
  cursor: pointer;
}
.header {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .pictop {
    display: flex;
    flex-direction: column;
    width: 54%;
    .block1 {
      width: 100%;
      margin-bottom: 5px;
      .el-image {
        width: 100%;
        height: 200px;
      }
    }
    .block2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      > * {
        width: 225px;
      }
    }
  }

  .ccy-info {
    margin-left: 10px;
    width: 44%;
    .topright {
      padding-top: 10px;
      ul {
        // margin-left: 20px;
        li {
          cursor: pointer;
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          list-style-position: inside;
          white-space: nowrap;
          font-size: 13px;
        }
      }
    }
  }
}

.ccy-drvider {
  margin: 3px 0 3px 0;
}

.left {
  margin-top: -10px;
}

.el-main {
  padding: 0;
  .right {
    margin-left: 30px;
  }
}
.one {
  width: 99%;
  display: flex;
  padding: 1px;
  flex-wrap: wrap;
  flex-direction: column;
  .onetop {
    display: flex;
    width: 100%;
    li {
      font-size: 13px;
      cursor: pointer;
    }
    .onetopl {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      li {
        width: 320px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        list-style-position: inside;
        margin-left: -15px;
      }
      .block {
        display: flex;
        justify-content: space-between;
        span {
          padding-left: 5px;
          display: block;
        }
        .blockson {
          position: relative;
          .el-image {
            width: 208px;
            height: 130px;
            cursor: pointer !important;
          }
          span {
            cursor: pointer;
            width: 204px;
            position: absolute;
            background-color: #333;
            opacity: 0.7;
            text-overflow: ellipsis;
            bottom: 5px;
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
          }
        }
      }
    }
    .onetopr {
      padding-left: 26px;
      li {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        list-style-position: inside;
        margin-left: -15px;
        width: 310px;
        font-size: 13px;
      }
    }
  }
  .onemide {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    .zhuangti {
      width: 24%;
      display: block;
      height: 150px;

      position: relative;
      .el-image {
        display: block;
        width: 100%;
        height: 150px;
      }
      span {
        position: absolute;
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        background-color: #333;
        opacity: 0.8;
        font-size: 14.5px;
        bottom: 4px;
        color: black;
        text-align: center;
      }
    }
  }
  .onebottom {
    flex-direction: column;
    .four {
      height: 150px;
      position: relative;
      width: 99%;
      display: flex;
      align-content: space-between;
      padding-left: 2px;
      .pic {
        width: 25%;
        padding-right: 15px;
        .el-image {
          width: 100%;
          height: 155px;
        }
      }
      .news {
        width: 72%;
      }
    }
    span {
      cursor: pointer;
    }
  }
}
li {
  padding: 6px 0 3px 0;
}
.right {
  .midpic {
    width: 100%;
    height: 150px;
    .el-image {
      width: 100%;
      height: 100%;
    }
  }
  li {
    cursor: pointer;
  }
  .ccy-li {
    span {
      display: inline-block;
      text-overflow: ellipsis;
      overflow: hidden;
      list-style-position: inside;
      white-space: nowrap;
    }
  }
  .ccy-rightLi {
    text-overflow: ellipsis;
    overflow: hidden;
    list-style-position: inside;
    white-space: nowrap;
  }
}
.bot {
  margin-top: 12px;
  width: 100%;
  height: 85px;
  position: absolute;
  bottom: 0;
  background-color: black;
}
.el-row {
  margin-top: 20px;
}
.el-col {
  margin-right: 55px;
}
.tage {
  padding: 10px 0 0 8px;
  margin-top: 4px;
  .tageson {
    margin-bottom: 12px;
    .el-button {
      background-color: rgb(240, 249, 235);
      color: green;
    }
  }
}
</style>