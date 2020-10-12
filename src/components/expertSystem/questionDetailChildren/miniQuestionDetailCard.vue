<template>
  <div class="miniQuestionDetailCard">
    <div class="que_item">
      <!-- 问题区域 -->
      <div class="wzp-que">
        <div class="que_text">
          <div class="up">
            <span class="queicon">问</span>
            <span class="quetext"> 请问白对虾肌肉白浊如何处理 </span>
            <div class="res_time">张三 2020-08-03 11:02:00</div>
          </div>
          <div class="demo-image__preview" style="margin-top: 10px">
            <el-image
              style="width: 100px; height: 100px"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              :preview-src-list="srcList"
            >
            </el-image>
          </div>
        </div>
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
    };
  },
};
</script>
<style lang="less" scoped>

.res_time {
  margin-top: 8px;
  color: #ccc;
  font-size: 12px;
}
.miniQuestionDetailCard {
  /deep/ .que_item {
    .que_text {
      .ccy-drvider {
        margin: 10px 0 7px 0;
      }
      .up {
        .queicon {
          padding: 4px 4px;
          background-color: rgb(103, 212, 86);
          border-radius: 4px;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          margin-right: 3px;
        }

        .quetext {
          font-weight: 200;
        }
      }

      .img_content {
        img {
        }
      }
    }

    .info {
      display: flex;
      justify-content: space-between;
      color: #ccc;
      font-size: 12px;
      margin-top: 20px;
      .left {
        img {
          width: 20px;
          height: 20px;
          background-color: greenyellow;
          border-radius: 50%;
        }

        .user_name {
        }
      }

      .update_time {
      }
    }
  }
}
</style>