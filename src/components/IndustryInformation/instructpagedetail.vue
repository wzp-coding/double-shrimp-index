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
            <el-input placeholder="请输入实体名称"></el-input>
            <el-button type="success">查询</el-button>
          </div>
          <div class="body" v-for="item in TypeDataList" :key="item.id">
            <div class="block">
              <div class="pic">
                
                  <el-image :src="item.picture"></el-image>
                
              </div>
              <div class="news">
                <h3 style="margin-top: 3px">{{ item.title }}</h3>
                <p
                  class="textover"
                  style="font-size: 15px; margin-bottom: 15px; margin-top: 10px"
                >
                  {{ item.summary | limitword}}
                  <span style="color:green;cursor: pointer;" @click="TonewPath(item.id)" >[详情]</span>
                </p>
                
                <!--底部区域--->
                <p style="font-size: 13px; position: absolute; bottom: 4px">
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
                    bottom: 4px;
                  "
                >
                  {{ TypeName }}
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
                </p>
              </div>
            </div>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="queryinfo.total"
            :page-size="queryinfo.size"
            :current-page="queryinfo.page"
            @current-change="handleCurrentChange"
            style="display: flex; justify-content: center; margin-bottom: 30px"
          >
          </el-pagination>
        </el-aside>
        <el-main width="30%">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="最新资讯" name="first">
              <div
                class="list"
                v-for="(item, index) in newDataList.slice(0, 5)"
                :key="index"
              >
                
                  <div class="block" @click="TonewPath(item.id)">
                    <el-image :src="item.picture"></el-image>
                    <div class="rightspan">
                      <span>{{ item.title }}</span>
                    </div>
                  </div>
                
              </div>
            </el-tab-pane>
            <el-tab-pane label="热门资讯" name="second">
              <div
                class="list"
                v-for="(item, index) in numclicklist.slice(0, 5)"
                :key="index"
              >
                <div class="block"  @click="TonewPath(item.id)">
                  <el-image :src="item.picture"></el-image>
                  <div class="rightspan">
                    <span>{{ item.title }}</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <el-tabs v-model="activeName1" @tab-click="handleClick">
            <el-tab-pane label="本周热门" name="first明">
              <div
                class="list"
                v-for="(item, index) in WeekDataList.slice(0, 5)"
                :key="index"
              >
                <div class="block"  @click="TonewPath(item.id)">
                  <el-image :src="item.picture"></el-image>
                  <div class="rightspan">
                    <span>{{ item.title }}</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="本月热门" name="second2">
              <div
                class="list"
                v-for="(item, index) in MonthData.slice(0, 5)"
                :key="index"
              >
                <div class="block"  @click="TonewPath(item.id)">
                  <el-image :src="item.picture"></el-image>
                  <div class="rightspan">
                    <span>{{ item.title }}</span>
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
  },
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      activeName: "second",
      activeName1: "second2",

      queryinfo: {
        page: 1,
        size: 3,
        total: null,
      },
      //按点击量查询
      numclicklist: [],

      //每月
      MonthData: [], //按最新  时间
      newDataList: [],
      //每周
      WeekDataList: [],
      //分类信息查询
      TypeDataList: [],
      //得到分类名称
      TypeName: "",
    };
  },
  created() {
    //根据传过来的TypeID 搜索
    this.getTypeData();
    //点击量 热度
    this.getclickData();
    //时间 最新
    this.getnewData();
    //推荐
    this.getRecommData();

    //每周
    this.getWeekData();
    //每月
    this.getMonthData();

    //得到分类名
    this.getTypeName();
  },
  mounted() {
    console.log(this.$route.query.id);
  },
  methods: {
    TonewPath(id) {
      this.$router.push({
        path: "/instructdetail",
        query: { id: id },
      });
    },
    async getclickData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByClickNum",
        "",
        "get"
      );
      this.numclicklist = res.data;
    },
    async getnewData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByTime",
        "",
        "get"
      );
      this.newDataList = res.data;
    },
    async getRecommData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByRecommend",
        "",
        "get"
      );
      this.RecommDataList = res.data;
    },

    async getWeekData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByClickWeekly",
        "",
        "get"
      );
      this.WeekDataList = res.data;
    },
    async getMonthData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByClickMonthly",
        "",
        "get"
      );
      this.MonthData = res.data;
    },

    async getTypeData() {
      const { data: res } = await this.reqM2Service(
        `/info/shrimpIndustry/search/searchByTypeId/${this.$route.query.id}/${this.queryinfo.page}/${this.queryinfo.size}`,
        "",
        "post"
      );
      this.TypeDataList = res.data.rows;
      this.queryinfo.total = res.data.total;
      //console.log(this.$route.query.id)
    },
    handleCurrentChange(newpage) {
      //改变页码
      this.queryinfo.page = newpage;
      this.getTypeData();
    },
    async getTypeName() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustryTypes",
        "",
        "get"
      );

      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].id == this.$route.query.id) {
          this.TypeName = res.data[i].name;
          console.log(this.TypeName);
          break;
        }
      }
    },
    handleClick() {},
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
          height: 95%;
          width: 100%;
        }
      }
      .news {
        position: relative;
        width: 65%;
        .textover {
          text-overflow: ellipsis;
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
      }
    }
  }
}
</style>