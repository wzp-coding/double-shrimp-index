<template>
  <div class="s-foot">
    <el-row justify align >
      <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="contain">
          <img src="http://www.zhenyuanma.com/img/zymsyy.png" alt="" />
          <h3>真源码溯源云</h3>
          <p>溯源云扶贫平台，从源头保障产品的安全，让消费者更放心。</p>
        </div>
      </el-col>
      <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="contain">
          <img src="http://www.zhenyuanma.com/img/zhny.png" alt="" />
          <h3>智慧农业物联网</h3>
          <p>
            支持按需添加物联网模块：温度、海拔、湿度、风力、水质、土然、灌溉水源流量、水位等物联网模块支持自定义添加。
          </p>
        </div>
      </el-col>
      <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="contain">
          <img src="http://www.zhenyuanma.com/img/ytzb.png" alt="" />
          <h3>源头直播摄像机</h3>
          <p>
            自主研发，是安防监控也是网红农货营销工具打开手机，随时看基地以及顾客访问记录顾客留言。客户看得见的真源头直播。支持24小时直播，真实货源看得见。支持分享摄像机画面给亲人给客户。
          </p>
        </div>
      </el-col>
      <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="contain">
          <img src="http://www.zhenyuanma.com/img/dkgl.png" alt="" />
          <h3>地块管理</h3>
          <p>
            采用最先进的深度学习技术，在高分辨率遥感影像上，根据耕地的纹理、种类等特征，实时地确定地块位置、识别地块分界、测算地块和种植面积，并在云端存储。
          </p>
        </div>
      </el-col>
      <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="contain">
          <img src="http://www.zhenyuanma.com/img/nydsj.png" alt="" />
          <h3>农业大数据</h3>
          <p>
            智慧农业大数据平台高效的将自然环境数据与种植数据根据季节和生长周期进行融合计算。
          </p>
        </div>
      </el-col>
      <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="contain">
          <img src="http://www.zhenyuanma.com/img/fch.png" alt="" />
          <h3>防串货</h3>
          <p>
            对产品的流通进行有效的监管，帮助厂家进行销售区域的管理和跟踪查看。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
.s-foot {
  margin: 0 auto; // 处于父元素的居中位置
  width: 1150px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;g
}
.contain {
  width: 300px;
  margin: 0 15px;
  padding: 0 15px;
  img {
    width: 96px;
    height: 96px;
  }
  h3 {
    margin: 10px 0px;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 15px;
    font-family: "Roboto Slab", serif;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
    max-width: 335px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
  }
}
</style>