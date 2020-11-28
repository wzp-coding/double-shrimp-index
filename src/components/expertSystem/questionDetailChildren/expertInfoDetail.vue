<template>
  <div class="expertInfoDetail">
    <div class="expert_info">
      <div class="up">
        <div class="left">
          <el-avatar
            :size="150"
            :src="expertInfo.picture"
          ></el-avatar>
          <div class="info">
            <div class="name_address">
              <span class="name">{{expertInfo.name}}</span>
              <span class="brief"> {{expertInfo.introduction}} </span>
            </div>
            <div class="major">
              <span class="major_detail"
                >擅长：{{expertInfo.goodAt}}</span
              >
              <span class="onlineTime"> 在线时间：{{expertInfo.onlineTime}} </span>
              <div class="name_address">
                <span class="address">{{expertInfo.address}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="down">
        <div class="replies">
          <div class="action">
            <span class="action_num">{{expertInfo.consultingNum}}</span>
            <span class="action_title">咨询量</span>
          </div>
          <div class="action">
            <span class="action_num">{{expertInfo.repliesNum}}</span>
            <span class="action_title">回复量</span>
          </div>
          <div class="action">
            <span class="action_num">{{repliesRate}}%</span>
            <span class="action_title">回复率</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['expertInfo'],
  computed:{
    repliesRate(){
      return Math.floor(this.expertInfo.repliesNum/this.expertInfo.consultingNum * 10000)/100
    }
  },
};
</script>
<style lang="less" scoped>
.expertInfoDetail {
  // color: #fff;
  /deep/.expert_info {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 10px;
    justify-content: space-between;
    background-color:#5fd780;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    color: rgb(36, 36, 36);
    .up {
      margin-top: 30px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-left: 30px;
        .el-avatar {
          width: 150px;
          height: 150px;
          border: 3px solid rgb(176, 199, 212);
        }
        .info {
          display: flex;
          flex-direction: column;
          font-size: 15px;
          margin-left: 20px;

          .name_address {
            display: flex;
            flex-direction: column;
            .name {
              margin-bottom: 10px;
              font-size: 24px;
            }
          }
          .major {
            display: flex;
            flex-direction: column;
            margin: 10px 0;
          }
        }
      }
    }

    .down {
      width: 100%;
      margin-top: 30px;
      background-color: rgb(54, 155, 93);

      color: white;
      .replies {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 26px;
        .action {
          display: flex;
          flex-direction: column;
          align-items: center;

          .action_title {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>