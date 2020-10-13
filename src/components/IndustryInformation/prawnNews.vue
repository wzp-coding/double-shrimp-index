<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-container>
        <el-header>
          <div class="top">
            <div class="nav" style="width: 30%">
              <el-breadcrumb separator-class="el-icon-d-arrow-right">
                <el-breadcrumb-item style="opacity: 0.7"
                  >当前位置</el-breadcrumb-item
                >
                <el-breadcrumb-item style="opacity: 0.7"
                  >产业咨询</el-breadcrumb-item
                >
                <el-breadcrumb-item>对虾专题</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="search">
              <form action="" method="post" style="display: inline">
                <input
                  type="text"
                  class="tubiao"
                  placeholder="搜索你想的农产品资讯"
                />
                <!-- <i style="font-size: 30px" class="el-icon-search"></i> -->
              </form>
            </div>
          </div>
          <div style="margin-top: -22px">
            <el-divider></el-divider>
          </div>
        </el-header>
        <div class="zhuti">
          <div class="left">
            <div class="block">
              <div class="blockson">
                <el-image :src="src"></el-image>
                <span>水稻多少钱一斤</span>
              </div>
              <div class="blockson">
                <el-image :src="src"></el-image>
                <span>水稻多少钱一斤</span>
              </div>
              <div class="blockson">
                <el-image :src="src"></el-image>
                <span>水稻多少钱一斤</span>
              </div>
            </div>
            <div
              class="tail"
              style="
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 15px;
              "
            >
              <h3>
                <span
                  style="
                    border-left: 6px solid rgb(93, 183, 60);
                    margin-right: 5px;
                  "
                  >精彩专题</span
                >
              </h3>
              <p style="padding-top: 9px; font-size: 13px">查看更多</p>
            </div>
            <div class="diver" style="width: 100%; margin-top: -20px">
              <el-divider></el-divider>
            </div>
            <div class="main">
              <div class="mainson">
                <div class="pic">
                  <el-image :src="src"></el-image>
                </div>
                <div class="sonr">
                  <div class="h2" style="width: 100%">
                    <h2>今日小麦行情如何？为何小麦价格持续走高</h2>
                  </div>
                  <div class="pm" style="width: 100%; margin: 20px 0">
                    <p>
                      农民朋友对粮食价格变化比较关系，因为粮食的价格上涨，就是农民朋友种植粮食最好
                      的时候，就今年的小麦行情来看，总体出现了一路上涨的趋势，也有出现过短期价格...
                      <span style="color: green">[详细]</span>
                    </p>
                  </div>
                  <div class="lbtm" style="width: 100%">
                    <p style="font-size: 13px; float: left">
                      发布时间:2020-09-14 14:26<span style="margin-left: 15px">
                        阅读： 533</span
                      >
                    </p>
                    <p
                      style="
                        color: green;
                        font-size: 13px;
                        float: right;
                        padding-right: 3px;
                      "
                    >
                      财富手册
                    </p>
                    <p style="font-size: 13px; float: right">分类：</p>
                  </div>
                </div>
                <div class="divf" style="width: 100%; margin-top: -23px">
                  <el-divider></el-divider>
                </div>
              </div>
              <div class="mainson">
                <div class="pic">
                  <el-image :src="src"></el-image>
                </div>
                <div class="sonr">
                  <div class="h2" style="width: 100%">
                    <h2>今日小麦行情如何？为何小麦价格持续走高</h2>
                  </div>
                  <div class="pm" style="width: 100%; margin: 20px 0">
                    <p>
                      农民朋友对粮食价格变化比较关系，因为粮食的价格上涨，就是农民朋友种植粮食最好
                      的时候，就今年的小麦行情来看，总体出现了一路上涨的趋势，也有出现过短期价格...
                      <span style="color: green">[详细]</span>
                    </p>
                  </div>
                  <div class="lbtm" style="width: 100%">
                    <p style="font-size: 13px; float: left">
                      发布时间:2020-09-14 14:26<span style="margin-left: 15px">
                        阅读： 533</span
                      >
                    </p>
                    <p
                      style="
                        color: green;
                        font-size: 13px;
                        float: right;
                        padding-right: 3px;
                      "
                    >
                      财富手册
                    </p>
                    <p style="font-size: 13px; float: right">分类：</p>
                  </div>
                </div>
                <div class="divf" style="width: 100%; margin-top: -23px">
                  <el-divider></el-divider>
                </div>
              </div>
              <div class="mainson">
                <div class="pic">
                  <el-image :src="src"></el-image>
                </div>
                <div class="sonr">
                  <div class="h2" style="width: 100%">
                    <h2>今日小麦行情如何？为何小麦价格持续走高</h2>
                  </div>
                  <div class="pm" style="width: 100%; margin: 20px 0">
                    <p>
                      农民朋友对粮食价格变化比较关系，因为粮食的价格上涨，就是农民朋友种植粮食最好
                      的时候，就今年的小麦行情来看，总体出现了一路上涨的趋势，也有出现过短期价格...
                      <span style="color: green">[详细]</span>
                    </p>
                  </div>
                  <div class="lbtm" style="width: 100%">
                    <p style="font-size: 13px; float: left">
                      发布时间:2020-09-14 14:26<span style="margin-left: 15px">
                        阅读： 533</span
                      >
                    </p>
                    <p
                      style="
                        color: green;
                        font-size: 13px;
                        float: right;
                        padding-right: 3px;
                      "
                    >
                      财富手册
                    </p>
                    <p style="font-size: 13px; float: right">分类：</p>
                  </div>
                </div>
                <div class="divf" style="width: 100%; margin-top: -23px">
                  <el-divider></el-divider>
                </div>
              </div>
            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
              style="margin-left: 180px"
            >
            </el-pagination>
          </div>

          <el-aside>
            <div class="right">
              <div class="rtop">
                <ul>
                  <li style="font-size: 18px; font-weight: 800">
                    4G进村百户农民脱贫路上赛跑
                  </li>
                  <li>4G进村百户农民脱贫路上赛跑</li>
                  <li>4G进村百户农民脱贫路上赛跑</li>
                  <li>4G进村百户农民脱贫路上赛跑</li>
                </ul>
                <ul style="margin:17px 0">
                  <li style="font-size: 18px; font-weight: 800">
                    4G进村百户农民脱贫路上赛跑
                  </li>
                  <li>4G进村百户农民脱贫路上赛跑</li>
                  <li>4G进村百户农民脱贫路上赛跑</li>
                  <li>4G进村百户农民脱贫路上赛跑</li>
                </ul>
                <div class="tail" style="width:100%;display:flex;justify-content:space-between;margin-top:5px">
                <h3><span style="border-left: 6px solid rgb(93, 183, 60);margin-right: 5px;">精彩专题</span>
                </h3>
                <p style="padding-top:5px;font-size:13px">查看更多</p>
              </div>
              <!--分割线-->
              <div class="drive" style="margin-top:-25px;width:100%">
                <el-divider></el-divider>
              </div>
              </div>
              <div class="rmid">
                <ul>
                  <li style="font-size: 18px; font-weight: 800">
                    80后青年互联网上卖山货，助力家
                  </li>
                  <li>80后青年互联网上卖山货，助力家。</li>
                  <li>80后青年互联网上卖山货，助力家。</li>
                  <li>80后青年互联网上卖山货，助力家。</li>
                </ul>
                <br />
                <ul>
                  <li style="font-size: 18px; font-weight: 800">
                    80后青年互联网上卖山货，助力家
                  </li>
                  <li>80后青年互联网上卖山货，助力家。</li>
                  <li>80后青年互联网上卖山货，助力家。</li>
                  <li>80后青年互联网上卖山货，助力家。</li>
                </ul>
                <div class="tail" style="width:100%;display:flex;justify-content:space-between;margin-top:5px">
                <h3><span style="border-left: 6px solid rgb(93, 183, 60);margin-right: 5px;">精彩专题</span>
                </h3>
                <p style="padding-top:5px;font-size:13px">查看更多</p>
              </div>
              <!--分割线-->
              <div class="drive" style="margin-top:-25px;width:100%">
                <el-divider></el-divider>
              </div>
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
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
};
</script>
<style lang="less" scoped>
.lxl-body {
  display: flex;
  justify-content: center; //对齐方式
  min-width: 1150px;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
}
.lxl-box {
  width: 1150px;
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
      font-size-adjust:inherit;
    }
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
        width: 33%;
        span {
          padding-left: 10px;
        }
      }
    }
    .main {
      margin-top: -20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      .mainson {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .pic {
          width: 29%;
          .el-image {
            height: 170px;
          }
        }
        .sonr {
          display: flex;
          flex-direction: column;
          align-content: center;
          width: 65%;
          margin: 10px 0 0 19px;
          span {
            padding-top: 10px;
          }
        }
      }
    }
  }
  .el-aside {
    width: 30%;
    .right {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      .rbtm { 
        .el-button {
          margin-bottom: 8px;
          background-color: rgb(240, 249, 235);
          color: green;
        }
      }
      li {
        padding-top: 6px;
      }
    }
  }
}
</style>
