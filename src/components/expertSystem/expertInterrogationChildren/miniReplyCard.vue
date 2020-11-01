<template>
  <div class="mini_reply_card">
    <el-card :body-style="{ padding: '0px' }">
      <div class="ques_item">
        <div class="up">
          <div class="que_text">
            <span class="queicon">问</span>
            <div style="cursor: pointer" @click="toQuestionDetail">
              {{ oneReply ? oneReply.title : "" }}
            </div>
          </div>
        </div>
        <div class="mid">
          <div class="que_text reply_text">
            <span class="queicon replyicon">答</span>
            <span class="quetext replytext">
              {{
                oneReply ? (oneReply.reply ? oneReply.reply : "暂无") : "暂无"
              }}
            </span>
          </div>
        </div>
        <div class="down">
          <span class="update_time"
            >更新于{{
              oneReply ? this.formatTime(oneReply.creationTime) : "暂无更新"
            }}</span
          >
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props: ["oneReply"],
  methods: {
    toQuestionDetail() {
      this.$router.push({
        name: "wzp_questionDetail",
        params: { id: this.oneReply.id },
      });
      location.reload();
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
  mounted() {},
};
</script>
<style lang="less" scoped>
.mini_reply_card {
  &:nth-child(1) {
    margin: 10px 0 4px 0;
  }
  margin-bottom: 4px;
  .ques_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5px 0 0 5px;
    background: #e0f0e0;
    border-radius: 5px;
    .up {
      .que_text {
        margin-bottom: 15px;
        display: flex;

        .queicon {
          box-sizing: border-box;
          text-align: center;
          background-color: #409eff;
          padding: 0 3px;
          border-radius: 4px;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          margin-right: 3px;
          width: 21px;
          height: 20px;
        }

        a {
          text-decoration: none;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }

    .mid {
      height: 45px;
      .que_text.reply_text {
        margin-bottom: 15px;
        padding-right: 3px;
        display: flex;
        .queicon.replyicon {
          text-align: center;
          box-sizing: border-box;
          width: 21px;
          height: 20px;
          background-color: #96ccb1;
          padding: 0 3px;
          border-radius: 4px;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          margin-right: 3px;
        }

        .quetext.replytext {
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }

    .down {
      width: 100%;
      color: grey;
      display: flex;
      justify-content: space-between;
      .update_time {
        margin-right: 5px;
        font-size: 12px;
        margin-top: 7.2px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>