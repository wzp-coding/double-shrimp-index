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
            <el-breadcrumb-item>产业咨询</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="tr">
          <el-input
            type="text"
            v-model="SearchKey"
            placeholder="请输入实体名称"
          ></el-input>
          <i class="el-icon-search" @click="ToSearch(SearchKey)"></i>
        </div>
      </div>
      <el-divider></el-divider>
      <el-container>
        <div class="zhuti">
          <div class="left">
            <div class="block" style="margin-bottom: 8px">
              <div
                class="blockson"
                v-for="item in duixialist"
                :key="item.id"
                @click="TonewPath(item.id)"
              >
                <el-image :src="item.picture"></el-image>
                <span>{{ item.title }}</span>
              </div>
            </div>
            <div class="sort">
              <el-row>
                <span style="font-size: 15px">分类：</span>
                <el-button
                  type="success"
                  size="mini"
                  plain
                  v-for="(item, index) in TypeDataList.slice(0, 9)"
                  :key="index"
                  @click="TypeChange(item.id, item.name)"
                  >{{ item.name }}</el-button
                >
              </el-row>
            </div>
            <div class="tail" style="width: 100%; margin-top: 15px">
              <h3
                style="
                  margin-bottom: -20px;
                  display: flex;
                  justify-content: space-between;
                "
              >
                <div>
                  <span
                    style="
                      margin-right: 5px;
                      border-left: 6px solid rgb(93, 183, 60);
                    "
                  ></span>
                  热门资讯
                </div>
                <div
                  style="
                    font-size: 0.8rem;
                    margin-top: 6px;
                    color: rgb(93, 183, 60);
                  "
                >
                  <span
                    style="color: #9e9e9e; cursor: pointer"
                    @click="ToMorePage(queryInfo.TypeID)"
                  >
                    更多
                  </span>

                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <el-divider class="ccy-drvider"></el-divider>
            </div>
            <div class="main" v-for="(item, index) in pagelist" :key="index">
              <div
                class="mainson"
                style="border-bottom: 1px solid rgb(230, 230, 230)"
              >
                <div class="pic" @click="TonewPath(item.id)">
                  <el-image :src="item.picture"></el-image>
                </div>
                <div class="sonr">
                  <div
                    class="h2"
                    @click="TonewPath(item.id)"
                    style="width: 100%; margin-top: 18px"
                  >
                    <h2>{{ item.title }}</h2>
                  </div>
                  <div class="pm" style="width: 100%; margin: 10px 0">
                    <span style="width: 100%">
                      {{ item.summary | limitword }}
                    </span>
                    <span class="spanpm" @click="TonewPath(item.id)"
                      >[详情]</span
                    >
                  </div>
                  <div class="lbtm" style="width: 100%">
                    <p style="font-size: 13px; float: left">
                      {{ item.creationTime | timefilters
                      }}<span style="margin-left: 15px">
                        阅读： {{ item.clickNum }}</span
                      >
                    </p>
                    <p style="font-size: 13px; right: 40px">
                      分类：<span style="color: green">{{
                        queryInfo.TypeName
                      }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 分页 -->
            <el-pagination
              background
              layout="prev, pager, next"
              :total="queryInfo.total"
              :page-size="queryInfo.pagesize"
              :current-page="queryInfo.Currentpage"
              @current-change="handleCurrentChange"
              style="display: flex; justify-content: center; margin-top: 20px"
            >
            </el-pagination>
          </div>
          <el-aside>
            <div class="right">
              <div class="rtop">
                <h3
                  style="
                    margin-bottom: -20px;
                    display: flex;
                    justify-content: space-between;
                  "
                >
                  <div style="margin-right: -120px">
                    <span
                      style="
                        margin-right: 5px;
                        border-left: 6px solid rgb(93, 183, 60);
                      "
                    ></span>
                    最新资讯
                  </div>
                  <el-tag type="danger" size="small" style="margin-top: 3px"
                    >New</el-tag
                  >
                  <div
                    style="
                      font-size: 0.8rem;
                      margin-top: 6px;
                      color: rgb(93, 183, 60);
                    "
                  >
                    <span
                      @click="ToMorePage(queryInfo.TypeID)"
                      style="cursor: pointer; color: #9e9e9e"
                    >
                      更多
                    </span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <el-divider class="ccy-drvider"></el-divider>

                <ul class="ccy-css" style="margin-bottom: 6px">
                  <li
                    v-for="(item, index) in dataTimeList"
                    :key="index"
                    @click="TonewPath(item.id)"
                  >
                    {{ item.title }}
                  </li>
                </ul>

                <h3
                  style="
                    margin-bottom: -22px;
                    display: flex;
                    justify-content: space-between;
                  "
                >
                  <div style="margin-right: -120px">
                    <span
                      style="
                        margin-right: 5px;
                        border-left: 6px solid rgb(93, 183, 60);
                      "
                    ></span>
                    热门资讯
                  </div>
                  <router-link to="/industryothermore">
                    <el-tag type="danger" size="small" style="margin-top: 3px"
                      >热卖</el-tag
                    ></router-link
                  >
                  <div
                    style="
                      font-size: 0.8rem;
                      margin-top: 6px;
                      color: rgb(93, 183, 60);
                    "
                  >
                    <span
                      style="cursor: pointer; color: #9e9e9e"
                      @click="ToMorePage(queryInfo.TypeID)"
                    >
                      更多
                    </span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <el-divider
                  class="ccy-drvider"
                  style="display: inline-block; margin-top: -30px"
                ></el-divider>
                <ul class="ccy-css">
                  <li
                    v-for="(item, index) in dataRecommList"
                    :key="index"
                    @click="TonewPath(item.id)"
                  >
                    {{ item.title }}
                  </li>
                </ul>
                <br />
                <h3
                  style="
                    margin-bottom: -20px;
                    display: flex;
                    justify-content: space-between;
                  "
                >
                  <div style="margin-right: -120px">
                    <span
                      style="
                        margin-right: 5px;
                        border-left: 6px solid rgb(93, 183, 60);
                      "
                    ></span>
                    热门资讯
                  </div>
                  <el-tag type="danger" size="small" style="margin-top: 3px"
                    >Hot</el-tag
                  >
                  <div
                    style="
                      font-size: 0.8rem;
                      margin-top: 6px;
                      color: rgb(93, 183, 60);
                    "
                  >
                    <span
                      style="cursor: pointer; color: #9e9e9e"
                      @click="ToMorePage(queryInfo.TypeID)"
                    >
                      更多
                    </span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <el-divider class="ccy-drvider"></el-divider>

                <ul class="ccy-css">
                  <li
                    v-for="(item, index) in dataClickList"
                    :key="index"
                    @click="TonewPath(item.id)"
                  >
                    {{ item.title }}
                  </li>
                </ul>
                <el-divider class="ccy-drvider"></el-divider>
                <!--分割线-->
                <div class="drive" style="width: 100%"></div>
              </div>
              <div class="rbtm">
                <div class="tageson">
                  <el-button size="medium" round>专家</el-button>
                  <el-button size="medium" round>火参果资源</el-button>
                  <el-button size="medium" round>橄榄</el-button>
                </div>
                <div class="tageson">
                  <el-button size="medium" round>红豆杉资源</el-button>
                  <el-button size="medium" round>火鸡蛋</el-button>
                </div>
                <div class="tageson">
                  <el-button size="medium" round>豆芽货源</el-button>
                  <el-button size="medium" round>洋葱资源</el-button>
                </div>
                <div class="tageson">
                  <el-button size="medium" round>红薯批发</el-button>
                  <el-button size="medium" round>黄瓜资源</el-button>
                </div>
              </div>
            </div>
          </el-aside>
        </div>
      </el-container>
    </div>
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
    //限制文字个数
    limitword(val) {
      if (val == null || val == "") {
        return "暂无数据";
      } else {
        var len = val.length;
        if (len > 80) {
          var str = "";
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
      //按类型查询分页
      queryInfo: {
        Currentpage: 1, //页数
        pagesize: 3, //每页数
        total: null, //总页数

        //默认 1316745747953225728
        TypeID: "1316743601669148672",
        TypeName: "财富手册",
      },

      // waybytime: "info/shrimpIndustry/findByTime",
      // waybyclick:"info/shrimpIndustry/findByClickNum",
      // waybyrecommed:"info/shrimpIndustry/findByRecommend",
      // 类型分页
      pagelist: [],

      //查询对虾资讯
      duixialist: [
        {
          picture:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          title: "暂无数据",
        },
        {
          picture:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          title: "暂无数据",
        },
        {
          picture:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          title: "暂无数据",
        },
      ],
      duixiaId: "1320625468222869504",

      //按时间  最新
      dataTimeList: [],

      //按推荐
      dataRecommList: [],

      //按点击量
      dataClickList: [],

      //分类信息查询
      TypeDataList: [],

      SearchKey: "",

      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
  created() {
    // 对虾养殖 分页
    this.getPageList(),
      //获取对虾资讯
      this.getduixia(),
      //获取最新
      this.getNewData(),
      //按推荐
      this.getRecommedData(),
      //按热度 点击量
      this.getHotData(),
      //分类信息获取
      this.getTypeData();
  },
  methods: {
    //前往详情页
    TonewPath(id) {
      this.$router.push({
        path: "/instructdetail",
        query: { id: id },
      });
    },
    //前往更多页面   传入类型ID
    ToMorePage(path) {
      this.$router.push({
        path: "/instructpagedetail",
        query: { path: path },
      });
    },
    ///info/shrimpIndustry/findByTime

    ToSearch(SearchKey) {
      this.$router.push({
        path: "/instructpagedetail",
        query: { SearchKey: SearchKey },
      });
    },
    //对虾资讯
    async getduixia() {
      const { data: res } = await this.reqM2Service(
        `/info/shrimpIndustry/search/searchByTypeId/${this.duixiaId}/1/3`,
        "",
        "post"
      );
      if (res.data.rows.length == 0) {
      } else {
        this.duixialist = res.data.rows;
      }
    },

    //分页  1316745747953225728
    async getPageList() {
      const { data: res } = await this.reqM2Service(
        `/info/shrimpIndustry/search/searchByTypeId/${this.queryInfo.TypeID}/${this.queryInfo.Currentpage}/${this.queryInfo.pagesize}`,
        "",
        "post"
      );
      console.log(this.queryInfo.TypeID);
      console.log(res);
      this.pagelist = res.data.rows;
      this.queryInfo.total = res.data.total;
      console.log(res.data.rows);
      //console.log(this.queryInfo.pagelist)
    },

    handleCurrentChange(newpage) {
      //改变页码
      //console.log(newpage)
      this.queryInfo.Currentpage = newpage;
      this.getPageList();
    },
    async getNewData() {
      ///info/shrimpIndustry/findByTime
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByTime/1/9",
          "",
          "get"
        );
        this.dataTimeList = res.data.rows;
      } catch (error) {
        console.log("获取最新数据失败");
      }
    },
    async getRecommedData() {
      ///info/shrimpIndustry/findByTime
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByRecommend/1/6",
        "",
        "get"
      );
      this.dataRecommList = res.data.rows;
    },
    async getHotData() {
      ///info/shrimpIndustry/findByTime
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByClickNum/1/6",
        "",
        "get"
      );
      this.dataClickList = res.data.rows;
    },
    //获取所有分类信息
    async getTypeData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustryTypes",
        "",
        "get"
      );
      this.TypeDataList = res.data;
    },

    TypeChange(ChangeID, ChangeName) {
      //console.log(ChangeID)
      this.queryInfo.TypeID = ChangeID;
      this.queryInfo.TypeName = ChangeName;
      //console.log(this.queryInfo.TypeID)
      this.getPageList();
    },
  },
};
</script>
<style lang="less" >
.lxl-body {
  display: flex;
  justify-content: center; //对齐方式-
  min-width: 1150px;
  .lxl-breadcrumb {
    margin-top: 15px;
    margin-left: 18px;
    margin-bottom: -15px;
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
  .tr {
    position: relative;
    i {
      top: 13px;
      cursor: pointer;
      position: absolute;
      right: 20px;
    }
  }
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
.el-image {
  cursor: pointer;
}
.ccy-drvider {
  margin-top: 30px;
}
.top {
  display: flex;
  justify-content: space-between;
  height: 44px;
  flex-wrap: wrap;
  .nav {
    .el-breadcrumb {
      padding-top: 14px;
    }
  }
  .search {
    height: 45px;
    width: 17%;
    .tubiao {
      background-image: url(../../../src/assets/fandajing.png);
      background-repeat: no-repeat;
      background-position-x: 145px;
      background-position-y: 3px;
    }
    input {
      margin-top: 5px;
      height: 32px;
      width: 180px;
      opacity: 0.8;
      outline: none;
      border-radius: 20px;
      font-size-adjust: inherit;
    }
  }
}
.zhuti {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .left {
    width: 70%;
    flex-direction: column;
    .block {
      width: 100%;
      display: flex;
      height: 170px;
      justify-content: space-between;
      .blockson {
        height: 100%;
        width: 33%;
        position: relative;
        display: flex;
        .el-image {
          width: 98%;
          height: 90%;
          cursor: pointer !important;
        }
        span {
          text-align: center;
          background-color: #333;
          position: absolute;
          width: 98%;
          opacity: 0.7;
          bottom: 19px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 13.5px;
        }
      }
    }
    .main {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: -22px;
      .mainson {
        width: 100%;
        display: flex;

        height: 190px;
        position: relative;
        .pic {
          height: 90%;
          width: 29%;
          .el-image {
            margin-top: 25px;
            width: 100%;
            height: 90%;
          }
        }
        .sonr {
          width: 60%;
          .pm {
            width: 100%;
            a {
              color: green;
              list-style: none;
              text-decoration: none;
            }
            .spanpm {
              color: green;
            }
            .spanpm:hover {
              color: orange;
            }
          }
          display: flex;
          flex-direction: column;
          align-content: center;
          width: 65%;
          margin: 10px 0 0 19px;
          h2 {
            cursor: pointer;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 15px;
            white-space: nowrap;
          }
          span {
            padding-top: 10px;
            cursor: pointer;
          }
          .lbtm {
            p {
              position: absolute;
              bottom: 3px;
            }
          }
        }
      }
    }
  }
  .el-aside {
    width: 30%;
    .right {
      li {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        list-style-position: inside;
        width: 250px;
        cursor: pointer;
        margin-bottom: 3px;
      }
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      .rbtm {
        margin-bottom: 15px;
        .el-button {
          margin-bottom: 8px;
          background-color: rgb(240, 249, 235);
          color: green;
        }
      }
    }
  }
}
</style>
