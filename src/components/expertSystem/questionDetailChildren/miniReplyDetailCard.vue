<template>
  <div class="miniReplyDetailCard">
    <div class="reply-item">
      <div class="res_user">
        <div class="left">
          <img
            src="http://134.175.208.235/group1/M00/00/03/rBAAD18PvgqABwO4AAB7h4B4GuU427.jpg"
            alt=""
          />
          <div class="info">
            <div class="name">张三</div>
            <div class="res_time">2020-08-03 11:02:00</div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="res_info">
        <div class="text">
          3.后期催肥：在中期的养殖基础上，加大投饵量，特别是在对虾摄食旺盛的傍晚和深夜，加强高效优质配合饲料的投喂，并增加投喂次数，适当提高虾塘的池水盐度，促进对虾蜕壳和硬壳，这样可以提高商品虾的质量，提高养殖的经济效益。
          。同时优兰宝可以提高蛋白质和氨基酸等营养物质吸收，提高废弃蛋白的利用，降低对虾饵料系数，促进对虾生长。
        </div>
        <div class="img_content">
          <img
            onclick="bindImgBigPreview('http://134.175.208.235/group1/M00/00/0C/rBAAD18nfieAEdfjAABmW6dt5wY22.jpeg')"
            src="http://134.175.208.235/group1/M00/00/0C/rBAAD18nfieAEdfjAABmW6dt5wY22.jpeg"
            alt=""
            style="
              width: 200px;
              height: 200px;
              background: #000;
              margin: 0 10px 10px 0;
            "
          />
        </div>
        <div class="div_btn">
          <el-button round class="btn" @click="changeParise">
            <img v-if="!parise" class="praise" src="../../../assets/parise.png" />
            <img v-else class="praise" src="../../../assets/prise1.png"/>
            有用
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
            parise:false
        }
    },
    methods:{
        changeParise(){
            if(!this.parise)
            this.parise = !this.parise
        }
    }
};
</script>
<style lang="less">
.miniReplyDetailCard {
  .reply-item {
    .res_user {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      .left {
        display: flex;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: greenyellow;
          margin-right: 10px;
        }

        .info {
          .name {
          }

          .res_time {
              color: #ccc;
              font-size: 12px;
          }
        }
      }

      .right {
      }
    }
    .res_info {
      font-size: 14px;
      border-bottom: 1px solid #ddd;
      .text {
      }

      .img_content {
        width: 200px;
        height: 200px;
        background: #000;
        margin-top: 10px;
        img {
        }
      }
      .div_btn {
        width: 100%;
        display: inline-block;
        text-align: right;
        margin-bottom: 10px;
        .el-button.is-round {
          padding: 5px 10px;
        }
        .btn:focus{
            color: #000 ;
        }
        .btn {
          background-color: #fff;
          .praise {
            display: inline-block;
            vertical-align: -3px;
            width: 20px;
            height: 20px;
          }
          #pariseNum {
          }
        }
      }
    }
  }
}
</style>