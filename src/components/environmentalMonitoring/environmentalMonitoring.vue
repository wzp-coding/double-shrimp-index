<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>环境监控</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div class="lxl-container">
        <div class="lxl-left">
          <div>
            <el-table :data="checkItemDataList" height="640px" stripe>
              <el-table-column
                v-for="item in tableColumnList"
                :label="item.propName"
                :property="item.prop"
                :key="item.prop"
                align="center"
                width="110px"
              >
              </el-table-column>
            </el-table>
          </div>
        </div>

        <!-- 图表区域 -->
        <div class="lxl-main">
          <div>
            <div class="chart1" ref="chart">
            </div>

            <div class="lxl-em">
              <div>请先添加数据</div>
              <iframe
                :src="monitor.vedioUrl"
                frameborder="no"
                height="320px"
                width="100%"
                style="background: rgba(0, 0, 0, 0.2)"
              ></iframe>
            </div>
            <!-- <el-alert
              title="预测到接下来一段时间内，当前通道值可能会超出或低于阀值，请及时做出相应处理"
              type="warning"
              effect="dark"
              v-if="isShowWarn"
            >
            </el-alert> -->
            <!-- 预测图表 -->
          </div>
        </div>
        <!-- 右侧区域 -->
        <div class="lxl-right">
          <div>
            <!-- 右侧名称区域 -->
            <el-alert title="环境监测平台" type="success" :closable="false">
            </el-alert>
            <!-- 右侧树区 -->
            <el-tree
              :props="defaultProps"
              :load="loadNode"
              accordion
              lazy
              @node-click="handleNodeClick"
              :highlight-current="true"
              empty-text="暂无数据"
              node-key="id"
            >
            </el-tree>
            <el-tree
              :data="monitorInfo"
              :props="defaultProps"
              default-expand-all
              highlight-current
              @node-click="handleNodeClick2"
            ></el-tree>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 控制配置选项
      defaultProps: {
        label: "name",
        children: "children",
        isLeaf: "leaf",
      },

      // token值
      token: "Bearer " + window.sessionStorage.getItem("token"),

      // 基地id
      baseId: "",

      // 存储设备信息
      equipmentList: [],

      // 水质检测项
      pondCheckItemName: [
        {
          value: "dissolvedOxygen",
          name: "溶解氧/%",
          leaf: true,
        },
        {
          value: "waterTemperature",
          name: "水温/℃",
          leaf: true,
        },
        {
          value: "phValue",
          name: "pH/pH",
          leaf: true,
        },
        {
          value: "ammoniaNitrogen",
          name: "氨氮/%",
          leaf: true,
        },
        {
          value: "conductivity",
          name: "电导率/(μS/cm)",
          leaf: true,
        },
        {
          value: "turbidity",
          name: "浊度/NTU",
          leaf: true,
        },
        {
          value: "permanganateIndex",
          name: "高猛酸盐指数/(mg/L)",
          leaf: true,
        },
        {
          value: "phosphorus",
          name: "总磷/(mg/L)",
          leaf: true,
        },
        {
          value: "nitrogen",
          name: "总氮/(mg/L)",
          leaf: true,
        },
        {
          value: "chlorophyll",
          name: "叶绿素α/(mg/L)",
          leaf: true,
        },
        {
          value: "algalDensity",
          name: "藻密度/(cells/L)",
          leaf: true,
        },
        {
          value: "waterLevel",
          name: "水位/m",
          leaf: true,
        },
      ],

      // 气象检测项
      weatherCheckItemName: [
        {
          value: "electricEnergy",
          name: "电能/mV",
          leaf: true,
        },
        {
          value: "illumination",
          name: "光照/Lux",
          leaf: true,
        },
        {
          value: "windSpeed",
          name: "风速/(m/s)",
          leaf: true,
        },
        {
          value: "windDirect",
          name: "风向/度",
          leaf: true,
        },
        {
          value: "airTemperature",
          name: "气温/℃",
          leaf: true,
        },
        {
          value: "humidity",
          name: "湿度/%",
          leaf: true,
        },
        {
          value: "rain",
          name: "雨量/mm",
          leaf: true,
        },
        {
          value: "soilTemperature",
          name: "土温/℃",
          leaf: true,
        },
        {
          value: "soilMoisture",
          name: "土湿/%",
          leaf: true,
        },
      ],

      // 类型id'
      typeId: "1",

      // 检测项数据存储
      checkItemDataList: [],

      /* 预测数据开始 */
      form: {
        // 设备id
        equipmentId: "1",
        // 检测项
        checkItemName: "dissolvedOxygen",
        // 开始时间
        startTime: "2018-06-08 16:20:00",
        // 结束时间
        endTime: "",
        // 监测类型
        typeId: "1",
      },

      // 图表中的数据间隔
      interval: "",

      // 单位
      unit: "溶解氧/%",

      /* 预测数据结束 */

      // 初始化动态的搜索表头数组
      // 气象
      tableWeaterList: [
        {
          propName: "采集时间",
          prop: "acquisitionTime",
        },
        {
          propName: "电能/mV",
          prop: "electricEnergy",
        },
        {
          propName: "光照/Lux",
          prop: "illumination",
        },
        {
          propName: "风速/(m/s)",
          prop: "windSpeed",
        },
        {
          propName: "风向/度",
          prop: "windDirect",
        },
        {
          propName: "气温/℃",
          prop: "airTemperature",
        },
        {
          propName: "湿度/%",
          prop: "humidity",
        },
        {
          propName: "雨量/mm",
          prop: "rain",
        },
        {
          propName: "土温/℃",
          prop: "soilTemperature",
        },
        {
          propName: "土湿/%",
          prop: "soilMoisture",
        },
      ],

      // 水质
      tableWaterList: [
        {
          propName: "日期",
          prop: "acquisitionTime",
        },
        {
          propName: "溶解氧/%",
          prop: "dissolvedOxygen",
        },
        {
          propName: "PH值/pH",
          prop: "phValue",
        },
        {
          propName: "氨氮/%",
          prop: "ammoniaNitrogen",
        },
        {
          propName: "水温/℃",
          prop: "water_temperature",
        },
        {
          propName: "水位/m",
          prop: "waterLevel",
        },
      ],

      // 监控位置
      monitoringLocationList: [],

      // 存储监控节点的信息
      monitor: {
        name: "",
        id: "",
        vedioUrl: "",
      },

      // 监控数据
      monitorInfo: [
        {
          name: "监控位置",
          children: [],
        },
      ],
      // 存储监控视频的默认值
      monitorDefault: [],
    };
  },
  computed: {
    /* 通过 */
    tableColumnList: function () {
      return this.form.typeId === "0"
        ? this.tableWeaterList
        : this.tableWaterList;
    },
  },
  created() {
    // 判断是否登录，或者是否创建基地
    this.isExit();
    this.open();
  },
  methods: {
    // 点击获取预测节点信息
    handleNodeClick(data) {
      if (data.equipmentId) {
        this.form.equipmentId = data.equipmentId;
      } else if (data.typeId) {
        this.typeId = data.typeId;
      } else if (data.value) {
        this.unit = data.name;
        this.form.typeId = this.typeId;
        this.form.checkItemName = data.value;
        // 选中预测项进行预测
        this.getForecastData();
        this.getTableInfo();
      }
    },

    // 点击获取监控节点
    handleNodeClick2(data) {
      if (data.id) {
        this.monitor.id = data.id;
        this.monitor.name = data.name;
        this.monitor.vedioUrl = data.vedioUrl;
      }
    },

    // 获取检测设备信息
    async getequipmentList(node, resolve) {
      const { data: res } = await this.reqM41Service(
        "/equipment/search",
        {
          typeId: node.data.typeId,
          baseId: this.baseId,
        },
        "post"
      );
      this.equipmentList = res.data;
      this.equipmentList.forEach((item, index, equipmentList) => {
        equipmentList[index] = {
          typeId: node.data.typeId,
          name: item.equipmentName,
          equipmentId: item.equipmentId,
        };
      });
      return resolve(this.equipmentList);
    },

    // 懒加载节点
    async loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([
          { name: "水质设备", typeId: "1" },
          { name: "气象设备", typeId: "0" },
        ]);
      }
      if (node.level === 1) {
        await this.getequipmentList(node, resolve);
      }
      if (node.level === 2) {
        return resolve(
          node.data.typeId == "1"
            ? this.pondCheckItemName
            : this.weatherCheckItemName
        );
      }
    },

    /* 预测图开始 */
    // 格式化时间 （可用于图表格式化）
    checkTime(date) {
      if (!date) return "";
      date = date.toString();
      const d = new Date(date);
      const month =
        d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
      const hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
      const min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
      const sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
      const times =
        d.getFullYear() +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        min +
        ":" +
        sec;
      return times;
    },

    // 获得横坐标的周期长度(用于图表)
    getTimeLength(start, end) {
      const stamp = new Date(end).getTime() - new Date(start).getTime();
      let time = stamp / 1000;
      if (time !== null && time !== "") {
        time = parseInt(time);
      }
      this.interval = this.form.typeId === "1" ? 10 * 60 : 30 * 60;
      const length = Math.floor(time / this.interval);
      return length;
    },

    // 合成横坐标（用于图表）
    makeEchartXData(start, Timer, length) {
      const lists = [];
      for (let j = 0; j < length; j++) {
        const seconds = Date.parse(start); // 标准时间转毫秒数
        const totals = j * Timer * 1000 + seconds; // 固定时间间隔+开始时间的总毫秒数    分钟递增在*60 分小时 递增*60*60
        const res = new Date(totals).toString(); // 毫秒数转字符串，截取，取值
        lists.push(this.checkTime(res));
      }
      return lists;
    },

    // 获取预测数值
    async getForecastData() {
      // 获取当前时间为结束时间
      var newTime = new Date();
      // 纵坐标名称
      let myUnit = this.unit;
      // 格式化当前时间
      this.form.endTime = this.checkTime(newTime);
      // 气象类型或者水质类型的参数
      const myflag = this.form.typeId === "0" ? "" : "/water";
      // 根据类型获取算法参数
      this.form.arithmetic = this.form.typeId === "0" ? "arima" : "LR";
      this.form.baseId = this.baseId
      // 匹配以获取单位
      const { data: res } = await this.reqM41Service(
        `/datarecord/forecast${myflag}/${this.form.arithmetic}/1/500`,
        this.form,
        "post"
      );
      if (res.code !== 200) {
        return this.$message.error("预测失败！！");
      }
      if (res.data.orgindata.length === 0) {
        return this.$message.error("查无数据");
      }
      this.isShowWarn = res.data.warn;
      // 获取画图的周期长度
      const length = this.getTimeLength(this.form.startTime, this.form.endTime);
      // 获取画图的纵坐标
      const xData = this.makeEchartXData(
        this.form.startTime,
        this.interval,
        length
      );
      // 去除限制
      xData.length = 700;
      res.data.predictdata = [...res.data.orgindata, ...res.data.predictdata];
      // console.log(xData, res.data.orgindata, res.data.predictdata, myUnit);
      // 调用接口成功，填充数据，描绘图表
      this.makeEchart(xData, res.data.orgindata, res.data.predictdata, myUnit);
    },

    // 画echart预测图,横坐标，原始值，预测值，单位 （用于图表）
    makeEchart(xData, orgindata, predictdata, unit) {
      const chart = this.$refs.chart;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        const option = {
          title: {
            text: "预测",
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["实际值", "预测值"],
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            // xData数据横坐标
            data: xData,
            // data: ['2019-09-01 08:00:00', '2019-09-01 08:30:00', '2019-09-01 09:00:00', '2019-09-01 09:30:00', '2019-09-01 10:00:00', '2019-09-01 10:30:00', '2019-09-01 11:00:00', '2019-09-01 11:30:00', '2019-09-01 12:00:00', '2019-09-01 12:30:00', '2019-09-01 13:00:00', '2019-09-01 13:30:00', '2019-09-01 14:00:00', '2019-09-01 14:30:00', '2019-09-01 15:00:00', '2019-09-01 15:30:00', '2019-09-01 16:00:00', '2019-09-01 16:30:00', '2019-09-01 17:00:00', '2019-09-01 17:30:00', '2019-09-01 18:00:00', '2019-09-01 18:30:00', '2019-09-01 19:00:00', '2019-09-01 19:30:00', '2019-09-01 20:00:00', '2019-09-01 20:30:00', '2019-09-01 21:00:00', '2019-09-01 21:30:00', '2019-09-01 22:00:00', '2019-09-01 22:30:00', '2019-09-01 23:00:00', '2019-09-01 23:30:00', '2019-09-02 00:00:00', '2019-09-02 00:30:00', '2019-09-02 01:00:00', '2019-09-02 01:30:00', '2019-09-02 02:00:00', '2019-09-02 02:30:00', '2019-09-02 03:00:00', '2019-09-02 03:30:00', '2019-09-02 04:00:00', '2019-09-02 04:30:00', '2019-09-02 05:00:00', '2019-09-02 05:30:00', '2019-09-02 06:00:00', '2019-09-02 06:30:00', '2019-09-02 07:00:00', '2019-09-02 07:30:00', '2019-09-02 08:00:00', '2019-09-02 08:30:00', '2019-09-02 09:00:00', '2019-09-02 09:30:00', '2019-09-02 10:00:00', '2019-09-02 10:30:00', '2019-09-02 11:00:00', '2019-09-02 11:30:00', '2019-09-02 12:00:00', '2019-09-02 12:30:00', '2019-09-02 13:00:00', '2019-09-02 13:30:00', '2019-09-02 14:00:00', '2019-09-02 14:30:00', '2019-09-02 15:00:00', '2019-09-02 15:30:00', '2019-09-02 16:00:00', '2019-09-02 16:30:00', '2019-09-02 17:00:00', '2019-09-02 17:30:00', '2019-09-02 18:00:00', '2019-09-02 18:30:00', '2019-09-02 19:00:00', '2019-09-02 19:30:00', '2019-09-02 20:00:00', '2019-09-02 20:30:00', '2019-09-02 21:00:00', '2019-09-02 21:30:00', '2019-09-02 22:00:00', '2019-09-02 22:30:00', '2019-09-02 23:00:00', '2019-09-02 23:30:00', '2019-09-03 00:00:00', '2019-09-03 00:30:00', '2019-09-03 01:00:00', '2019-09-03 01:30:00', '2019-09-03 02:00:00', '2019-09-03 02:30:00', '2019-09-03 03:00:00', '2019-09-03 03:30:00', '2019-09-03 04:00:00', '2019-09-03 04:30:00', '2019-09-03 05:00:00', '2019-09-03 05:30:00', '2019-09-03 06:00:00', '2019-09-03 06:30:00', '2019-09-03 07:00:00', '2019-09-03 07:30:00', '2019-09-03 08:00:00', '2019-09-03 08:30:00', '2019-09-03 09:00:00', '2019-09-03 09:30:00']
          },
          yAxis: {
            // 单位
            name: unit,
            type: "value",
            // axisLabel: {
            //   formatter: '{value} '
            // }
            min: function (value) {
              return value.min;
            },
          },
          series: [
            {
              name: "预测值",
              type: "line",
              // 预测值
              data: predictdata,
              scale: true,
              // data: [4128.4, 4135.7, 4147.4, 4131.3, 4156.2, 4156.2, 4122.5, 4115.2, 4148.9, 4147.4, 4147.4, 4144.5, 4144.5, 4141.6, 4140.1, 4140.1, 4138.6, 4135.7, 4134.2, 4135.7, 4144.5, 4163.5, 4178.2, 4182.6, 4181.1, 4154.7, 4160.6, 4165, 4154.7, 4160.6, 4165, 4153.3, 4151.8, 4182.6, 4153.3, 4154.7, 4153.3, 4156.2, 4150.3, 4181.1, 4137.2, 4137.2, 4151.8, 4134.2, 4143, 4166.5, 4135.7, 4128.4, 4132.8, 4159.1, 4129.8, 4119.6, 4128.4, 4151.8, 4119.6, 4147.4, 4147.4, 4146, 4144.5, 4144.5, 4141.6, 4141.6, 4138.6, 4137.2, 4135.7, 4135.7, 4134.2, 4140.1, 4157.7, 4181.1, 4182.6, 4181.1, 4172.3, 4156.2, 4160.6, 4181.1, 4157.7, 4181.1, 4172.3, 4153.3, 4153.3, 4182.6, 4151.8, 4184, 4162.1, 4184, 4147.4, 4178.2, 4138.6, 4140.1, 4153.3, 4134.2, 4132.8, 4167.9, 4144.5, 4129.8, 4125.4, 4160.6, 4122.5, 4128.4],
              markPoint: {
                data: [
                  {
                    type: "max",
                    name: "最大值",
                  },
                  {
                    type: "min",
                    name: "最小值",
                  },
                ],
              },
              markLine: {
                data: [
                  {
                    type: "average",
                    name: "平均值",
                  },
                ],
              },
            },
            {
              name: "实际值",
              type: "line",
              // 实际值
              data: orgindata,
              scale: true,
              // data: [4128.4, 4135.7, 4147.4, 4131.3, 4156.2, 4156.2, 4122.5, 4115.2, 4148.9, 4147.4, 4147.4, 4144.5, 4144.5, 4141.6, 4140.1, 4140.1, 4138.6, 4135.7, 4134.2, 4135.7, 4144.5, 4163.5, 4178.2, 4182.6, 4181.1, 4154.7, 4160.6, 4165, 4154.7, 4160.6, 4165, 4153.3, 4151.8, 4182.6, 4153.3, 4154.7, 4153.3, 4156.2, 4150.3, 4181.1, 4137.2, 4137.2, 4151.8, 4134.2, 4143, 4166.5, 4135.7, 4128.4, 4132.8, 4159.1, 4129.8, 4119.6, 4128.4, 4151.8, 4119.6, 4147.4, 4147.4, 4146, 4144.5, 4144.5, 4141.6, 4141.6, 4138.6, 4137.2, 4135.7, 4135.7, 4134.2, 4140.1, 4157.7, 4181.1, 4182.6, 4181.1, 4172.3, 4156.2, 4160.6, 4181.1, 4157.7, 4181.1, 4172.3, 4153.3, 4153.3, 4182.6, 4151.8, 4184, 4162.1, 4184, 4147.4, 4178.2, 4138.6, 4140.1, 4153.3, 4134.2, 4132.8, 4167.9, 4144.5, 4129.8, 4125.4, 4160.6, 4122.5, 4128.4],
              markPoint: {
                data: [
                  {
                    name: "最低",
                    value: -2,
                    xAxis: 1,
                    yAxis: -1.5,
                  },
                ],
              },
              markLine: {
                data: [
                  {
                    type: "average",
                    name: "平均值",
                  },
                  [
                    {
                      symbol: "none",
                      x: "90%",
                      yAxis: "max",
                    },
                    {
                      symbol: "circle",
                      label: {
                        position: "start",
                        formatter: "最大值",
                      },
                      type: "max",
                      name: "最高点",
                    },
                  ],
                ],
              },
            },
          ],
        };
        myChart.setOption(option);
        // 自适应盒子大小,以及屏幕大小
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
    },
    /* 预测图结束 */

    /* 获取表格检测项信息 */
    async getTableInfo() {
      let flag = this.typeId === "0" ? "meteorologicalData" : "waterData";
      const { data: res } = await this.reqM41Service(
        `/${flag}/search/1/500`,
        {
          baseId: this.baseId,
          startTime: this.form.startTime,
          endTime: this.form.endTime,
          typeId: this.typeId,
        },
        "post"
      );
      this.isEmpty(res.data.total, "暂无数据", "环境预测");
      this.checkItemDataList = res.data.rows;
    },

    /* 判断是否有数据 */
    isEmpty(data, text, title) {
      if (data == 0) {
        this.$notify.error({
          title: title,
          message: text,
          duration: 0,
        });
      }
    },

    /* 进入提示 */
    open() {
      this.$notify({
        title: "提示",
        message: "可在右侧选择需要查看的信息",
        type: "warning",
      });
    },

    /* 获取监控视频节点 */
    async getMonitorInfo() {
      const { data: res } = await this.reqM31Service(
        `/monitor/${this.baseId}`,
        {},
        "post"
      );
      console.log(res);
      this.isEmpty(res.data.length, "暂无监控设备", "环境监控");
      this.monitorInfo[0].children = res.data;
      this.monitorInfo[0].children.forEach((item, index, monitorInfo) => {
        monitorInfo[index] = {
          name: item.monitoringLocation,
          id: item.id,
          vedioUrl: item.vedioUrl,
          leaf: true,
        };
      });
      this.monitorDefault = this.monitorInfo[0].children[0];
    },

    /* 判断是否登录 */
    async isExit() {
      if (!this.$store.state.isLogin) {
        this.$message.info("请先登录！！");
        return this.$router.push("/login");
      }
      // 判断是否绑定基地
      const { data: res } = await this.reqM1Service(
        "/authority/user/applyFor/addBase/status",
        {
          headers: {
            Authorization: this.token,
          },
        },
        "get"
      );
      if (res.message === "拒绝") {
        this.$message.info("请先绑定基地！！");
        return this.$router.push("/basePage");
      }
      this.baseId = res.data.id;
      this.getForecastData();
      // 获取表格数据
      this.getTableInfo();
      // 查询监控设备
      this.getMonitorInfo().then(() => {
        // 点击监控设备
        this.handleNodeClick2(this.monitorDefault);
      });
    },
  },
};
</script>
<style lang="less" scoped>
.lxl-body {
  display: flex;
  //   flex-direction: column;
  justify-content: center;
  .lxl-breadcrumb {
    display: flex;
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
}
.lxl-box {
  width: 1250px;
  margin-bottom: 30px;
}
.lxl-container {
  display: flex;
  flex-direction: row;
  .lxl-left {
    width: 27%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .lxl-main {
    width: 53%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    div {
      .lxl-em {
        height: 20rem;
      }
      .chart1 {
        height: 20rem;
      }
    }
  }
  .lxl-right {
    width: 20%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
}
</style>