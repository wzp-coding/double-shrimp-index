<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item to="/industryMarket">产业资讯</el-breadcrumb-item>
        <el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <el-container>
        <el-aside width="70%">
          <div class="searchArea">
            <!--搜索区-->
            <el-input
              placeholder="请输入实体名称"
              v-model="SearchKey"
            ></el-input>
            <el-button type="success" @click="toSearch(SearchKey)"
              >查询</el-button
            >
          </div>
          <!-- 分页开始 -->
          <div
            class="pagging"
            v-loading="loading"
            v-for="(item, index) in TypePagetabList"
            :key="index"
          >
            <div class="paggingSon">
              <!--分页图片--->
              <div class="paggingPicture">
                <el-image
                  :src="item.picture"
                  @click="TonewPath(item.id)"
                ></el-image>
              </div>
              <div class="paggingArticle">
                <!--分页文字-->
                <h3 @click="TonewPath(item.id)">
                  <!--文章标题-->
                  {{ item.title }}
                </h3>
                <p class="paggingContent" style="font-size: 13px">
                  {{ item.summary }}
                </p>
                <span class="paggingSpan" @click="TonewPath(item.id)"
                  >[详情]</span
                >
                <!--底部区域--->
                <p style="font-size: 13px; position: absolute; bottom: 4px">
                  发布时间:{{ item.creationTime | timefilters
                  }}<span style="margin-left: 10px"
                    >阅读： {{ item.clickNum }}</span
                  >
                </p>
              </div>
            </div>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            v-if="this.pageshow"
            :total="queryinfo.total"
            :page-size="queryinfo.size"
            :current-page="queryinfo.page"
            @current-change="handleCurrentChange"
            style="
              display: flex;
              justify-content: center;
              margin-top: 30px;
              margin-bottom: 15px;
            "
          >
          </el-pagination>
        </el-aside>
        <el-main width="30%">
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
            <el-tab-pane label="热门资讯" name="second">
              <div
                class="tabList"
                v-for="(item, index) in numclicktabList"
                :key="index"
                v-loading="loading1"
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
            <el-tab-pane label="本月热门" name="second1">
              <div
                class="tabList"
                v-for="(item, index) in MonthData"
                :key="index"
                v-loading="loading2"
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
      activeName: "first",
      activeName1: "first1",
      queryinfo: {
        page: 1,
        size: 6,
        total: null,
      },
      //按点击量查询
      numclicktabList: [],
      //分页查询全部数据
      TypePagetabList: [],
      //最新
      newDatatabList: [],
      //每周
      WeekDatatabList: [],
      //每月
      MonthData:[],
      //分类信息查询
       TypeDatatabList: [],
      //得到分类名称
      TypeName: "",
      //搜索信息

      pageshow: true,
      SearchKey: "",

      isSearch: null,
      loading: true,
      loading1:true,
      loading2:true
    };
  },
  created() {
    // //时间 最新
    this.getnewData();
    // //每周
    this.getWeekData();
  },
  mounted() {
    // console.log(this.$route.query.id);
    // console.log(this.$route.query.SearchKey);
    if (this.$route.query.SearchKey) {
      this.SearchKey = this.$route.query.SearchKey;
      this.searchData(this.SearchKey);
    } else {
      this.getTypePageData();
    }
  },
  methods: {
    TonewPath(id) {
      this.$router.push({
        path: "/instructdetail",
        query: { id: id },
      });
    },
    async getnewData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByTime/1/5",
          "",
          "get"
        );
        if (res.code === 20000) {
          this.newDatatabList = res.data.rows;
        } else {
          console.log("获取最新数据出错");
        }
      } catch (error) {
        console.log("获取最新数据出错");
      }
    },
    showHot() {
      this.numclicktabList.length === 0
        ? this.getclickData()
        : '';
    },
    showMonth() {
      this.MonthData.length === 0 ? this.getMonthData() : "";
    },
    async getclickData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickNum/1/5",
          "",
          "get"
        );
        this.numclicktabList = res.data.rows;
        this.loading1=false;
      } catch (error) {
        console.log("网络错误");
      }
    },
    async getWeekData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByClickWeekly",
        "",
        "get"
      );
      if (res.code === 20000) {
        this.WeekDatatabList = res.data.slice(0,5);
      } else {
        console.log("获取每周信息失败");
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
          this.MonthData = res.data.slice(0,5);
          this.loading2=false;
        } else {
          console.log("获取每月数据出错");
        }
      } catch (error) {
        console.log("获取每月数据出错");
      }
    },

    //分页查询全部数据
    getTypePageData() {
      let httpUrl1 = `http://106.75.154.40:9012/info/shrimpIndustry/${this.queryinfo.page}/${this.queryinfo.size}`;
      try {
        this.$http.post(httpUrl1).then((res) => {
          console.log(res.data);
          res = res.data;
          this.TypePagetabList = res.data.rows;
          this.loading = false;
          this.queryinfo.total = res.data.total;
        });
      } catch (error) {
        console.log("分页接口请求失败");
      }
    },
    handleCurrentChange(newpage) {
      this.loading = true;
      //改变页码
      this.queryinfo.page = newpage;
      if (this.isSearch === 1) {
        this.searchData(this.SearchKey);
      } else if (this.isSearch == 2) {
        this.getTypePageData();
        this.queryinfo.page = 1;
      } else {
        this.getTypePageData();
        this.queryinfo.page = 1;
      }
    },

    //查询函数
    toSearch(SearchKey) {
      this.isSearch = 1;
      this.pageshow = false;
      this.loading = true;
      this.queryinfo.page = 1;
      this.handleCurrentChange(this.queryinfo.page);
    },
    searchData(SearchKey) {
      //this.isSearch = 1 代表点击了搜索或由其他页面搜索而进
      this.isSearch = 1;
      let httpUrl = `http://106.75.154.40:9010/industry/search/time/${this.queryinfo.page}/${this.queryinfo.size}/1?key=${SearchKey}`;
      try {
        this.$http.get(httpUrl).then((res) => {
          if (res.data.code === 20000) {
            res = res.data;
            //判断返回的数组是否有数据
            if (res.data.rows.length !== 0) {
              console.log("数组存在且有信息");
              //更新分页列表
              this.TypePagetabList = res.data.rows;
              this.queryinfo.total = res.data.total;
              this.pageshow = true;
              this.loading = false;
            } else {
              //没有所搜索的信息
              //将SearchKey赋为空
              this.SearchKey = "";
              this.$message.warning("暂无相关数据");
              this.queryinfo.page = 1;
              //调用获取全部分类函数
              this.getTypePageData();
              //代表没有相关搜索内容
              this.isSearch = 2;
              this.pageshow = true;
            }
          } else {
            //请求不到搜索内容用全部分页代替
            console.log("请求搜索数据失败");
            this.getTypePageData();
          }
        });
      } catch (error) {
        console.log("搜索接口请求失败");
        this.getTypePageData();
        this.pageshow = true;
      }
    },
  },
};
</script>

<style  lang="less" scoped>
.lxl-body {
  display: flex;
  justify-content: center; //对齐方式
  min-width: 1150px;
  .lxl-breadcrumb {
    margin-top: 25px 18px -10px 0;
  }
}
.lxl-box {
  width: 1150px;
}
* {
  padding: 0;
  margin: 0;
}
.el-aside {
  .searchArea {
    .el-input {
      margin-right: 10px;
      width: 50%;
    }
    background-color: #fff;
  }
  .pagging {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    .paggingSon {
      width: 100%;
      height: 185px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(230, 230, 230);
      .paggingPicture {
        margin-left: 5px;
        margin-top: 5px;
        width: 33%;
        .el-image {
          cursor: pointer;
          height: 95%;
          width: 100%;
        }
      }
      .paggingArticle {
        h3 {
          cursor: pointer;
          margin: 5px 0 10px 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        position: relative;
        width: 65%;
        .paggingContent {
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 5;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .paggingSpan {
          color: green;
          font-size: 13px;
          cursor: pointer;
        }
        .paggingSpan:hover {
          color: orange;
        }
      }
    }
  }
}
.el-main {
  margin-top: -30px;
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
</style>