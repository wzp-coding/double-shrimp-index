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
        <el-aside width="74%">
          <div class="left">
            <!--左大部分-->
            <div class="header">
              <!-- 图片 -->
              <div class="pictop">
                <!-- 行情资讯 -->
                <div class="block1" @click="TonewPath(datalist[0].id)">
                  <el-image
                    style="height: 280px"
                    :src="ClickDataList[0].picture"
                  ></el-image>
                </div>
                <!-- 每周精品 -->
                <div class="block2">
                  <div @click="TonewPath(weekliList[0].id)">
                    <el-image
                      style="height: 165px"
                      :src="weekliList[0].picture"
                    ></el-image>
                  </div>
                  <div @click="TonewPath(weekliList[1].id)">
                    <el-image
                      style="height: 165px"
                      :src="weekliList[1].picture"
                    >
                    </el-image>
                  </div>
                </div>
              </div>
              <!-- head start -->
              <div class="ccy-info">
                <div class="topright">
                  <h3 style="display: flex; justify-content: space-between">
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
                        style="cursor: pointer; color: #9e9e9e"
                        @click="ToMorePage(queryInfo1.TypeID1)"
                      >
                        更多
                      </span>
                      <i class="el-icon-caret-right"></i>
                    </div>
                  </h3>
                  <el-divider class="ccy-drvider"></el-divider>
                  <ul class="ccy-css">
                    <li
                      v-for="(item, index) in ClickDataList"
                      :key="index"
                      @click="TonewPath(item.id)"
                    >
                      {{ item.title }}
                    </li>
                  </ul>
                  <!-- 热门资讯结束 -->
                  <!-- 每周精品 -->
                  <h3
                    style="
                      display: flex;
                      justify-content: space-between;
                      margin-top: 8px;
                    "
                  >
                    <div>
                      <span
                        style="
                          margin-right: 5px;
                          border-left: 6px solid rgb(93, 183, 60);
                        "
                      ></span>
                      每周精品
                    </div>
                    <div
                      style="
                        font-size: 0.8rem;
                        margin-top: 6px;
                        color: rgb(93, 183, 60);
                      "
                    >
                      <span
                        style="cursor: pointer; color: #9e9e9e"
                        @click="ToMorePage(queryInfo1.TypeID1)"
                      >
                        更多
                      </span>
                      <i class="el-icon-caret-right"></i>
                    </div>
                  </h3>
                  <el-divider class="ccy-drvider"></el-divider>
                  <ul class="ccy-css">
                    <li
                      v-for="(item, i) in weekliList"
                      @click="ToMorePage(queryInfo1.TypeID1)"
                      :key="i"
                    >
                      {{ item.title }}
                    </li>
                  </ul>
                  <!-- 每周精品结束 -->
                </div>
              </div>
              <!-- head end -->
            </div>
            <!-- 对虾行情 start -->
            <div class="tail" style="width: 100%; margin: 20px 0 10px 0">
              <h3 style="display: flex; justify-content: space-between">
                <div>
                  <span
                    style="
                      margin-right: 5px;
                      border-left: 6px solid rgb(93, 183, 60);
                    "
                  ></span>
                  对虾行情
                </div>
                <div
                  style="
                    font-size: 0.8rem;
                    margin-top: 6px;
                    color: rgb(93, 183, 60);
                  "
                >
                  <span
                    style="cursor: pointer; color: #9e9e9e"
                    @click="ToMorePage(queryInfo1.TypeID1)"
                  >
                    更多
                  </span>
                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <el-divider class="ccy-drvider"></el-divider>
            </div>
            <div class="one">
              <div class="onetop">
                <div class="onetopl">
                  <div class="block">
                    <div
                      class="blockson"
                      @click="TonewPath(jingcai1List[0].id)"
                    >
                      <el-image
                        style="height: 120px"
                        :src="jingcai1List[0].picture"
                      ></el-image>
                      <span>{{ jingcai1List[0].title }}</span>
                    </div>
                    <div
                      class="blockson"
                      @click="TonewPath(jingcai1List[1].id)"
                    >
                      <el-image
                        style="height: 120px"
                        :src="jingcai1List[1].picture"
                      ></el-image>
                      <span>{{ jingcai1List[1].title }}</span>
                    </div>
                  </div>
                  <div class="onetoplb">
                    <!-- 对虾行情左下文字 -->
                    <ul class="ccy-css">
                      <li
                        @click="TonewPath(item.id)"
                        v-for="(item, index) in jingcai1List.slice(0, 4)"
                        :key="index"
                      >
                        {{ item.title }}
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- one 对虾行情右边 -->
                <div class="onetopr">
                  <div class="onetopr1">
                    <ul class="ccy-css" style="margin-left: 15px">
                      <li
                        @click="TonewPath(item.id)"
                        v-for="(item, index) in jingcai1List.slice(4, 14)"
                        :key="index"
                      >
                        {{ item.title }}
                      </li>
                    </ul>
                  </div>
                  <!-- <div class="onetopr2">
                    <ul class="ccy-css">
                      <li
                        v-for="(item, index) in jingcai1List.slice(8, 16)"
                        :key="index"
                        @click="TonewPath(item.id)"
                      >
                        {{ item.summary }}
                      </li>
                    </ul>
                  </div> -->
                </div>
              </div>
              <!-- 对虾行情 end -->
              <!-- 产链前沿 -->
              <div class="tail" style="width: 100%; margin-top: 10px">
                <h3 style="display: flex; justify-content: space-between">
                  <div>
                    <span
                      style="
                        margin-right: 5px;
                        border-left: 6px solid rgb(93, 183, 60);
                      "
                    ></span>
                    产链前沿
                  </div>
                  <div
                    style="
                      font-size: 0.8rem;
                      margin-top: 6px;
                      color: rgb(93, 183, 60);
                    "
                  >
                    <span
                      style="cursor: pointer; color: #9e9e9e"
                      @click="ToMorePage(queryInfo2.TypeID2)"
                    >
                      更多
                    </span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <el-divider class="ccy-drvider"></el-divider>
              </div>
              <div class="onemide">
                <!-- jingcai2List -->
                <!-- v-if="item.picture" -->
                <div
                  class="zhuangti"
                  v-for="(item, i) in 4"
                  :key="i"
                  @click="TonewPath(item.id)"
                >
                    <!-- v-if="item.picture" -->
                  <el-image :src="item.picture" ></el-image>
                  <span>{{ item.title }}</span>
                </div>
              </div>
              <!-- 产链前沿 end -->
              <!-- 财富手册 -->
              <div class="tail" style="width: 100%; margin-top: 15px">
                <h3 style="display: flex; justify-content: space-between">
                  <div>
                    <span
                      style="
                        margin-right: 5px;
                        border-left: 6px solid rgb(93, 183, 60);
                      "
                    ></span>
                    财富手册
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
                      @click="ToMorePage(queryInfo3.TypeID3)"
                    >
                      更多
                    </span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <el-divider class="ccy-drvider"></el-divider>
              </div>
              <div class="onebottom" v-for="(item, i) in pagelist" :key="i">
                <div class="four" style="cursor: pointer">
                  <div class="pic">
                    <el-image      
                    
                      :src="item.picture"
                      @click="TonewPath(item.id)"
                    ></el-image>
                  </div>
                  <div class="news">
                    <h3 @click="TonewPath(item.id)">{{ item.title }}</h3>
                    <p
                      style="
                        font-size: 15px;
                        margin-bottom: 15px;
                        margin-top: 10px;
                      "
                      class="pp"
                      @click="TonewPath(item.id)"
                    >
                      {{ item.summary | limitword }}

                      <span
                        
                        @click="TonewPath(item.id)"
                        >[详情]</span
                      >
                    </p>
                    <!--底部区域--->
                    <p style="font-size: 13px; position: absolute; bottom: 0">
                      发布时间:{{ item.creationTime | timefilters
                      }}<span style="margin-left: 15px"
                        >阅读： {{ item.clickNum }}</span
                      >
                    </p>
                    <p
                      style="
                        color: green;
                        font-size: 13px;
                        right: 0;
                        padding-right: 3px;
                        position: absolute;
                        bottom: 0;
                      "
                    >
                      财富手册
                    </p>
                    <p
                      style="
                        font-size: 13px;
                        right: 50px;
                        position: absolute;
                        bottom: 0;
                      "
                    >
                      分类：
                    </p>
                  </div>
                </div>
                <div style="margin-top: -15px; margin-bottom: -20px">
                  <el-divider></el-divider>
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
          </div>
        </el-aside>
        <el-main>
          <div class="right">
            <!--右半部分--->
            <h3 style="display: flex; justify-content: space-between">
              <div>
                <span
                  style="
                    margin-right: 5px;
                    border-left: 6px solid rgb(93, 183, 60);
                  "
                ></span>
                最新资讯
                <el-tag type="danger" size="small" style="margin-bottom: -5px"
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
                  style="cursor: pointer; color: #9e9e9e"
                  @click="ToMorePage(queryInfo1.TypeID1)"
                >
                  更多
                </span>

                <i class="el-icon-caret-right"></i>
              </div>
            </h3>
            <el-divider class="ccy-drvider"></el-divider>
            <div style="width: 100%">
              <ul class="ccy-css">
                <li
                  @click="TonewPath(item.id)"
                  v-for="(item, index) in NewDataList"
                  :key="index"
                >
                  {{ item.title }}
                </li>
              </ul>

              <div class="midpic" style="margin:6px 0 10px 0">
                <el-image
                  
                  :src="NewDataList[8].picture"
                  @click="TonewPath(NewDataList[8].id)"
                ></el-image>
              </div>

              <h3 style="display: flex; justify-content: space-between">
                <div>
                  <span
                    style="
                      margin-right: 5px;
                      border-left: 6px solid rgb(93, 183, 60);
                    "
                  ></span>
                  推荐资讯
                  <el-tag type="danger" size="small" style="margin-bottom: -5px"
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
                    style="cursor: pointer; color: #9e9e9e"
                    @click="ToMorePage(queryInfo1.TypeID1)"
                  >
                    更多
                  </span>

                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <el-divider class="ccy-drvider"></el-divider>
              <ul class="ccy-css" style="margin-bottom: 30px">
                <li
                  v-for="(item, index) in RecommList"
                  :key="index"
                  @click="TonewPath(item.id)"
                  style="width: 180px"
                >
                  {{ item.title }}
                </li>
              </ul>

              <h3 style="display: flex; justify-content: space-between">
                <div>
                  <span
                    style="
                      margin-right: 5px;
                      border-left: 6px solid rgb(93, 183, 60);
                    "
                  ></span>
                  每月精彩
                  <el-tag type="danger" size="small" style="margin-bottom: -5px"
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
                    style="cursor: pointer; color: #9e9e9e"
                    @click="ToMorePage(queryInfo1.TypeID1)"
                  >
                    更多
                  </span>

                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <el-divider class="ccy-drvider"></el-divider>
            </div>
            <div class="rightmd">
              <ul class="ccy-css">
                <li style="width:200px"
                  v-for="(item, index) in MonthDataList"
                  :key="index"
                  @click="TonewPath(item.id)"
                  
                >
                  {{ item.title }}
                </li>
              </ul>
              <br />
              <h3 style="display: flex; justify-content: space-between">
                <div>
                  <span
                    style="
                      margin-right: 5px;
                      border-left: 6px solid rgb(93, 183, 60);
                    "
                  ></span>
                  热门产品
                  <el-tag type="danger" size="small" style="margin-bottom: -5px"
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
                  <router-link
                    style="text-decoration: none"
                    to="/instructdetail"
                  >
                    <span style="cursor: pointer; color: #9e9e9e"> 更多 </span>
                  </router-link>
                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <el-divider class="ccy-drvider"></el-divider>
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
      if (val == null || val == "") {
        return "暂无数据";
      } else {
        var len = val.length;
        if (len > 80) {
          var str = val.substring(0, 80) + "......";
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
        Infosize1: 14,
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

      //推荐 ，分页
      RecommList: [],

      ClickDataList: [],

      SearchKey:'',

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

    //推荐
    this.getRecommData();
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

    //每周精品
    async getWeekData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickWeekly/1/9",
          "",
          "get"
        );
        if (res.code === 20000) {
          console.log("2" + res);
          console.log(res);
          console.log("获取每周精品数据成功");
          this.weekliList = res.data.rows;
          
        }
      } catch (error) {
        console.log("网络错误19999");
      }
    },

    //精彩专题 1 对虾养殖
    async getjingcai1() {
      try {
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
      } catch (error) {
        console.log("网络错误1999");
      }
    },

    //精彩专题2 1320648223462920192
    async getjingcai2() {
      try {
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
          console.log("5" + res);
          console.log("获取精彩专题3数据成功");
        } else {
          console.log("网络错误 20001");
        }
        this.pagelist = res.data.rows;
        this.queryInfo3.total = res.data.total;
      } catch (error) {
        console.log("网络错误 19999");
      }
    },
    handleCurrentChange(newpage) {
      //改变页码
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
          console.log("6" + res);
          console.log("获取最新数据成功");
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
          "/info/shrimpIndustry/findByClickMonthly/1/9",
          "",
          "get"
        );

        if (res.code === 20000) {
          console.log("7" + res);
          console.log(res.data.length);
          console.log("获取每月数据成功");
          this.MonthDataList = res.data.rows;
        } else {
          console.log("网络错误 20001");
        }
      } catch (error) {
        console.log("网络错误 19999");
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
        console.log("8" + res);
        console.log(res);
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
    i {
      top: 13px;
      cursor: pointer;
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
          .pp{
            span{
              text-decoration: none; 
              color: green
            }
            span:hover{
              color:orange
            }
          }
        }
      }
      span {
        cursor: pointer;
      }
    }
  }
}

.el-main {
  padding: 0;
  .right {
    margin-left: 30px;
  }
}

li {
  padding: 6px 0 3px 0;
  cursor: pointer;
}
.right {
  li {
    display: block;
    overflow: hidden; // 超出文本的部分不显示
    text-overflow: ellipsis;
    white-space: nowrap; // 强制文本在一行显示
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