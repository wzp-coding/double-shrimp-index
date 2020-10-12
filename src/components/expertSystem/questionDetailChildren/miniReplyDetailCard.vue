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
            <div style="margin-top: 5px"><i class="el-icon-user"></i> 张三</div>
            <div class="res_time">2020-08-03 11:02:00</div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="res_info">
        <div class="text">
          <span class="queicon">答</span>
          3.后期催肥：在中期的养殖基础上，加大投饵量，特别是在对虾摄食旺盛的傍晚和深夜，加强高效优质配合饲料的投喂，并增加投喂次数，适当提高虾塘的池水盐度，促进对虾蜕壳和硬壳，这样可以提高商品虾的质量，提高养殖的经济效益。
          。同时优兰宝可以提高蛋白质和氨基酸等营养物质吸收，提高废弃蛋白的利用，降低对虾饵料系数，促进对虾生长。
        </div>
        <!-- 图片预览 -->
        <div class="demo-image__preview" style="margin-top: 10px">
          <el-image
            style="width: 100px; height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            :preview-src-list="srcList"
          >
          </el-image>
        </div>
        <!--  -->
        <div class="div_btn">
          <el-button type="success" class="btn" @click="changeParise">
            <i class="el-icon-medal">有用</i>
            <el-divider direction="vertical"></el-divider>
            <span id="pariseNum">1</span>
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
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
    };
  },
  methods: {
    changeParise() {
      if (!this.parise) this.parise = !this.parise;
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