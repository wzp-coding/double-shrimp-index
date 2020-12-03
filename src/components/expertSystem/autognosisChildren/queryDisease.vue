<template>
  <div class="queryDisease">
    <el-row>
      <div class="little_title">
        病情查询
        <el-popover placement="right-end" width="200" trigger="hover">
          <div>
            1.精确查询：查询的结果中某一项与你所输入的整个关键词完全匹配。<br />
            2.模糊查询：将会按你输入的关键词查找，只要结果中含有与关键词匹配的，都会被查询出来。
          </div>
          <el-button slot="reference" style="">功能说明</el-button>
        </el-popover>
      </div>
    </el-row>
    <div class="content">
      <el-row class="title"> <el-col :span="24">病情查询 </el-col> </el-row>
      <el-row :gutter="20" class="tips">
        <el-col :span="4"
          ><div class="grid-content">
            <span class="tip">请选择查找方式</span>
          </div></el-col
        >
        <el-col :span="20"
          ><div class="grid-content">
            <span class="tip">请输入关键词</span>
          </div></el-col
        >
      </el-row>
      <el-row :gutter="20" class="search">
        <el-col :span="4"
          ><div class="grid-content">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select></div
        ></el-col>
        <el-col :span="14"
          ><div class="grid-content">
            <el-input v-model="input" placeholder="请输入内容"></el-input></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content">
            <el-button type="primary" @click="startQuery">开始查询</el-button>
          </div></el-col
        >
      </el-row>
      <!-- 查询结果 -->
      <div class="lxl-content">
        <div class="lxl-card" v-for="item in queryResList" :key="item.id">
          <div>
            <el-image
              style="width: 100%; height: 200px"
              :src="item.pic"
              :preview-src-list="srcList"
            ></el-image>
          </div>
          <router-link
            :to="{ path: '/autognosis/diseaseDateil', query: { id: item.id } }"
          >
            <div class="lxl-card-2">
              <p>{{ item.diseaseName }}</p>
            </div>
          </router-link>
        </div>
        <pagination
          :total="queryTotal"
          :resetPage="false"
          :size="size"
          @pageChange="handlePageChange"
          v-if="this.queryResList.length != 0"
        ></pagination>
      </div>
      <!-- 查询结果 -->
    </div>
  </div>
</template>
<script>
import pagination from "../expertListChildren/pagination";
export default {
  components: {
    pagination,
  },
  data() {
    return {
      options: [
        {
          value: "1",
          label: "精确查找",
        },
        {
          value: "2",
          label: "模糊查找",
        },
      ],
      value: "1",
      input: "",
      queryResList: [],
      queryTotal: 10,
      srcList: [],
      size: 8,
    };
  },
  methods: {
    // 当子组件换页时
    handlePageChange({ page, size }) {
      // console.log("父组件:");
      // console.log("size: ", size);
      // console.log("page: ", page);
      this.getDiseaseInfoByKeys(page, size, this.input);
    },
    // 根据关键字分页搜索
    getDiseaseInfoByKeys(page = 1, size = 8, keys) {
      // console.log('this.input: ', this.input);
      // console.log('this.value: ', this.value);
      let httpUrl = "";
      // 等分页查询接口完成加上去
      switch (this.value) {
        case "1":
          httpUrl = `/diagnose/search/accurate/${page}/${size}?key=${keys}`;
          break;
        case "2":
          httpUrl = `/diagnose/search/${page}/${size}?key=${keys}`;
          break;
      }
      // this.$http({
      //   url: httpUrl,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   method: "get",
      // })
      this.reqM12Service(httpUrl,{},'get').then((res) => {
        res = res.data;
        console.log(res);
        if (res.code === 20000) {
          res = res.data;
          this.queryResList = res.rows;
          if (res.total == 0) {
            this.$message({
              message: "查询不到相关数据",
            });
            return;
          }
          this.queryTotal = res.total;
          this.queryResList.forEach((item) => this.srcList.push(item.pic));
        } else {
          this.$message({
            message: res.message,
          });
        }
      });
    },
    // 点击开始查询
    startQuery() {
      this.getDiseaseInfoByKeys(1, 8, this.input);
    },
  },
};
</script>
<style lang="less" scoped>
.lxl-content {
  .pagination {
    width: 100%;
    padding: 20px;
    text-align: center;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .lxl-card {
    margin: 4px;
    height: 280px;
    width: 235px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    background-color: #fff;
    .lxl-card-2 {
      background-color: rgb(255, 255, 255);
      p {
        padding: 15px;
        text-align: center;
        font-weight: 10;
      }
    }
  }
}
.queryDisease {
  .func_tip {
    margin: 0 0 10px 0;
  }
  .content {
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    .tips {
      margin: 10px 0;
      padding-left: 10px;
      .tip {
        font-weight: 700;
        font-size: 14px;
      }
    }
    .choices {
      margin: 20px 0 20px 10px;
      .el-radio {
        margin: 10px;
      }
    }
    .search {
      margin-bottom: 20px;
      padding-left: 10px;
    }
    .commit {
      margin: 40px 0 10px 10px;
    }
  }
}
</style>