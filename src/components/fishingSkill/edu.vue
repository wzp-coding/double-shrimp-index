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
      <!--  -->
      <el-input
        placeholder="搜索您要的视频"
        prefix-icon="el-icon-search"
        v-model="input.key"
      >
        <div slot="append">
          <el-button icon="el-icon-search" @click="searchVideo">搜索</el-button>
        </div>
      </el-input>
      <!-- 导航栏 -->
      <div class="Tabs">
        <el-tabs v-model="activeName" @tab-click="classChange">
          <el-tab-pane label="课程分类：" disabled name="zero"></el-tab-pane>
          <el-tab-pane
            v-for="(nav, index) in classNav"
            :key="index"
            :label="nav.name"
            :name="index + ''"
            :id="nav.id"
          >
            <!-- 视频区域 -->
            <div class="videoArea">
              <el-row :gutter="20">
                <el-col
                  :span="6"
                  v-for="(item, index) in videoItems"
                  :key="item.id"
                >
                  <div>
                    <el-card
                      class="adviseCard bottom"
                      :body-style="{ padding: '0px' }"
                    >
                      <div class="video">
                        <el-image :src="item.pic" class="videoItem"></el-image>
                        <i
                          class="el-icon-video-play"
                          @click="goVideo(item)"
                        ></i>
                      </div>
                      <div style="padding: 14px; height: 60px">
                        <span>{{ item.title | ellipsis }}</span>
                        <div class="clearfix information">
                          <span class="studyCounter"
                            >查看次数：{{ item.clickNum }}</span
                          >
                        </div>
                        <el-button
                          type="text"
                          :class="[
                            'learnButton',
                            index < 1
                              ? 'specialButton_a'
                              : index < 2
                              ? 'specialButton_b'
                              : 'learnButton',
                          ]"
                          @click="goVideo(item)"
                          >立即学习</el-button
                        >
                      </div>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="pagination">
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page="videoInfo.page"
                :page-size="videoInfo.size"
                layout="prev, pager, next, jumper"
                :hide-on-single-page="true"
                :total="videoTotal"
              >
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: {
        key: "",
      },
      flag: true,
      activeName: "0",
      // 分类导航
      classNav: [],
      // 课程分类的 id
      classId: 0,
      // 视频参数
      videoInfo: {
        page: 1,
        size: 8,
      },
      pageNum: 1,
      // 视频
      videoItems: [],
      videoTotal: 0,
    };
  },
  created() {
    this.getClassNav();
  },
  methods: {
    async searchVideo() {
      this.flag = false;
      const { data: res } = await this.reqM12Service(
        `/education/search/time/${this.pageNum}/10/1`,
        { key: this.input.key },
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取搜索数据失败！");
      }
      if(res.data.total === 0) {
        this.$message.error('查无结果！')
      } else {
        this.activeName = this.classNav.length - 1 + "";
        this.videoItems = res.data.rows;
        console.log(this.videoItems);
      }
    },
    async goVideo(item) {
      item.clickNum++;
      console.log(item)
      const { data: res } = await this.reqM22Service(
        `/education/update/${item.id}`,
        item,
        "put"
      );
      console.log(res)
      this.$router.push({
        path: "/videoPlay",
        name: "videoPlay",
        query: item,
      });
    },
    async getClassNav() {
      const { data: res } = await this.reqM2Service(
        "/education/educationTypes",
        "",
        "get"
      );
      if (res.code !== 20000) {
        return this.$message.error("请求导航数据失败！");
      }
      this.classNav = res.data;
      console.log(this.classNav)
      this.classId = this.classNav[0].id;
      this.getClass(this.classNav[0].id);
    },
    async getClass(typeId) {
      const { data: res } = await this.reqM2Service(
        `/education/education/search/searchByTypeId/${typeId}/${this.videoInfo.page}/${this.videoInfo.size}`,
        "",
        "get"
      );
      console.log(typeId)
      this.videoItems = res.data.rows;
      this.videoTotal = res.data.total;
      // console.log(this.videoItems)
    },
    classChange(tab) {
      if (this.activeName === this.classNav.length - 1 + "") {
        this.flag = false;
      } else {
        this.flag = true;
      }
      // 获取 id
      this.classId = tab.$attrs["id"];
      // 恢复默认
      this.videoInfo.page = 1;
      // 根据 id 改变网络请求
      this.getClass(this.classId);
      console.log(this.activeName)
    },
    // 监听 pagenum 改变
    handleCurrentChange(newPage) {
      this.videoInfo.page = newPage;
      if (this.flag) {
        this.getClass(this.classId);
      } else {
        this.searchVideo();
      }
    },
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 11) {
        return value.slice(0, 11) + "...";
      }
      return value;
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
    color: #46c048;
  }
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
.videoArea {
  margin-left: 15px;
  margin-top: 20px;
}
.adviseCard {
  margin-bottom: 15px;
}
.video {
  position: relative;
}
.videoItem {
  width: 100%;
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
.bottom {
  position: relative;
}
.learnButton {
  width: 80px;
  height: 30px;
  position: absolute;
  right: 10px;
  bottom: 10px;
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
.el-button {
  line-height: 0;
}
.pagination {
  margin: 20px auto;
  text-align: center;
}
</style>