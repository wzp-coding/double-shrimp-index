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
              <div class="videoPlay-video">
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
                  <span class="videoTitle">{{ videoItem.title }}</span>
                  <i class="el-icon-share" @click="openShareDialog">分享</i>
                </div>
                <span class="videoTime">2分15秒</span>
                <span class="watchCount">{{ videoItem.clickNum }}人已学习</span>
              </div>
            </div>
          </el-col>
          <!-- 右侧 -->
          <el-col :span="6" class="el_right">
            <h1 class="relativeTitle">相关课程</h1>
            <el-card class="box-card_1">
              <!-- <div slot="header" class="clearfix">
                <span class="card_Title">一件代发</span>
              </div> -->
              <div
                v-for="item in relativeVideo"
                :key="item.id"
                class="text item"
              >
                <el-row :gutter="5">
                  <el-col :span="12">
                    <div class="videoPic" @click="goVideo(item)">
                      <el-image :src="item.pic"></el-image>
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
              <span class="weight">课程说明：</span>{{ videoItem.brief }}
            </div>
            <div class="picDescribe">
              图文讲解
              <div class="course">惠农网一件代发上架产品教程</div>
              <div class="course">
                发布供应流程：惠农网APP→我要卖→专区报名(新版代发·产品上架)→右上角添加→发布供应→确认发布→在售·选择供应→上架完成
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div>
              <h2 class="HotClass">热门课程推荐</h2>
              <el-card class="box-card_2" shadow="never">
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
                      <div class="videoPic hotVideo" @click="goVideo(item)">
                        <el-image :src="item.pic"></el-image>
                        <i class="el-icon-video-play"></i>
                      </div>
                    </el-col>
                    <el-col :span="12" class="hotadviceTitle">
                      <div>
                        {{ item.title }}
                      </div>
                      <span class="watchTimes">
                        已有{{ item.clickNum }}人观看
                      </span>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-dialog
          title="分享（复制下方链接）"
          :visible.sync="shareDialogVisible"
          width="50%"
        >
          <el-input type="textarea" :rows="6" v-model="currentPath"> </el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="shareDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="shareDialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoItem: {},
      videoDuration: 0,
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
      // 相关推荐视频
      relativeVideo: [],
      // 热门推荐视频
      hotAdvice: [],
      // 是否展示分享内容的对话框
      shareDialogVisible: false,
      // 路径
      currentPath: "",
      config: {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      },
    };
  },
  created() {
    this.getItem();
    this.getHotVideo();
  },
  methods: {
    getItem() {
      this.videoItem = this.$route.query;
      this.playerOptions.sources[0].src = this.videoItem.contentUrl;
      this.getRealtiveVideo(this.videoItem.typeId, this.videoItem.id);
    },
    // 获取推荐视频
    async getRealtiveVideo(typeId, id) {
      const { data: res } = await this.reqM2Service(
        `/education/education/search/searchByTypeId/${typeId}/1/4`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取相关推荐视频失败");
      }
      this.relativeVideo = res.data.rows;
      this.relativeVideo.some((item, i) => {
        if (item.id == id) {
          this.relativeVideo.splice(i, 1); //在数组的some方法中，如果return true，就会立即终止这个数组的后续循环
          return true;
        }
      });
    },
    // 获取热门视频
    async getHotVideo() {
      const { data: res } = await this.reqM2Service(
        "/education/education/findByClickNum/1/4",
        "",
        "get"
      );
      this.hotAdvice = res.data.rows;
    },
    // 跳转视频
    async goVideo(item) {
      item.clickNum++;

      // const { data: res } = await this.$http.put(`/education/education/update/${item.id}`,{
      //   "brief": item.brief,
      //   "clickNum": item.clickNum,
      //   "contentUrl": item.contentUrl,
      //   "createBy": item.createBy,
      //   "createDate": item.createDate,
      //   "id": item.id,
      //   "module": item.module,
      //   "pic": item.pic,
      //   "recommend": item.recommend,
      //   "state": item.state,
      //   "title": item.title,
      //   "typeId": item.typeId,
      //   "updateBy": item.updateBy,
      //   "updateDate": item.updateDate
      // })
      // const { data: res } = this.reqM2Service(
      //   `/education/education/update/${item.id}`,
      //   item,
      //   "put"
      // );

      // if (res.code !== 20000) {
      //   return this.$message.error("失败");
      // }
      this.$router.push({
        path: "/videoPlay",
        name: "videoPlay",
        query: item,
      });
      window.location.reload();
    },
    // 打开分享内容对话框
    openShareDialog() {
      this.shareDialogVisible = true;
      this.currentPath = window.location.href;
    },
  },
};
</script>

<style lang="less">
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
.main {
  .el-row {
    background: #222;
  }
}
.videoPlay-video {
  display: inline-block;
  width: 850px;
  text-align: center;
  line-height: 100px;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.videoPlay-video[data-v-38789ab7] {
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
  .el-image {
    width: 120px;
    height: 100px;
  }
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
.box-card_1 {
  width: 260px;
  height: 420px;
  background-color: #222 !important;
  border: none !important;
  .el-card__header {
    padding: 5px 0px;
    border-bottom: none;
  }
  .el-card__body {
    padding: 18px 0px;
  }
}
.card_Title,
.videoInfo {
  color: #fff;
}
.summary {
  width: 100%;
}
.classIntroduce {
  font-size: 14px;
  margin: 30px 0;
}
.weight {
  font-weight: 700;
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
.box-card_2 {
  .el-card__header {
    padding: 10px 0;
  }
}
.box-card_2 {
  .el-card__body {
    padding: 10px 10px 10px 0;
  }
}
.hotadviceTitle {
  font-size: 15px;
  font-weight: 500;
  padding-top: 5px;
  position: relative;
}
.hotVideo {
  .el-image {
    width: 120px;
    height: 100px;
  }
}
.item {
  .el-col {
    cursor: pointer;
  }
}
.watchTimes {
  font-size: 12px;
  color: #aaa;
}
</style>