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
        <!-- <div class="panel pie">
          <h3>全国养殖面积</h3>
          <div class="chart chart7"></div>
          <div class="panel-footer"></div>
        </div> -->
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
        <!-- <div class="lxl-detail">
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
        </div> -->
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
          <h3>全国对虾产量与养殖面积</h3>
          <div class="chart chart6"></div>
          <div class="panel-footer"></div>
        </div>
        <!-- <div class="panel pie2">
          <h3>饼状图</h3>
          <div class="chart chart8"></div>
          <div class="panel-footer"></div>
        </div> -->
      </div>
    </section>
  </div>
</template>
<script>
import "./china";
import "./guangdong";
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
      orgindata: [],
      predictdata: [],
      // 下标0位开始 1位结束
      predictTime: [],
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
        console.log(res);
        if (res.code === 20000) {
          this.industry = res.data;
          this.chart1(this.industry[2]);
          this.chart2(this.industry[1]);
          this.chart3(this.industry[1]);
          this.requestPrice();
          this.chart5(this.industry[1]);
          this.chart6(this.industry[1]);
          this.china(this.industry[3], this.industry[0]);
          console.log("chart1");
          console.log(this.industry);
        } else {
          this.$message.error("网络开小差了，请稍后重试 20001");
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试 19999");
        this.$router.go(0);
        console.log(error);
      }
    },
    async requestPrice() {
      try {
        const { data: res } = await this.reqM3Service(
          "/price/prediction",
          "",
          "post"
        );
        console.log(res);
        if (res.code === 20000) {
          // 实际值，预测值
          const len = res.data.orgindata.length - res.data.predictdata.length;
          let arr = new Array(len).fill(0);

          this.orgindata = res.data.orgindata;
          this.predictdata = [...arr, ...res.data.predictdata];
          console.log(arr, this.predictdata);

          this.predictTime.push(res.data.early);
          this.predictTime.push(res.data.last);

          this.chart4();
          console.log("chart4");
        } else {
          this.$message.error("网络开小差了，请稍后重试 20001");
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试 19999");
        console.log(error);
      }
    },

    //   左边第一个扇形图
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
            name: "占据面积比例",
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
    //
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
            data: times.reverse(),
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
            data: outPuts.reverse(),
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
          data: times.reverse(),
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
            data: measureOfConsumption.reverse(),
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
      // 时间切分处理
      const etime = new Date(this.predictTime[0]).getTime();
      const ltime = new Date(this.predictTime[1]).getTime();
      let eltime = (ltime - etime) / (this.orgindata.length - 1);
      let arr = new Array(this.orgindata.length).fill(20);
      let arr2 = Array.from(arr, (x, i) => {
        let time = new Date(etime + i * eltime).toLocaleDateString();
        return time;
      });

      console.log(arr2);
      // 时间切分处理结束 arr2生成的值

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
            data: arr2,
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
            name: "实际值",
            type: "line",
            smooth: true,
            areaStyle: {},
            data: this.orgindata.reverse(),
            showSymbol: false,
            itemStyle: {
              borderColor: "#728eab",
              borderWidth: 5,
            },
          },
          {
            name: "预测值",
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
            data: this.predictdata,
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
            data: times.reverse(),
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
            data: areas.reverse(),
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
      let outPuts = [];
      lineThree.forEach((e) => {
        times.push(e.time);
        areas.push(e.area);
        outPuts.push(e.outPut);
      });

      let myChart = this.$echarts.init(document.querySelector(".chart6"));

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
            data: times.reverse(),
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
            name: "对虾产量",
            type: "line",
            smooth: true,
            areaStyle: {},
            data: outPuts.reverse(),
            showSymbol: false,
            itemStyle: {
              borderColor: "#728eab",
              borderWidth: 5,
            },
          },
          {
            name: "养殖面积",
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
            data: areas.reverse(),
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
    china(chinaChart, chinaChartTip) {
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

      let convertData = function (chinaChartTip) {
        let res = [];
        chinaChartTip.forEach((item) => {
          res.push({
            value: [item.baseIntroduction, item.createBy, item.id],
            coord: [item.basePositionLatitude, item.basePositionLongitude],
            name: item.baseName,
          });
        });
        return res;
      };
      var markPointData = [
        {
          name: "齐齐哈尔",
          coord: [123.97, 47.33],
          runConut: "537",
          num: "234",
        },
        {
          name: "青岛",
          coord: [120.33, 36.07],
          runConut: "120",
          num: "196",
        },
        {
          name: "温州",
          coord: [120.65, 28.01],
          runConut: "50",
          num: "120",
        },
      ];
      let option = {
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (typeof params.value[2] == "undefined") {
              if (!params.name || params.name == "") return "暂无数据";
              else {
                return (
                  params.name + " : <br/> " + params.value + "个对虾养殖基地"
                );
              }
            } else {
              let str = `${params.name} :<br/> 经度为${params.value[0]}，纬度为${params.value[1]}`;
              return str;
            }
          },
        },

        visualMap: {
          show: false,
          min: 0,
          max: 200,
          left: "30%",
          top: "80%",
          calculable: true,
          seriesIndex: [1],
          inRange: {
            color: ["#fff", "#A5CC82"], // 白绿
          },
        },
        markPoint: {
          //图表标注。
          symbolSize: 55, //图形大小
          label: {
            normal: {
              show: true,
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            normal: {
              color: "rgba(72,150,128,1)",
            },
          },
          data: markPointData,
        },
        series: [
          {
            name: "基地散点图",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
            //小圆点的大小
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
            //小圆点的样式
            itemStyle: {
              normal: {
                color: "#ffeb7b",
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
        ],
      };
      myChart.setOption(option);

      myChart.on("click", function (params) {
        // 由于作用域的问题只能通过这个方式实现跳转
        console.log(params, params.event.name);
        if (params.data.name === "广东") {
          window.location.href = "#/guangdong";
        } else {
           alert("敬请期待")
        }
      });
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