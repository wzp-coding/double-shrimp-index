<template>
  <div class="partOne">
    <!-- <div class="title">
      热门专家
      <router-link style="float: right; cursor: pointer" :to="{name:'expertList'}" >
        <span style="color: #ddd; font-size: 14px">查看更多&nbsp;</span>
        <i
          class="el-icon-arrow-right"
        ></i>
      </router-link>
    </div> -->
    <h3 style="display: flex; justify-content: space-between;margin:15px 5px 5px 4px">
      <div>
        <span
          style="margin-right: 5px; border-left: 6px solid rgb(93, 183, 60)"
        ></span>
        热门专家
      </div>
      <div style="font-size: 0.8rem; margin-top: 6px; color: rgb(93, 183, 60);cursor: pointer;" @click="toExpertList()">
        <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i>
      </div>
    </h3>
    <!-- <el-divider class="ccy-drvider"></el-divider> -->
    <div class="block">
      <el-carousel>
        <el-carousel-item>
          <miniExpertCard></miniExpertCard>
          <miniExpertCard></miniExpertCard>
        </el-carousel-item>
        <el-carousel-item>
          <miniExpertCard></miniExpertCard>
          <miniExpertCard></miniExpertCard>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import miniExpertCard from "./miniExpertCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    miniExpertCard,
  },
  methods: {
    pushToExpertList() {
      this.$route.push("");
    },
    toExpertList(){
      this.$router.push("/expertInterrogation/expertList");
    }
  },
};
</script>
<style lang="less" scoped>
</style>