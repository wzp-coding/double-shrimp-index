<template>
  <div class="lxl-vp">
    <div class="content">
      <el-header class="header">
        <el-button @click="toVisualizationPlatform" size="mini"> 返回 </el-button>
        <h1>对虾大数据可视化平台</h1>
      </el-header>
      <!-- 主内容区 -->
      <section class="mainbox">
        <div class="col">
          <div class="panel bar">
            <h2>广东不同种类对虾产量的占比</h2>
            <div class="chart chart1"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel line">
            <h2>广东交易量</h2>
            <div class="chart chart3"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel pie">
            <h2>广东养殖面积</h2>
            <div class="chart chart5"></div>
            <div class="panel-footer"></div>
          </div>
        </div>
        <div class="col">
          <div class="map">
            <div class="chartMap"></div>
          </div>
        </div>
        <div class="col">
          <div class="panel bar2">
            <h2>广东对虾产量</h2>
            <div class="chart chart2"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel line2">
            <h2>广东对虾价格趋势</h2>
            <div class="chart chart4"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel pie2">
            <h2>广东对虾产量与养殖面积</h2>
            <div class="chart chart6"></div>
            <div class="panel-footer"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import "./guangdong";
export default {
  data() {
    return {
      date: new Date(),
      industry: [],
      orgindata: [],
      predictdata: [],
      // 下标0位开始 1位结束
      predictTime: [],
      theRequest: null,
    };
  },
  mounted() {
    this.requestAllData();
    // 时间器
    let that = this;
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
    GetRequest() {
      var url = location.search; //获取url中"?"符后的字串
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      }
      return theRequest;
    },
    async requestAllData() {
      try {
        const { data: res } = await this.reqM3Service("/industry/1", "", "get");
        console.log("总数据");
        console.log(res);
        if (res.code === 20000) {
          this.industry = res.data;
          this.chart1(this.industry[0]);
          this.chart2(this.industry[1]);
          this.chart3(this.industry[1]);
          this.requestPrice();
          this.chart5(this.industry[1]);
          this.chart6(this.industry[1]);
          this.guangdong(this.industry[1], this.industry[2]);
        } else {
          this.$message.error("网络开小差了，请稍后重试 20001");
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试 19999");
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
    toVisualizationPlatform() {
      this.$router.push("/visualizationPlatform");
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
              lentth2: 8,
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
        title: {
          text: "单位(万吨)",
          textStyle: {
            color: "#c1c2c5",
          },
        },
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
          top: "35px",
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
            name: "年产量",
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
        title: {
          text: "单位(万吨)",
          textStyle: {
            color: "#c1c2c5",
          },
        },
        color: ["#728eab", "#dad9b2"],
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "1%",
          top: "35px",
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
      //   $(".line h2").on("click", "a", function () {
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
      // 时间切分处理结束 arr2生成的值
      let option = {
        title: {
          text: "价格(元/kg)",
          textStyle: {
            color: "#c1c2c5",
          },
        },
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
          top: "43px",
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
        title: {
          text: "单位(公顷)",
          textStyle: {
            color: "#c1c2c5",
          },
        },
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
          top: "35px",
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
        title: {
          text: "单位(kg/亩)",
          textStyle: {
            color: "#c1c2c5",
          },
        },
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
          top: "45px",
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
    guangdong(guangdongChart, guangdongDetail) {
      let myChart = this.$echarts.init(document.querySelector(".chartMap"));
      myChart.showLoading();
      var geoCoordMap = {};
      // //获取广东省地图数据
      // echarts.registerMap('广东', geoJson);
      let mapFeatures = this.$echarts.getMap("广东").geoJson.features;
      myChart.hideLoading();
      mapFeatures.forEach(function (v) {
        // 地区名称
        let name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });
      console.log("广东各市数据");
      console.log(geoCoordMap);
      // 获取广东各省养殖数据
      var data = [];
      console.log(guangdongDetail);
      guangdongDetail.forEach((e) => {
        let obj = {
          value: e.value,
          name: e.city + "市",
          introduction: e.introduction,
        };
        data.push(obj);
      });
      console.log(data);
      console.log("嘤嘤嘤");
      console.log(geoCoordMap["珠海市"]);
      console.log(data);
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              value: data[i].value,
              name: data[i].name,
              introduction: geoCoord.concat(data[i].introduction),
              // introduction:data[i].introduction
            });
          }
        }
        return res;
      };
      var xx = convertData(data);
      console.log("666");
      console.log(xx);
      console.log("1324");
      console.log(data);
      myChart.hideLoading();
      let option = {
        title: {
          top: 30,
          text: "广东省对虾养殖分布图",
          subtext: "",
          x: "center",
          textStyle: {
            fontSize: 20,
            color: "#ccc",
          },
        },
        tooltip: {
          // 显示的窗口
          trigger: "item",
          formatter: function (item) {
            var tipHtml = "";
            if (item.data.value) {
              tipHtml =
                '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' +
                item.data.name +
                "</div>" +
                '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                '<span style="font-size:18px;font-weight:bold;">' +
                "对虾基地数：" +
                item.data.value +
                " " +
                "</span>" +
                "</div>" +
                "</div>";
            } else {
              tipHtml = "<div>" + "该地区对虾暂无养殖场" + "</div>";
            }
            return tipHtml;
          },
        },
        legend: {
          show: false,
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
        },
        series: [
          {
            name: "广东省数据",
            type: "map",
            map: "广东", // 自定义扩展图表类型
            zoom: 0.55, //缩放
            showLegendSymbol: true,
            roam: true,
            scaleLimit: {
              min: 0.35,
              max: 0.62,
            },
            label: {
              // 文字
              show: true,
              color: "#fff",
              fontSize: 10,
            },
            itemStyle: {
              //地图样式
              normal: {
                borderColor: "rgba(147, 235, 248, 1)",
                borderWidth: 1, //地图边线
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
                shadowColor: "rgba(128, 217, 248, 1)",
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10,
              },
            },
            emphasis: {
              //鼠标移入动态的时候显示的默认样式
              itemStyle: {
                areaColor: "#ff8d44",
                borderColor: "#404a59",
                borderWidth: 1,
              },
            },
            layoutCenter: ["50%", "50%"],
            layoutSize: "160%",
            markPoint: {
              symbol: "none",
            },
            data: convertData(data),
          },

        ],
      };
      var count = 0;
      var timeTicket = null;
      timeTicket && clearInterval(timeTicket);
      timeTicket = setInterval(function () {
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0, //serieIndex的索引值   可以触发多个
        });
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: count, //高亮第几个数据
        });
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: count,
        });
        count++;
        if (count >= 21) {
          count = 0;
        }
      }, 3000);
      myChart.on("mouseover", function (params) {
        clearInterval(timeTicket);
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
        });
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: params.dataIndex,
        });
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: params.dataIndex,
        });
      });

      myChart.on("mouseout", function () {
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function () {
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0, //serieIndex的索引值   可以触发多个
          });
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: count,
          });
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: count,
          });
          count++;
          if (count >= 3) {
            count = 0;
          }
        }, 3000);
      });

      myChart.setOption(option);
    },
    //
  },
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
.lxl-vp {
  font-family: Arial, Helvetica, sans-serif;
  background-image: url("../../assets/bg.jpg");
  width: 1520px;
  margin: 0 auto;
}
@font-face {
  font-family: electronicFont;
  src: url(../../fonts/DS-DIGIT.TTF);
}
.header {
  position: relative;
  height: 5rem;
  background: url(../../assets/head_bg.png) no-repeat top center;
  background-size: 100% 100%;
  .el-button {
    font-size: 20px;
    color: black;
    position: absolute;
    right: 4px;
    line-height: 35px;
    background-color: #71c7dd;
    opacity: 0.5;
  }
  .el-button:hover {
    background-color: rgb(90, 130, 240);
  }
}

.content {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  /*  背景图定位 / 背景图尺寸  cover 完全铺满容器  contain 完整显示在容器内 */
  background: url(../../assets/bg.jpg) no-repeat #000;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* 行高是字体1.15倍 */
  line-height: 1.15;
  min-width: 1480px;
  max-width: 100%;
}
header h1 {
  font-size: 2rem;
  color: #fff;
  text-align: center;
  line-height: 4rem;
}
.mainbox {
  display: flex;
  padding: 0.125rem 0.125rem 0;
  .col {
    flex: 2.7;
    &:nth-child(2) {
      flex: 4;
      margin: 0 0.125rem 0.1875rem;
      overflow: hidden;
    }
    &:nth-child(3) {
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
        height: 55rem;
        width: 100%;
      }
    }
  }
  .panel {
    position: relative;
    height: 18rem;
    width: 100%;
    border: 1px solid rgba(25, 186, 139, 0.17);
    background: rgba(255, 255, 255, 0.04) url(../../assets/line\(1\).png);
    padding: 0 0.1875rem 0.5rem;
    margin-bottom: 0.1875rem;
    h2 {
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
  //通过伪类设置边角
  .panel::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
  }
  .panel::after {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
  }
  .panel .panel-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .panel .panel-footer::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
  }
  .panel .panel-footer::after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
  }
  .panel h2 {
    color: rgb(229, 246, 250);
    height: 0.6rem;
    line-height: 0.6rem;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    margin: 1rem 0;
  }
  .chart {
    height: 14.5rem;
  }
}
</style>