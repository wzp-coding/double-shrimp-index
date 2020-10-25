<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
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
            v-model="formInline.searchData"
            placeholder="请输入实体名称"
          ></el-input>
        </el-form-item>
        <el-button
          type="success"
          @click="searchInfoByName(formInline.searchData)"
          >查询</el-button
        >
        <el-form-item> </el-form-item>
        <el-form-item style="width: 140px">
          <el-select
            v-model="formInline.value1"
            placeholder="常用查询"
            @change="searchInfoByName(formInline.value1)"
          >
            <el-option
              v-for="(item, i) in formInline.searchType[0]"
              :value="item.name"
              :label="item.name"
              :key="i"
              >{{ item.name }}</el-option
            >
          </el-select>
        </el-form-item>
        <el-form-item style="width: 140px">
          <el-select
            v-model="formInline.value2"
            placeholder="对虾实体"
            @change="searchInfoByName(formInline.value2)"
          >
            <el-option
              v-for="(item, i) in formInline.searchType[1]"
              :value="item.name"
              :label="item.name"
              :key="i"
              >{{ item.name }}</el-option
            >
          </el-select>
        </el-form-item>
        <el-form-item style="width: 140px">
          <el-select
            v-model="formInline.value3"
            placeholder="病害查询"
            @change="searchInfoByName(formInline.value3)"
          >
            <el-option
              v-for="(item, i) in formInline.searchType[2]"
              :value="item.name"
              :label="item.name"
              :key="i"
              >{{ item.name }}</el-option
            >
          </el-select>
        </el-form-item>
        <el-form-item style="width: 140px">
          <el-select
            v-model="formInline.value4"
            placeholder="药物查询"
            @change="searchInfoByName(formInline.value4)"
          >
            <el-option
              v-for="(item, i) in formInline.searchType[3]"
              :value="item.name"
              :label="item.name"
              :key="i"
              >{{ item.name }}</el-option
            >
          </el-select>
        </el-form-item>
        <el-form-item style="width: 140px">
          <el-select
            v-model="formInline.value5"
            placeholder="养殖技术"
            @change="searchInfoByName(formInline.value5)"
          >
            <el-option
              v-for="(item, i) in formInline.searchType[4]"
              :value="item.name"
              :label="item.name"
              :key="i"
              >{{ item.name }}</el-option
            >
          </el-select>
        </el-form-item>
      </el-form>
      <el-container>
        <el-aside class="" style="margin-left: 18px">
          <div>
            <el-badge value="常用查询" class="item"> </el-badge>
            <div class="lxl-tag">
              <el-tag
                v-for="(item, i) in searchType[0]"
                :key="i"
                @click="searchInfoByName(item.name)"
                >{{ item.name }}</el-tag
              >
            </div>
          </div>
          <el-divider></el-divider>
          <div>
            <el-badge value="对虾实体" class="item"> </el-badge>
            <div class="lxl-tag">
              <el-tag
                type="success"
                v-for="(item, i) in searchType[1]"
                :key="i"
                @click="searchInfoByName(item.name)"
                >{{ item.name }}</el-tag
              >
            </div>
          </div>
          <el-divider></el-divider>
          <!--  -->
          <div>
            <el-badge value="病害查询" class="item"> </el-badge>
            <div class="lxl-tag">
              <el-tag
                v-for="(item, i) in searchType[2]"
                :key="i"
                @click="searchInfoByName(item.name)"
                >{{ item.name }}</el-tag
              >
            </div>
          </div>
          <el-divider></el-divider>
          <!--  -->
          <div>
            <el-badge value="药物查询" class="item"> </el-badge>
            <div class="lxl-tag">
              <el-tag
                type="success"
                v-for="(item, i) in searchType[3]"
                :key="i"
                @click="searchInfoByName(item.name)"
                >{{ item.name }}</el-tag
              >
            </div>
          </div>
          <el-divider></el-divider>
          <div>
            <el-badge value="养殖技术" class="item"> </el-badge>
            <div class="lxl-tag">
              <el-tag
                v-for="(item, i) in searchType[4]"
                :key="i"
                @click="searchInfoByName(item.name)"
                >{{ item.name }}</el-tag
              >
            </div>
          </div>
          <el-divider></el-divider>
        </el-aside>
        <el-main>
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
          <div class="chart2 chart"></div>
          <div class="chart1 chart"></div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      formInline: {
        searchData: "",
        searchType: [],
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: "",
      },
      url: "",
      chartData1: {},
      infoData: [
        {
          name: "对虾大数据平台",
          baseInfo:
            "仲恺基地，创办于1927年，是一所以伟大的爱国主义者、近代民主革命家廖仲恺先生名字命名，以现代农业科学为特色，农学、工学为优势，农、工、理、经、管、文、艺、法八大学科协调发展的广东省省属高水平应用型大学，是教育部本科教学评估优秀学校及全国首批卓越农林人才教育培养计划高校。学校办学历史悠久，文脉深厚，坐落在历史文化名城——广州。现有海珠校区、白云校区、番禺教学科研基地，占地面积2000余亩。校园集云山之神秀，汇珠水之灵气，是读书治学的理想地。",
          imgUrl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
      searchType: [],
    };
  },
  mounted() {
    this.chart1();
    this.chart2();
  },

  created() {
    this.yibu();
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
          text: "关联知识图谱",
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
                draggable: false,
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
    // 根据名称查询实体关联
    async searchConByName(searchData) {
      this.formInline.searchData;
      console.log("/entity/search/" + this.formInline.searchData);
      const { data: res } = await this.reqM3Service(
        "/entity/search/" + this.formInline.searchData,
        "",
        "get"
      );
      // 过滤
      if (res.code === 20000) {
        // 返回的数据
        console.log(res.data);
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error",
        });
      }
      console.log("guanlian");
      console.log(res);
    },
    // 根据名称查询实体详细信息
    async searchInfoByName(searchData) {
      const { data: res } = await this.reqM3Service(
        "/entity/info/" + searchData,
        "",
        "get"
      );
      // 过滤
      if (res.code === 20000) {
        // 返回的数据
        console.log(res.data);
        if (res.data.length !== 0) {
          this.infoData = res.data;
        } else {
          this.$message.warning("暂无相关数据");
        }
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error",
        });
      }
    },
    async searchTypeAll(typeType, searchTypeIndex) {
      const { data: res } = await this.reqM3Service(
        "/entity/search/page?entityType=" + typeType + "&limit=20",
        "",
        "get"
      );
      // 过滤
      if (res.code === 20000) {
        // 返回的数据
        this.searchType.push(res.data.rows);
        this.formInline.searchType.push(res.data.rows);
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: "error",
        });
      }
    },
    // 异步处理
    async yibu() {
      await this.searchTypeAll("Bait", 0);
      await this.searchTypeAll("PrawnBreed", 1);
      await this.searchTypeAll("Disease", 2);
      await this.searchTypeAll("BreedMedicine", 3);
      await this.searchTypeAll("CultureTechnology", 4);
    },
  },
};
</script>
<style lang="less" scoped>
.el-tag {
  cursor: pointer;
}
.el-tag:hover {
  font-weight: 1000;
}
.lxl-body {
  display: flex;
  min-width: 1150px;
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
  margin-top: 1rem;
}
.someThing {
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: rgb(245, 245, 245);
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
/deep/.el-carousel__button {
  background-color: rgb(204, 123, 18) !important;
}
</style>