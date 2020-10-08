<template>
  <div>
    <div class="title">
      <div>热门专家</div>
      <router-link :to="{ name: 'expertList' }">
        <span style="font-size: 1rem"
          >查看更多 <i class="el-icon-arrow-right"></i
        ></span>
      </router-link>
    </div>
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
  },
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  margin-top: -8px;
}
.router-link-active {
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>