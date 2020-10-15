<template>
  <div class="diseaseKnowledges">
    <el-row>
      <div class="little_title">虾病知识概览</div>
    </el-row>
    <div class="content">
      <el-row class="title"> <el-col :span="24">虾病知识概览 </el-col> </el-row>
      <div class="lxl-content">
        <div class="lxl-card" v-for="item in 5" :key="item">
          <div>
            <el-image
              style="width: 100%; height: 200px"
              src="http://134.175.208.235/group1/M00/00/0A/rBAAD18hgoeAU6CaAAK1j4HbjSk344.png"
              :preview-src-list="srcList"
            ></el-image>
          </div>
          <div class="lxl-card-2">
            <p>气泡病虾病知识概览虾病知识概览虾病知识概览</p>
          </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
      tableData: [
        {
          id: "1",
          img:
            "http://134.175.208.235/group1/M00/00/0A/rBAAD18haaqAf9-vAAG7QgYwbUc913.png",
          name: "软壳病",
          symbol:
            "病虾甲壳薄而软，壳与肌肉似乎分离，有的病虾在壳下有积水，有的壳粗糙。病虾比同池的健康虾体长小1～2厘米。病虾体弱，不活泼，易被同类蚕食。	",
          treat:
            "预防：①饲料营养全面，饲料中添加固壳素或水体经常泼洒过磷酸钙，有一定的预防作用。②新挖池塘，应保持水体一定的肥度，盐碱池塘应适当降低pH，发生软壳病的对虾塘施过磷酸钙可以改善软壳状况。 治疗：①适当加大换水量，改善养殖水质，全池泼洒池底改良活化素20kg/亩米；②在饲料中添加鱼虾5号0.1%、虾蟹脱壳素0.1%、虾康宝0.5%、Vc脂0.2%、营养素0.8%，提高各种微量元素的含量；③施用复合芽孢杆菌250ml/亩米，促进有益藻类的生长，并调节水体的酸碱度。",
        },
        {
          id: "2",
          img:
            "http://134.175.208.235/group1/M00/00/0A/rBAAD18haaqAf9-vAAG7QgYwbUc913.png",
          name: "软壳病",
          symbol:
            "病虾甲壳薄而软，壳与肌肉似乎分离，有的病虾在壳下有积水，有的壳粗糙。病虾比同池的健康虾体长小1～2厘米。病虾体弱，不活泼，易被同类蚕食。	",
          treat:
            "预防：①饲料营养全面，饲料中添加固壳素或水体经常泼洒过磷酸钙，有一定的预防作用。②新挖池塘，应保持水体一定的肥度，盐碱池塘应适当降低pH，发生软壳病的对虾塘施过磷酸钙可以改善软壳状况。 治疗：①适当加大换水量，改善养殖水质，全池泼洒池底改良活化素20kg/亩米；②在饲料中添加鱼虾5号0.1%、虾蟹脱壳素0.1%、虾康宝0.5%、Vc脂0.2%、营养素0.8%，提高各种微量元素的含量；③施用复合芽孢杆菌250ml/亩米，促进有益藻类的生长，并调节水体的酸碱度。",
        },
        {
          id: "3",
          img:
            "http://134.175.208.235/group1/M00/00/0A/rBAAD18haaqAf9-vAAG7QgYwbUc913.png",
          name: "软壳病",
          symbol:
            "病虾甲壳薄而软，壳与肌肉似乎分离，有的病虾在壳下有积水，有的壳粗糙。病虾比同池的健康虾体长小1～2厘米。病虾体弱，不活泼，易被同类蚕食。	",
          treat:
            "预防：①饲料营养全面，饲料中添加固壳素或水体经常泼洒过磷酸钙，有一定的预防作用。②新挖池塘，应保持水体一定的肥度，盐碱池塘应适当降低pH，发生软壳病的对虾塘施过磷酸钙可以改善软壳状况。 治疗：①适当加大换水量，改善养殖水质，全池泼洒池底改良活化素20kg/亩米；②在饲料中添加鱼虾5号0.1%、虾蟹脱壳素0.1%、虾康宝0.5%、Vc脂0.2%、营养素0.8%，提高各种微量元素的含量；③施用复合芽孢杆菌250ml/亩米，促进有益藻类的生长，并调节水体的酸碱度。",
        },
        {
          id: "4",
          img:
            "http://134.175.208.235/group1/M00/00/0A/rBAAD18haaqAf9-vAAG7QgYwbUc913.png",
          name: "软壳病",
          symbol:
            "病虾甲壳薄而软，壳与肌肉似乎分离，有的病虾在壳下有积水，有的壳粗糙。病虾比同池的健康虾体长小1～2厘米。病虾体弱，不活泼，易被同类蚕食。	",
          treat:
            "预防：①饲料营养全面，饲料中添加固壳素或水体经常泼洒过磷酸钙，有一定的预防作用。②新挖池塘，应保持水体一定的肥度，盐碱池塘应适当降低pH，发生软壳病的对虾塘施过磷酸钙可以改善软壳状况。 治疗：①适当加大换水量，改善养殖水质，全池泼洒池底改良活化素20kg/亩米；②在饲料中添加鱼虾5号0.1%、虾蟹脱壳素0.1%、虾康宝0.5%、Vc脂0.2%、营养素0.8%，提高各种微量元素的含量；③施用复合芽孢杆菌250ml/亩米，促进有益藻类的生长，并调节水体的酸碱度。",
        },
      ],
    };
  },
  components: {},
};
</script>
<style lang="less" scoped>
.diseaseKnowledges {
  .lxl-content {
    .el-pagination {
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