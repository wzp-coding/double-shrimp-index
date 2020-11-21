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
        <el-aside style="width: 70%">
          <!-- 顶部三张图片 -->
          <div
            class="topPicture"
            style="margin-bottom: 8px"
            v-loading="loading"
          >
            <div
              class="topPictureson"
              v-for="(item, index) in pagelist.slice(0, 3)"
              :key="index"
              @click="TonewPath(item.id)"
            >
              <el-image :src="item.picture"></el-image>
              <span>{{ item.title }}</span>
            </div>
          </div>
          <!-- 专题分类  -->
          <div>
            <span style="font-size: 15px">分类：</span>
            <el-button
              type="success"
              size="mini"
              plain
              v-for="(item, index) in TypeDataList.slice(0, 6)"
              :key="index"
              @click="TypeChange(item.id, item.name)"
              >{{ item.name }}</el-button
            >
          </div>
          <!-- 专题分页起始 -->
          <div
            style="
              display: flex;
              justify-content: space-between;
              width: 100%;
              margin-bottom: -20px;
              margin-top: 15px;
            "
          >
            <div style="font-weight: 800; font-size: 18.72px">
              <span
                style="
                  margin-right: 5px;
                  border-left: 6px solid rgb(93, 183, 60);
                "
              ></span>
              {{ this.queryInfo.TypeName }}
            </div>
            <div
              style="
                font-size: 0.8rem;
                margin-top: 6px;
                color: rgb(93, 183, 60);
              "
            >
              <span
                style="color: #9e9e9e; font-weight: 800"
                @click="ToMorePage(queryInfo.TypeID)"
              >
                更多
              </span>
              <i class="el-icon-caret-right"></i>
            </div>
          </div>
          <!-- 分割线 -->
          <el-divider></el-divider>
          <!-- 虾行产业开始   分页-->
          <div
            class="asidePaging"
            v-for="(item, index) in pagelist"
            :key="index"
            v-loading="loading"
          >
            <div
              class="asidePaggingSon"
              v-if="pagelist.length != 0"
              style="border-bottom: 1px solid rgb(230, 230, 230)"
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
                    {{ item.creationTime | timefilters
                    }}<span style="margin-left: 15px">
                      阅读： {{ item.clickNum }}</span
                    >
                  </p>
                  <p style="font-size: 13px; right: 10px">
                    分类：<span style="color: green">{{
                      queryInfo.TypeName
                    }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页按钮 -->
          <el-pagination
            background
            layout="prev, pager, next"
            :total="queryInfo.total"
            :page-size="queryInfo.pagesize"
            :current-page="queryInfo.Currentpage"
            @current-change="handleCurrentChange"
            style="
              display: flex;
              justify-content: center;
              margin: 20px 0 20px 0;
            "
          >
          </el-pagination>
        </el-aside>
        <el-main style="width: 30%">
          <div>
            <!-- 财富手册开始 -->
            <h3>
              <div>
                <span
                  style="
                    margin-right: 5px;
                    border-left: 6px solid rgb(93, 183, 60);
                  "
                ></span>
                财富手册<el-tag
                  type="danger"
                  style="margin-left: 5px"
                  size="small"
                  >New</el-tag
                >
              </div>
              <div class="toMore">
                <span @click="ToMorePage(queryInfo.TypeID)"> 更多 </span>
                <i class="el-icon-caret-right"></i>
              </div>
            </h3>
            <ul class="ccy-css">
              <li
                v-for="(item, index) in caifuList"
                :key="index"
                @click="TonewPath(item.id)"
              >
                {{ item.title }}
              </li>
            </ul>
            <!-- 财富手册结束与对虾行情开始 -->
            <h3>
              <div>
                <span
                  style="
                    margin-right: 5px;
                    border-left: 6px solid rgb(93, 183, 60);
                  "
                ></span>
                对虾行情<el-tag
                  style="margin-left: 5px"
                  type="danger"
                  size="small"
                  >热卖</el-tag
                >
              </div>
              <div class="toMore">
                <span @click="ToMorePage(queryInfo.TypeID)"> 更多 </span>
                <i class="el-icon-caret-right"></i>
              </div>
            </h3>
            <ul class="ccy-css">
              <li
                v-for="(item, index) in hangqingList"
                :key="index"
                @click="TonewPath(item.id)"
              >
                {{ item.title }}
              </li>
            </ul>
            <!-- 对虾行情结束与产链前沿开始 -->
            <h3>
              <div>
                <span
                  style="
                    margin-right: 5px;
                    border-left: 6px solid rgb(93, 183, 60);
                  "
                ></span>
                产链前沿<el-tag
                  type="danger"
                  size="small"
                  style="margin-left: 5px"
                  >Hot</el-tag
                >
              </div>
              <div class="toMore">
                <span @click="ToMorePage(queryInfo.TypeID)"> 更多 </span>
                <i class="el-icon-caret-right"></i>
              </div>
            </h3>
            <ul class="ccy-css">
              <li
                v-for="(item, index) in chanlianList"
                :key="index"
                @click="TonewPath(item.id)"
              >
                {{ item.title }}
              </li>
            </ul>
            <!--产链前沿结束-->   
            <!--分割线-->
            <div class="drive" style="width: 100%"></div>         
          </div>
          <div class="asideBottom">
            <h3 style="margin-bottom:5px">
              <div>
                <span
                  style="
                    margin-right: 5px;
                    border-left: 6px solid rgb(93, 183, 60);
                  "
                ></span>
                热门产品<el-tag
                  type="danger"
                  size="small"
                  style="margin-left: 5px"
                  >hot</el-tag
                >
              </div>
              <div class="toMore">
                <span @click="ToMorePage(queryInfo.TypeID)"> 更多 </span>
                <i class="el-icon-caret-right"></i>
              </div>
            </h3>
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
      //按类型查询分页
      queryInfo: {
        Currentpage: 1, //页数
        pagesize: 5, //每页数
        total: null, //总页数
        TypeID: "1321798002377101312",
        TypeName: "虾行产业",
      },
      // 类型分页
      pagelist: [],
      //虾行产业  1321798002377101312  类型ID
      xiahang: "1321798002377101312",
      duixiaId: "1320625468222869504",
      //财富手册
      caifuList: [],
      caifuID: "1316743601669148672",
      //对虾行情
      hangqingList: [],
      hangqingId: "1316745747953225728",
      //产链前沿
      chanlianList: [],
      chanlianId: "1320546102558199808",
      //分类信息查询
      TypeDataList: [],
      SearchKey: "",
      loading: true,
    };
  },
  created() {
    this.getPageList(this.queryInfo.TypeID); //  分页 虾行产业
    this.getTypeData(); //获取分类信息
    this.caifuList = this.getTypeInfo(this.caifuID, 9); //财富手册专题
    this.getTypeInfo(this.hangqingId, 7); //对虾行情专题
    this.getTypeInfo(this.chanlianId, 6); //产链前沿专题
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
    // 搜索进入更多页面
    ToSearch(SearchKey) {
      this.$router.push({
        path: "/instructpagedetail",
        query: { SearchKey: SearchKey },
      });
    },
    //根据类型ID查询  非分页
    async getTypeInfo(TypeNum, size) {
      try {
        const { data: res } = await this.reqM2Service(
          `/info/shrimpIndustry/search/searchByTypeId/${TypeNum}/1/${size}`,
          "",
          "post"
        );
        if (res.code === 20000) {
          if (res.data.rows.length == 0) {
            console.log("所请求的接口无数据");
          } else {
            if (size == 9) {
              //财富手册
              this.caifuList = res.data.rows.sort((a, b) => {
                return a.clickNum - b.clickNum;
              });
            } else if (size == 7) {
              //对虾行情
              this.hangqingList = res.data.rows.sort((a, b) => {
                return a.clickNum - b.clickNum;
              });
            } else if (size == 6) {
              //产链前沿
              console.log("产链前沿");
              console.log(res);
              this.chanlianList = res.data.rows.sort((a, b) => {
                return a.clickNum - b.clickNum;
              });
            }
          }
        } else {
          console.log("请求接口失败");
        }
      } catch (error) {
        console.log("请求接口失败");
      }
    },
    //分页 根据类型ID查询  默认 虾行产业
    async getPageList(TypeID) {
      try {
        const { data: res } = await this.reqM2Service(
          `/info/shrimpIndustry/search/searchByTypeId/${TypeID}/${this.queryInfo.Currentpage}/${this.queryInfo.pagesize}`,
          "",
          "post"
        );
        if (res.code === 20000) {
          console.log(res);
          this.pagelist = res.data.rows;
          this.queryInfo.total = res.data.total;
          this.loading = false;
        } else {
          console.log("请求分页专题接口失败");
        }
      } catch (error2) {
        console.log("请求类型分页接口失败");
      } 

    },
    //改变分页页码
    handleCurrentChange(newpage) {
      this.loading = true;
      this.queryInfo.Currentpage = newpage;
      this.getPageList(this.queryInfo.TypeID);
    },
    //获取所有分类信息
    async getTypeData() {
      try {
        const { data: res } = await this.reqM2Service(
          "/info/shrimpIndustryTypes",
          "",
          "get"
        );
        if (res.code === 20000) {
          this.TypeDataList = res.data;
        } else {
          console.log("请求分类信息接口失败");
        }
      } catch (error3) {
        console.log("请求分类信息接口失败");
      }
    },
    TypeChange(ChangeID, ChangeName) {
      this.queryInfo.Currentpage = 1;
      this.queryInfo.TypeID = ChangeID;
      this.queryInfo.TypeName = ChangeName;
      this.loading = true;
      this.getPageList(ChangeID);
    },
  },
};
</script>
<style lang="less" >
.lxl-body {
  display: flex;
  justify-content: center; //对齐方式-
  min-width: 1150px;
}
.navigationSearch {
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
.ccy-css {
  color: #858585;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 13px;
  margin-top: -15px;
  margin-bottom: 6px;
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
  cursor: pointer !important;
}
span {
  cursor: pointer;
}
.el-container {
  display: flex;
  justify-content: space-between;
  .el-aside {
    flex-direction: column;
    .topPicture {
      width: 100%;
      display: flex;
      height: 170px;
      justify-content: space-between;
      .topPictureson {
        height: 100%;
        width: 33%;
        position: relative;
        display: flex;
        .el-image {
          width: 98%;
          height: 90%;
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
    .asidePaging {
      //分页样式
      display: flex;
      margin-top: -22px;
      .asidePaggingSon {
        width: 100%;
        display: flex;
        height: 190px;
        position: relative;
        .paggingPicture {
          height: 90%;
          width: 29%;
          .el-image {
            margin-top: 25px;
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
  .el-main {
    margin-top: -20px;
    h3 {   
      display: flex;
      justify-content: space-between;
      .toMore {
        //更多
        font-size: 0.8rem;
        margin-top: 6px;
        color: rgb(93, 183, 60);
        span {
          color: #9e9e9e;
        }
      }
    }
    li {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding-bottom: 2px;
      list-style-position: inside;
      width: 250px;
      cursor: pointer;
      margin-bottom: 3px;
    }
    .asideBottom {
      margin-bottom: 15px;
      .el-button {
        margin-bottom: 8px;
        background-color: rgb(240, 249, 235);
        color: green;
      }
    }
  }
}
</style>
