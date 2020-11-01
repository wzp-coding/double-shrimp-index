<template>
  <div class="mini_expert_card">
    <el-card :body-style="{ padding: '0px' }">
      <div class="experts_item">
        <div class="up">
          <div class="info">
            <img
              :src="oneExpert?oneExpert.picture:''"
              alt=""
            />
            <div class="name_address">
              <div class="name">
                <span>{{oneExpert?(oneExpert.name?oneExpert.name:'匿名'):"匿名"}}</span>
                <span style="padding: 0 10px">|</span>
                <el-button type="text">详情</el-button>
              </div>
              <div class="address">{{oneExpert?oneExpert.address:'无法获取'}}</div>
            </div>
          </div>
          <div class="replies">
            <div class="action">
              <span class="action_title">咨询量</span>
              <span class="action_num">{{oneExpert?(oneExpert.consultingNum?oneExpert.consultingNum:0):0}}</span>
            </div>
            <div class="action">
              <span class="action_title">回复量</span>
              <span class="action_num">{{oneExpert?(oneExpert.repliesNum?oneExpert.repliesNum:0):0}}</span>
            </div>
            <div class="action">
              <span class="action_title">回复率</span>
              <span class="action_num">{{isNaN(repliesRate)?0:repliesRate}}%</span>
            </div>
          </div>
          <div class="major">
            <span>擅长&nbsp;:</span> {{oneExpert?oneExpert.goodAt:'暂无'}}
          </div>
          <div class="onlineTime">在线时间：{{oneExpert?oneExpert.onlineTime:'暂无'}}</div>
        </div>
        <div class="down">
          <el-button type="primary" round icon="el-icon-chat-dot-round"
            >我要提问</el-button
          >
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  props:['oneExpert'],
  computed:{
    repliesRate(){
      if(this.oneExpert){
        return Math.floor(this.oneExpert.repliesNum/this.oneExpert.consultingNum * 10000)/100
      }
      return 0
    }
  },
  created () {
  }
};
</script>
<style lang="less" scoped>
.mini_expert_card {
  margin: 10px 0;
  .experts_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5px 0 0 5px;
    background: #e0f0e0;
    border-radius: 5px;
    .up {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 10px 0 20px 0;
      .info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .name_address {
          .name {
            font-size: 18px;
          }

          a {
            font-size: 16px;
            color: green;
          }
        }

        .address {
          font-size: 12px;
          color: grey;
        }
      }
    }

    .replies {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .action {
        .action_num {
          color: rgb(255, 134, 139);
          font-size: 14px;
          margin-left: 8px;
        }
        .action_title {
          font-size: 13px;
        }
      }
    }

    .major {
      margin: 10px 0;
      color: grey;
      font-size: 14px;
      margin-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .onlineTime {
      margin-left: 10px;
      font-size: 13px;
    }
    .down {
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      justify-content: center;
      .el-button.is-round {
        padding: 10px 30px;
      }
    }
  }
}
</style>