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
      <div class="all">
        <!-- 左侧栏 -->
        <div class="left">
          <!-- 第一栏 -->
          <div class="lsec1">
            <!-- 第一栏左侧轮播图 -->
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
            <!-- 第一栏右侧文字 -->
            <div class="lsec1rword">
              <ul>
                <li class="lsec1rword0" v-for="item in list" :key="item.id">
                  <div class="lsec1rword1">
                    <a href="#"><i></i>{{ item.title }}</a>
                  </div>
                  <!-- this.formatTime(item.creationTime) -->
                  <div class="lsec1rword2">{{ item.creationTime }}</div>
                </li>
              </ul>
            </div>
          </div>

          <!-- 第二栏 《专家》 -->
          <div class="lsec23">
            <!-- 标题区 -->
            <div class="lsec2head">
              <div class="lsec2headl">专家</div>
              <div class="lsec2headr"><a href="#">更多>></a></div>
            </div>
            <!-- 第二栏内容区 -->
            <div class="lsec23rword">
              <ul>
                <li v-for="item in zjlist" :key="item.id">
                  <a href="#">{{ item.title }}</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- 第三栏 《媒体》 -->
          <div class="lsec3">
            <!-- 标题区 -->
            <div class="lsec3head">
              <div class="lsec3headl">媒体</div>
              <div class="lsec3headr"><a href="#">更多>></a></div>
            </div>
            <!-- 第三栏内容区 -->
            <div class="lsec23rword">
              <ul>
                <li v-for="item in mtlist" :key="item.id">
                  <a href="#">{{ item.title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 右侧栏 -->
        <div class="right">
          <!-- 右侧栏第一栏 -->
          <div class="rsec1">
            <!-- 标题区 -->
            <div class="rsec1head">
              <div class="rsec1headl">专家</div>
            </div>
            <!-- 内容区 -->
            <div class="rsec1rword0">
              <div class="rsec1rword">
                <ul>
                  <li v-for="item in zjlist" :key="item.id">
                    <a href="#">{{ item.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 右栏第二栏 -->
          <div class="rsec2">
            <!-- 内容区 -->
            <div class="rsec2word">
              <ul style="list-style-type: disc">
                <li
                  v-for="item in djlist1"
                  :key="item.id"
                  class="rsec1rwordhead"
                >
                  <a href="#">{{ item.title }}</a>
                </li>
              </ul>
            </div>

            <div class="rsec2word">
              <ul style="list-style-type: disc">
                <li
                  v-for="item in djlist2"
                  :key="item.id"
                  class="rsec1rwordhead"
                >
                  <a href="#">{{ item.title }}</a>
                </li>
              </ul>
            </div>

            <!-- 查看更多 -->
            <div class="rsec2more">
              <a href="#">查看更多</a>
            </div>

            <div class="rsec2word">
              <ul>
                <li
                  v-for="item in tjlist"
                  :key="item.id"
                  class="rsec1rwordhead"
                >
                  <a href="#">{{ item.title }}</a>
                </li>
              </ul>
            </div>

            <div class="rsec2word">
              <ul style="list-style-type: disc">
                <li
                  v-for="item in sjlist"
                  :key="item.id"
                  class="rsec1rwordhead"
                >
                  <a href="#">{{ item.title }}</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- 右栏第三栏 -->
          <div class="rsec3">
            <!-- 查看更多 -->
            <div class="rsec3more">
              <a href="#">查看更多</a>
            </div>
            <!-- 右下按钮区 -->
            <div class="tage">
              <div class="tageson">
                <el-button size="medium" round>专家</el-button>
                <el-button size="medium" round>火参果资源</el-button>
                <el-button size="medium" round>橄榄</el-button>
                <el-button size="medium" round>红豆杉货源</el-button>
                <el-button size="medium" round>火鸡蛋</el-button>
                <el-button size="medium" round>豆芽货源</el-button>
                <el-button size="medium" round>洋葱货源</el-button>
                <el-button size="medium" round>红薯批发</el-button>
                <el-button size="medium" round>黄瓜货源</el-button>
                <el-button size="medium" round>猪货源</el-button>
              </div>
            </div>
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
      list: [],
      zjlist: [],
      mtlist: [],
      djlist1: [],
      djlist2: [],
      tjlist: [],
      sjlist: [],
      imgList: [
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603359265154&di=19774a64799e2d332a8eb44544657d20&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3312660160%2C2721714514%26fm%3D214%26gp%3D0.jpg",
        },
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603375961126&di=9dcbdebf13ca2470160f25b587bfb0cc&imgtype=0&src=http%3A%2F%2Fwww.nanhuwang.com%2Fuploads%2Fallimg%2Fc160716%2F14DD000CY30-235223.jpg",
        },
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603359349325&di=26e989dcc305c640f8048bc9dea5be1c&imgtype=0&src=http%3A%2F%2Fimg4.99114.com%2Fgroup1%2FM00%2F9C%2FB7%2FwKgGTFmSrReASFg7AADvpocFa3c547.jpg",
        },
      ],
      times: "",
    };
  },
  mounted() {
    this.getList();
    this.getZjList();
    this.getMtList();
    this.getDjList1();
    this.getDjList2();
    this.getTjList();
    this.getSjList();
  },
  methods: {
    // 获取左侧第一栏列表数据
    async getList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/1/8`,
        "",
        "post"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.list = res.data.rows;
      console.log(this.list);
    },

    // 获取专家列表数据
    async getZjList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/search/searchByTypeId/1316746002186768384/1/8`,
        "",
        "post"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.zjlist = res.data.rows;
      console.log(this.zjlist);
    },

    // 获取媒体列表数据
    async getMtList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/search/searchByTypeId/1316746032893267968/1/8`,
        "",
        "post"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.mtlist = res.data.rows;
      console.log(this.mtlist);
    },

    // 按点击量查询政策法规第一页
    async getDjList1() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/findByClickNum/1/4`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.djlist1 = res.data.rows;
      console.log(this.djlist1);
    },
    // 按点击量查询政策法规第二页
    async getDjList2() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/findByClickNum/2/4`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.djlist2 = res.data.rows;
      console.log(this.djlist2);
    },

    // 查询推荐政策法规
    async getTjList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/findByRecommend/1/4`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.tjlist = res.data.rows;
      console.log(this.tjlist);
    },

    // 按时间查询政策法规
    async getSjList() {
      const { data: res } = await this.reqM2Service(
        `/info/policies/findByTime/1/4`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取列表失败！");
      }
      this.sjlist = res.data.rows;
      console.log(this.sjlist);
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
      return times;
    },
  },
};
</script>



<style lang="less" scoped>
body {
  margin: 0;
  padding: 0;
}
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
.all {
  display: flex;
  width: 1130px;
  height: 1020px;
  margin: 25px 10px 25px 10px;
  // 左栏
  .left {
    flex: 75%;
  }
  // 右栏
  .right {
    flex: 25%;
    // margin: 0 3px 0 25px;
  }
}

// 左栏第一栏
.lsec1 {
  width:820px;
  height: 300px;
  display: flex;
  margin-bottom: 10px;
  // 轮播图
  .rotationpics {
    width: 35%;
    // background-image: url(img/1.jpg);
    // .el-carousel__item h3 {
    //   color: #475669;
    //   font-size: 18px;
    //   opacity: 0.75;
    //   line-height: 300px;
    //   margin: 0;
    // }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }

  // 第一栏右栏
  .lsec1rword {
    width: 65%;
    margin-left: 30px;
    .lsec1rword0 {
      width: 516px;
      display: flex;
      .lsec1rword1 {
        width: 85%;
        margin-left: 8px;
        font-size: 13px;
        line-height: 2em;
        a {
          color: #403a3e;
        }
        a:hover {
          color: #39b8ed;
        }
      }
      .lsec1rword2 {
        width: 15%;
        font-size: 8px;
        margin: 7px 0 0 5px;
        line-height: 2em;
        color: #b3b3b3;
      }
    }
  }
}

// 第二栏
.lsec2 {
  height: 325px;
  width: 820px;
}

// 第二栏标题
.lsec2head {
  width: 810px;
  height: 44px;
  display: flex;
  background-color: #f7f7f7;
  margin: 0 3px 0 3px;
  border-bottom: 2px solid #004787;
  .lsec2headl {
    height: 34px;
    width: 48px;
    background-color: #004787;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
    color: #f7f7f7;
    font-size: 16px;
    padding-top: 12px;
    padding-left: 12px;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .lsec2headr {
    margin-top: 10px;
    padding: 3px 15px 3px 685px;
    font-size: 13px;
    a {
      color: #7a776e;
    }
    a:hover {
      color: black;
    }
  }
}

// 第三栏
.lsec3 {
  height: 325px;
  width: 820px;
}

// 第三栏标题
.lsec3head {
  width: 810px;
  height: 44px;
  display: flex;
  background-color: #f7f7f7;
  margin: 0 3px 0 3px;
  border-bottom: 2px solid #004787;
  .lsec3headl {
    height: 34px;
    width: 48px;
    background-color: #004787;
    color: #f7f7f7;
    font-size: 16px;
    padding-top: 12px;
    padding-left: 14px;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
  }
  .lsec3headr {
    margin-top: 10px;
    padding: 3px 15px 3px 685px;
    font-size: 13px;
    a {
      color: #7a776e;
    }
    a:hover {
      color: black;
    }
  }
}

// 第二三栏内容区共用样式
.lsec23rword {
  width: 820px;
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

// 右栏上
.rsec1 {
  width: 285px;
  flex: 25%;
}
// 右侧第一栏
.rsec1rword0 {
  width: 265px;
  margin: 10px 3px 10px 10px;
  .rsec1rword {
    font-size: 13px;
    line-height: 2.2em;
    margin-bottom: 20px;
    a {
      color: #403a3e;
    }
    li {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    a:hover {
      color: #39b8ed;
    }
  }
}
// 右栏上标题
.rsec1head {
  width: 285px;
  height: 32px;
  display: flex;
  background-color: #f7f7f7;
  border-bottom: 2px solid #004787;
  .rsec1headl {
    height: 18px;
    width: 50px;
    background-color: #004787;
    color: #f7f7f7;
    font-size: 16px;
    padding: 6px 15px 8px 20px;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
  }
}

// 右栏第二栏
.rsec2 {
  width: 285px;
  flex: 45%;
  .rsec2word {
    font-size: 13px;
    line-height: 2em;
    margin-bottom: 5px;
    margin-left: 10px;
    a {
      color: #403a3e;
    }
    a:hover {
      color: #39b8ed;
    }
    ul {
      list-style-position: inside;
    }
    li {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.rsec2more {
  width: 285px;
  height: 20px;
  font-size: 12px;
  border-bottom: 1px solid #b7b7b5;
  margin-bottom: 5px;
  a {
    float: right;
    color: #b7b7b5;
  }
  a:hover {
    color: black;
  }
}
.rsec1rwordhead:nth-child(1) {
  font-size: 15px;
  font-weight: 800;
}

// 右栏第三栏
.rsec3 {
  width: 285px;
  flex: 30%;
}
.rsec3more {
  width: 285px;
  height: 20px;
  font-size: 12px;
  border-bottom: 1px solid #b7b7b5;
  a {
    float: right;
    color: #b7b7b5;
  }
  a:hover {
    color: black;
  }
}

.tage {
  width: 280px;
  margin: 20px 3px 10px 10px;
}
.el-button {
  background-color: rgb(240, 249, 235);
  color: green;
  margin: 0 5px 10px 10px;
}
</style>