<template>
  <div class="lxl-vp">
    <el-header class="lxl-header">
      <h1>对虾大数据可视化平台</h1>
    </el-header>
    <!-- 主内容区 -->
    <section class="mainBox">
      <div class="col">
        <div class="panel bar">
          <h3>全国不同种类对虾产量的占比</h3>
          <div class="chart chart1"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h3>全国交易量</h3>
          <div class="chart chart3"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h3>全国养殖面积</h3>
          <div class="chart chart5"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h3>全国养殖面积</h3>
          <div class="chart chart7"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="col">
        <!-- <div class="no">
          <div class="no-hd">
            <ul>
              <li>123115</li>
              <li>96756</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>xxx</li>
              <li>yyy</li>
            </ul>
          </div>
        </div> -->
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
          <div class="chartMap"></div>
        </div>
        <div class="lxl-detail">
          <div class="someThing">
            <div class="lxl-1">
              <div>
                <h2><i class="el-icon-info"></i> {{ infoData[0].name }}</h2>
                <p style="margin-top: 3px">{{ infoData[0].baseInfo }}</p>
              </div>
              <div>
                <div class="block">
                  <el-carousel>
                    <el-carousel-item
                      indicator-position="outside"
                      v-for="(item, i) in infoData"
                      :key="i"
                    >
                      <el-image :src="item.imgUrl"></el-image>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="panel bar2">
          <h3>全国对虾产量</h3>
          <div class="chart chart2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line2">
          <h3>全国对虾价格趋势</h3>
          <div class="chart chart4"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie2">
          <h3>饼状图</h3>
          <div class="chart chart6"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie2">
          <h3>饼状图</h3>
          <div class="chart chart8"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import "./china";
export default {
  data() {
    return {
      date: new Date(),
      industry: [],
      infoData: [
        {
          name: "对虾大数据平台",
          baseInfo:
            "仲恺基地，创办于1927年，是一所以伟大的爱国主义者、近代民主革命家廖仲恺先生名字命名，以现代农业科学为特色，农学、工学为优势，农、工、理、经、管、文、艺、法八大学科协调发展的广东省省属高水平应用型大学，是教育部本科教学评估优秀学校及全国首批卓越农林人才教育培养计划高校。学校办学历史悠久，文脉深厚，坐落在历史文化名城——广州。现有海珠校区、白云校区、番禺教学科研基地，占地面积2000余亩。校园集云山之神秀，汇珠水之灵气，是读书治学的理想地。",
          imgUrl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    };
  },
  mounted() {
    this.requestAllData();

    let that = this;
    // 时间器
    this.timer = setInterval(function () {
      that.date = new Date().toLocaleString();
    });
  },
  beforeDestroy: function () {
    // 时间器
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  //   #a3fea7
  methods: {
    async requestAllData() {
      try {
        const { data: res } = await this.reqM3Service("/industry", "", "get");
        console.log(res)
        if (res.code === 20000) {
          this.industry = res.data;
          this.chart1(this.industry[2]);
          this.chart2(this.industry[1]);
          this.chart3(this.industry[1]);
          this.chart4();
          this.chart5(this.industry[1]);
          this.chart6(this.industry[1]);
          this.china(this.industry[3]);
          console.log("chart1");
          console.log(this.industry);
        } else {
          this.$message.error("网络开小差了，请稍后重试 20001");
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试 19999");
        console.log(error);
      }
    },
    //   第一个
    chart1(pieOne) {
      // 数据格式处理
      let dataArray = [];
      pieOne.forEach((e) => {
        let obj = {
          value: e.output,
          name: e.species,
        };
        dataArray.push(obj);
      });

      let myChart = this.$echarts.init(document.querySelector(".chart1"));
      let option = {
        color: ["orange", "white", "#a3fea7", "rgba(162, 245, 252, 1)"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          right: 0,
          orient: "vertical",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "white",
          },
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: ["0%", "65%"],
            center: ["45%", "50%"],
            roseType: "area",
            labelLine: {
              length: 6,
              lentth3: 8,
            },
            data: dataArray,
          },
        ],
      };

      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    chart2(barOne) {
      // 横坐标和纵坐标
      let times = [];
      let outPuts = [];
      barOne.forEach((e) => {
        times.push(e.time);
        outPuts.push(e.outPut);
      });

      let myChart = this.$echarts.init(document.querySelector(".chart2"));
      let option = {
        color: ["#a3fea7"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "1%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: times,
            axisLabel: {
              color: "white",
            },
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#b7b7b7",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "white",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#b7b7b7",
              },
            },
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "40%",
            data: outPuts,
            itemStyle: {
              barBorderRadius: 5,
            },
          },
        ],
      };
      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    chart3(lineOne) {
      let times = [];
      let measureOfConsumption = [];
      lineOne.forEach((e) => {
        times.push(e.time);
        measureOfConsumption.push(e.measureOfConsumption);
      });
      let myChart = this.$echarts.init(document.querySelector(".chart3"));
      let option = {
        color: ["#728eab", "#dad9b2"],
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "1%",
          top: "10px",
          right: "4%",
          bottom: "4%",
          show: true,
          borderColor: "white",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: times,
          axisLabel: {
            color: "white",
          },
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#b7b7b7",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#b7b7b7",
            },
          },
          axisLabel: {
            color: "white",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "消费额",
            type: "line",
            data: measureOfConsumption,
            smooth: true,
          },
        ],
      };

      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      //   $(".line h3").on("click", "a", function () {
      //     // option.series[0].data = yData[$(this).index()].data[0];
      //     // option.series[1].data = yData[$(this).index()].data[1];
      //     myChart.setOption(option);
      //   });

      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    chart4() {
      let myChart = this.$echarts.init(document.querySelector(".chart4"));
      const yData = [
        {
          year: "2020",
          data: [
            [123, 123, 123, 123, 54, 32, 73],
            [56, 45, 52, 12, 56, 76, 23],
          ],
        },
        {
          year: "2021",
          data: [
            [14, 13, 53, 163, 24, 82, 33],
            [54, 45, 42, 72, 76, 36, 13],
          ],
        },
      ];
      let option = {
        color: ["#a3fea7", "grey"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          orient: "vertical",
          data: ["邮件营销", "联盟广告"],
          textStyle: {
            color: "white",
          },
          right: "10%",
        },
        grid: {
          left: "1%",
          top: "10%",
          right: "4%",
          bottom: "4%",

          show: true,
          borderColor: "white",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "周一",
              "周二",
              "周三",
              "周四",
              "周五",
              "周六",
              "周日",
              "周一",
              "周二",
              "周三",
              "周四",
              "周五",
              "周六",
              "周日",
            ],
            axisLabel: {
              color: "white",
            },
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#b7b7b7",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "white",
            },
            axisTick: {
              alignWithLabel: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#b7b7b7",
              },
            },
          },
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            smooth: true,
            areaStyle: {},
            data: [
              180,
              132,
              101,
              134,
              90,
              230,
              210,
              10,
              32,
              81,
              120,
              70,
              24,
              12,
            ],
            showSymbol: false,
            itemStyle: {
              borderColor: "#728eab",
              borderWidth: 5,
            },
          },
          {
            name: "联盟广告",
            type: "line",
            smooth: true,
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#ebf196",
                  },
                  {
                    offset: 0.8,
                    color: "#dee0ba",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0,0,0,1)",
            },
            data: [
              22,
              182,
              19,
              234,
              290,
              30,
              310,
              120,
              132,
              101,
              12,
              90,
              230,
              210,
            ],
            showSymbol: false,
            itemStyle: {
              borderColor: "#dad9b2",
              borderWidth: 5,
            },
          },
        ],
      };

      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    chart5(barTwo) {
      // 横坐标和纵坐标
      let times = [];
      let areas = [];
      barTwo.forEach((e) => {
        times.push(e.time);
        areas.push(e.area);
      });

      let myChart = this.$echarts.init(document.querySelector(".chart5"));
      let option = {
        color: ["white"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "1%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: times,
            axisLabel: {
              color: "white",
            },
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#b7b7b7",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "white",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#b7b7b7",
              },
            },
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "40%",
            data: areas,
            itemStyle: {
              barBorderRadius: 5,
            },
          },
        ],
      };
      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    chart6(lineThree) {
      // 横坐标和纵坐标
      let times = [];
      let areas = [];
      lineThree.forEach((e) => {
        times.push(e.time);
        areas.push(e.area);
      });

      let myChart = this.$echarts.init(document.querySelector(".chart6"));
      let option = {
        color: ["white"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "1%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: times,
            axisLabel: {
              color: "white",
            },
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#b7b7b7",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "white",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#b7b7b7",
              },
            },
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "40%",
            data: areas,
            itemStyle: {
              barBorderRadius: 5,
            },
          },
        ],
      };
      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    china(chinaChart) {
      let mapName = "china";
      let data = [];
      chinaChart.forEach((e) => {
        let obj = {
          value: e.value,
          name: e.name,
        };
        data.push(obj);
      });

      let geoCoordMap = {};
      // 悬浮介绍
      let toolTipData = [];
      chinaChart.forEach((e) => {
        let obj = {
          name: e.name,
          value: [
            { name: "基地个数", value: e.value },
            { name: "介绍", value: e.introduction },
          ],
        };
        toolTipData.push(obj);
      });

      let myChart = this.$echarts.init(document.querySelector(".chartMap"));

      /*获取地图数据*/
      myChart.showLoading();
      let mapFeatures = this.$echarts.getMap(mapName).geoJson.features;
      myChart.hideLoading();
      mapFeatures.forEach(function (v) {
        // 地区名称
        let name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });
      let max = 480,
        min = 9; // todo
      let maxSize4Pin = 100,
        minSize4Pin = 20;

      let convertData = function (data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
      let option = {
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (typeof params.value[2] == "undefined") {
              let toolTiphtml = "";
              for (let i = 0; i < toolTipData.length; i++) {
                if (params.name == toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ":<br>";
                  for (let j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml +=
                      toolTipData[i].value[j].name +
                      ":" +
                      toolTipData[i].value[j].value +
                      "<br>";
                  }
                }
              }
              return toolTiphtml;
            } else {
              let toolTiphtml = "";
              for (let i = 0; i < toolTipData.length; i++) {
                if (params.name == toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ":<br>";
                  for (let j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml +=
                      toolTipData[i].value[j].name +
                      ":" +
                      toolTipData[i].value[j].value +
                      "<br>";
                  }
                }
              }
              return toolTiphtml;
            }
          },
        },

        visualMap: {
          show: true,
          min: 0,
          max: 200,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            color: ["#fff", "#A5CC82"], // 白绿
          },
        },

        series: [
          {
            name: "散点",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "#05C3F9",
              },
            },
          },
          {
            type: "map",
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077",
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            animation: false,
            data: data,
          },
          {
            name: "点",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin", //气泡
            symbolSize: function (val) {
              let a = (maxSize4Pin - minSize4Pin) / (max - min);
              let b = minSize4Pin - a * min;
              b = maxSize4Pin - a * max;
              return a * val[2] + b;
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 9,
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#F62157", //标志颜色
              },
            },
            zlevel: 6,
            data: convertData(data),
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              data
                .sort(function (a, b) {
                  return b.value - a.value;
                })
                .slice(0, 5)
            ),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "yellow",
                shadowBlur: 10,
                shadowColor: "yellow",
              },
            },
            zlevel: 1,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
@font-face {
  font-family: electronicFont;
  src: url("../../fonts/KaneDemo-OVMZO.otf");
}
@font-face {
  font-family: btt;
  src: url("../../fonts/bt.ttf");
}

.someThing {
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: rgba(245, 245, 245, 0.8);
  display: flex;
  .lxl-1 {
    display: inherit;
    flex: 1;
    flex-direction: row;
    font-size: 13px;
    line-height: 30px;
    > * {
      flex: 1;
      padding: 10px;
    }
  }
}
.lxl-vp {
  background-image: url("../../assets/145.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  min-width: 1480px;
}
.lxl-header {
  display: flex;
  justify-content: center;
  color: #eafffa;
  background-color: rgba(255, 255, 255, 0.3);
  flex-direction: row;
  position: relative;
  font-family: "bt";
  font-size: 1.5rem;
}

.mainBox {
  display: flex;
  padding: 0.125rem 0.125rem 0;

  .col {
    flex: 3;
    overflow: hidden;
    .no {
      background-color: rgba(233, 233, 233, 0.1);
      .no-hd {
        ul {
          list-style: none;
          display: flex;
          flex-direction: row;
          color: rgb(196, 241, 255);
          margin-top: 3rem;
          font-size: 3rem;
          justify-content: space-around;
          font-family: "electronicFont";
        }
      }
      .no-bd {
        ul {
          list-style: none;
          display: flex;
          flex-direction: row;
          color: rgb(160, 160, 116);
          font-size: 2rem;
          justify-content: space-around;
          font-family: "electronicFont";
        }
      }
    }
    .map {
      position: relative;
      // margin-top: 3rem;
      .chartMap {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        height: 40rem;
        width: 100%;
      }
    }
    .lxl-detail {
      position: relative;
      margin-top: 43rem;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  .panel {
    position: relative;
    height: 15rem;
    border: 1px solid rgba(63, 29, 29, 0.3);
    background-color: rgba(255, 255, 255, 0.3);
    padding: 0 0.1875rem 0.5rem;
    margin-bottom: 0.1875rem;
    margin-top: 1rem;
    h3 {
      color: rgb(229, 246, 250);
      height: 0.6rem;
      line-height: 0.6rem;
      font-weight: 400;
      font-size: 20px;
      text-align: center;
      margin-top: 1rem;
      a {
        color: white;
        text-decoration: none;
        margin: 0 0.125rem;
      }
    }
  }
  .col:nth-child(2) {
    flex: 5;
    margin: 0 0.125rem 0.1875rem;
    overflow: hidden;
  }
  .chart {
    height: 14rem;
  }
}
</style>