<template>
  <div class="content lxl-body">
    <!-- 面包屑 -->
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>渔技学堂</el-breadcrumb-item>
        <el-breadcrumb-item>远程教育</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <!-- 导航栏 -->
      <div class="Tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="课程分类：" disabled></el-tab-pane>
          <el-tab-pane label="热门推荐" name="first">
            <!-- 视频区域 -->
            <div class="vedioArea">
              <el-row :gutter="20">
                <el-col :span="6" v-for="item in vedioItems" :key="item.id">
                  <div>
                    <el-card class="adviseCard">
                      <div class="video">
                        <video :src="item.src" class="videoItem"></video>
                        <i class="el-icon-video-play" @click="goVideo"></i>
                      </div>
                      <div style="padding: 14px">
                        <span>{{ item.title }}</span>
                        <div class="bottom clearfix information">
                          <span class="studyCounter"
                            >{{ item.learnerNum }}人已学习</span
                          >
                          <el-button
                            type="text"
                            :class="[
                              'learnButton',
                              item.id < 2
                                ? 'specialButton_a'
                                : item.id < 3
                                ? 'specialButton_b'
                                : 'learnButton',
                            ]"
                            @click="goVideo"
                            >立即学习</el-button
                          >
                        </div>
                      </div>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="基础操作" name="second">基础操作</el-tab-pane>
          <el-tab-pane label="工具与使用" name="third">工具与使用</el-tab-pane>
          <el-tab-pane label="数据转换" name="fourth">数据转换</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      vedioItems: [
        {
          id: 1,
          src: "https://www.runoob.com/try/demo_source/movie.ogg",
          title: "视频1",
          learnerNum: 3675,
        },
        {
          id: 2,
          src: "https://www.runoob.com/try/demo_source/movie.ogg",
          title: "视频2",
          learnerNum: 3675,
        },
        {
          id: 3,
          src: "https://www.runoob.com/try/demo_source/movie.ogg",
          title: "视频3",
          learnerNum: 3644,
        },
        {
          id: 4,
          src: "https://www.runoob.com/try/demo_source/movie.ogg",
          title: "视频4",
          learnerNum: 3621,
        },
        {
          id: 5,
          src: "https://www.runoob.com/try/demo_source/movie.ogg",
          title: "视频5",
          learnerNum: 3655,
        },
      ],
    };
  },
  methods: {
    goVideo() {
      this.$router.push("/videoPlay");
    },
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
}
.lxl-box {
  width: 1150px;
}
.content {
  width: 1150px;
  margin: 0 auto;
}
.Tabs {
  .el-tabs {
    margin: 40px 0 40px 18px;
  }
}
.Tabs {
  .el-tabs__item:hover {
    color: #46c048;
  }
}
.Tabs {
  .el-tabs__item.is-active {
  }
  color: #46c048;
}
.Tabs {
  .el-tabs__active-bar {
    background-color: #46c048;
  }
}
.Tabs[data-v-6bfcf49e] .el-tabs {
  margin: 20px 0 20px 18px;
}
.studyCounter {
  font-size: 13px;
  color: #999;
}
.vedioArea {
  margin-left: 15px;
  margin-top: 20px;
}
.adviseCard {
  padding: 0px;
}
.adviseCard {
  .el-card__body {
    padding: 0;
    margin-top: 10px;
    margin-bottom: 30px;
  }
}
.video {
  position: relative;
}
.videoItem {
  width: 245px;
  height: 200px;
}
.el-icon-video-play {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
}
.learnButton {
  width: 80px;
  height: 30px;
  float: right;
  color: #000;
  border: 1px solid #fff;
  border-radius: 15px;
}
.specialButton_a {
  background-color: #409eff;
  color: #fff;
}
.specialButton_a:hover {
  background-color: #fff;
  color: #409eff;
}
.specialButton_b {
  background-color: #46c048;
  color: #fff;
}
.specialButton_b:hover {
  background-color: #fff;
  color: #46c048;
}
.information {
  .el-button {
    line-height: 0;
  }
}
</style>