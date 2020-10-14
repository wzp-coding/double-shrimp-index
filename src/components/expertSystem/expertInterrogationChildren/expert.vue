<template>
  <div>
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
        农技专家
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
    <el-row :gutter="20" v-loading="loading">
      <el-col :span="8" v-for="item in expertList" :key="item.id"
        ><div class="grid-content bg-purple">
          <miniExpertCard :oneExpert="item"></miniExpertCard></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
import miniExpertCard from "./miniExpertCard.vue";

export default {
  data() {
    return {
      expertList: [],
      loading: true,
    };
  },
  components: {
    miniExpertCard,
  },
  methods: {
    getExpertList() {
      this.$http
        .get(`http://106.75.154.40:9012/info/experts/findAll/1/3`)
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            res.rows.forEach((item) => this.expertList.push(item));
          } else {
            this.$message({
              message: "获取专家信息失败",
            });
          }
          this.loading = false;
        });
    },
    toExpertList() {
      this.$router.push("/expertInterrogation/expertList");
    },
  },
  mounted() {
    this.getExpertList();
  },
};
</script>
<style lang="less" scoped>
.ccy-drvider {
  margin: 10px 0 7px 0;
}
</style>