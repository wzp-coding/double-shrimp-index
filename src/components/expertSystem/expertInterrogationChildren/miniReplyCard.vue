<template>
  <div class="mini_reply_card">
    <el-card :body-style="{ padding: '0px' }">
      <div class="ques_item">
        <div class="up">
          <div class="que_text">
            <span class="queicon">问</span>
            <router-link :to="{ name: 'replyDetail', params: { id: 123 } }">
              请问如何提高罗氏沼虾养殖的成活率？Lorem ipsum dolor sit amet.
            </router-link>
          </div>
        </div>
        <div class="mid">
          <div class="que_text reply_text">
            <span class="queicon replyicon">答</span>
            <span class="quetext replytext">
              1、改善底质和水体环境。定期使用底质改良剂，改善底部环境，抑制有害菌的滋生；稳定水质，保持藻相菌相的平衡。
            </span>
          </div>
        </div>
        <div class="down">
          <span class="update_time">更新于2020-08-03 10:46:37</span>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
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