<template>
  <div class="expertInfoDetail">
    <div class="expert_info">
      <div class="up">
        <div class="left">
          <img
            src="http://134.175.208.235/group1/M00/00/0A/rBAAD18j6-CAXJntAAAhCkDNkuo847.jpg"
            alt=""
          />
          <div class="info">
            <div class="name_address">
              <span class="name">张三</span>
              <span class="address">广东省广州市某某区</span>
            </div>
            <div class="major">
              <span class="major_detail"
                >擅长：对虾养殖及疾病诊断治疗和把脉</span
              >
              <span class="brief"> 张三，北大毕业博士 </span>
              <span class="onlineTime"> 在线时间：周一下午14:00-17:00 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="down">
        <div class="replies">
          <div class="action">
            <span class="action_num">17</span>
            <span class="action_title">咨询量</span>
          </div>
          <div class="action">
            <span class="action_num">45</span>
            <span class="action_title">回复量</span>
          </div>
          <div class="action">
            <span class="action_num">264.7059%</span>
            <span class="action_title">回复率</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.expertInfoDetail {

  color: #fff;
  /deep/.expert_info {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 10px;
    justify-content: space-between;
    background-color: rgb(103, 212, 86);
    padding: 30px 0;
    .up {
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
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 3px solid #fff;
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
              font-size: 24px;
              margin-bottom: 10px;
            }

            .address {
            }
          }

          .major {
            display: flex;
            flex-direction: column;
            margin: 10px 0;
            .major_detail {

            }

            .brief {
              margin: 10px 0;
            }

            .onlineTime {
            }
          }
        }
      }
    }

    .down {
      width: 100%;
      margin-top: 30px;
      .replies {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 26px;
        color: #fff;
        .action {
          display: flex;
          flex-direction: column;
          align-items: center;
          .action_num {
          }

          .action_title {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>