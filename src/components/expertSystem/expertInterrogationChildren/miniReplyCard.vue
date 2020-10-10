<template>
  <div class="mini_reply_card">
    <el-card :body-style="{ padding: '0px' }">
      <div class="ques_item">
        <div class="up">
          <div class="que_text">
            <span class="queicon">问</span>
            <router-link :to="{ name: 'questionDetail', params: { id: 123 } }">
              {{data?data.ques:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quae.'}}
            </router-link>
          </div>
        </div>
        <div class="mid">
          <div class="que_text reply_text">
            <span class="queicon replyicon">答</span>
            <span class="quetext replytext">
              {{data?data.reply:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum quos et eligendi neque fugiat delectus quis animi est reiciendis.'}}
            </span>
          </div>
        </div>
        <div class="down">
          <span class="update_time">更新于{{data?data.updateTime:'2020-04-08 10:08:09'}}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props:['data'],
  mounted() {
  },
};
</script>
<style lang="less" scoped> 
.mini_reply_card {
   &:nth-child(1){
     margin: 10px 0 20px 0;
   }
     margin-bottom: 20px;
  .ques_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5px 0 0 5px;
    background: rgb(245, 245, 245);
    border-radius: 5px;
    .up {
      .que_text {
        margin-bottom: 15px;
        display: flex;
        
        .queicon {
          box-sizing: border-box;
          text-align: center;
          background-color: #336699;
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
          background-color: #336699;
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
      }
    }
  }
}
</style>