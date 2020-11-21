<template>
  <div class="recommendExpert">
    <h3
      style="
        display: flex;
        justify-content: space-between;
        margin: 15px 5px 5px 4px;
      "
    >
      <div>
        <span
          style="margin-right: 5px; border-left: 6px solid rgb(93, 183, 60)"
        ></span>
        其他专家
      </div>
      <div
        style="
          font-size: 0.8rem;
          margin-top: 6px;
          color: rgb(93, 183, 60);
          cursor: pointer;
        "
        @click="toExpertList()"
      >
        <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i>
      </div>
    </h3>
    <el-divider class="ccy-drvider"></el-divider>
    <el-row v-for="item in expertList" :key="item.id">
      <miniExpertCard :oneExpert="item"></miniExpertCard>
    </el-row>
  </div>
</template>
<script>
import miniExpertCard from "../expertInterrogationChildren/miniExpertCard";

export default {
  data() {
    return {
      expertList: [],
    };
  },
  components: {
    miniExpertCard,
  },
  methods: {
    // 获取专家列表
    getExpertList() {
      this.reqM2Service(`/info/experts/findAll/1/4`,{},'get')
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.expertList = res.rows;
          } else {
            this.$message({
              message: "获取专家信息失败",
            });
          }
          this.loading = false
        });
    },
    
    // 跳转到专家列表
    toExpertList() {
      this.$router.push({name:'wzp_expertList'});
    },
  },
  mounted(){
    this.getExpertList()
  }
};
</script>
<style lang="less" scoped>
.ccy-drvider {
  margin: 10px 0 7px 0;
}
.recommendExpert {
  /deep/.el-card {
    border: none;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    .ques_item {
      background-color: #fff;
      border-radius: 0;
      .mid {
        height: 100%;
      }
    }
  }
}
</style>