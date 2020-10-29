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
        <div class="zhuti">
          <div class="left">
            <div class="block" style="margin-bottom:8px">
              <div
                class="blockson"
                v-for="(item, index) in datalist.slice(0, 3)"
                :key="index"
                @click="TonewPath(item.id)"
              >
                <el-image :src="item.picture"></el-image>
                <span>{{ item.title }}</span>
              </div>
            </div>
            <div class="sort">
              <el-row>
                <span style="font-size:15px">分类：</span>
                <el-button type="success" size="mini" plain>全部</el-button>
                <el-button type="success" size="mini" plain>对虾养殖</el-button>
                <el-button type="success" size="mini" plain>财富手册</el-button>
                <el-button type="success" size="mini" plain>虾业行情</el-button>
                <el-button type="success" size="mini" plain>虾业行情</el-button>
                
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
                  <router-link
                    to="/instructpagedetail"
                    style="text-decoration: none; color: black"
                  >
                    <span style="color: #9e9e9e"> 更多 </span>
                  </router-link>
                  <i class="el-icon-caret-right"></i>
                </div>
              </h3>
              <el-divider class="ccy-drvider"></el-divider>
            </div>
            <div class="main">
              <div
                class="mainson"
                v-for="(item, index) in pagelist"
                :key="index"
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
                    <p style="width: 100%">
                      {{ item.content }}
                      <span style="color: green" @click="TonewPath(item.id)"
                        >[详细]</span
                      >
                    </p>
                  </div>
                  <div class="lbtm" style="width: 100%">
                    <p style="font-size: 13px; float: left">
                      {{ item.creationTime | timefilters
                      }}<span style="margin-left: 15px">
                        阅读： {{ item.clickNum }}</span
                      >
                    </p>
                    <p
                      style="
                        color: green;
                        font-size: 13px;
                        right:3px
                        padding-right: 3px;
                      "
                    >
                      {{ item.summary }}
                    </p>
                    <p style="font-size: 13px; right: 40px">分类：</p>
                  </div>
                </div>
              </div>
            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="pagelist.length"
              :page-size="3"
              :current-page="1"
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
                    <span style="color: #9e9e9e"> 更多 </span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <el-divider class="ccy-drvider"></el-divider>

                <ul>
                  <li
                    v-for="(item, index) in dataTimeList.slice(0, 6)"
                    :key="index"
                    @click="TonewPath(item.id)"
                    :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
                  >
                    
                      {{ item.title }}
                  
                  </li>
                </ul>
                <br />
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
                  <el-tag type="danger" size="small" style="margin-top: 3px"
                    >热卖</el-tag
                  >
                  <div
                    style="
                      font-size: 0.8rem;
                      margin-top: 6px;
                      color: rgb(93, 183, 60);
                    "
                  >
                    <span style="color: #9e9e9e"> 更多 </span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <el-divider
                  class="ccy-drvider"
                  style="display: inline-block; margin-top: -30px"
                ></el-divider>
                <ul>
                  <li
                    v-for="(item, index) in dataRecommList.slice(0, 6)"
                    :key="index"
                    @click="TonewPath(item.id)"
                    :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
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
                    <span style="color: #9e9e9e"> 更多 </span>
                    <i class="el-icon-caret-right"></i>
                  </div>
                </h3>
                <el-divider class="ccy-drvider"></el-divider>

                <ul>
                  <li
                    v-for="(item, index) in dataRecommList.slice(0, 6)"
                    :key="index"
                    @click="TonewPath(item.id)"
                    :class="[index == 0 ? 'ccy-css' : 'ccy-cssn']"
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
  },
  data() {
    return {
      //分类
      classificationList: [],

      //按点击量分页
      queryinfo: {
        page: "1", //页数
        size: "3", //每页数
      },

      // 点击量分页
      pagelist: [],

      //查询所有虾业专题
      datalist: [],

      //按时间
      dataTimeList: [],

      //按推荐
      dataRecommList: [],

      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
  created() {
    //分类信息 type 根据其ID决定其
    this.getclassification(),
      //获取分页
      this.getClickData(),
      //获取所有虾业专题
      this.getdata();
    //推荐
    this.getHotData(),
      //按时间  最新
      this.getNewData();
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
    //按点击量分页
    async getClickData() {
      const { data: res } = await this.reqM2Service(
        `/info/shrimpIndustry/findByClickNum/${this.queryinfo.page}/${this.queryinfo.size}`,
        "",
        "get"
      );
      if (res.code !== 20000) {
        return this.$message.error("失败");
      }

      //console.log(res);
      this.pagelist = res.data.rows;
    },

    //查询全部
    async getdata() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry",
        "",
        "get"
      );
      if (res.code !== 20000) {
        return this.$message.error("获取失败");
      }
      // console.log(res);
      this.datalist = res.data;
    },

    //按时间
    async getNewData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByTime",
        "",
        "get"
      );
      this.dataTimeList = res.data;
      console.log(this.dataTimeList);
    },
    //按推荐

    async getHotData() {
      const { data: res } = await this.reqM2Service(
        "/info/shrimpIndustry/findByRecommend",
        "",
        "get"
      );
      this.dataRecommList = res.data;
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
.ccy-css {
  color: black;
  text-decoration: none;
  font-size: 15.21px;
  font-weight: 700;
}
.ccy-cssn {
  text-decoration: none;
  color: black;
  font-size: 13px;
  font-weight: 500;
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
.router-link {
  span {
    text-decoration: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
      justify-content: space-between;
      .blockson {
        height: 170px;
        width: 33%;
        position: relative;
        display: flex;
        .el-image {
          width: 98%;
          height: 90%;
          cursor: pointer!important;
        }
        span {
          text-align: center;
          background-color:#333;
          position: absolute;
          width: 98%;
          opacity: 0.7;
          bottom: 19px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 14.5px;
        }
      }
    }
    .main {
      width: 100%;
      display: flex;
      flex-direction: column;
      .mainson {
        width: 100%;
        display: flex;
        margin-top: -20px;
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
          .pm {
            p {
              text-overflow: ellipsis;
              overflow-wrap: normal;
              overflow: hidden;
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
            list-style-position: inside;
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
        width: 220px;
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
