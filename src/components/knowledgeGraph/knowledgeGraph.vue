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
                v-for="(item, i) in formInline.searchType[0]"
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
                v-for="(item, i) in formInline.searchType[1]"
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
                v-for="(item, i) in formInline.searchType[2]"
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
                v-for="(item, i) in formInline.searchType[3]"
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
                v-for="(item, i) in formInline.searchType[4]"
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
          <div class="associationGraph chart"></div>
          <div class="byAssociationGraph chart"></div>
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
      //存储关联
      nodeLinkedList: [],
      nodeList: [],
      categoryList: [],
    };
  },
  mounted() {},

  created() {
    // 异步操作管理
    this.yibu();
    this.searchInfoByName("沙虾");
  },
  methods: {
    // 关联图标
    associationGraph(searchData) {
      // 初始化
      let myChart = this.$echarts.init(
        document.querySelector(".associationGraph")
      );
      let dataData = [];
      let datalink = [];
      const color1 = "#006acc";
      const color2 = "#ff7d18";
      const color3 = "#10a050";
      // 数据遍历生成结构
      this.nodeLinkedList.forEach((item) => {
        // 不能省略
        if (item.targetName == item.sourceName) {
          item.targetName = item.targetName + "种";
        }
        if (item.sourceName == searchData) {
          let obj1 = {
            name: item.targetName,
            category: 0,
          };
          let obj2 = {
            source: item.sourceName,
            target: item.targetName,
            name: item.name,
            label: {
              align: "center",
              fontSize: 15,
            },
            lineStyle: {
              color: "#ff7d18",
            },
          };
          dataData.push(obj1);
          datalink.push(obj2);
        }
      });
      // 默认添加被查询的对象
      dataData.push({ name: searchData, category: 1 });
      // 颜色
      dataData.forEach((item) => {
        if (item.category === 0) {
          item.symbolSize = 50;
          item.itemStyle = {
            color: "#006acc",
          };
        } else if (item.category === 1) {
          item.symbolSize = 70;
          item.itemStyle = {
            color: "#ff7d18",
          };
        } else {
        }
      });
      let categories = [
        {
          itemStyle: {
            color: color1,
          },
        },
        {
          itemStyle: {
            color: color2,
          },
        },
      ];
      let option = {
        title: {
          text: "关联知识图谱",
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 58,
            draggable: true,
            roam: true,
            focusNodeAdjacency: true,
            categories: categories,
            edgeSymbol: ["", "arrow"],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 20,
                },
                formatter(x) {
                  return x.data.name;
                },
              },
            },
            label: {
              show: true,
            },
            force: {
              repulsion: 2000,
              edgeLength: 130,
            },
            data: dataData,
            links: datalink,
          },
        ],
      };

      myChart.setOption(option);
      // 自适应盒子大小,以及屏幕大小
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    // 被关联
    byAssociationGraph(searchData) {
      let dataData = [];
      let datalink = [];
      this.nodeLinkedList.forEach((item) => {
        if (item.targetName == item.sourceName) {
          item.targetName = item.targetName + "种";
        }
        if (item.sourceName != searchData) {
          let obj1 = {
            name: item.sourceName,
            category: 0,
          };
          let obj2 = {
            source: item.sourceName,
            target: item.targetName,
            name: item.name,
            label: {
              align: "center",
              fontSize: 15,
            },
            itemStyle: {
              color: "#006acc",
            },
          };
          dataData.push(obj1);
          datalink.push(obj2);
        }
      });
      dataData.push({ name: searchData, category: 1 });
      dataData.forEach((item) => {
        if (item.category === 0) {
          item.symbolSize = 50;
          item.itemStyle = {
            color: "#006acc",
          };
        } else if (item.category === 1) {
          item.symbolSize = 70;
          item.itemStyle = {
            color: "#ff7d18",
          };
        } else {
        }
      });

      let myChart = this.$echarts.init(
        document.querySelector(".byAssociationGraph")
      );
      let option = {
        title: {
          text: "被关联知识图谱",
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 20,
            },
          },
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 58,
            draggable: true,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
              {
                itemStyle: {
                  color: "#009800",
                },
              },
              {
                itemStyle: {
                  color: "#4592FF",
                },
              },
              {
                itemStyle: {
                  color: "#3592F",
                },
              },
            ],
            label: {
              show: true,
            },
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 20,
                },
                formatter(x) {
                  return x.data.name;
                },
              },
            },
            force: {
              repulsion: 2000,
              edgeLength: 130,
            },
            edgeSymbol: ["", "arrow"],
            data: dataData,
            links: datalink,
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

    // 根据名称查询实体关联 **
    // 参数为查询目标
    async searchConByName(searchData) {
      // const { data: res } = await this.reqM3Service(
      //   "/bait/es/?name=" + searchData,
      //   "",
      //   "get"
      // );
      try {
        const { data: res } = await this.reqM3Service(
          "/entity/search/" + searchData,
          "",
          "get"
        );
        if (res.code === 20000) {
          // console.log(res.data);
          // 保存关联数据
          this.categoryList = res.data.categoryList;
          this.nodeLinkedList = res.data.nodeLinkedList;
          this.nodeList = res.data.nodeList;
          // 调用关联
          this.associationGraph(searchData);
          // 调用被关联
          this.byAssociationGraph(searchData);
        } else {
          this.$message({
            showClose: true,
            message: res.message,
            type: "error",
          });
        }
      } catch (error) {
        this.$message.error("网络开小差了！19999");
      }
    },
    // 根据名称查询实体详细信息
    async searchInfoByName(searchData) {
      try {
        const { data: res } = await this.reqM3Service(
          "/entity/info/" + searchData,
          "",
          "get"
        );

        // 过滤
        if (res.code === 20000) {
          // 返回的数据
          // console.log(res.data);
          if (res.data.length !== 0) {
            this.infoData = res.data;
            // 查询关联数据
            this.searchConByName(searchData);
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
      } catch (error) {
        this.$message.error("网络开小差了！19999");
      }
    },
    // 初始化查询列表
    async searchTypeAll(typeType, searchTypeIndex) {
      try {
        const { data: res } = await this.reqM3Service(
          "/entity/search/page?entityType=" + typeType + "&limit=20",
          "",
          "get"
        );
        // 过滤
        if (res.code === 20000) {
          // 返回的数据
          // 采用push可以即时更新，直接赋值则不行
          this.formInline.searchType.push(res.data.rows);
        } else {
          this.$message({
            showClose: true,
            message: res.message,
            type: "error",
          });
        }
      } catch (error) {
        this.$message.error("网络开小差了！19999");
        this.formInline.searchType.push([{ name: "网络错误--暂无数据" }]);
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