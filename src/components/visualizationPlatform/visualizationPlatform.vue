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
var myVue = {};
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
  beforeCreate() {
    myVue = this;
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
        if (res.code === 20000) {
          // 实际值，预测值
          const len = res.data.orgindata.length - res.data.predictdata.length;
          let arr = new Array(len).fill(0);
          this.orgindata = res.data.orgindata;
          this.predictdata = [...arr, ...res.data.predictdata];
          this.predictTime.push(res.data.early);
          this.predictTime.push(res.data.last);
          this.chart4();
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
      var times = [];
      console.log(barOne);
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
            // xAxisIndex: 1,
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
      setInterval(function () {
        var temp, temp1, i;
        temp = times[0];
        temp1 = outPuts[0];
        for (i = 0; i < times.length - 1; i++) {
          times[i] = times[i + 1];
          outPuts[i] = outPuts[i + 1];
        }
        times[i] = temp;
        outPuts[i] = temp1;
        myChart.setOption({
          xAxis: {
            data: times,
          },
          series: {
            data: outPuts,
          },
        });
      }, 1600);
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
      setInterval(function () {
        var temp, temp1, i;
        temp = times[0];
        temp1 = measureOfConsumption[0];
        for (i = 0; i < times.length - 1; i++) {
          times[i] = times[i + 1];
          measureOfConsumption[i] = measureOfConsumption[i + 1];
        }
        times[i] = temp;
        measureOfConsumption[i] = temp1;
        myChart.setOption({
          xAxis: {
            data: times,
          },
          series: {
            data: measureOfConsumption,
          },
        });
      }, 1600);
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    chart4() {
      let myChart = this.$echarts.init(document.querySelector(".chart4"));
      // 时间切分处理
      const etime = new Date(this.predictTime[0]).getTime(); //this.predictTime[0] 接口获取的数据1
      const ltime = new Date(this.predictTime[1]).getTime(); //this.predictTime[1] 接口获取的数据2
      let eltime = (ltime - etime) / (this.orgindata.length - 1); //在调用接口那里获得的data长度
      var arr = new Array(this.orgindata.length).fill(20);
      let arr2 = Array.from(arr, (x, i) => {
        let time = new Date(etime + i * eltime).toLocaleDateString();
        return time;
      });
      let preArr = this.predictdata; //预测数据
      let oginArr = this.orgindata; //实际数据
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
            data: oginArr.reverse(),
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
            data: preArr,
            showSymbol: false,
            itemStyle: {
              borderColor: "#dad9b2",
              borderWidth: 5,
            },
          },
        ],
      };
      setInterval(function () {
        var temp, temp2, temp1, i;
        temp = arr2[0];
        temp1 = oginArr[0];
        temp2 = preArr[0];
        for (i = 0; i < arr2.length - 1; i++) {
          arr2[i] = arr2[i + 1];
          oginArr[i] = oginArr[i + 1];
          preArr[i] = preArr[i + 1];
        }
        arr2[i] = temp;
        oginArr[i] = temp1;
        preArr[i] = temp2;
        myChart.setOption({
          xAxis: {
            data: arr2,
          },
          series: [
            {
              data: oginArr,
            },
            {
              data: preArr,
            },
          ],
        });
      }, 1600);
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
              normal: {
                color: function (params) {
                  //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  var colorList = [
                    "#c23531",
                    "#2f4554",
                    "#61a0a8",
                    "#d48265",
                    "#91c7ae",
                    "#749f83",
                    "#ca8622",
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
          },
        ],
      };
      setInterval(function () {
        var temp, temp1, i;
        temp = times[0];
        temp1 = areas[0];
        for (i = 0; i < times.length - 1; i++) {
          times[i] = times[i + 1];
          areas[i] = areas[i + 1];
        }
        times[i] = temp;
        areas[i] = temp1;
        myChart.setOption({
          xAxis: {
            data: times,
          },
          series: {
            data: areas,
          },
        });
      }, 1600);
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
      setInterval(function () {
        var temp, temp1, temp2, i;
        temp = times[0];
        temp1 = outPuts[0];
        temp2 = areas[0];
        for (i = 0; i < times.length - 1; i++) {
          times[i] = times[i + 1];
          outPuts[i] = outPuts[i + 1];
          areas[i] = areas[i + 1];
        }
        times[i] = temp;
        outPuts[i] = temp1;
        areas[i] = temp2;
        myChart.setOption({
          xAxis: {
            data: times,
          },
          series: [{ data: outPuts }, { data: areas }],
        });
      }, 1600);
      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    china(chinaChart, chinaChartTip) {
      //第二个参数表示存在基地
      let myChart = this.$echarts.init(document.querySelector(".chartMap"));
      myChart.hideLoading();
      let max = 480,
        min = 9; // todo
      let maxSize4Pin = 100,
        minSize4Pin = 20;
      var geoCoordMap = {}; //将基地名称及其经纬度存入
      chinaChartTip.forEach((e) => {
        if (e.baseName && e.basePositionLatitude && e.basePositionLongitude) {
          let name = e.baseName;
          geoCoordMap[name] = [];
          geoCoordMap[name][0] = e.basePositionLongitude;
          geoCoordMap[name][1] = e.basePositionLatitude;
        }
      });

      // console.log("更新后");
      // console.log(geoCoordMap);
      let data = [];
      chinaChartTip.forEach((e) => {
        if (e.basePositionLatitude) {
          let obj = {
            // baseAddr: e.baseAddr,
            baseName: e.baseName,
            baseIntroduction: e.baseIntroduction,
            // baseId: e.id,
            // x: e.basePositionLongitude,
            // y: e.basePositionLatitude,
            // value: 10,
          };
          data.push(obj);
        }
      });
      console.log("最新");
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].baseName];
          if (geoCoord) {
            res.push({
              name: data[i].baseName,
              introduction: data[i].baseIntroduction,
              value: geoCoord.concat(data[i].value),
              // name: geoCoord.concat(data[i].name)
            });
          }
        }
        return res;
      };
      console.log("want");
      let xx = [];
      xx = convertData(data);
      console.log(xx);

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
        tooltip: {
          // 显示的窗口
          trigger: "item",
          formatter: function (item) {
            var tipHtml = "",
              tipHtml =
                '<div style="width:400px;height:150px;border-radius:10px;padding-top:10px">' +
                '<h2 style="width:400px;color:#fff;height:20px;font-weight:13px;border-radius:6px;line-height:20px;text-align:center;margin:0 2px;">' +
                item.data.name +
                "</h3>" +
                '<div style="overflow:hidden;white-space:normal;word-break:break-all;width:400px;color:#494949;padding:8px 6px">' +
                '<p style="color:#3dffc1;font-weight:12px">' +
                item.data.introduction +
                "</p>" +
                "</div>" +
                "</div>";
            return tipHtml;
          },
          textStyle: {
            fontSize: 20,
          },
          position: ["30%", "80%"],
          backgroundColor: "none",
        },
        geo: {
          map: "china",
          show: true,
          roam: true,
          zoom: 1.2,
          scaleLimit: {
            min: 0.6,
            max: 1.4,
          },
          label: {
            normal: {
              align: "top",
              show: true,
              color: "#adbc1c",
              fontSize: 12,
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
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
            name: "城市",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: 2,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false,
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "#ddb926",
              },
            },
          },
          {
            name: "对虾养殖基地",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: 1,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              normal: {
                //黄字基地名  圆点介绍
                formatter: "{b}",
                position: "right",
                show: false, //基地名
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: 20,
                    color: "#ff455b",
                  },
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#c480f8", //圆点
                shadowBlur: 10,
                shadowColor: "#333",
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: 20,
                  color: "#ff455b",
                },
              },
            },
            positon: "inside",
            zlevel: 1,
          },
        ],
      };
      //保留
      myChart.setOption(option);
      myChart.on("click", function (params) {
        console.log("进入广东");
        console.log(params);
        console.log(this);
        if (this.id === "ec_1607049988943") {
          console.log("22");
        } else {
          console.log("33");
        }
        if (params.name === "广东") {
          myVue.$router.push({
            // path: "/guangdong",
            name: "province",
            params: {
              id: params.region.name,
              introduction: params.region.introduction,
            },
          });
        } else {
          console.log(this);
          myVue.$message.info("敬请期待");
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