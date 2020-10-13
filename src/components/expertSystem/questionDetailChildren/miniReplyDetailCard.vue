<template>
  <div class="miniReplyDetailCard">
    <div class="reply-item">
      <div class="res_user">
        <div class="left">
          <el-avatar
            :size="50"
            src="http://134.175.208.235/group1/M00/00/03/rBAAD18PvgqABwO4AAB7h4B4GuU427.jpg"
          ></el-avatar>
          <div class="info">
            <div style="margin-top: 5px">
              <i class="el-icon-user"></i>
              {{ replyInfo.replierName ? replyInfo.replierName : "匿名" }}
            </div>
            <div class="res_time">
              {{ this.formatTime(replyInfo.creationTime) }}
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="res_info">
        <div class="text">
          <span class="queicon">答</span>
          {{ replyInfo.reply }}
        </div>
        <!-- 图片预览 -->
        <div
          class="demo-image__preview"
          style="margin-top: 10px"
          v-if="replyInfo.images.length != 0"
        >
          <el-image
            v-for="(item, index) in replyInfo.image"
            :key="index"
            style="width: 100px; height: 100px; margin-right: 10px"
            :src="item"
            :preview-src-list="replyInfo.images"
            fit="cover"
          >
          </el-image>
        </div>
        <!-- 点赞按钮 -->
        <div class="div_btn">
          <el-button type="success" class="btn" @click="changeParise">
            <i class="el-icon-medal">有用</i>
            <el-divider direction="vertical"></el-divider>
            <span id="pariseNum">{{ replyInfo.pariseNum }}</span>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parise: false,
    };
  },
  props: ["replyInfo"],
  methods: {
    changeParise() {
      if (!this.parise) this.parise = !this.parise;
    },
    formatTime(date) {
      //date是传入的时间
      const d = new Date(date);
      const month =
        d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
      const hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
      const min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
      const sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
      const times =
        d.getFullYear() +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        min +
        ":" +
        sec;
      return times;
    },
  },
};
</script>
<style lang="less" scoped>
.miniReplyDetailCard {
  /deep/.reply-item {
    .res_user {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      .left {
        display: flex;
        > * {
          margin-right: 10px;
        }

        .info {
          .res_time {
            margin-top: 8px;
            color: #ccc;
            font-size: 12px;
          }
        }
      }
    }
    .res_info {
      .queicon {
        padding: 2px 2px;
        background-color: #409eff;
        border-radius: 4px;
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        margin-right: 3px;
      }
      font-size: 15px;
      .text {
        padding: 10px;
        padding-left: 0;
      }
      .img_content {
        width: 200px;
        height: 200px;
        background: #000;
        margin-top: 10px;
      }
      .div_btn {
        width: 100%;
        display: inline-block;
        text-align: right;
        .el-button.is-round {
          padding: 5px 10px;
        }
      }
    }
  }
}
</style>