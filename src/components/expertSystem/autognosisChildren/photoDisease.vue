<template>
  <div class="photo_disease">
    <h3
      style="
        display: flex;
        justify-content: space-between;
        margin: 15px 5px 5px 4px;
      "
    >
      <div>
        <span
          style="margin-right: 5px; border-left: 6px solid #409EFF"
        ></span>
        图文识病
      </div>
      <div
        style="
          font-size: 0.8rem;
          margin-top: 6px;
          color: rgb(93, 183, 60);
          cursor: pointer;
        "
        @click="toDiseaseDateil"
      >
        <!-- <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i> -->
      </div>
    </h3>
    <el-divider class="ccy-drvider"></el-divider>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in queryResList" :key="item.id"
        ><div class="grid-content">
          <miniPhotoDisease :info="item"></miniPhotoDisease></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
import miniPhotoDisease from "./miniPhotoDisease";

export default {
  data() {
    return {
      queryResList: [],
    };
  },
  components: {
    miniPhotoDisease,
  },
  methods: {
    // 获取4条数据
    getFourDisease(page = 1, size = 4) {
      // 等分页查询接口完成加上去
      let httpUrl = `/diagnose/search/all/${page}/${size}`;
      this.reqM12Service(httpUrl,{},'get').then((res) => {
        res = res.data;
        console.log(res); 
        if (res.code === 20000) {
          res = res.data;
          this.queryResList = res.rows;
          console.log(this.queryResList);
        }
      });
    },
    toDiseaseDateil() {},
  },
  async mounted() {
    await this.getFourDisease();
  },
};
</script>
<style lang="less" scoped>
.photo_disease {
  margin-top: 20px;
}
.ccy-drvider {
  margin: 10px 0 7px 0;
}
</style>