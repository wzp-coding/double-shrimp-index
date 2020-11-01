<template>
  <div class="miniQuestionDetailCard">
    <div class="que_item">
      <!-- 问题区域 -->
      <div class="wzp-que">
        <div class="que_text">
          <div class="up">
            <span class="queicon">问</span>
            <span class="quetext"> {{quesInfo.title}} </span>
            <div class="res_time">{{quesInfo.userName?quesInfo.userName:"匿名"}} {{this.formatTime(quesInfo.creationTime)}}</div>
          </div>
          <div class="demo-image__preview" style="margin-top: 10px" v-if="quesInfo.images.length!=0">
            <el-image
              v-for="(item,index) in quesInfo.images" :key="index"
              style="width: 100px; height: 100px; margin-right:10px"
              :src="item"
              :preview-src-list="quesInfo.images"
              fit="cover"
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
    };
  },
  props:["quesInfo"],
  watch:{
    quesInfo(){
      console.log(this.quesInfo)
    }
  },
  methods:{
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
  mounted(){
    
  }

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