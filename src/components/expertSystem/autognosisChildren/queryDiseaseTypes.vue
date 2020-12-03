<template>
  <div class="queryDiseaseTypes">
    <el-row>
      <div class="little_title">{{ title }}</div>
    </el-row>
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane
          v-for="(item, index) in labelList"
          :key="index"
          :label="item.littleTitle"
          ><div class="content">
            <el-row class="title">
              <el-col :span="24">{{ item.littleTitle }} </el-col>
            </el-row>
            <el-row class="choices">
              <el-col :span="24">
                <el-radio-group v-model="radio">
                  <el-radio
                    v-for="(item1, index1) in item.checkBoxs"
                    :key="index1"
                    :label="item1"
                    >{{ item1 }}</el-radio
                  >
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row class="commit">
              <el-col :span="12">
                <el-button type="primary" @click="resetChoice"
                  >症状重选</el-button
                >
              </el-col>
              <el-col :span="12">
                <el-button type="primary" @click="submitDisease"
                  >症状提交</el-button
                >
              </el-col>
            </el-row>
          </div></el-tab-pane
        >
      </el-tabs>
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
</template>
<script>
import pagination from "../expertListChildren/pagination";
export default {
  components: {
    pagination,
  },
  data() {
    return {
      radio: "",
      queryResList: [],
      queryTotal: 10,
      srcList: [],
      size:8,
    };
  },
  props: ["title", "labelList"],
  methods: {
    // 重置按钮
    resetChoice() {
      this.radio = "";
    },
    submitDisease(){
      this.getAllDisease(1,8,this.radio);
    },
    // 点击提交症状
    getAllDisease(page=1,size=8,keys) {
      // 等分页查询接口完成加上去
      let httpUrl = `/diagnose/search/${page}/${size}?key=${keys}`;
      this.reqM12Service(httpUrl,{},'get').then((res) => {
        console.log(res.data);
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          this.queryResList = res.rows;
          this.queryTotal = res.total
          this.queryResList.forEach((item) => this.srcList.push(item.pic));
        }
      });
    },
     // 当子组件换页时
    handlePageChange({ page, size }) {
    //   console.log("父组件:");
    //   console.log("size: ", size);
    //   console.log("page: ", page);
      this.getAllDisease(page, size,this.radio);
    },
  },
};
</script>
<style lang="less" scoped>
.queryDiseaseTypes {
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
  .content {
    .choices {
      margin: 20px 0 20px 10px;
      widows: 100%;
      .el-radio {
        margin: 10px;
      }
    }
  }
}
</style>