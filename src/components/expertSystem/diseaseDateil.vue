<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/autognosis' }">疾病自诊</el-breadcrumb-item>
        <el-breadcrumb-item>疾病详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div>
        <div class="someThing">
          <div class="lxl-1">
            <div>
              <h2><i class="el-icon-info"></i> {{ infoData[0].name }}</h2>
              <p style="margin-top: 3px">{{ infoData[0].baseInfo }}</p>
              <el-divider></el-divider>
              <h2><i class="el-icon-info"></i> {{ infoData[1].name }}</h2>
              <p style="margin-top: 3px">{{ infoData[1].baseInfo }}</p>
            </div>
            <div>
              <div class="block">
                <el-carousel>
                  <el-carousel-item v-for="item in 4" :key="item">
                    <el-image
                      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    ></el-image>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoData: [
        {
          name: "症状",
          baseInfo:
            "在水的上层集中，在夜间看到池水中类似点点星光的荧光。虾体不发光。病虾游动缓慢，反应迟钝，食欲减退或不摄食，呼吸困难，常在水面无方向的漫游或在池边浅水处不动，最后窒息死亡。",
        },
        {
          name: "症状",
          baseInfo:
            "①全池泼洒农康宝1号0.2ppm，三天后使用池底改良活化素20kg/亩米+复合芽孢杆菌250ml/亩米。②内服：鱼虾5号0.1%、虾蟹脱壳素0.1%、虾康宝0.5%、Vc脂0.2%、抗病毒口服液0.5%、营养素0.8%。",
        },
      ],
    };
  },
  methods: {
    getDiseaseInfo(){
      console.log(this.$router)
    }
  },
};
</script>
<style lang="less" scoped>
.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
  margin-bottom: 40px;
}
.lxl-box {
  width: 1150px;
}
.someThing {
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: rgb(245, 245, 245);
  display: flex;
  .lxl-1 {
    display: inherit;
    flex-direction: row;
    font-size: 13px;
    line-height: 30px;
    > * {
      flex: 1;
      padding: 10px;
    }
  }
}
/deep/.el-carousel__button {
  background-color: rgb(204, 123, 18) !important;
}
</style>