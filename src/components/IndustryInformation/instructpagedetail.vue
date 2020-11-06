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
            <el-breadcrumb-item to="/industryMarket"
              >产业资讯</el-breadcrumb-item
            >
            <el-breadcrumb-item>详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="tr"></div>
      </div>

      <el-divider></el-divider>
      <el-container>
        <el-aside width="67%">
          <div class="header">
            <el-input
              placeholder="请输入实体名称"
              v-model="SearchKey"
            ></el-input>
            <el-button type="success" @click="toSearch(SearchKey)"
              >查询</el-button
            >
          </div>
          <div class="body" v-for="(item, index) in TypePageList" :key="index">
            <div class="block">
              <div class="pic">
                <el-image
                  :src="item.picture"
                  @click="TonewPath(item.id)"
                ></el-image>
              </div>
              <div class="news">
                <h3 @click="TonewPath(item.id)">
                  {{ item.title }}
                </h3>
                <p
                  class="textover"
                  style="
                    font-size: 14.5px;
                    margin-bottom: 15px;
                    margin-top: 10px;
                  "
                >
                  {{ item.summary | limitword }}
                  <span
                    
                    @click="TonewPath(item.id)"
                    >[详情]</span
                  >
                </p>
                <!--底部区域--->
                <p style="font-size: 13px; position: absolute; bottom: 4px">
                  发布时间:{{ item.creationTime | timefilters
                  }}<span style="margin-left: 10px"
                    >阅读： {{ item.clickNum | readnum }}</span
                  >
                </p>
                <!-- <p
                  style="
                    color: green;
                    font-size: 13px;
                    right: 0;
                    padding-right: 3px;
                    position: absolute;
                    bottom: 4px;
                  "
                >
                  {{ TypeName | istypeName}}
                </p>
                <p
                  style="
                    font-size: 13px;
                    right: 50px;
                    position: absolute;
                    bottom: 4px;
                  "
                >
                  分类：
                </p> -->
              </div>
            </div>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="queryinfo.total"
            :page-size="queryinfo.size"
            :current-page.sync="queryinfo.page"
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
          <el-tabs v-model="activeName">
            <el-tab-pane label="最新资讯" name="first">
              <div
                class="list"
                v-for="(item, index) in newDataList.slice(0, 5)"
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
          <el-tabs v-model="activeName1">
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
              <div
                class="list"
                v-for="(item, index) in MonthData"
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
    istypeName(val) {
      if (val == null || val == "") {
        return "暂无分类";
      } else {
        return val;
      }
    },
    readnum(val) {
      if (val == null || val == "") {
        return 0;
      } else {
        return val;
      }
    },
  },
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      activeName: "first",
      activeName1: "first1",

      queryinfo: {
        page: 1,
        size: 6,
        total: null,
      },
      //按点击量查询
      numclicklist: [],

      //分页查询全部数据
      TypePageList: [],

      //每月
      MonthData: [], //按最新  时间
      newDataList: [],
      //每周
      WeekDataList: [],
      //分类信息查询
      //  TypeDataList: [],
      //得到分类名称
      TypeName: "",
      //搜索信息

      SearchKey: "",

      isSearch: null,
    };
  },
  created() {
    //根据传过来的TypeID 搜索
    //this.getTypeData();
    //点击量 热度
    this.getclickData();
    //时间 最新
    this.getnewData();
    //推荐
    // this.getRecommData();

    //每周
    this.getWeekData();
    //每月
    this.getMonthData();

    //得到分类名
    //this.getTypeName();

    //分页查询全部数据
    // this.getTypePageData();

    //搜索查询
    //this.searchData();
  },
  mounted() {
    console.log("钩子函数");
    console.log(this.$route.query.id);
    console.log(this.$route.query.SearchKey);
    if (this.$route.query.SearchKey) {
      this.SearchKey = this.$route.query.SearchKey;
      this.searchData(this.SearchKey);
    } else {
      this.getTypePageData();
    }

    //this.searchData(this.$route.query.SearchKey);
  },
  methods: {
    TonewPath(id) {
      this.$router.push({
        path: "/instructdetail",
        query: { id: id },
      });
    },
    async getclickData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByClickNum/1/5",
          "",
          "get"
        );
        this.numclicklist = res.data.rows;
      } catch (error) {
        console.log("网络错误");
      }
    },

    async getnewData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustry/findByTime",
          "",
          "get"
        );

        this.newDataList = res.data;
      } catch (error) {
        console.log("获取最新数据出错");
      }
    },

    async getWeekData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByClickWeekly/1/5",
        "",
        "get"
      );
      console.log(res);
      this.WeekDataList = res.data.rows;
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
        console.log("获取每月数据出错");
      }
    },

    //分页查询全部数据

    getTypePageData() {
      let httpUrl1 = `http://106.75.154.40:9012/info/shrimpIndustry/${this.queryinfo.page}/${this.queryinfo.size}`;
      try {
        this.$http.post(httpUrl1).then((res) => {
          console.log(res.data);
          res=res.data
          // res.data.rows.forEach((item) => {
          //   this.TypePageList.push(item);            
          // });
          this.TypePageList = res.data.rows;
          this.queryinfo.total = res.data.total;
        });
      } catch (error) {
        console.log("分页接口请求失败");
      }
    },

    // async getTypePageData() {
    //   try {
    //     const { data: res } = await this.reqM2Service(
    //     `/info/shrimpIndustry/${this.queryinfo.page}/${this.queryinfo.size}`,
    //     "",
    //     "post"
    //   );

    //   this.TypePageList = res.data.rows;
    //   this.queryinfo.total = res.data.total;
    //   } catch (error1) {

    //   }

    // },

    //根据传过来的ID查询
    // async getTypeData() {
    //   try {
    //   } catch (error) {}
    //   const { data: res } = await this.reqM2Service(
    //     `/info/shrimpIndustry/search/searchByTypeId/${this.$route.query.id}/${this.queryinfo.page}/${this.queryinfo.size}`,
    //     "",
    //     "post"
    //   );
    //   this.TypeDataList = res.data.rows;
    //   this.queryinfo.total = res.data.total;
    //   //console.log(this.$route.query.id)
    // },

    handleCurrentChange(newpage) {
      console.log(newpage)
      //改变页码
      this.queryinfo.page = newpage;

      if (this.isSearch === 1) {
        this.searchData(this.SearchKey);
      }else if(this.isSearch==2){
        this.getTypePageData();
        this.queryinfo.page=1;
      }else{
        this.getTypePageData();
        this.queryinfo.page=1;
      }
    },

    //查询函数
    toSearch(SearchKey){
      this.isSearch = 1
      this.queryinfo.page = 1;
      console.log(this.queryinfo.page)
      this.handleCurrentChange(1);
      this.searchData(SearchKey);
    },
    searchData(SearchKey) {
      //this.isSearch = 1 代表点击了搜索或由其他页面搜索而进
      this.isSearch = 1;
      let httpUrl = `http://106.75.154.40:9010/industry/search/time/${this.queryinfo.page}/${this.queryinfo.size}/1?key=${SearchKey}`;
      try {
        this.$http.get(httpUrl).then((res) => {
          console.log(res.data);
          if (res.data.code === 20000) {
            console.log("成功返回 搜索数据");
            res = res.data;
            //判断返回的数组是否有数据
            if (res.data.rows.length !== 0) {
              console.log("数组存在且有信息");
              //更新分页列表
              this.TypePageList = res.data.rows;
              this.queryinfo.total = res.data.total;
            } else {
              //没有所搜索的信息
              //将SearchKey赋为空 
              this.SearchKey= '';
              this.$message.warning("暂无相关数据");
              this.queryinfo.page = 1;
              //调用获取全部分类函数
              this.getTypePageData();
              //代表没有相关搜索内容
              this.isSearch =2
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
  .header {
    .el-input {
      margin-right: 10px;
      width: 50%;
    }
    background-color: #fff;
  }
  .body {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    .block {
      width: 100%;
      height: 185px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(230, 230, 230);
      .pic {
        margin-left: 5px;
        margin-top: 5px;
        width: 33%;
        .el-image {
          cursor: pointer;
          height: 95%;
          width: 100%;
        }
      }
      .news {
        h3{
          cursor: pointer;
          margin-top: 3px;
        }
        position: relative;
        width: 65%;
        .textover {
          text-overflow: ellipsis;
          span{
            color: green;
            cursor: pointer
          }
          span:hover{
            color: orange;
          }
        }
        
      }
    }
  }
}
.el-main {
  margin-top: -30px;
  .el-tabs {
    padding-top: 8px;
  }
  .list {
    width: 100%;
    font-size: 14.21px;
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
        width: 67%;
        display: flex;
        float: right;
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