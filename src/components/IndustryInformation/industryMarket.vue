<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>产业咨询</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <el-container>
        <el-aside width="65%">
          <div class="left">
            <!--左大部分-->
            <div class="header">
              <!-- 图片 -->
              <div class="pictop">
                <div class="block1">
                  <el-image :src="src"></el-image>
                </div>
                <div class="block2">
                  <div>
                    <el-image class="pic1" :src="src"> </el-image>
                  </div>
                  <div>
                    <el-image class="pic2" :src="src"> </el-image>
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
                      <span style="color: #9e9e9e"> 更多 </span>
                      <i class="el-icon-caret-right"></i>
                    </div>
                  </h3>
                  <el-divider class="ccy-drvider"></el-divider>
                  <ul>
                    <li>
                      <span style="font-size: 19px; font-weight: 800"
                        >今日小麦价格多少钱一斤?...</span
                      >
                    </li>
                    <li>今日小麦价格多少钱一斤? 2020年9月18...</li>
                    <li>今日小麦价格多少钱一斤? 2020年9月11...</li>
                    <li>今日全国各地小麦价格最新行情分析</li>
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
                      <span style="color: #9e9e9e"> 更多 </span>
                      <i class="el-icon-caret-right"></i>
                    </div>
                  </h3>
                  <el-divider class="ccy-drvider"></el-divider>
                  <ul>
                    <li>
                      <span style="font-size: 19px; font-weight: 800"
                        >今日小麦多少钱一斤? 2020...</span
                      >
                    </li>
                    <li>今日小麦价格多少钱一斤? 2020年9月18...</li>
                    <li>今日小麦价格多少钱一斤? 2020年9月11...</li>
                    <li>今日全国各地小麦价格最新行情分析</li>
                    <li>今日全国各地小麦价格最新行情分析</li>
                  </ul>
                </div>
              </div>
            </div>
            <!--  -->
            <el-divider></el-divider>
            <div class="one">
              <div class="block">
                <div class="blockson1">
                  <el-image :src="src"></el-image>
                  <span>现在猕猴桃行情怎样</span>
                </div>
                <div class="blockson1">
                  <el-image :src="src"></el-image>
                  <span>现在猕猴桃行情怎样</span>
                </div>
              </div>
              <ul class="ul2">
                <li><span>今日桃子多少钱一斤? 2020...</span></li>
                <li>今日小麦价格多少钱一斤? 2020年9月18...</li>
                <li>今日小麦价格多少钱一斤? 2020年9月11...</li>
                <li>下半年生猪肉会涨价吗</li>
              </ul>
              <div class="div1">
                <ul class="div1ul1">
                  <li><span>今日菠萝多少钱一斤? 2020...</span></li>
                  <li>今日小麦价格多少钱一斤? 2020年9月18...</li>
                  <li>今日小麦价格多少钱一斤? 2020年9月11...</li>
                  <li>今日全国各地小麦价格最新行情分析</li>
                </ul>
                <ul class="ul1">
                  <li><span>今日苹果多少钱一斤? 2020...</span></li>
                  <li>今日小麦价格多少钱一斤? 2020年9月18...</li>
                  <li>今日小麦价格多少钱一斤? 2020年9月11...</li>
                  <li>今日全国各地小麦价格最新行情分析</li>
                </ul>
              </div>

              <div class="onemid">
                <h3 style="margin-right: 5px">
                  <i>&nbsp;</i> <span style="opacity: 1">精彩专题</span>
                </h3>
                <span style="margin-left: 3px">查看更多</span>
              </div>
              <div class="zhuangti">
                <div class="ztitop">
                  <div class="ztitopblock">
                    <el-image :src="src"></el-image
                    ><span>现在桃子行情怎么样....</span>
                  </div>
                  <div class="ztitopblock">
                    <el-image :src="src"></el-image
                    ><span>现在桃子行情怎么样</span>
                  </div>
                  <div class="ztitopblock">
                    <el-image :src="src"></el-image
                    ><span>现在桃子行情怎么样</span>
                  </div>
                  <div class="ztitopblock">
                    <el-image :src="src"></el-image
                    ><span>现在桃子行情怎么样</span>
                  </div>
                </div>
                <div class="ztison">
                  <el-image :src="src" style="padding-top: 3px"></el-image>
                  <div class="ztisontext">
                    <h3 style="padding-top: 10px">
                      选择、坚持、热爱,他们把货从农村卖向全国
                    </h3>
                    <p
                      style="
                        font-size: 16px;
                        padding-bottom: 15px;
                        padding-top: 10px;
                      "
                    >
                      编者按:“我与惠农网的故事”征文比赛已圆满结束，本次活动我们收到了482个真实故事，感谢你
                      们用文字和图片记录下了与惠农网的“独家记忆”.中感谢你们在故事...<span
                        style="color: green"
                        >[详细]</span
                      >
                    </p>
                    <p style="font-size: 13px; float: left">
                      发布时间:2020-09-14 14:26<span style="margin-left: 15px"
                        >阅读： 533</span
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
                <div class="ztison">
                  <el-image :src="src" style="padding-top: 3px"></el-image>
                  <div class="ztisontext">
                    <h3 style="padding-top: 10px">
                      选择、坚持、热爱,他们把货从农村卖向全国
                    </h3>
                    <p
                      style="
                        font-size: 16px;
                        padding-bottom: 15px;
                        padding-top: 10px;
                      "
                    >
                      编者按:“我与惠农网的故事”征文比赛已圆满结束，本次活动我们收到了482个真实故事，感谢你
                      们用文字和图片记录下了与惠农网的“独家记忆”.中感谢你们在故事...<span
                        style="color: green"
                        >[详细]</span
                      >
                    </p>
                    <p style="font-size: 13px; float: left">
                      发布时间:2020-09-14 14:26<span style="margin-left: 15px"
                        >阅读： 533</span
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
                <div class="ztison">
                  <el-image :src="src" style="padding-top: 3px"></el-image>
                  <div class="ztisontext">
                    <h3 style="padding-top: 10px">
                      选择、坚持、热爱,他们把货从农村卖向全国
                    </h3>
                    <p
                      style="
                        font-size: 16px;
                        padding-bottom: 15px;
                        padding-top: 10px;
                      "
                    >
                      编者按:“我与惠农网的故事”征文比赛已圆满结束，本次活动我们收到了482个真实故事，感谢你
                      们用文字和图片记录下了与惠农网的“独家记忆”.中感谢你们在故事...<span
                        style="color: green"
                        >[详细]</span
                      >
                    </p>
                    <p style="font-size: 13px; float: left">
                      发布时间:2020-09-14 14:26<span style="margin-left: 15px"
                        >阅读： 533</span
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
                <div class="ztison">
                  <el-image :src="src" style="padding-top: 3px"></el-image>
                  <div class="ztisontext">
                    <h3 style="padding-top: 10px">
                      选择、坚持、热爱,他们把货从农村卖向全国
                    </h3>
                    <p
                      style="
                        font-size: 16px;
                        padding-bottom: 15px;
                        padding-top: 10px;
                      "
                    >
                      编者按:“我与惠农网的故事”征文比赛已圆满结束，本次活动我们收到了482个真实故事，感谢你
                      们用文字和图片记录下了与惠农网的“独家记忆”.中感谢你们在故事...<span
                        style="color: green"
                        >[详细]</span
                      >
                    </p>
                    <p style="font-size: 13px; float: left">
                      发布时间:2020-09-14 14:26
                      <span style="margin-left: 15px">阅读： 533</span>
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
              </div>
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
                <span style="color: #9e9e9e"> 更多 </span>
                <i class="el-icon-caret-right"></i>
              </div>
            </h3>
            <el-divider class="ccy-drvider"></el-divider>
            <div class="righttext">
              <ul style="margin-left: 17px">
                <li>
                  <span style="font-size: 19px; font-weight: 800"
                    >农村农业部关于完善农村...</span
                  ><span style="float: right">2天前</span>
                </li>
                <li>
                  农村干什么挣钱投资小?首要...<span style="float: right"
                    >2天前</span
                  >
                </li>
                <li>
                  今日小麦价格多少钱一斤? 2020<span style="float: right"
                    >2天前</span
                  >
                </li>
                <li>
                  今日全国各地小麦价格最新行情<span style="float: right"
                    >2天前</span
                  >
                </li>
                <li>
                  农村干什么挣钱投资小?首要...<span style="float: right"
                    >2天前</span
                  >
                </li>
                <li>
                  今日小麦价格多少钱一斤? 2020<span style="float: right"
                    >2天前</span
                  >
                </li>
                <li>
                  今日全国各地小麦价格最新行情<span style="float: right"
                    >2天前</span
                  >
                </li>
                <li>
                  农村干什么挣钱投资小?首要...<span style="float: right"
                    >2天前</span
                  >
                </li>
                <li>
                  4G进村百户农民脱贫路上赛跑<span style="float: right"
                    >2天前</span
                  >
                </li>
              </ul>
              <br />
              <li>
                <span style="font-size: 15px; font-weight: 800"
                  >4G进村百户农民脱贫路上赛跑</span
                >
              </li>
              <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
              <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
              <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
              <br /><br />
              <li>
                <span style="font-size: 15px; font-weight: 800"
                  >4G进村百户农民脱贫路上赛跑</span
                >
              </li>
              <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
              <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
              <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
              <br />
              <p style="float: right; opacity: 0.6">查看更多</p>
            </div>
            <div class="rightmd" style="margin-top: 20px; padding-top: 12px">
              <ul style="margin-left: 17px">
                <li style="font-size: 16px; font-weight: 800">
                  惠农代卖：新手夫妇闯市场，一招...
                </li>
                <li>独家记忆|乘风破浪的90后姑娘:能成为果农眼...</li>
                <li>80后青年互联网上卖山货，助力家乡脱贫致富！</li>
                <li>精准卖货，他是农产品的“经纪人”</li>
              </ul>
              <ul style="margin: 10px 0 30px 16px">
                <li>
                  <span style="font-size: 15px; font-weight: 800"
                    >惠农代卖：新手夫妇闯市场，一招...</span
                  ><span style="float: right">2天前</span>
                </li>
                <li>独家记忆|乘风破浪的90后姑娘：能成为果农眼...</li>
                <li>80后青年互联网上卖山货，助力家乡脱贫致富！</li>
                <li>精准卖货，他是农产品的“经纪人”</li>
              </ul>
              <h3 style="display: inline">
                <span
                  style="
                    border-left: 6px solid rgb(93, 183, 60);
                    margin-right: 5px;
                  "
                ></span>
                热门资讯
              </h3>
              <p style="float: right; padding-top: 9px; opacity: 0.6">
                查看更多
              </p>
            </div>
            <div class="tage">
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
        </el-main>
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
  created() {},
};
</script>
<style lang="less" scoped>
.lxl-body {
  display: flex;
  justify-content: center;
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
.header {
  width: 100%;
  display: flex;
  .pictop {
    display: flex;
    flex-direction: column;
    flex: 4.7;
    .block1 {
      width: 100%;
    }
    .block2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      > * {
        width: 198px;
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
      }
    }
  }
}

.ccy-drvider {
  margin: 10px 0 7px 0;
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
  float: left;
  width: 100%;
  padding: 1px;
  .block {
    display: inline-block;
    width: 400px;
    span {
      display: block;
    }
    height: 130px;
    .blockson1 {
      width: 180px;
      float: left;
      height: 110px;
      padding-top: 10px;
      margin-right: 10px;
      .el-image {
        width: 170px;
        height: 90px;
      }
    }
  }
  ul li span {
    font-size: 19px;
    font-weight: 800;
  }
  .div2 {
    float: left;

    margin-bottom: 10px;
  }
  .ul1 {
    margin: 5px 0 0 154px;
    float: left;
  }
  .div1 {
    float: left;
    width: 800px;
    margin-bottom: 10px;
    .div1ul1 {
      float: left;
      padding-left: 18px;
    }
  }
  .onemid {
    h3 {
      display: inline-block;
      padding-top: 6px;
      i {
        border-left: 6px solid rgb(93, 183, 60);
        margin-right: 5px;
      }
    }
    span {
      float: right;
      padding-top: 3px;
      opacity: 0.6;
    }
  }
  .ztitop {
    display: inline-block;
    .ztitopblock {
      height: 160px;
      width: 200px;
      float: left;
      .el-image {
        float: left;
        width: 190px;
        height: 115px;
      }
      span {
        padding-left: 8px;
        display: block;
      }
    }
  }
  .ztison {
    .el-image {
      width: 240px;
      height: 140px;
      float: left;
      margin-right: 12px;
    }
  }
  .ul2 {
    float: right;
    margin: 10px 34px 0 0;
  }
}
li {
  padding: 6px 0 3px 0;
}
ul {
  padding-bottom: 5px;
}
a {
  list-style: none;
  text-decoration: none;
}
.zhuangti {
  border-top: 1px solid rgb(220, 220, 220);
}
.ztitop .el-image {
  display: inline-block;
  margin: 5px 10px 10px 0;
}
.ztison {
  clear: both;
  height: 150px;
  border-bottom: 1px solid rgb(220, 220, 220);
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
.rightmd li {
  font-size: 14.5px;
  font-weight: 400;
}
.tage {
  padding: 15px 0 0 8px;
  border-top: 1px solid black;
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