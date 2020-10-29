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
          <input type="text" placeholder="  搜索你想要的农产品资讯" />
          <i class="el-icon-search"></i>
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
                <div class="block1" @click="TonewPath(datalist[0].id)">
                  <el-image
                    style="height: 220px"
                    :src="datalist[4].picture"
                  ></el-image>
                </div>
                <div class="block2">
                  <div @click="TonewPath(datalist[1].id)">
                    <el-image
                      style="height: 165px"
                      :src="datalist[1].picture"
                    ></el-image>
                  </div>
                  <div @click="TonewPath(datalist[2].id)">
                    <el-image style="height: 165px" :src="datalist[2].picture">
                    </el-image>
                  </div>
                </div>
              </div>
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
                      行情资讯
                    </div>
                    <div
                      style="
                        font-size: 0.8rem;
                        margin-top: 6px;
                        color: rgb(93, 183, 60);
                      "
                    >
                      <span>
                        <router-link
                          to="/instructdetail"
                          style="
                            color: #9e9e9e;
                            text-decoration: none;
                            font-size: 13px;
                            font-weight: 780;
                            margin-right: 4px;
                          "
                          >更多</router-link
                        >
                      </span>
                      <i class="el-icon-caret-right"></i>
                    </div>
                  </h3>
                  <el-divider class="ccy-drvider"></el-divider>
                  <ul>
                    <!-- slice(0, 5)限制读取条数 -->
                    <li
                      v-for="(item, index) in datalist.slice(0, 5)"
                      :key="index"
                    >
                      <span
                        class="index==1? ccy-css: ;"
                        @click="TonewPath(item.id)"
                      >
                        {{ item.title }}</span
                      >
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
                      每周精品
                    </div>
                    <div
                      style="
                        font-size: 0.8rem;
                        margin-top: 6px;
                        color: rgb(93, 183, 60);
                      "
                    >
                      <span>
                        <router-link
                          to="/instructdetail"
                          style="
                            color: #9e9e9e;
                            text-decoration: none;
                            font-size: 13px;
                            font-weight: 780;
                            margin-right: 4px;
                          "
                          >更多</router-link
                        >
                      </span>
                      <i class="el-icon-caret-right"></i>
                    </div>
                  </h3>
                  <el-divider class="ccy-drvider"></el-divider>
                  <ul>
                    <li
                      @click="TonewPath(item.id)"
                      v-for="(item, index) in datalist.slice(0, 6)"
                      :key="index"
                      :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
                    >
                      {{ item.title }}
                    </li>
                  </ul>
                </div>
              </div>
              <!--  -->
              <div class="tail" style="width: 100%; margin: 20px 0 10px 0">
                <h3 style="display: flex; justify-content: space-between">
                  <div>
                    <span
                      style="
                        margin-right: 5px;
                        border-left: 6px solid rgb(93, 183, 60);
                      "
                    ></span>
                    精彩专题1
                  </div>
                  <div
                    style="
                      font-size: 0.8rem;
                      margin-top: 6px;
                      color: rgb(93, 183, 60);
                    "
                  >
                    <span>
                      <router-link
                        to="/instructdetail"
                        style="
                          color: #9e9e9e;
                          text-decoration: none;
                          font-size: 13px;
                          font-weight: 780;
                          margin-right: 4px;
                        "
                        >更多</router-link
                      >
                    </span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <el-divider class="ccy-drvider"></el-divider>
              </div>
              <!--分割线-->
            </div>
            <div class="one">
              <div class="onetop">
                <div class="onetopl">
                  <div class="block">
                    <div
                      class="blockson"
                      @click="TonewPath(RecommendList[0].id)"
                    >
                      <el-image
                        style="height: 120px"
                        :src="RecommendList[0].picture"
                      ></el-image>
                      <span>{{ RecommendList[0].title }}</span>
                    </div>
                    <div
                      class="blockson"
                      @click="TonewPath(RecommendList[1].id)"
                    >
                      <el-image
                        style="height: 120px"
                        :src="RecommendList[1].picture"
                      ></el-image>
                      <span>{{ RecommendList[1].title }}</span>
                    </div>
                  </div>
                  <div class="onetoplb">
                    <ul style="margin: 15px 0 0 17px">
                      <li
                        @click="TonewPath(item.id)"
                        v-for="(item, index) in RecommendList.slice(0, 4)"
                        :key="index"
                        :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
                      >
                        {{ item.title }}
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- one 最顶部右边 -->
                <div class="onetopr">
                  <div class="onetopr1" style="margin-bottom: 50px">
                    <ul>
                      <li
                        @click="TonewPath(item.id)"
                        v-for="(item, index) in RecommendList.slice(0, 4)"
                        :key="index"
                        :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
                      >
                        {{ item.title }}
                      </li>
                    </ul>
                  </div>
                  <div class="onetopr2">
                    <ul>
                      <li
                        v-for="(item, index) in RecommendList.slice(0, 4)"
                        :key="index"
                        :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
                        @click="TonewPath(item.id)"
                      >
                        {{ item.summary }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="tail" style="width: 100%; margin-top: 10px">
                <h3 style="display: flex; justify-content: space-between">
                  <div>
                    <span
                      style="
                        margin-right: 5px;
                        border-left: 6px solid rgb(93, 183, 60);
                      "
                    ></span>
                    精彩专题2
                  </div>
                  <div
                    style="
                      font-size: 0.8rem;
                      margin-top: 6px;
                      color: rgb(93, 183, 60);
                    "
                  >
                    <span>
                      <router-link
                        to="/instructdetail"
                        style="
                          color: #9e9e9e;
                          text-decoration: none;
                          font-size: 13px;
                          font-weight: 780;
                          margin-right: 4px;
                        "
                        >更多</router-link
                      >
                    </span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <el-divider class="ccy-drvider"></el-divider>
              </div>
              <div class="onemide">
                <div
                  class="zhuangti"
                  v-for="(item, index) in dataTimeList.slice(0, 4)"
                  :key="index"
                  @click="TonewPath(item.id)"
                >
                  <el-image :src="item.picture"></el-image>
                  <li>{{ item.title }}</li>
                </div>
                <div class="tail" style="width: 100%; margin-top: 15px">
                  <h3 style="display: flex; justify-content: space-between">
                    <div>
                      <span
                        style="
                          margin-right: 5px;
                          border-left: 6px solid rgb(93, 183, 60);
                        "
                      ></span>
                      精彩专题3
                    </div>
                    <div
                      style="
                        font-size: 0.8rem;
                        margin-top: 6px;
                        color: rgb(93, 183, 60);
                      "
                    >
                      <span>
                        <router-link
                          to="/instructpagedetail"
                          style="
                            color: #9e9e9e;
                            text-decoration: none;
                            font-size: 13px;
                            font-weight: 780;
                            margin-right: 4px;
                          "
                          >更多</router-link
                        >
                      </span>
                      <i class="el-icon-caret-right"></i>
                    </div>
                  </h3>
                  <el-divider class="ccy-drvider"></el-divider>
                </div>
              </div>
              <!-- 精彩专题3 -->
              <div
                class="onebottom"
                v-for="(item, index) in pagelist"
                :key="index"
                @click="TonewPath(item.id)"
              >
                <div class="four">
                  <div class="pic">
                    <el-image :src="item.picture"></el-image>
                  </div>
                  <div class="news">
                    <h3>{{ item.title }}</h3>
                    <p
                      style="
                        font-size: 15px;
                        margin-bottom: 15px;
                        margin-top: 10px;
                      "
                    >
                      {{ item.summary }}

                      <span
                        style="text-decoration: none; color: green"
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
                      {{ classificationList[0].name }}
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
                :data="pagelist"
                background
                layout="prev, pager, next"
                :total="queryInfo.total"
                :page-size="queryInfo.size"
                :current-page="page"
                style="
                  display: flex;
                  justify-content: center;
                  margin-bottom: 30px;
                "
                @current-change="handleCurrentChange()"
              >
              </el-pagination>
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
                热门资讯
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
                <router-link style="text-decoration: none" to="/instructdetail">
                  <span style="color: #9e9e9e"> 更多 </span>
                </router-link>
                <i class="el-icon-caret-right"></i>
              </div>
            </h3>
            <el-divider class="ccy-drvider"></el-divider>
            <div class="righttext">
              <ul style="margin-left: 17px">
                <li
                  @click="TonewPath(item.id)"
                  class="ccy-li"
                  v-for="(item, index) in dataTimeList.slice(0, 9)"
                  :key="index"
                >
                  <span
                    :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
                    style="margin-left: -5px; width: 150px"
                    >{{ item.title }}</span
                  ><span
                    style="float: right; color: black"
                    :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
                    >{{ item.creationTime | timefilter }}</span
                  >
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
                  热门资讯
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
                  <router-link
                    style="text-decoration: none"
                    to="/instructdetail"
                  >
                    <span style="color: #9e9e9e"> 更多 </span>
                  </router-link>
                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <el-divider class="ccy-drvider"></el-divider>
              <li
                @click="TonewPath(item.id)"
                v-for="(item, index) in dataTimeList.slice(0, 5)"
                :key="index"
                class="ccy-rightLi"
                style="width: 180px"
                :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
              >
                {{ item.title }}
              </li>

              <br />
              <h3 style="display: flex; justify-content: space-between">
                <div>
                  <span
                    style="
                      margin-right: 5px;
                      border-left: 6px solid rgb(93, 183, 60);
                    "
                  ></span>
                  热门资讯
                  <el-tag type="danger" size="small" style="margin-bottom: -5px"
                    >点评</el-tag
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
                    <span style="color: #9e9e9e"> 更多 </span>
                  </router-link>
                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <el-divider class="ccy-drvider"></el-divider>
              <li
                v-for="(item, index) in dataTimeList.slice(0, 4)"
                :key="index"
                @click="TonewPath(item.id)"
                class="ccy-rightLi"
                style="width: 180px"
                :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
              >
                {{ item.title }}
              </li>

              <br />
              <h3 style="display: flex; justify-content: space-between">
                <div>
                  <span
                    style="
                      margin-right: 5px;
                      border-left: 6px solid rgb(93, 183, 60);
                    "
                  ></span>
                  热门资讯
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
                  <router-link
                    style="text-decoration: none"
                    to="/instructdetail"
                  >
                    <span style="color: #9e9e9e"> 更多 </span>
                  </router-link>
                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <el-divider class="ccy-drvider"></el-divider>
            </div>
            <div class="rightmd">
              <ul>
                <li
                  v-for="(item, index) in dataTimeList.slice(0, 5)"
                  :key="index"
                  @click="TonewPath(item.id)"
                  class="ccy-rightLi"
                  style="width: 180px"
                  :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
                >
                  {{ item.title }}
                </li>
              </ul>
              <ul style="margin: 10px 0 30px 0">
                <li
                  v-for="(item, index) in dataTimeList.slice(0, 6)"
                  :key="index"
                  class="ccy-rightLi"
                  style="width: 180px"
                  @click="TonewPath(item.id)"
                  :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
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
                  热门资讯
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
                    <span style="color: #9e9e9e"> 更多 </span>
                  </router-link>
                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <el-divider class="ccy-drvider"></el-divider>
            </div>
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
  },

  data() {
    return {
      //分类
      classificationList: [],

      //虾业专题
      datalist: [],

      //推荐，精彩专题 2
      RecommendList: [],

      //按时间
      dataTimeList: [],

      //精彩专题3 分页
      queryInfo: {
        page: "1",
        size: "10",
        total: "30",
      },
      //精彩专题3 数组
      pagelist: [],

      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
  created() {
    //分类信息 type 根据其ID决定其
    this.getclassification(),
      //虾业专题
      this.getAlldata(),
      //精彩专题1 2 推荐 不分页
      //按时间
      this.getTimeData(),
      this.getRecommend(),
      //精彩专题3 分页
      this.getjingcai();
  },
  methods: {
    //前往详情页
    TonewPath(id) {
      this.$router.push({
        path: "/instructdetail",
        query: { id: id },
      });
    },
    //分类  (财富手册 对虾养殖)
    async getclassification() {
      const { data: res } = await this.reqM2Service(
        "/info/marketTypes",
        "",
        "get"
      );
      this.classificationList = res.data;
      //console.log(res);
    },

    //获取虾业专题全部信息
    async getAlldata() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry",
        "",
        "get"
      ); //地址，参数，获取类型
      this.datalist = res.data;
    },

    //按时间
    async getTimeData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByTime",
        "",
        "get"
      );
      this.dataTimeList = res.data;
    },

    //精彩专题1 2 不分页
    async getRecommend() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByRecommend",
        "",
        "get"
      );
      //console.log(res);
      this.RecommendList = res.data;
    },

    //按推荐 ，精彩专题3 分页
    async getjingcai() {
      const { data: res } = await this.reqM2Service(
        `/info/shrimpIndustry/findByClickNum/${this.queryInfo.page}/${this.queryInfo.size}`,
        "",
        "get"
      );
      console.log(res);
      this.pagelist = res.data.rows;
      //this.queryInfo.total= this.pagelist.length;
      console.log(this.queryInfo.total);
      // for (var i = 0; i < this.pagelist.length; i++) {}
    },
    handleCurrentChange(newpage) {
      this.queryInfo.page = newpage;
      this.getjingcai();
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
  color: black;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
}
.ccy-cssn {
  text-decoration: none;
  color: black;
  font-size: 13px;
  font-weight: 500;
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
    flex: 4.7;
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
    flex: 4;
    margin-left: 10px;
    .topright {
      padding-top: 10px;
      ul {
        margin-left: 20px;
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
          .el-image {
            width: 208px;
            height: 90px;
          }
          span {
            cursor: pointer;
            width: 190px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
    .onetopr {
      padding-left: 61px;
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
      .el-image {
        width: 205px;
        height: 150px;
      }
      li {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 180px;
        list-style: none;
        font-size: 13px;
        color: black;
        padding-left: 8px;
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
  li{
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