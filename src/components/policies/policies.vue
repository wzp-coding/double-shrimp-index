<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>政策法规</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

      <!-- 内容区 -->
      <div class="lsx-all">
        <!-- 左侧栏 -->
        <div class="lsx-left">
          <!-- 左侧栏第一栏 -->
          <div class="left1">
            <!-- 左栏第一栏左侧轮播图 -->
            <div class="rotationpics">
              <template>
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item
                    v-for="(img, index) in imgList"
                    :key="index"
                  >
                    <img v-bind:src="img.url" width="100%" height="100%" />
                  </el-carousel-item>
                </el-carousel>
              </template>
            </div>
            <!-- 左栏第一栏右侧文字 -->
            <div class="left1rword" v-loading="loading">
              <ul>
                <li
                  class="left1rword0"
                  v-for="item in clicklist1"
                  :key="item.id"
                >
                  <!-- 左栏第一栏右侧文字标题 -->
                  <div class="left1rwordtitle">
                    <template>
                      <router-link
                        :to="{
                          path: 'policiesListArticle',
                          query: { id: item.id },
                        }"
                        >{{ item.title }}</router-link
                      >
                    </template>
                  </div>
                  <!-- 左栏第一栏右侧文字时间 -->
                  <div class="left1rwordtime">
                    {{ formatTime(item.creationTime) }}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- 左栏第二栏 《专家》 -->
          <div v-loading="loading">
            <!-- 左栏第二栏标题区 -->
            <div class="left23head">
              <div class="left23headleft">专家</div>
              <div class="left23headright">
                <template>
                  <router-link to="/policiesExpertMoreArticle">
                    更多 <i class="el-icon-d-arrow-right"></i>
                  </router-link>
                </template>
              </div>
            </div>
            <!-- 左栏第二栏专家列表 -->
            <div class="left23word">
              <ul>
                <li v-for="item in expertlist" :key="item.id">
                  <template>
                    <router-link
                      :to="{
                        path: 'policiesListArticle',
                        query: { id: item.id },
                      }"
                      >{{ item.title }}</router-link
                    >
                  </template>
                </li>
              </ul>
            </div>
          </div>

          <!-- 左栏第三栏 《媒体》 -->
          <div v-loading="loading">
            <!-- 左栏第三栏标题区 -->
            <div class="left23head">
              <div class="left23headleft">媒体</div>
              <div class="left23headright">
                <template>
                  <router-link to="/policiesMediaMoreArticle">
                    更多 <i class="el-icon-d-arrow-right"></i> </router-link
                ></template>
              </div>
            </div>
            <!-- 左栏第三栏媒体列表 -->
            <div class="left23word">
              <ul>
                <li v-for="item in medialist" :key="item.id">
                  <template>
                    <router-link :to="{path:'policiesListArticle',
                    query:{id:item.id}}">{{ item.title }}</router-link>
                  </template>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 右侧栏 -->
        <div class="lsx-right" v-loading="loading">
          <!-- 右侧栏第一栏标题区 -->
          <div class="right1head">
            <div class="right1headleft">官方</div>
          </div>
          <!-- 右栏内容区 -->
          <div class="right2word">
            <ul>
              <li
                v-for="item in officiallist"
                :key="item.id"
                class="rightwordhead"
              >
                <template>
                  <router-link :to="{path:'policiesListArticle',query:{id:item.id}}">{{ item.title }}</router-link>
                </template>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 左侧第一栏按点击量查询政策法规第一页
      clicklist1: [],
      // 左栏第二栏专家列表
      expertlist: [],
      // 左栏第三栏媒体列表
      medialist: [],
      // 右栏官方列表
      officiallist: [],
      // 轮播图
      imgList: [
        {
          url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2478752248,2957639169&fm=26&gp=0.jpg",
        },
        {
          url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2311173763,1422260715&fm=26&gp=0.jpg"
        },
        {
          url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3141246852,1030229522&fm=26&gp=0.jpg"
        },
      ],
      times: "",
      loading: true,
    };
  },
  created() {
    // 左侧第一栏按点击量查询政策法规
    this.getClickList1();
    // 获取专家列表数据
    this.getExpertList();
    // 获取媒体列表数据
    this.getMediaList();
    // 获取右栏官方列表
    this.getOfficialList();
  },
  methods: {
    // 按点击量查询政策法规(左侧第一栏)
    async getClickList1() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/findByClickNum/1/8`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.clicklist1 = res.data.rows;
      this.loading=false;
      console.log(this.clicklist1);
    },

    // 获取专家列表数据
    async getExpertList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/search/searchByTypeId/1316746002186768384/1/10`,
        "",
        "post"
      );
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.expertlist = res.data.rows;
      this.loading=false;
      console.log(this.expertlist);
    },

    // 获取媒体列表数据
    async getMediaList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/search/searchByTypeId/1316746032893267968/1/10`,
        "",
        "post"
      );
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.medialist = res.data.rows;
      this.loading=false;
      console.log(this.medialist);
    },

    // 获取官方列表数据
    async getOfficialList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/search/searchByTypeId/1327786510489096192/1/28`,
        "",
        "post"
      );
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.officiallist = res.data.rows;
      this.loading=false;
      console.log(this.officiallist);
    },

    // 时间格式化
    formatTime(date) {
      //date是传入的时间
      const d = new Date(date);
      const month =
        d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
      const hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
      const min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
      const sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
      const times =
        d.getFullYear() +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        min +
        ":" +
        sec;
      // 截取年月日
      let shortTimes = times.substring(0, 10);
      return shortTimes;
    },
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}

.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
}
.lxl-box {
  width: 1150px;
  height: 100%;
}

// 内容区
.lsx-all {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  // 左栏
  .lsx-left {
    width: 69%;
    background-color: #fff;
  }
  // 右栏
  .lsx-right {
    width: 30%;
    background-color: #fff;
  }
}

// 左栏第一栏
.left1 {
  display: flex;
  margin-bottom: 10px;
  // 左栏第一栏轮播图
  .rotationpics {
    width: 35%;
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }

  // 左栏第一栏右栏
  .left1rword {
    width: 65%;
    padding-left: 10px;
    .left1rword0 {
      display: flex;
      justify-content: space-between;
      padding-bottom: 12px;
      .left1rwordtitle {
        font-size: 13px;
        line-height: 2em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        a {
          color: #403a3e;
        }
        a:hover {
          color: #39b8ed;
        }
      }
      .left1rwordtime {
        font-size: 13px;
        line-height: 2em;
        color: #b3b3b3;
      }
    }
  }
}

// 左栏第二三栏标题
.left23head {
  height: 40px;
  display: flex;
  background-color: #f7f7f7;
  border-bottom: 1px solid #004787;
  justify-content: space-between;
  .left23headleft {
    width: 60px;
    padding-top: 8px;
    color: #004787;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .left23headright {
    padding-top: 11px;
    padding-right: 12px;
    font-size: 13px;
    a {
      color: #7a776e;
    }
    a:hover {
      color: black;
    }
  }
}

// 左栏第二三栏内容区共用样式
.left23word {
  margin: 10px 5px 10px 25px;
  line-height: 2.4em;
  font-size: 14px;
  a {
    color: #403a3e;
  }
  a:hover {
    color: #39b8ed;
  }
}

// 右栏上标题
.right1head {
  height: 38px;
  display: flex;
  background-color: #f7f7f7;
  border-bottom: 1px solid #004787;
  .right1headleft {
    height: 30px;
    width: 60px;
    padding-top: 8px;
    color: #004787;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  }
}

// 右栏官方列表内容区
.right2word {
  font-size: 14px;
  line-height: 2.4em;
  padding-left: 5px;
  a {
    color: #403a3e;
  }
  a:hover {
    color: #39b8ed;
  }
  li {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
// 右栏官方列表加粗标题
.rightwordhead:nth-child(1) {
  padding-top: 15px;
  font-size: 16px;
  font-weight: 700;
}
.rightwordhead:nth-child(7n) {
  padding-top: 10px;
  font-size: 16px;
  font-weight: 700;
}
</style>