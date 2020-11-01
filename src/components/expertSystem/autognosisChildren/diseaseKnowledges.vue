<template>
  <div class="diseaseKnowledges">
    <el-row>
      <div class="little_title">虾病知识概览</div>
    </el-row>
    <div class="content">
      <el-row class="title"> <el-col :span="24">虾病知识概览 </el-col> </el-row>
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
        @pageChange="handlePageChange"
        v-if="this.queryResList.length != 0"
      ></pagination>
      </div>
    </div>
  </div>
</template>
<script>
import pagination from "../expertListChildren/pagination";
export default {
  data() {
    return {
      queryResList: [],
      queryTotal: 10,
      srcList: [],
    };
  },
  components: {
    pagination
  },
  methods:{
    // 当子组件换页时
    handlePageChange({ page, size }) {
      console.log("父组件:");
      console.log("size: ", size);
      console.log("page: ", page);
      this.getAllDisease(page, size);
    },
    // 获取数据
    getAllDisease(page=1,size=8) {
      // 等分页查询接口完成加上去
      let httpUrl = `http://120.78.14.141:9007/diagnose/search/all`;
      this.$http.get(httpUrl).then((res) => {
        console.log(res.data);
        res = res.data;
        if (res.code === 20000) {
          res = res.data[0].content;
          this.queryResList = res.slice(0, 8);
          this.queryTotal = res.length
          res.forEach((item) => this.srcList.push(item.pic));
        }
      });
    },

  },
  mounted(){
    this.getAllDisease()
  }
};
</script>
<style lang="less" scoped>
.diseaseKnowledges {
  .lxl-content {
    .pagination {
      width: 100%;
      padding: 20px;
      text-align: center;
    }
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    display: flex;
    margin-bottom: 25px;
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
}
</style>