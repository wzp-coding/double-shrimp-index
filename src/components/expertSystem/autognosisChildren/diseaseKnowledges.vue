<template>
  <div class="diseaseKnowledges">
    <el-row>
      <div class="little_title">虾病知识概览</div>
    </el-row>
    <div class="content">
      <el-row class="title"> <el-col :span="24">虾病知识概览 </el-col> </el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="#" width="180"> </el-table-column>
        <el-table-column label="图片" width="180"
          ><template slot-scope="scope">
            <div class="img_div">
              <img :src="scope.row.img" alt="" />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="疾病名称"> </el-table-column>
        <el-table-column prop="symbol" label="症状"> </el-table-column>
        <el-table-column prop="treat" label="治疗方法"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  .img_div {
    padding: 5px;
    border: 1px solid #eee;
    border-radius: 4px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>