<template>
  <div class="content lxl-body">
    <div class="lxl-box">
      <!-- 面包屑 -->
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>渔技学堂</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/edu' }">远程教育</el-breadcrumb-item>
        <el-breadcrumb-item>详情页面</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div class="main">
        <el-row :gutter="0">
          <!-- 左侧 -->
          <el-col :span="18" class="col_1">
            <div class="videoArea">
              <div class="video">
                <video-player
                  class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playerOptions"
                >
                </video-player>
              </div>
              <div class="infomation">
                <div class="Title">
                  <span class="videoTitle">标题</span>
                  <i class="el-icon-share">分享</i>
                </div>
                <span class="videoTime">2分15秒</span>
                <span class="watchCount">4082人已学习</span>
              </div>
            </div>
          </el-col>
          <!-- 右侧 -->
          <el-col :span="6" class="el_right">
            <h1 class="relativeTitle">相关课程</h1>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="card_Title">一件代发</span>
              </div>
              <div
                v-for="(item, index) in relativeVideo"
                :key="index"
                class="text item"
              >
                <el-row :gutter="5">
                  <el-col :span="12">
                    <div class="videoPic">
                      <el-image :src="item.src"></el-image>
                      <i class="el-icon-video-play"></i>
                    </div>
                  </el-col>
                  <el-col :span="12"
                    ><div class="videoInfo">{{ item.title }}</div></el-col
                  >
                </el-row>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <!-- 视频简介区域 -->
      <div class="summary">
        <el-row :gutter="50">
          <el-col :span="17">
            <div class="classIntroduce">
              课程说明：测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </div>
            <div class="picDescribe">
              图文讲解
              <div class="course">惠农网一件代发上架产品教程</div>
              <div class="course">发布供应流程：惠农网APP→我要卖→专区报名</div>
            </div>
          </el-col>
          <el-col :span="7">
            <div>
              <h2 class="HotClass">热门课程推荐</h2>
              <el-card class="box-card_2">
                <div slot="header" class="clearfix">
                  <span>热门推荐</span>
                </div>
                <div
                  v-for="(item, index) in hotAdvice"
                  :key="index"
                  class="text item"
                >
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <div class="videoPic">
                        <el-image :src="item.src"></el-image>
                        <i class="el-icon-video-play"></i>
                      </div>
                    </el-col>
                    <el-col :span="12" class="hotadviceTitle"
                      ><div>{{ item.title }}</div></el-col
                    >
                  </el-row>
                </div>
              </el-card>
              <el-card class="box-card_2">
                <div slot="header" class="clearfix">
                  <span>基础操作</span>
                </div>
                <div
                  v-for="(item, index) in baseOperation"
                  :key="index"
                  class="text item"
                >
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <div class="videoPic">
                        <el-image :src="item.src"></el-image>
                        <i class="el-icon-video-play"></i>
                      </div>
                    </el-col>
                    <el-col :span="12" class="hotadviceTitle"
                      ><div>{{ item.title }}</div></el-col
                    >
                  </el-row>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerOptions: {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择  佳行为,立即开始加载视频（如果浏览器支持）
        preload: "auto",
        language: "zh-CN",
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代  一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: "16:9",
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [
          {
            //类型
            type: "video/mp4",
            //url地址
            src: "https://www.runoob.com/try/demo_source/movie.mp4",
          },
        ],
        //你的封面地址
        poster: "",
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true,
        },
      },
      relativeVideo: [
        {
          title: "视频1大三撒大所多撒多所多撒所多所撒撒多",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          title: "视频2",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          title: "视频3",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          title: "视频4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
      ],
      hotAdvice: [
        {
          title: "热门推荐视频1",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          title: "热门推荐视频2",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
      ],
      baseOperation: [
        {
          title: "基础操作视频1",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          title: "基础操作视频2",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ccy-drvider {
  margin: 10px 0 7px 0;
}
.lxl-body {
  display: flex;
  justify-content: center;
}
.lxl-breadcrumb {
  margin-top: 25px;
  margin-left: 18px;
  margin-bottom: -10px;
}
.lxl-box {
  width: 1150px;
}
.content {
  width: 1150px;
  margin: 0 auto;
}
.main {
  margin-top: -10px;
}
.main >>> .el-row {
  background: #222;
}
.video {
  display: inline-block;
  width: 850px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.video[data-v-38789ab7] {
  border: 0;
}
.videoArea {
  width: 100%;
}
.videoTitle {
  color: #fff;
  font-size: 25px;
  font-weight: 500;
}
.videoTime,
.watchCount {
  color: gray;
  padding: 15px 30px;
  font-size: 14px;
}
.watchCount {
  padding-left: 5px;
}
.el-icon-share {
  color: #fff;
  float: right;
  line-height: 32px;
  cursor: pointer;
}
.el_right {
  height: 450px;
  padding-right: 0 !important;
}
.Title {
  padding: 15px 30px;
}
.infomation {
  margin-bottom: 40px;
}
.relativeTitle {
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  padding: 15px 0px;
}
.videoPic {
  padding: 5px 0;
  width: 120px;
  position: relative;
}
.el-image {
  width: 120px;
  height: auto;
}
.el-icon-video-play {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
}
.videoInfo {
  padding: 10px 0;
  font-size: 14px;
}
.box-card {
  width: 260px;
  height: 420px;
  background-color: #222;
  border: none;
  cursor: pointer;
}
.box-card >>> .el-card__header {
  padding: 5px 0px;
  border-bottom: none;
}
.box-card >>> .el-card__body {
  padding: 18px 0px;
}
.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  box-shadow: none;
}
.card_Title,
.videoInfo {
  color: #fff;
}
.summary {
  width: 100%;
}
.classIntroduce {
  margin: 30px 0;
}
.course {
  color: red;
  font-weight: 700;
  padding: 10px 0;
}
.HotClass {
  margin: 25px 0 10px 0;
  font-weight: normal;
}
.box-card_2 {
  width: 100%;
  height: auto;
  border: none;
  cursor: pointer;
}
.box-card_2 >>> .el-card__header {
  padding: 10px 0;
}
.box-card_2 >>> .el-card__body {
  padding: 10px 10px 10px 0;
}
.hotadviceTitle {
  font-size: 15px;
  font-weight: 500;
  padding-top: 5px;
}
</style>