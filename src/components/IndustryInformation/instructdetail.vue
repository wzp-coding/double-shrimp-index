a<template>
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
      <div class="main">
        <div class="left">
          <div class="LeftTop">
            <span style="font-size: 36px"
              >这么大的对虾见过吗？看看首届博兴虾王争霸赛的"巨无霸"</span
            >
            <el-divider></el-divider>
            <div class="pandc">
              <div class="pic">
               <el-avatar style="border:3px solid white" :size="70" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </div>
              <div class="lxl-title">
                <h3>闪电新闻</h3>
                <p style="display: flex">
                  发布时间 09 16 18:55<span style="margin-left: 15px">
                    山东养殖场专用工众号</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="wenzhang">
            <span>江北鱼米之乡，中国博兴乔庄。</span><br /><br />
            <span>农民喜庆丰收节，—虾带来百业兴。</span><br /><br />
            <span
              >齐鲁网·闪电新闻9月16日讯山东·博兴中国农民丰收节系列活动，今天拉开了帷幕，
              首场活动就是在博兴县乔庄镇打渔张森林公园举办的首届博兴虾王争霸赛。 </span
            ><br /><br />
            <span
              >说起博兴县南美白对虾产业，那可是有着“中国白对虾生态养殖第一县""的美誉，不管
              是养殖规模，还是对虾品质，那可都是响当当的全国第一。为了进一步增强"博兴对
              虾""品牌影响力，增强养殖户信心，搭建养殖对虾信息交流平台，博兴县总工会、博兴
              县渔业服务中心、乔庄镇党委政府共同发起了本届博兴虾王争霸赛。
            </span>
            <div class="block">
              <el-image :src="src"></el-image>
            </div>
            <span>山东主持人国博兴乔庄</span><br /><br />
            <span
              >说起博兴县南美白对虾产业，那可是有着“中国白对虾生态养殖第一县""的美誉，不管
              是养殖规模，还是对虾品质，那可都是响当当的全国第一。为了进一步增强"博兴对
              虾""品牌影响力
                是养殖规模，还是对虾品质，那可都是响当当的全国第一。为了进一步增强"博兴对
              虾""品牌影响力
                是养殖规模，还是对虾品质，那可都是响当当的全国第一。为了进一步增强"博兴对
              虾""品牌影响力
                是养殖规模，还是对虾品质，那可都是响当当的全国第一。为了进一步增强"博兴对
              虾""品牌影响力
            </span>
            <div class="block">
              <el-image :src="src" style="height: 430px"></el-image>
            </div>
            <span>
              说起博兴县南美白对虾产业，那可是有着“中国白对虾生态养殖第一县""的美誉，不管
              是养殖规模，还是对虾品质，那可都是响当当的全国第一。为了进一步增强"博兴对
              虾""品牌影响力，那可都是响当起博兴县南美白对虾产业，那可是有着“中国白对虾生态养殖第一县""的美誉，不 </span
            >
              <el-divider></el-divider>
            <h3 style="margin-bottom:30px;font-family: btt;">闪电新闻报纸 嘉文 报道</h3>
          </div>
        </div>
        <div class="right">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="最新资讯" name="first">
              <div class="list">
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >明日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >明日小麦价格2452多少钱一斤？xx2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >明日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >明日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >明日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="热门资讯" name="second">
              <div class="list">
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >今日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >今日小麦价格2452多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >今日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >今日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >今日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <el-tabs v-model="activeName1" @tab-click="handleClick">
            <el-tab-pane label="本周热门" name="first明">
              <div class="list">
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >明日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >明日小麦价格2452多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >明日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >明日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >明日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="本月热门" name="second2">
              <div class="list">
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >今日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >今日小麦价格2452多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >今日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >今日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
                <div class="block">
                  <el-image :src="src"></el-image>
                  <div class="rightspan">
                    <span
                      >今日小麦价格多少钱一斤？2020年9月12日小麦价格行情分析预测</span
                    >
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      activeName: "second",
      activeName1: "second2",
    };
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: btt;
  src: url("../../fonts/btt.ttf");
}
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
.main {
  margin-top: -30px;
  .left {
    float: left;
    width: 67%;
    .LeftTop {
      width: 98%;
      display: block;
      padding: 20px;
      margin: 13px 0 0 3px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      background-color: rgb(255, 250, 228);
      font-family: "btt";
      span {
        display: block;
      }
      .pandc {
        display: flex;
        .lxl-title{
          margin-top: 17px;
          margin-left: 5px;
        }
        p {
          padding-top: 6px;
          font-size: 13px;
          opacity: 0.9;
        }
      }
    }
    .wenzhang {
      width: 100%;
      font-size: 20.5px;
      display: block;
      padding: 17px 0 0 5px;
      .block .el-image {
        width: 98%;
        height: 310px;
        padding: 20px 0 35px 0;
        display: block;
      }
    }
  }
  .right {
    float: right;
    height: 700px;
    width: 30%;
    .el-tabs {
      padding-top: 8px;
    }
    .list {
      padding-top: 13px;
      width: 100%;
      .block {
        display: flex;
        display: block;
        width: 100%;
        height: 110px;
        padding-bottom: 5px;
        .el-image {
          position: absolute;
          width: 28%;
          height: 100px;
          float: left;
          display: block;
        }
        .rightspan {
          width: 70%;
          display: flex;

          float: right;
        }
      }
    }
  }
}
</style>