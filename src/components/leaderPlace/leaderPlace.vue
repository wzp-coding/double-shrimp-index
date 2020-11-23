<template>
  <div class="body">
    <div class="content">
    <header>
      <h1>基地信息概览</h1>
      <div class="showTime">当前时间：{{ date }}</div>
    </header>
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <h2>当前池塘投放虾苗尾数</h2>
          <div class="chart chart1"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>虾苗进货量</h2>
          <div class="chart chart2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>虾苗产量</h2>
          <div class="chart chart3"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar">
          <h2>基地概况</h2>
          <div class="chart chart4">
            <div class="no">
              <div class="no-bd">
                <ul>
                  <li>基地名称</li>
                  <li>负责人</li>
                </ul>
              </div>
              <div class="no-hd">
                <ul>
                  <li>{{ base.baseName }}</li>
                  <li>{{ base.createBy }}</li>
                </ul>
              </div>
            </div>
            <div class="no margintop">
              <div class="no-bd">
                <ul>
                  <li>池塘总面积(m²)</li>
                  <li>池塘数量</li>
                </ul>
              </div>
              <div class="no-hd">
                <ul>
                  <li>{{ totalVolume }}</li>
                  <li>{{ pondsNum }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line orderDetail">
          <h2>近期订单</h2>
          <div class="chart chart5">
            <div class="no">
              <div class="no-bd">
                <ul>
                  <li>客户名</li>
                  <li>金额/元</li>
                </ul>
              </div>
              <div class="no-hd" v-for="(item, i) in order" :key="i">
                <ul class="order">
                  <li>{{ item.customerName }}</li>
                  <li>{{ item.money }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="panel-footer"></div>
        </div>
        <!-- <div class="panel pie">
          <h2>农资剩余比例</h2>
          <div class="chart chart6"></div>
          <div class="panel-footer"></div>
        </div> -->
      </div>
      <div class="column">
        <div class="panel bar1">
          <h2>农资出库信息</h2>
          <div class="chart chart7"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line1">
          <h2>农资目前数量</h2>
          <div class="chart chart8"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie1">
          <h2>农资剩余比例</h2>
          <div class="chart chart9"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script>
import "./echarts.min.js";
export default {
  data() {
    return {
      date: new Date(),
      suppliesinNum: 0,
      base: [],
      pondsNum: 0,
      totalVolume: 0,
      // 订单
      order: []
    };
  },
  mounted() {
    // 获取基地信息
    this.getBase();
    // 获取池塘信息
    this.requestPond();
    // 获取订单信息
    this.requestOrder();
    // 获取农资出库信息
    this.requestFarmOut();
    // 获取农资目前数量
    this.requestFarmData();
    // 获取农资剩余比例
    this.requestRemainFarmSource();
    // 获取虾苗进货量
    this.requestShrimp();
    // 获取虾苗产量
    this.requestShrimpYield();
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
  methods: {
    // 获取基地信息
    async getBase() {
      try {
        const { data: res } = await this.reqM13Service("/base", "", "get");
        // console.log(res);
        if (res.code === 20000) {
          this.base = res.data[0];
        }
        // 获取池塘数量
        const { data: res2 } = await this.reqM13Service("/pond", "", "get");
        if (res2.code === 20000) {
          this.pondsNum = res2.data.length;
          res2.data.forEach((e) => {
            this.totalVolume += e.pondVolume;
          });
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试 19999");
        console.log(error);
      }
    },
    // 获取池塘投入虾苗量
    async requestPond() {
      try {
        const { data: res } = await this.reqM13Service("/pond", "", "get");
        // console.log(res);
        if (res.code === 20000) {
          this.getChart1(res.data);
        } else {
          this.$message.error("网络开小差了，请稍后重试 20001");
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试 19999");
        console.log(error);
      }
    },
    // 获取订单信息
    async requestOrder() {
      try {
        const { data: res } = await this.reqM13Service("/order", "", "get");
        console.log(res);
        this.order = res.data.slice(0,8);
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试 19999");
        console.log(error);
      }
    },
    // 获取农资出库信息
    async requestFarmOut() {
      const { data: res } = await this.reqM13Service("/suppliesout", "", "get");
      // console.log(res.data)
      if (res.code === 20000) {
        this.getChart7(res.data);
      }
    },
    // 获取农资信息
    async requestFarmData() {
      const { data: res } = await this.reqM13Service("/suppliesin", "", "get");
      // console.log(res);
      if (res.code === 20000) {
        this.getChart8(res.data);
      }
    },
    // 获取农资剩余量比例
    async requestRemainFarmSource() {
      try {
        const { data: res } = await this.reqM13Service(
          "/suppliesin",
          "",
          "get"
        );
        if (res.code === 20000) {
          this.getChart9(res.data);
        } else {
          this.$message.error("网络开小差了，请稍后重试 20001");
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试 19999");
        console.log(error);
      }
    },
    // 获取虾苗进货量
    async requestShrimp() {
      const { data: res } = await this.reqM13Service(
        "/shrimpManagement",
        "",
        "get"
      );
      // console.log(res);
      if (res.code === 20000) {
        this.getChart2(res.data);
      }
    },
    // 获取虾苗产量
    async requestShrimpYield() {
      const { data: res } = await this.reqM13Service(
        "/shrimpManagement",
        "",
        "get"
      );
      // console.log(res);
      if (res.code === 20000) {
        this.getChart3(res.data);
      }
    },
    getChart1(data) {
      let name = [];
      let inputNum = [];
      data.forEach((e) => {
        name.push(e.pondName);
        inputNum.push(e.inputNum);
      });
      let myChart = this.$echarts.init(document.querySelector(".chart1"));
      let option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          axisLabel: {
            color: "white",
          },
          type: "category",
          data: name,
        },
        yAxis: {
          name: "尾",
          nameTextStyle: {
            color: "white",
          },
          axisLabel: {
            color: "white",
          },
          type: "value",
        },
        series: [
          {
            data: inputNum,
            type: "bar",
          },
        ],
      };
      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    getChart2(data) {
      // 获取名字数组
      let name = [];
      // 获取包含数据和名字的对象
      let objData = [];
      data.forEach((e) => {
        if (name.indexOf(e.shrimpSpecies) == -1) {
          name.push(e.shrimpSpecies);
          let obj = {};
          obj.value = e.shrimpNumber;
          obj.name = e.shrimpSpecies;
          objData.push(obj);
        } else {
          objData[name.indexOf(e.shrimpSpecies)].value += e.shrimpNumber;
        }
      });
      // console.log(objData);
      let myChart = this.$echarts.init(document.querySelector(".chart2"));
      let option = {
        color: ["#FDB434", "#59CA9E", "#F76968", "#4BCCD3"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}尾 ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: name,
          textStyle: {
            color: "white",
          },
        },
        series: [
          {
            name: "虾苗进货量",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: objData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
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
    getChart3(data) {
      // 获取名字数组
      let name = [];
      // 获取包含数据和名字的对象
      let objData = [];
      data.forEach((e) => {
        if (name.indexOf(e.shrimpSpecies) == -1) {
          name.push(e.shrimpSpecies);
          let obj = {};
          obj.value = e.yield;
          obj.name = e.shrimpSpecies;
          objData.push(obj);
        } else {
          objData[name.indexOf(e.shrimpSpecies)].value += e.yield;
        }
      });
      // console.log(objData);
      let myChart = this.$echarts.init(document.querySelector(".chart3"));
      let option = {
        color: ["#FDB434", "#59CA9E", "#F76968", "#4BCCD3"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}尾 ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: name,
          textStyle: {
            color: "white",
          },
        },
        series: [
          {
            name: "虾苗产量",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: objData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
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
    getChart7(data) {
      let name = [];
      let objData = [];
      data.forEach((e) => {
        if (name.indexOf(e.suppliesName) == -1) {
          name.push(e.suppliesName);
          let obj = {};
          obj.value = e.outNumber;
          obj.name = e.suppliesName;
          objData.push(obj);
        } else {
          objData[name.indexOf(e.suppliesName)].value += e.outNumber;
        }
      });
      // console.log(objData)
      let myChart = this.$echarts.init(document.querySelector(".chart7"));
      let option = {
        color: ["#FF9F7F", "#C23531", "#61A0A8"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}kg ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: name,
          textStyle: {
            color: "white",
          },
        },
        series: [
          {
            name: "出库量",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: objData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
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
    getChart8(data) {
      let inNumber = [];
      let remainNumber = [];
      let name = [];
      data.forEach((element) => {
        if (name.indexOf(element.suppliesName) != -1) {
          inNumber[name.indexOf(element.suppliesName)] += element.inNumber;
          remainNumber[name.indexOf(element.suppliesName)] +=
            element.remainNumber;
        } else {
          inNumber.push(element.inNumber);
          remainNumber.push(element.remainNumber);
          name.push(element.suppliesName);
        }
      });
      let myChart = this.$echarts.init(document.querySelector(".chart8"));
      let option = {
        color: ["#FF9F7F", "grey"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["剩余量", "使用量"],
          textStyle: {
            color: "white",
          },
        },
        grid: {
          left: "3%",
          right: "8%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          name: "kg",
          nameTextStyle: {
            color: "white",
          },
          type: "value",
          axisLabel: {
            color: "white",
          },
        },
        yAxis: {
          type: "category",
          axisLabel: {
            color: "white",
          },
          data: name,
        },
        series: [
          {
            name: "剩余量",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight",
            },
            data: inNumber,
          },
          {
            name: "使用量",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight",
            },
            data: remainNumber,
          },
        ],
      };
      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    getChart9(data) {
      let objData = [];
      let name = [];
      data.forEach((element) => {
        if (name.indexOf(element.suppliesName) != -1) {
          objData[name.indexOf(element.suppliesName)].value +=
            element.remainNumber;
        } else {
          let obj = {};
          obj.value = element.remainNumber;
          obj.name = element.suppliesName;
          objData.push(obj);
          name.push(element.suppliesName);
        }
      });
      // console.log(objData);
      let myChart = this.$echarts.init(document.querySelector(".chart9"));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}kg ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: name,
          textStyle: {
            color: "white",
          },
        },
        series: [
          {
            name: "农资剩余量",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: objData,
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
.body {
  width: 1520px;
  margin: 0 auto;
}
@font-face {
  font-family: electronicFont;
  src: url(../../fonts/DS-DIGIT.TTF);
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
header {
  position: relative;
  height: 5rem;
  background: url(../../assets/head_bg.png) no-repeat top center;
  background-size: 100% 100%;
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
  padding: 0.125rem 0.125rem 0;
  display: flex;
}
.mainbox .column {
  flex: 3;
}
.mainbox .column:nth-child(2) {
  flex: 4;
  margin: 0 0.125rem 0.1875rem;
  overflow: hidden;
}
.mainbox .column:nth-child(3) {
  flex: 3;
  margin: 0 0.125rem 0.1875rem;
  overflow: hidden;
}
.panel {
  position: relative;
  height: 17rem;
  width: 100%;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04) url(../../assets/line\(1\).png);
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
}
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
.panel h2 a {
  margin: 0 0.1875rem;
  color: #fff;
  text-decoration: underline;
}
.panel .chart {
  height: 14rem;
}
.margintop {
  margin-top: 30px;
}
.orderDetail {
  height: 34.2rem;
}
.no {
  background: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
  .no-hd {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
  }
  .no-hd ul {
    display: flex;
    li {
      position: relative;
      flex: 1;
      text-align: center;
      height: 3rem;
      line-height: 3rem;
      font-size: 2rem;
      color: #ffeb7b;
      padding: 0.05rem 0;
      font-family: electronicFont;
      font-weight: bold;
    }
  }
}
.no .no-hd::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  top: 0;
  left: 0;
}
.no .no-hd::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
  right: 0;
  bottom: 0;
}
.no .no-hd ul li:first-child::after {
  content: "";
  position: absolute;
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}
.no .no-bd ul {
  display: flex;
}
.no .no-bd ul li {
  flex: 1;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 0.125rem;
}
.order li{
  font-size: 25px !important;
}
</style>
