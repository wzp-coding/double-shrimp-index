<template>
  <div class="photo_disease">
    <el-row
      style="padding-top: 20px; font-size: 20px; border-bottom: 1px solid #ddd"
    >
      <el-col :span="24"
        ><div class="grid-content">
          图文识病
          <div style="float: right; cursor: pointer">
            <span style="color: #ddd; font-size: 14px">查看更多&nbsp;</span>
            <i
              class="el-icon-arrow-right"
              style="border: 1px solid #000; border-radius: 50%"
            ></i>
          </div></div
      ></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content"><miniPhotoDisease></miniPhotoDisease></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content"><miniPhotoDisease></miniPhotoDisease></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content"><miniPhotoDisease></miniPhotoDisease></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content"><miniPhotoDisease></miniPhotoDisease></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
import miniPhotoDisease from "./miniPhotoDisease";

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {
    miniPhotoDisease,
  },
};
</script>
<style lang="less" scoped>
.photo_disease{
  margin-top: 20px;
  
}
</style>