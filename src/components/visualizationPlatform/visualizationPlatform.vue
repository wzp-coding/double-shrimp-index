<template>
  <div class="lxl-vp">
    <el-header class="lxl-header">
      <h1>对虾大数据可视化平台</h1>
    </el-header>
    <!-- 主内容区 -->
    <section class="mainBox">
      <div class="col">
        <div class="panel bar">
          <!-- <h3>全国不同种类对虾产量的占比</h3> -->
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
      </div>
      <!-- 中国地图 -->
      <div class="col">
        <div class="map">
          <div class="chartMap"></div>
        </div>
      </div>
      <div class="col">
        <div class="panel bar2">
          <h3>全国对虾产量 单位/吨</h3>
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
      </div>
    </section>
  </div>
</template>
<script>
import "./china"; //地图信息
import "./guangdong"; //广东详情页
export default {
  data() {
    return {
      date: new Date(),
      industry: [],
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
        } else {
          this.$message.error("网络开小差了，请稍后重试 ALL 20001");
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试 ALL 19999");
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
          this.$message.error("网络开小差了，请稍后重试price 20001");
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试  price19999");
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
      let myChart = this.$echarts.init(document.querySelector(".chartMap"));
      myChart.hideLoading();
      let max = 480,
        min = 9; // todo
      let maxSize4Pin = 100,
        minSize4Pin = 20;
      var geoCoordMap = {
        台湾: [121.5135, 25.0308],
        黑龙江: [127.9688, 45.368],
        内蒙古: [110.3467, 41.4899],
        吉林: [125.8154, 44.2584],
        北京市: [116.4551, 40.2539],
        辽宁: [123.1238, 42.1216],
        河北: [114.4995, 38.1006],
        天津: [117.4219, 39.4189],
        山西: [112.3352, 37.9413],
        陕西: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        宁夏: [106.3586, 38.1775],
        青海: [101.4038, 36.8207],
        新疆: [87.9236, 43.5883],
        西藏: [91.11, 29.97],
        四川: [103.9526, 30.7617],
        重庆: [108.384366, 30.439702],
        山东: [117.1582, 36.8701],
        河南: [113.4668, 34.6234],
        江苏: [118.8062, 31.9208],
        安徽: [117.29, 32.0581],
        湖北: [114.3896, 30.6628],
        浙江: [119.5313, 29.8773],
        福建: [119.4543, 25.9222],
        江西: [116.0046, 28.6633],
        湖南: [113.0823, 28.2568],
        贵州: [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        广东: [113.12244, 23.009505],
        广西: [108.479, 23.1152],
        海南: [110.3893, 19.8516],
        上海: [121.4648, 31.2891],
      };
      let data = [];
      chinaChart.forEach((e) => {
        let obj = {
          value: e.value,
          name: e.name,
        };
        data.push(obj);
      });
      console.log(chinaChartTip);
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
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
        backgroundColor: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#0f378f", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#00091a", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        title: {
          top: 20,
          text: "全国对虾养殖分布图",
          subtext: "",
          x: "center",
          textStyle: {
            color: "#ccc",
          },
        },

        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (typeof params.value[2] == "undefined") {
              return params.name + " : " + params.value + "个对虾养殖基地";
            } else {
              return params.name + " : " + params.value[2] + "个对虾养殖基地";
            }
          },
        },

        legend: {
          orient: "vertical",
          y: "bottom",
          x: "right",
          data: ["pm2.5"],
          textStyle: {
            color: "#fff",
          },
        },
        visualMap: {
          show: false,
          min: 0,
          max: 500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
          },
        },
        geo: {
          map: "china",
          show: true,
          roam: true,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#3a7fd5",
              borderColor: "#0a53e9", //线
              shadowColor: "#092f8f", //外发光
              shadowBlur: 20,
            },
            emphasis: {
              areaColor: "#0a2dae", //悬浮区背景
            },
          },
        },
        series: [
          {
            symbolSize: 5,
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
                color: "#fff",
              },
            },
            name: "light",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
          },
          {
            type: "map",
            map: "china",
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false,
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
                borderColor: "#FFFFFF",
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            animation: false,
            data: data,
          },
          {
            name: "Top 5",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: [50, 50],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 9,
                },
                formatter(value) {
                  return value.data.value[2];
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#da3960", //标志颜色
              },
            },
            data: convertData(data),
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            zlevel: 1,
          },
        ],
      };

      //保留

      myChart.setOption(option);

      myChart.on("click", function (params) {
        // 由于作用域的问题只能通过这个方式实现跳转
        console.log(params, params.event.name);
        if (params.data.name === "广东") {
          window.location.href = "#/guangdong";
        } else {
          alert("敬请期待");
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.lxl-vp {
  background-image: url("../../assets/bg.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  justify-content: center;
  min-width: 1024px;
}
.lxl-header {
  display: flex;
  justify-content: center;
  color: #eafffa;
  background-color: rgba(255, 255, 255, 0.3);
  flex-direction: row;
  position: relative;
  font-size: 1.5rem;

}

.mainBox {
  display: flex;
  padding: 0.125rem 0.125rem 0;
  justify-content: center;
  .col {
    flex: 3;
    &:nth-child(2) {
      flex: 5;
      margin: 0 0.125rem 0.1875rem;
      overflow: hidden;
    }
    .map {
      position: relative;
      .chartMap {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        height: 40rem;
        width: 100%;
      }
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
      margin-bottom: 5px;
    }
  }
  .chart {
    height: 14.5rem;
  }
}
</style>