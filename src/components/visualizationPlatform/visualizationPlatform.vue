<template>
  <div class="lxl-vp">
    <el-header class="lxl-header">
      <h1>数据可视化-Echarts</h1>
      <span>{{ date }}</span>
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

          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>饼状图</h2>

          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="col">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>12345</li>
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
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie2">
          <h2>饼状图</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
    <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>
<script>
import "./visualizationPlatform.css";
// import "./visualizationPlatform.js";
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      date: new Date(),
    };
  },
  mounted() {
    this.bar();
    this.bar2();

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
  methods: {
    //   第一个
    bar() {
      let myChart = this.$echarts.init(document.querySelector(".chart1"));
      let option = {
        color: ["#b7b7b7"],
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
    bar2() {
      let myChart = this.$echarts.init(document.querySelector(".chart2"));
      let myColor = ["#728eab", "#a56c89", "#dad9b2", "pink", "grey"];

      var option = {
        grid: {
          left: "1%",
          top: "10px",
          right: "4%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            type: "category",
            data: ["巴西", "美国", "印度", "中国", "世界人口(万)"],
            inverse: true,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#b7b7b7",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "white",
              fontSize: 12,
            },
          },
          {
            type: "category",
            data: ["702", "350", "610", "793", "664"],
            inverse: true,

            axisLine: {
              show: false,
              lineStyle: {
                color: "#b7b7b7",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "white",
            },
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 20,
              color: function (params) {
                return myColor[params.dataIndex];
              },
            },
            data: [70, 34, 60, 78, 69],
            label: {
              show: true,
              position: "inside",
              formatter: "{c}%",
            },
            yAxisIndex: 0,
          },
          {
            name: "框",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 15,
            itemStyle: {
              barBorderRadius: 20,
              color: "none",
              borderColor: "rgb(183,183,183)",
              borderWidth: 3,
              barBorderRadius: 15,
            },
            data: [100, 100, 100, 100, 100, 100],
            yAxisIndex: 1,
          },
        ],
      };

      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
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
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  padding-top: 0.5rem;
  flex-direction: row;
  position: relative;
  span {
    position: absolute;
    right: 1rem;
    line-height: 40px;
  }
}

.mainBox {
  display: flex;
  padding: 0.125rem 0.125rem 0;

  .col {
    flex: 3;
    overflow: hidden;
  }
  .panel {
    position: relative;
    height: 15rem;
    border: 1px solid rgba(63, 29, 29, 0.3);
    background-color:rgba(255, 255, 255, 0.1);
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