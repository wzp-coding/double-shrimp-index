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
          style="margin-right: 5px; border-left: 6px solid rgb(93, 183, 60)"
        ></span>
        专家问答
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
.photo_disease {
  margin-top: 20px;
}
.ccy-drvider {
  margin: 10px 0 7px 0;
}
</style>