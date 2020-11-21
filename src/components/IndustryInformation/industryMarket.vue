<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <!-- 导航与搜索 -->
      <div class="navigationSearch">
        <div>
          <el-breadcrumb
            separator-class="el-icon-arrow-right"
            class="lxl-breadcrumb"
          >
            <el-breadcrumb-item>当前位置</el-breadcrumb-item>
            <el-breadcrumb-item>产业咨询</el-breadcrumb-item>
            <el-breadcrumb-item>虾业专题</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!-- 搜索 -->
        <div class="search">
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
        <el-aside width="68%">
          <!-- 每周热门与热门资讯开始-->
          <div class="hotAndWeek">
            <div class="hotNews">
              <!-- 图片 -->
              <div class="hotNewsPicture" v-if="ClickDataList.length !== 0">
                <!--热门资讯大图-->
                <el-image
                  @click="TonewPath(ClickDataList[0].id)"
                  :src="ClickDataList[0].picture"
                ></el-image>
              </div>
              <div class="hotNewsInfo">
                <h3>
                  <div class="realtimeInfo">
                    <span>热门资讯</span>
                  </div>
                  <div class="more">
                    <span @click="ToMorePage(queryInfo1.TypeID1)">更多</span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <ul class="ccy-css"             
                >
                  <li v-for="(item, index) in ClickDataList" @click="TonewPath(item.id)"
                  :key="index">{{ item.title }}</li>
                </ul>
              </div>
            </div>
            <div class="weeklyBoutique">
              <!--每周精品-->
              <div class="weeklyBoutiquePic" v-if="weekliList.length !== 0">
                <el-image
                  @click="TonewPath(weekliList[0].id)"
                  :src="weekliList[0].picture"
                ></el-image>
                <el-image
                  @click="TonewPath(weekliList[1].id)"
                  :src="weekliList[1].picture"
                ></el-image>
              </div>
              <div class="weeklyBoutiqueInfo">
                <h3>
                  <div class="realtimeInfo">
                    <span>每周精品</span>
                  </div>
                  <div class="more">
                    <span @click="ToMorePage(queryInfo1.TypeID1)">更多</span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <ul
                  class="ccy-css"      
                >
                  <li v-for="(item, index) in weekliList" @click="TonewPath(item.id)"
                  :key="index">{{ item.title }}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 每周热门与热门资讯结束 -->
          <!-- 三个专题开始 -->
          <div class="special">
            <div class="shrimpMarket">
              <h3>
                <div class="realtimeInfo"><span></span> 对虾行情</div>
                <div class="more">
                  <span @click="ToMorePage(queryInfo2.TypeID2)"> 更多 </span>
                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <div class="shrimpMarketLft">
                <div class="shrimpMarketPic" v-if="jingcai1List.length">
                  <div
                    class="shrimpMarketPicSon"
                    @click="TonewPath(jingcai1List[0].id)"
                  >
                    <el-image :src="jingcai1List[0].picture"></el-image>
                    <span>{{ jingcai1List[0].title }}</span>
                  </div>
                  <div
                    class="shrimpMarketPicSon"
                    @click="TonewPath(jingcai1List[1].id)"
                  >
                    <el-image :src="jingcai1List[1].picture"></el-image>
                    <span>{{ jingcai1List[1].title }}</span>
                  </div>
                </div>
                <!-- 对虾行情左下文字 -->
                <ul class="ccy-css" style="margin-left: 5px">
                  <li
                    @click="TonewPath(item.id)"
                    v-for="(item, index) in jingcai1List.slice(0, 4)"
                    :key="index"
                  >
                    {{ item.title }}
                  </li>
                </ul>
              </div>
              <!-- 对虾行情右边 -->
              <div class="shrimpMarketRight">
                <ul class="ccy-css">
                  <li
                    @click="TonewPath(item.id)"
                    v-for="(item, index) in jingcai1List.slice(4, 16)"
                    :key="index"
                  >
                    {{ item.title }}
                  </li>
                </ul>
              </div>
            </div>
            <!-- 对虾行情 end -->
            <!-- 产链前沿 -->
            <div class="productionChain">
              <h3>
                <div class="realtimeInfo"><span></span> 产链前沿</div>
                <div class="more">
                  <span @click="ToMorePage(queryInfo2.TypeID2)"> 更多 </span>
                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <div
                class="productionChainSon"
                v-for="(item, i) in jingcai2List"
                :key="i"
                @click="TonewPath(item.id)"
              >
                <el-image :src="item.picture"></el-image>
                <span>{{ item.title }}</span>
              </div>
            </div>
            <!-- 产链前沿 end -->
            <!-- 财富手册 -->
            <div class="wealthHandbook">
              <h3>
                <div class="realtimeInfo">
                  <span></span>
                  财富手册
                </div>
                <div class="more">
                  <span @click="ToMorePage(queryInfo3.TypeID3)"> 更多 </span>
                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <div
                class="wealthHandbookSon"
                v-for="(item, index) in pagelist"
                :key="index"
              >
                <!-- 分页图片信息 -->
                <div class="paggingPicture" @click="TonewPath(item.id)">
                  <el-image :src="item.picture" lazy></el-image>
                </div>
                <!-- 分页文字信息 -->
                <div class="paggingArticle">
                  <div
                    class="paggingTitle"
                    @click="TonewPath(item.id)"
                    style="width: 100%; margin-top: 18px"
                  >
                    <h2>{{ item.title }}</h2>
                  </div>
                  <div class="paggingContent">
                    <span style="width: 100%">
                      {{ item.summary }}
                    </span>
                  </div>
                  <span class="paggingDetail" @click="TonewPath(item.id)"
                    >[详情]</span
                  >
                  <div class="paggingBottom" style="width: 100%">
                    <p style="font-size: 13px; float: left">
                      {{ item.creationTime
                      }}<span style="margin-left: 15px">
                        阅读： {{ item.clickNum }}</span
                      >
                    </p>
                    <p style="font-size: 13px; right: 10px">
                      分类：<span style="color: green">财富手册</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="queryInfo3.total"
              :page-size="queryInfo3.pagesize"
              :current-page="queryInfo3.Currentpage"
              style="
                display: flex;
                justify-content: center;
                margin-bottom: 30px;
                margin-top: 20px;
              "
              @current-change="handleCurrentChange"
            >
            </el-pagination>
            <!-- 财富手册结束 -->
          </div>
        </el-aside>
        <el-main width="28%" style="padding-left: 25px">
          <!--右半部分--->
          <h3>
            <div>
              <span
                style="
                  margin-right: 2px;
                  border-left: 6px solid rgb(93, 183, 60);
                "
              ></span>
              最新资讯
              <el-tag type="danger" size="small" 
                >New</el-tag
              >
            </div>
            <div
              style="
                font-size: 0.8rem;
                margin-top: 6px;
                color: rgb(93, 183, 60);
              "
            >
              <span
                style="color: #9e9e9e"
                @click="ToMorePage(queryInfo1.TypeID1)"
              >
                更多
              </span>
              <i class="el-icon-caret-right"></i>
            </div>
          </h3>
          <div>
            <ul class="ccy-css">
              <li
                @click="TonewPath(item.id)"
                v-for="(item, index) in NewDataList"
                :key="index"
              >
                {{ item.title }}
              </li>
            </ul>

            <div
              class="midpic"
              style="margin: 6px 0 10px 0"
              v-if="NewDataList.length"
            >
              <el-image
                :src="NewDataList[7].picture"
                @click="TonewPath(NewDataList[7].id)"
              ></el-image>
            </div>
            <h3>
              <div>
                <span
                  style="
                    margin-right: 2px;
                    border-left: 6px solid rgb(93, 183, 60);
                  "
                ></span>
                推荐资讯
                <el-tag type="danger" size="small" 
                  >Hot</el-tag
                >
              </div>
              <div
                style="
                  font-size: 0.8rem;
                  margin-top: 6px;
                  color: rgb(93, 183, 60);
                "
              >
                <span
                  style="color: #9e9e9e"
                  @click="ToMorePage(queryInfo1.TypeID1)"
                >
                  更多
                </span>
                <i class="el-icon-caret-right"></i>
              </div>
            </h3>

            <ul class="ccy-css">
              <li
                v-for="(item, index) in RecommList"
                :key="index"
                @click="TonewPath(item.id)"
                style="width: 180px"
              >
                {{ item.title }}
              </li>
            </ul>
            <h3>
              <div>
                <span
                  style="
                    margin-right: 2px;
                    border-left: 6px solid rgb(93, 183, 60);
                  "
                ></span>
                每月精彩
                <el-tag type="danger" size="small" 
                  >Hot</el-tag
                >
              </div>
              <div
                style="
                  font-size: 0.8rem;
                  margin-top: 6px;
                  color: rgb(93, 183, 60);
                "
              >
                <span
                  style="color: #9e9e9e"
                  @click="ToMorePage(queryInfo1.TypeID1)"
                >
                  更多
                </span>
                <i class="el-icon-caret-right"></i>
              </div>
            </h3>
          </div>
          <div>
            <ul class="ccy-css">
              <li
                style="width: 200px"
                v-for="(item, index) in MonthDataList"
                :key="index"
                @click="TonewPath(item.id)"
              >
                {{ item.title }}
              </li>
            </ul>
            <h3>
              <div>
                <span
                  style="
                    margin-right: 2px;
                    border-left: 6px solid rgb(93, 183, 60);
                  "
                ></span>
                热门产品
                <el-tag type="danger" size="small" 
                  >热卖</el-tag
                >
              </div>
              <div
                style="
                  font-size: 0.8rem;
                  margin-top: 6px;
                  color: rgb(93, 183, 60);
                "
              >
                <span
                  @click="ToMorePage(queryInfo1.TypeID1)"
                  style="color: #9e9e9e"
                >
                  更多
                </span>

                <i class="el-icon-caret-right"></i>
              </div>
            </h3>
          </div>
          <!-- 标签 -->
          <div class="tage">
            <div class="tageson">
              <el-button size="medium" round>专家</el-button>
              <el-button size="medium" round>火参果资源</el-button>
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
        </el-main>
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
  },

  data() {
    return {
      //查询全部产业资讯
      // datalist: [],
      searchInput: "",

      //每周精品
      weekliList: [],

      //精彩专题1
      jingcai1List: [],

      queryInfo1: {
        Infopage1: 1,
        Infosize1: 16,
        TypeID1: "1316745747953225728",
      },

      //精彩专题 2
      jingcai2List: [],

      queryInfo2: {
        Infopage2: 1,
        Infosize2: 4,
        Infototal2: null,
        TypeID2: "1320546102558199808",
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

      //最新资讯
      NewDataList: [],

      //每月精彩资讯
      MonthDataList: [],

      //推荐 ，分页
      RecommList: [],

      ClickDataList: [],

      SearchKey: "",

      loading: true,

      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
  created() {
    //点击量 热度
    this.getClickData();
    // //每周精品
    // this.getWeekData();
    // // 精彩专题 1 按类型查询 对虾养殖
    // this.getjingcai1();

    // //精彩专题2
    // this.getjingcai2();
    // // 精彩专题3
    // this.getjingcai3();

    //最新资讯
    this.getNewData();
    //推荐
    // this.getRecommData();
    // //每月
    // this.getMonthData();

    
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
    ToSearch(SearchKey) {
      this.$router.push({
        path: "/instructpagedetail",
        query: { SearchKey: SearchKey },
      });
    },
    //热门点击量
    async getClickData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickNum/1/10",
          "",
          "get"
        );
        console.log("获取点击量数据成功");
        if (res.code === 20000) {
          this.ClickDataList = res.data.rows;
          console.log(Object.keys(ClickDataList));
        } else {
          console.log("网络错误 20001");
        }
      } catch (error) {
        console.log("网络错误 19999");
      }
    },
    //每周精品
    async getWeekData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickWeekly",
          "",
          "get"
        );
        if (res.code === 20000) {
          console.log("获取每周精品数据成功");
          this.weekliList = res.data.slice(0, 7);
        }
      } catch (error) {
        console.log(error);
      }
    },
    //精彩专题 1 对虾行情       1320546102558199808
    async getjingcai1() {
      try {
        const { data: res } = await this.reqM2Service(
          `/info/shrimpIndustry/search/searchByTypeId/${this.queryInfo1.TypeID1}/${this.queryInfo1.Infopage1}/${this.queryInfo1.Infosize1}`,
          "",
          "post"
        );
        if (res.code === 20000) {
          console.log("获取对虾行情数据成功");
          this.jingcai1List = res.data.rows;
        }
      } catch (error) {
        console.log("网络错误1999");
      }
    },
    //精彩专题2 1320648223462920192
    async getjingcai2() {
      try {
        const { data: res } = await this.reqM2Service(
          `/info/shrimpIndustry/search/searchByTypeId/${this.queryInfo2.TypeID2}/${this.queryInfo2.Infopage2}/${this.queryInfo2.Infosize2}`,
          "",
          "post"
        );
        if (res.code === 20000) {
          console.log("获取精彩专题2数据成功");
          this.jingcai2List = res.data.rows;
        } else {
          console.log("网络错误20001");
        }
      } catch (error) {
        console.log("网络错误19999");
      }
    },
    // 根据类型ID查询 精彩专题3  财富手册
    async getjingcai3() {
      try {
        const { data: res } = await this.reqM2Service(
          `/info/shrimpIndustry/search/searchByTypeId/${this.queryInfo3.TypeID3}/${this.queryInfo3.Currentpage}/${this.queryInfo3.pagesize}`,
          "",
          "post"
        );
        if (res.code === 20000) {
          console.log("获取精彩专题3数据成功");
          this.pagelist = res.data.rows;
          this.queryInfo3.total = res.data.total;
          this.loading = false;
        } else {
          console.log("获取精彩专题3数据失败");
        }
      } catch (error) {
        console.log("网络错误 19999");
      }
    },
    handleCurrentChange(newpage) {
      //改变页码
      this.loading = true;
      this.queryInfo3.Currentpage = newpage;
      this.getjingcai3();
    },
    //最新  分页
    async getNewData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByTime/1/9",
          "",
          "get"
        );
        this.NewDataList = res.data.rows;
        if (res.code === 20000) {
          console.log("获取最新数据成功");
        } else {
          console.log("网络错误 20001");
        }
      } catch (error) {
        console.log("网络错误 19999");
      }
    },
    // 推荐，分页
    async getRecommData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByRecommend/1/8",
          "",
          "get"
        );
        console.log("获取推荐数据成功");
        if (res.code === 20000) {
          this.RecommList = res.data.rows;
        } else {
          console.log("网络错误 20001");
        }
      } catch (error) {
        console.log("网络错误 19999");
      }
    },
    //每月
    async getMonthData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickMonthly",
          "",
          "get"
        );

        if (res.code === 20000) {
          console.log("获取每月数据成功");
          this.MonthDataList = res.data.slice(0, 7);
        } else {
          console.log("网络错误 20001");
        }
      } catch (error) {
        console.log("网络错误 19999");
      }
    },   
  },
};
</script>
<style lang="less" >
.lxl-body {
  display: flex;
  justify-content: center; //对齐方式
  min-width: 1150px;
  .lxl-breadcrumb {
    margin-left: 18px;
  }
  .ccy-css{
    margin-top: 10px;
  }
  .ccy-css li {
    color: #858585;
    margin-top: 3px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 13px;
  }
  .ccy-css > *:hover {
    color: black;
    font-weight: 800px;
  }
}
.lxl-box {
  width: 1150px;
}
.hotAndWeek{
  h3{
    margin-bottom: -10px;
  }
}
.el-image {
  cursor: pointer;
}
.navigationSearch {
  margin-top: -10px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  .search {
    position: relative;
    i {
      top: 13px;
      cursor: pointer;
      position: absolute;
      right: 20px;
    }
  }
}
h3 {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgb(226, 217, 206);
  justify-content: space-between;
  .realtimeInfo {
    padding-top: 7px;
    span {
      padding-left: 5px;
      border-left: 6px solid rgb(93, 183, 60);
    }
  }
  .more {
    color: rgb(93, 183, 60);
    font-size: 12.8px;
    padding-top: 17px;
    span {
      margin-top: 6px;
      color: #9e9e9e;
    }
  }
}
span {
  cursor: pointer;
}
.el-aside {
  margin-top: -10px;
  .hotNews {
    justify-content: space-between;
    display: flex;
    .hotNewsPicture {
      .el-image {
        width: 98%;
        height: 280px;
      }
    }
    .hotNewsInfo {
      width: 44%;
    }
  }
  .weeklyBoutique {
    display: flex;
    margin-top: 35px;
    justify-content: space-between;
    .weeklyBoutiquePic {
      width: 55%;
      display: flex;
      justify-content: space-between;
      .el-image {
        width: 49.5%;
        height: 150px;
      }
    }
    .weeklyBoutiqueInfo {
      width: 44%;
    }
  }
  .special {
    //3个专题
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .shrimpMarket {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        font-size: 13px;
      }
      .shrimpMarketLft {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 320px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .shrimpMarketPic {
          display: flex;
          justify-content: space-between;
          span {
            padding-left: 5px;
            display: block;
          }
          .shrimpMarketPicSon {
            position: relative;
            width: 205px;
            .el-image {
              width: 100% !important;
              height: 130px;
            }
            span {
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
      .shrimpMarketRight {
        width: 43.7%;
        li {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 310px;
        }
      }
    }
    .productionChain {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .productionChainSon {
        margin-top: 3px;
        width: 24%;
        height: 150px;
        position: relative;
        .el-image {
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
          bottom: 0;
          color: black;
        }
      }
    }
    .wealthHandbook {
      .wealthHandbookSon {
        display: flex;
        height: 180px;
        position: relative;
        border-bottom: 1px solid rgb(226, 217, 206);
        .paggingPicture {
          height: 97%;
          width: 29%;
          margin-top: 10px;
          .el-image {
            width: 100%;
            height: 90%;
          }
        }
        // 分页文字信息
        .paggingArticle {
          width: 60%;
          margin: 10px 0 0 10px;
          h2 {
            cursor: pointer;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 18.72px;
            margin-bottom: 5px;
            white-space: nowrap;
          }
          .paggingContent {
            font-size: 13px;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
          }
          .paggingDetail {
            color: green;
          }
          .paggingDetail:hover {
            color: orange;
          }
          .paggingBottom {
            p {
              position: absolute;
              bottom: 3px;
            }
          }
        }
      }
    }
  }
}
li {
  padding-top: 3px;
  cursor: pointer;
  list-style: none;
}
.el-main {
  h3{
    margin-bottom: -7px;
  }
  .midpic {
    width: 100%;
    height: 150px;
    .el-image {
      width: 100%;
      height: 100%;
    }
  }
}
.tage {
  padding: 10px 0 0 3px;
  margin-top: 5px;
  .tageson {
    margin-bottom: 12px;
    .el-button {
      background-color: rgb(240, 249, 235);
      color: green;
    }
  }
}
</style>