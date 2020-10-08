<template>
  <div class="miniQuestionDetailCard">
    <div class="que_item">
      <div class="que_text">
        <div class="up">
          <span class="queicon">问</span>
          <span class="quetext"> 请问白对虾肌肉白浊如何处理 </span>
        </div>
        <div class="img_content">
          <img
            onclick="bindImgBigPreview('http://134.175.208.235/group1/M00/00/0C/rBAAD18ne6SAKMBqAAAzUe1rMR0006.jpg')"
            src="http://134.175.208.235/group1/M00/00/0C/rBAAD18ne6SAKMBqAAAzUe1rMR0006.jpg"
            alt=""
            style="
              width: 200px;
              height: 200px;
              background: #000;
              margin: 10px 10px 10px 0;
            "
          />
        </div>
      </div>
      <div class="info">
        <div class="left">
          <img
            src="http://134.175.208.235/group1/M00/00/03/rBAAD18PvgqABwO4AAB7h4B4GuU427.jpg"
            alt=""
          />
          <span class="user_name"></span>
        </div>
        <span class="update_time">2020-08-03 10:51:17</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.miniQuestionDetailCard {
 /deep/ .que_item {
    border-bottom: 1px solid #ddd;
    .que_text {
      .up {
        .queicon {
          padding: 4px 4px;
          background-color: rgb(103, 212, 86);
          border-radius: 4px;
          color: #fff;
          font-size: 15px;
          font-weight: 300;
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