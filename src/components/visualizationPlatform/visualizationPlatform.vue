<template>
  <div class="lxl-vp">
    <el-header class="lxl-header">
      <h1>对虾大数据可视化平台</h1>
    </el-header>
    <!-- 主内容区 -->
    <section class="mainBox">
      <div class="col">
        <div class="panel bar">
          <h2>柱形图</h2>
          <div class="chart chart1"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>
            折线图<a href="javascript:;">2020</a><a href="javascript:;">2021</a>
          </h2>

          <div class="chart chart3"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>饼状图</h2>

          <div class="chart chart5"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="col">
        <div class="no">
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
        </div>
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
          <div class="chartMap"></div>
        </div>
      </div>
      <div class="col">
        <div class="panel bar2">
          <h2>柱形图</h2>
          <div class="chart chart2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line2">
          <h2>折线图</h2>
          <div class="chart chart4"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie2">
          <h2>饼状图</h2>
          <div class="chart chart6"></div>
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
    };
  },
  mounted() {
    this.chart1();
    this.chart2();
    this.chart3();
    this.chart4();
    this.chart5();
    this.chart6();
    this.china();
    let that = this;
    this.timer = setInterval(function () {
      that.date = new Date().toLocaleString();
    });
  },
  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  //   #a3fea7
  methods: {
    //   第一个
    chart1() {
      let myChart = this.$echarts.init(document.querySelector(".chart1"));
      let option = {
        color: ["white", "#a3fea7", "rgba(162, 245, 252, 1)", "orange"],
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
            radius: ["0%", "80%"],
            center: ["50%", "50%"],
            roseType: "area",
            labelLine: {
              length: 6,
              lentth2: 8,
            },
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
              { value: 25, name: "rose4" },
            ],
          },
        ],
      };

      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    chart2() {
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
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
            data: [10, 52, 200, 334, 390, 330, 220],
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
    chart3() {
      let myChart = this.$echarts.init(document.querySelector(".chart3"));
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
        color: ["#728eab", "#dad9b2"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["邮件营销", "联盟广告"],
          textStyle: {
            color: "white",
          },
          right: "10%",
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
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            name: "邮件营销",
            type: "line",
            data: yData[0].data[0],
            smooth: true,
          },
          {
            name: "联盟广告",
            type: "line",
            data: yData[0].data[1],
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
    chart5() {
      let myChart = this.$echarts.init(document.querySelector(".chart5"));
      let option = {
        color: ["#728eab", "#a56c89", "#dad9b2", "pink", "grey"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          textStyle: {
            color: "white",
          },
          bottom: 0,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          itemWidth: 10,
          itemHeight: 10,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 548, name: "搜索引擎" },
            ],
          },
        ],
      };

      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    chart6() {
      let myChart = this.$echarts.init(document.querySelector(".chart6"));

      let option = {
        color: [
          "#aed7e0",
          "#ecbfeb",
          "#dad9b2",
          "pink",
          "#ccc",
          "white",
          "orange",
          "#c8e4bd",
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          bottom: 0,
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
            radius: ["5%", "50%"],
            center: ["50%", "50%"],
            roseType: "area",
            labelLine: {
              length: 6,
              lentth2: 8,
            },
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
              { value: 25, name: "rose4" },
              { value: 20, name: "rose5" },
              { value: 35, name: "rose6" },
              { value: 30, name: "rose7" },
              { value: 40, name: "rose8" },
            ],
          },
        ],
      };

      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    china() {
      // 本图作者：参考秋雁南飞的《投票统计》一图，网址：http://gallery.echartsjs.com/editor.html?c=xrJU-aE-LG
      var name_title = "中国人民大学2017年各省市计划录取人数";
      var subname = "数据爬取自千栀网\n，\n上海、浙江无文理科录取人数";
      var nameColor = " rgb(55, 75, 113)";
      var name_fontFamily = "等线";
      var subname_fontSize = 15;
      var name_fontSize = 18;
      var mapName = "china";
      var data = [
        { name: "北京", value: 177 },
        { name: "天津", value: 42 },
        { name: "河北", value: 102 },
        { name: "山西", value: 81 },
        { name: "内蒙古", value: 47 },
        { name: "辽宁", value: 67 },
        { name: "吉林", value: 82 },
        { name: "黑龙江", value: 66 },
        { name: "上海", value: 24 },
        { name: "江苏", value: 92 },
        { name: "浙江", value: 114 },
        { name: "安徽", value: 109 },
        { name: "福建", value: 116 },
        { name: "江西", value: 91 },
        { name: "山东", value: 119 },
        { name: "河南", value: 137 },
        { name: "湖北", value: 116 },
        { name: "湖南", value: 114 },
        { name: "重庆", value: 91 },
        { name: "四川", value: 125 },
        { name: "贵州", value: 62 },
        { name: "云南", value: 83 },
        { name: "西藏", value: 9 },
        { name: "陕西", value: 80 },
        { name: "甘肃", value: 56 },
        { name: "青海", value: 10 },
        { name: "宁夏", value: 18 },
        { name: "新疆", value: 67 },
        { name: "广东", value: 123 },
        { name: "广西", value: 59 },
        { name: "海南", value: 14 },
      ];

      var geoCoordMap = {};
      var toolTipData = [
        {
          name: "北京",
          value: [
            { name: "文科", value: 95 },
            { name: "理科", value: 82 },
          ],
        },
        {
          name: "天津",
          value: [
            { name: "文科", value: 22 },
            { name: "理科", value: 20 },
          ],
        },
        {
          name: "河北",
          value: [
            { name: "文科", value: 60 },
            { name: "理科", value: 42 },
          ],
        },
        {
          name: "山西",
          value: [
            { name: "文科", value: 40 },
            { name: "理科", value: 41 },
          ],
        },
        {
          name: "内蒙古",
          value: [
            { name: "文科", value: 23 },
            { name: "理科", value: 24 },
          ],
        },
        {
          name: "辽宁",
          value: [
            { name: "文科", value: 39 },
            { name: "理科", value: 28 },
          ],
        },
        {
          name: "吉林",
          value: [
            { name: "文科", value: 41 },
            { name: "理科", value: 41 },
          ],
        },
        {
          name: "黑龙江",
          value: [
            { name: "文科", value: 35 },
            { name: "理科", value: 31 },
          ],
        },
        {
          name: "上海",
          value: [
            { name: "文科", value: 12 },
            { name: "理科", value: 12 },
          ],
        },
        {
          name: "江苏",
          value: [
            { name: "文科", value: 47 },
            { name: "理科", value: 45 },
          ],
        },
        {
          name: "浙江",
          value: [
            { name: "文科", value: 57 },
            { name: "理科", value: 57 },
          ],
        },
        {
          name: "安徽",
          value: [
            { name: "文科", value: 57 },
            { name: "理科", value: 52 },
          ],
        },
        {
          name: "福建",
          value: [
            { name: "文科", value: 59 },
            { name: "理科", value: 57 },
          ],
        },
        {
          name: "江西",
          value: [
            { name: "文科", value: 49 },
            { name: "理科", value: 42 },
          ],
        },
        {
          name: "山东",
          value: [
            { name: "文科", value: 67 },
            { name: "理科", value: 52 },
          ],
        },
        {
          name: "河南",
          value: [
            { name: "文科", value: 69 },
            { name: "理科", value: 68 },
          ],
        },
        {
          name: "湖北",
          value: [
            { name: "文科", value: 60 },
            { name: "理科", value: 56 },
          ],
        },
        {
          name: "湖南",
          value: [
            { name: "文科", value: 62 },
            { name: "理科", value: 52 },
          ],
        },
        {
          name: "重庆",
          value: [
            { name: "文科", value: 47 },
            { name: "理科", value: 44 },
          ],
        },
        {
          name: "四川",
          value: [
            { name: "文科", value: 65 },
            { name: "理科", value: 60 },
          ],
        },
        {
          name: "贵州",
          value: [
            { name: "文科", value: 32 },
            { name: "理科", value: 30 },
          ],
        },
        {
          name: "云南",
          value: [
            { name: "文科", value: 42 },
            { name: "理科", value: 41 },
          ],
        },
        {
          name: "西藏",
          value: [
            { name: "文科", value: 5 },
            { name: "理科", value: 4 },
          ],
        },
        {
          name: "陕西",
          value: [
            { name: "文科", value: 38 },
            { name: "理科", value: 42 },
          ],
        },
        {
          name: "甘肃",
          value: [
            { name: "文科", value: 28 },
            { name: "理科", value: 28 },
          ],
        },
        {
          name: "青海",
          value: [
            { name: "文科", value: 5 },
            { name: "理科", value: 5 },
          ],
        },
        {
          name: "宁夏",
          value: [
            { name: "文科", value: 10 },
            { name: "理科", value: 8 },
          ],
        },
        {
          name: "新疆",
          value: [
            { name: "文科", value: 36 },
            { name: "理科", value: 31 },
          ],
        },
        {
          name: "广东",
          value: [
            { name: "文科", value: 63 },
            { name: "理科", value: 60 },
          ],
        },
        {
          name: "广西",
          value: [
            { name: "文科", value: 29 },
            { name: "理科", value: 30 },
          ],
        },
        {
          name: "海南",
          value: [
            { name: "文科", value: 8 },
            { name: "理科", value: 6 },
          ],
        },
      ];
      let myChart = this.$echarts.init(document.querySelector(".chartMap"));

      /*获取地图数据*/
      myChart.showLoading();
      var mapFeatures = this.$echarts.getMap(mapName).geoJson.features;
      myChart.hideLoading();
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });

      // console.log("============geoCoordMap===================")
      // console.log(geoCoordMap)
      // console.log("================data======================")
      console.log(data);
      console.log(toolTipData);
      var max = 480,
        min = 9; // todo
      var maxSize4Pin = 100,
        minSize4Pin = 20;

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
        title: {
          text: name_title,
          subtext: subname,
          x: "center",
          textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize,
          },
          subtextStyle: {
            fontSize: subname_fontSize,
            fontFamily: name_fontFamily,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (typeof params.value[2] == "undefined") {
              var toolTiphtml = "";
              for (var i = 0; i < toolTipData.length; i++) {
                if (params.name == toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ":<br>";
                  for (var j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml +=
                      toolTipData[i].value[j].name +
                      ":" +
                      toolTipData[i].value[j].value +
                      "<br>";
                  }
                }
              }
              console.log(toolTiphtml);
              // console.log(convertData(data))
              return toolTiphtml;
            } else {
              var toolTiphtml = "";
              for (var i = 0; i < toolTipData.length; i++) {
                if (params.name == toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ":<br>";
                  for (var j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml +=
                      toolTipData[i].value[j].name +
                      ":" +
                      toolTipData[i].value[j].value +
                      "<br>";
                  }
                }
              }
              console.log(toolTiphtml);
              // console.log(convertData(data))
              return toolTiphtml;
            }
          },
        },
        // legend: {
        //     orient: 'vertical',
        //     y: 'bottom',
        //     x: 'right',
        //     data: ['credit_pm2.5'],
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
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
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            color: ["#00467F", "#A5CC82"], // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
          },
        },
        /*工具按钮组*/
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //         dataView: {
        //             readOnly: false
        //         },
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
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
              var a = (maxSize4Pin - minSize4Pin) / (max - min);
              var b = minSize4Pin - a * min;
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
.lxl-vp {
  background-image: url("../../assets/145.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
}
.lxl-header {
  display: flex;
  justify-content: center;
  color: rgb(145, 248, 168);
  background-color: rgba(255, 255, 255, 0.3);
  padding-top: 0.5rem;
  flex-direction: row;
  position: relative;

  p {
    color: rgb(167, 204, 176);

    position: absolute;
    right: 1rem;
    line-height: 50px;
    font-family: "electronicFont";
    font-size: 1.2rem;
  }
}

@font-face {
  font-family: electronicFont;
  src: url("../../fonts/KaneDemo-OVMZO.otf");
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
      margin-top: 3rem;
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
    h2 {
      color: rgb(156, 219, 235);
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