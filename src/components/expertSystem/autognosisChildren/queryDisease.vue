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
            <el-button type="primary">开始查询</el-button>
          </div></el-col
        >
      </el-row>
      <!--  -->
      <div class="lxl-content">
        <div class="lxl-card" v-for="item in 5" :key="item">
          <div>
            <el-image
              style="width: 100%; height: 200px"
              src="http://134.175.208.235/group1/M00/00/0A/rBAAD18hgoeAU6CaAAK1j4HbjSk344.png"
              :preview-src-list="srcList"
            ></el-image>
          </div>
          <router-link to="/diseaseDateil">
          <div class="lxl-card-2" >
            <p>气泡病虾</p>
          </div>
          </router-link>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
      <!-- 查询结果 -->
    </div>
  </div>
</template>
<script>
export default {
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
    };
  },
};
</script>
<style lang="less" scoped>
.lxl-content {
  .el-pagination {
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