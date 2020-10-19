<template>
  <div class="partOne">
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
        热门专家
      </div>
      <div
        style="
          font-size: 0.8rem;
          margin-top: 6px;
          color: rgb(93, 183, 60);
          cursor: pointer;
        "
        @click="toExpertList"
      >
        <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i>
      </div>
    </h3>
    <div class="block">
      <el-carousel :interval="Number(5000)" v-loading="loading">
        <el-carousel-item v-for="(item,index) in expertList" :key="index">
          <miniExpertCard :oneExpert="item[0]"></miniExpertCard>
          <miniExpertCard :oneExpert="item[1]"></miniExpertCard>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import miniExpertCard from "./miniExpertCard.vue";

export default {
  data() {
    return {
      expertList: [[], []],
      loading:true
    };
  },
  components: {
    miniExpertCard,
  },
  methods: {
    // 获取专家列表
    getExpertList() {
      this.$http
        .get(`http://106.75.154.40:9012/info/experts/findAll/1/4`)
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            res.rows.forEach((item) => {
              if (this.expertList[0].length < 2) {
                this.expertList[0].push(item);
              } else {
                this.expertList[1].push(item);
              }
            });
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
  async mounted() {
    await this.getExpertList();
  },
};
</script>
<style lang="less" scoped>
</style>