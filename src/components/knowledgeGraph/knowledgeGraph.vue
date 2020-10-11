<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item :to="{ path: 'industryMarket' }"
          >首页</el-breadcrumb-item
        >
        <el-breadcrumb-item>知识图谱</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline lxl-form"
      >
        <el-form-item>
          <el-input
            v-model="formInline.user"
            placeholder="请输入实体名称"
          ></el-input>
        </el-form-item>
        <el-button type="success">查询</el-button>
        <el-form-item> </el-form-item>
        <el-form-item style="width: 150px">
          <el-select v-model="formInline.region" placeholder="常用查询">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="width: 150px">
          <el-select v-model="formInline.region" placeholder="病害防治">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.region" placeholder="养殖技术">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.region" placeholder="饲料">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-container>
        <el-aside class="" style="margin-left: 18px">
          <div>
            <el-badge value="热门搜索" class="item"> </el-badge>
            <div class="lxl-tag">
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
            </div>
          </div>
          <el-divider></el-divider>
          <div>
            <el-badge value="常用查询" class="item"> </el-badge>
            <div class="lxl-tag">
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
            </div>
          </div>
          <el-divider></el-divider>
          <div>
            <el-badge value="病害防治" class="item"> </el-badge>
            <div class="lxl-tag">
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
            </div>
          </div>
          <el-divider></el-divider>
          <div>
            <el-badge value="养殖技术" class="item"> </el-badge>
            <div class="lxl-tag">
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
              <el-tag type="success">标签一</el-tag>
            </div>
          </div>
          <el-divider></el-divider>
          <div>
            <el-badge value="饲料" class="item"> </el-badge>
            <div class="lxl-tag">
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
            </div>
          </div>
          <el-divider></el-divider>
        </el-aside>
        <el-main>
          <div class="chart2 chart"></div>
          <div class="chart1 chart" style="margin-top: 1rem"></div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  mounted() {
    this.chart1();
    this.chart2();
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    chart1() {
      let myChart = this.$echarts.init(document.querySelector(".chart1"));
      var graph = {
        nodes: [
          {
            name: "A",
            value: ["教授", "在职", "党委办公室、校长办公室"],
            category: "中心教师",
            symbolSize: 50,
            tooltip: {
              formatter: "{b0}:{c0}",
            },
          },
          {
            name: "B",
            category: "论文",
            value: ["期刊论文", "2005"],
            symbolSize: 20,
            tooltip: {
              formatter: "{b0}:{c0}",
            },
          },
          {
            name: "C",
            category: "论文合作教师",
            symbolSize: 50,
          },

          {
            name: "D",
            category: "项目",
            value: ["信息与通信工程学院", "立项日期：20131101"],
            symbolSize: 20,
            tooltip: {
              formatter: "{b0}:{c0}",
            },
          },
          {
            name: "N",
            category: "项目合作教师",
            symbolSize: 50,
          },
          {
            name: "Q",
            category: "项目",
            symbolSize: 20,
          },

          {
            name: "S",
            category: "项目",
            symbolSize: 20,
          },
          {
            name: "E",
            category: "专著专利",
            symbolSize: 20,
            value: ["专利文献", "2009-07-21"],
            tooltip: {
              formatter: "{b0}:{c0}",
            },
          },
          {
            name: "W",
            category: "专著专利",
            symbolSize: 20,
          },
          {
            name: "Y",
            category: "专著专利",
            symbolSize: 20,
          },
          {
            name: "Z",
            category: "专著专利",
            symbolSize: 20,
          },
          {
            name: "F",
            category: "专著专利合作教师",
            symbolSize: 50,
          },
          {
            name: "O",
            category: "专著专利合作教师",
            symbolSize: 50,
          },
          {
            name: "P",
            category: "专著专利合作教师",
            symbolSize: 50,
          },
          {
            value: ["信息与通信工程学院", "信息工程 "],
            name: "G",
            category: "课程",
            symbolSize: 20,
            tooltip: {
              formatter: "{b0}:{c0}",
            },
          },
          {
            name: "I",
            category: "课程",
            symbolSize: 20,
          },
          {
            name: "L",
            category: "课程",
            symbolSize: 20,
          },
          {
            name: "H",
            category: "课程合作教师",
            symbolSize: 50,
          },
          {
            name: "M",
            category: "课程合作教师",
            symbolSize: 50,
          },
        ],
        links: [
          {
            source: "A",
            target: "B",
          },
          {
            source: "B",
            target: "C",
          },
          {
            source: "A",
            target: "D",
          },
          {
            source: "D",
            target: "N",
          },
          {
            source: "N",
            target: "Q",
          },
          {
            source: "N",
            target: "R",
          },
          {
            source: "A",
            target: "E",
          },
          {
            source: "E",
            target: "F",
          },
          {
            source: "F",
            target: "W",
          },
          {
            source: "F",
            target: "Y",
          },
          {
            source: "P",
            target: "Z",
          },
          {
            source: "E",
            target: "O",
          },
          {
            source: "E",
            target: "P",
          },
          {
            source: "A",
            target: "G",
          },
          {
            source: "G",
            target: "H",
          },
          {
            source: "G",
            target: "M",
          },
          {
            source: "M",
            target: "I",
          },
          {
            source: "M",
            target: "L",
          },
        ],
      };
      const defaultCategory = "中心教师";
      const graphTitle = "力导向关系图--实现点击节点展开折叠";
      const currentGraph = {
        nodes: {},
        links: {},
      };
      const nodeMap = {};
      // 页面加载时，第一次初始化图
      function init() {
        // 根据定义的常量，产生currentGraph的默认数据
        // 遍历全部nodes和links，产生node映射map
        for (let i = 0; i < graph.nodes.length; i++) {
          if (graph.nodes[i].category === defaultCategory) {
            currentGraph.nodes[graph.nodes[i].name] = graph.nodes[i];
          }
          nodeMap[graph.nodes[i].name] = graph.nodes[i];
          nodeMap[graph.nodes[i].name]["links"] = {};
          nodeMap[graph.nodes[i].name]["nodes"] = {};
          nodeMap[graph.nodes[i].name]["hasAppend"] = false;
        }
        for (let i = 0; i < graph.links.length; i++) {
          let link = graph.links[i];
          if (
            nodeMap[link.source] !== undefined &&
            nodeMap[link.target] !== undefined
          ) {
            nodeMap[link.source].links[link.target] = link;
            nodeMap[link.source].nodes[nodeMap[link.target].name] =
              nodeMap[link.target];
          }
        }

        for (let i = 0; i < graph.nodes.length; i++) {
          graph.nodes[i].itemStyle = null;
          graph.nodes[i].label = {
            normal: {
              show: graph.nodes[i].symbolSize > 15,
            },
          };
        }
        redrawGraph();
      }
      // 处理点击节点展开
      function append(nodeName) {
        // 根据nodeName从nodeMap里拿出对应的nodes和links，并append到currentGraph.nodes currentGraph.links
        let node = nodeMap[nodeName];
        if (
          node.hasAppend === true ||
          Object.keys(node.nodes).length === 0 ||
          Object.keys(node.links).length === 0
        ) {
          alert("无法继续展开");
          return;
        }
        Object.values(node.nodes).forEach((n) => {
          currentGraph.nodes[n.name] = n;
        });
        Object.values(node.links).forEach((l) => {
          currentGraph.links[l.source + "_" + l.target] = l;
        });
        node.hasAppend = true;
        redrawGraph();
      }
      // 处理点击节点收缩
      function remove(nodeName) {
        //根据nodeName从nodeMap里拿出对应的nodes和links，从currentGraph.nodes currentGraph.links删除当前节点的nodes和links并且递归
        let node = nodeMap[nodeName];
        Object.values(node.nodes).forEach((n) => {
          delete currentGraph.nodes[n.name];
          if (n.hasAppend === true && Object.keys(n.nodes).length > 0) {
            remove(n.name);
          }
        });
        Object.values(node.links).forEach((l) => {
          delete currentGraph.links[l.source + "_" + l.target];
        });
        // 设置flag 等于false
        node.hasAppend = false;

        redrawGraph();
      }
      // 根据更新后的option重新画图
      function redrawGraph() {
        option.series[0].data = Object.values(currentGraph.nodes);
        option.series[0].links = Object.values(currentGraph.links);
        console.log(option);
        myChart.setOption(option);
      }
      const option = {
        backgroundColor: "rgba(2, 21, 25,0.1)",

        title: {
          text: graphTitle,
          top: "top",
          left: "center",
        },
        tooltip: {},
        legend: [],
        animation: false,
        series: [
          {
            type: "graph",
            layout: "force",
            data: Object.values(currentGraph.nodes),
            links: Object.values(currentGraph.links),
            categories: [
              {
                name: "中心教师",
                itemStyle: {
                  color: "#c23531",
                },
              },
              {
                name: "专著专利合作教师",
                itemStyle: {
                  color: "#749f83",
                },
              },
              {
                name: "课程合作教师",
                itemStyle: {
                  color: "#6e7074",
                },
              },
              {
                name: "论文合作教师",
                itemStyle: {
                  color: "#2f4554",
                },
              },
              {
                name: "论文",
                itemStyle: {
                  color: "#61a0a8",
                },
              },
              {
                name: "专著专利",
                itemStyle: {
                  color: "#91c7ae",
                },
              },
              {
                name: "课程",
                itemStyle: {
                  color: "#999ea4",
                },
              },
              {
                name: "项目合作教师",
                itemStyle: {
                  color: "#DEB887",
                },
              },
              {
                name: "项目",
                itemStyle: {
                  color: "#bda29a",
                },
              },
            ],
            roam: true,
            focusNodeAdjacency: false,
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.3)",
              },
            },
            label: {
              position: "right",
              formatter: "{b}",
            },
            lineStyle: {
              color: "target",
              opacity: 0.6,
              curveness: 0.3,
            },
            emphasis: {
              lineStyle: {
                width: 10,
              },
            },
            force: {
              layoutAnimation: false,
              repulsion: 500,
            },
          },
        ],
      };
      init();
      myChart.on("click", function (params) {
        if (params.dataType === "node") {
          const node = nodeMap[params.data.name];
          if (node.hasAppend === true) {
            remove(node.name);
          } else {
            append(node.name);
          }
        }
      });
      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    chart2() {
      let myChart = this.$echarts.init(document.querySelector(".chart2"));
      let option = {
        title: {
          text: "",
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
            },
          },
        },
        legend: {
          x: "center",
          show: false,
          data: ["夫妻", "战友", "亲戚"],
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
              {
                name: "夫妻",
                itemStyle: {
                  normal: {
                    color: "#009800",
                  },
                },
              },
              {
                name: "战友",
                itemStyle: {
                  normal: {
                    color: "#4592FF",
                  },
                },
              },
              {
                name: "亲戚",
                itemStyle: {
                  normal: {
                    color: "#3592F",
                  },
                },
              },
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12,
                },
              },
            },
            force: {
              repulsion: 1000,
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10,
                },
                formatter: "{c}",
              },
            },
            data: [
              {
                name: "徐贱云",
                draggable: true,
              },
              {
                name: "冯可梁",
                category: 1,
                draggable: true,
              },
              {
                name: "邓志荣",
                category: 1,
                draggable: true,
              },
              {
                name: "李荣庆",
                category: 1,
                draggable: true,
              },
              {
                name: "郑志勇",
                category: 1,
                draggable: true,
              },
              {
                name: "赵英杰",
                category: 1,
                draggable: true,
              },
              {
                name: "王承军",
                category: 1,
                draggable: true,
              },
              {
                name: "陈卫东",
                category: 1,
                draggable: true,
              },
              {
                name: "邹劲松",
                category: 1,
                draggable: true,
              },
              {
                name: "赵成",
                category: 1,
                draggable: true,
              },
              {
                name: "陈现忠",
                category: 1,
                draggable: true,
              },
              {
                name: "陶泳",
                category: 1,
                draggable: true,
              },
              {
                name: "王德福",
                category: 1,
                draggable: true,
              },
            ],
            links: [
              {
                source: 0,
                target: 1,
                category: 0,
                value: "夫妻",
              },
              {
                source: 0,
                target: 2,
                value: "子女",
              },
              {
                source: 0,
                target: 3,
                value: "夫妻",
              },
              {
                source: 0,
                target: 4,
                value: "父母",
              },
              {
                source: 1,
                target: 2,
                value: "表亲",
              },
              {
                source: 0,
                target: 5,
                value: "朋友",
              },
              {
                source: 4,
                target: 5,
                value: "朋友",
              },
              {
                source: 2,
                target: 8,
                value: "叔叔",
              },
              {
                source: 0,
                target: 12,
                value: "朋友",
              },
              {
                source: 6,
                target: 11,
                value: "爱人",
              },
              {
                source: 6,
                target: 3,
                value: "朋友",
              },
              {
                source: 7,
                target: 5,
                value: "朋友",
              },
              {
                source: 9,
                target: 10,
                value: "朋友",
              },
              {
                source: 3,
                target: 10,
                value: "朋友",
              },
              {
                source: 2,
                target: 11,
                value: "同学",
              },
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0,
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
  },
};
</script>
<style lang="less" scoped>
.lxl-body {
  display: flex;
  //   flex-direction: column;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
  .lxl-form {
    margin-top: 1rem;
    margin-left: 18px;
  }
}
.lxl-box {
  width: 1150px;
}
.lxl-tag > * {
  margin-left: 10px;
  margin-top: 10px;
}
.chart {
  height: 40rem;
}
</style>