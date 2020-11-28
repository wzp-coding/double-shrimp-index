<template>
  <div class="lxl-vp">
    <div class="content">
      <el-header class="header">
        <h1>对虾大数据可视化平台</h1>
        <div class="showTime">当前时间：{{ date }}</div>
      </el-header>
      <!-- 主内容区 -->
      <section class="mainbox">
        <div class="col">
          <div class="panel bar">
            <h2>全国不同种类对虾产量的占比</h2>
            <div class="chart chart1"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel line">
            <h2>全国交易量</h2>
            <div class="chart chart3"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel pie">
            <h2>全国养殖面积</h2>
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
            <h2>全国对虾产量</h2>
            <div class="chart chart2"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel line2">
            <h2>全国对虾价格趋势</h2>
            <div class="chart chart4"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel pie2">
            <h2>全国对虾产量与养殖面积</h2>
            <div class="chart chart6"></div>
            <div class="panel-footer"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import "./china"; //地图信息
import "./guangdong"; //广东详情页
import "./jquery";
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
      console.log(pieOne);
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
    tooltipCharts() {
      console.log(arguments[0]);
      var myChart = echarts.init(document.getElementById("tooltipBarId"));
      var option = {
        tooltip: {},
        dataset: {
          source: [
            [
              "xAxis",
              "201701",
              "201702",
              "201703",
              "201704",
              "201705",
              "201706",
              "201707",
              "201708",
              "201709",
              "20170",
              "201710",
              "20170",
              "201801",
            ],
            [
              "amount",
              41.1,
              30.4,
              65.1,
              53.3,
              83.8,
              98.7,
              65.1,
              53.3,
              41.1,
              30.4,
              53.3,
              41.1,
              53.3,
              83.8,
            ],
          ],
        },
        xAxis: {
          type: "category",
          interval: true,
          axisLabel: {
            rotate: 45,
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {},
        color: ["#4FA8F9", "#F5A623"],
        grid: {
          show: true,
          backgroundColor: "#FAFAFA",
          left: 30,
          right: 20,
          top: 20,
        },
        series: [
          {
            type: "bar",
            smooth: true,
            seriesLayoutBy: "row",
            barWidth: 10,
          },
        ],
      };
      myChart.setOption(option);
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
          introduction: e.introduction,
        };
        data.push(obj);
      });
      console.log(geoCoordMap[data[0].name]);
      console.log("嘤嘤嘤");
      console.log(data);
      console.log(chinaChartTip);
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              introduction: data[i].introduction,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
      console.log("1346511");
      var xx = convertData(data);
      console.log("啊哈");
      console.log(xx);
      console.log(data);
      let option = {
        title: {
          top: 30,
          text: "全国对虾养殖分布图",
          subtext: "",
          x: "center",
          textStyle: {
            fontSize: 20,
            color: "#ccc",
          },
        },
        //鼠标覆盖省份事件
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            var tipHtml = "";
            if (typeof params.value[2] == "undefined") {
              // tipHtml =
              //   '<div style="height:220px;width:100px;border-radius:5px;background:#fff;box-shadow:0 0 10px 5px #aaa">' +
              //   '    <div style="height:50px;width:100%;border-radius:5px;background:#F8F9F9;border-bottom:1px solid #F0F0F0">' +
              //   '        <span style="line-height:50px;margin-left:18px">' +
              //   params.name +
              //   "</span>" +
              //   '        <span style="float:right;line-height:50px;margin-right:18px;color:#5396E3;cursor:pointer" onclick="mapTooltipClick(this);">点击查看详情</span>' +
              //   "    </div>" +
              //   '    <div style="height:110px;width:100%;background:#fff">' +
              //   '        <div style="padding-left:18px;padding-top:22px">' +
              //   '            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
              //   "            <span>上传表格数量</span>" +
              //   '            <span style="float:right;margin-right:18px">' +
              //   params.value +
              //   "万</span>" +
              //   "        </div>" +
              //   '        <div style="padding-left:18px;padding-top:14px">' +
              //   '            <span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
              //   "            <span>上传数据条数</span>" +
              //   '            <span style="float:right;margin-right:18px">' +
              //   100 +
              //   "条</span>" +
              //   "        </div>" +
              //   "    </div>" +
              //   '    <div id="tooltipBarId" style="height:200px;width:100%;border-radius:0 0 5px 0;background:#fff"></div>' +
              //   "</div>";
              // // tooltipCharts(params.name)
              return params.name + " : " + params.value + "个对虾养殖基地";
              setTimeout(function () {
                tooltipCharts(params.name);
              }, 10);
              return tipHtml;
            } else {
              return params.name + " : " + params.value[2] + "个对虾养殖基地";
            }
          },
          // position: ["40%", "40%"],
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
        // visualMap: {    //似乎没用
        //   show: false,
        //   min: 0,
        //   max: 500,
        //   left: "left",
        //   top: "bottom",
        //   text: ["高", "低"], // 文本，默认为数值文本
        //   calculable: true,
        //   seriesIndex: [1],
        //   inRange: {},
        // },
        geo: {
          map: "china",
          show: true,
          roam: true,
          zoom: 1.1,
          // label: {
          //   normal: {
          //     show: false,
          //   },
          //   emphasis: {
          //     show: false,
          //   },
          // },
          itemStyle: {         //地图样式
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
            emphasis: {
              areaColor: "#ffd181", //悬浮区背景 1
              borderWidth: 0,
              color: "green",
            },
          },
        },
        series: [
          {
            symbolSize: 6,
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
              emphasis: {
                areaColor: "#0a2dae",
                borderWidth: 0,
                color: "green",
                show: true,
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
              //气泡
              normal: {
                areaColor: "#031525",
                borderColor: "#FFFFFF",
              },
              emphasis: {
                show: true,
                areaColor: "#0a2dae",
                borderWidth: 0,
                color: "green",
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
              //标记样式
              normal: {
                color: "#da3960", //标志颜色
              },
              emphasis: {
                //鼠标移入样式
                areaColor: "#0a2dae",
                borderWidth: 0,
                color: "green",
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
      var This = this
      var count = 0;
      var timeTicket = null;
      var dataLength = option.series[0].data.length;
      timeTicket && clearInterval(timeTicket);
      timeTicket = setInterval(function () {
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
        });
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: count % dataLength,
        });
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: count % dataLength,
        });
        count++;
      }, 2500);

      myChart.on("mouseover", function (params) {
        console.log(params);
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
      myChart.on("mouseout", function (params) {
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function () {
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
          });
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: count % dataLength,
          });
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: count % dataLength,
          });
          count++;
        }, 2500);
      });
      myChart.setOption(option);
      myChart.on("click", function (params) {
        // 由于作用域的问题只能通过这个方式实现跳转
        console.log(params);
        if (params.data.name === '广东') {
          window.location.href = "#/guangdong?userId=" + params.data.name;
        } else {
          This.$message.info("敬请期待");
        }
      });
    },
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
header .showTime {
  position: absolute;
  top: 0;
  right: 0.375rem;
  line-height: 5rem;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
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
        top: -50;
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