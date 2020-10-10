<template>
  <div class="questionDetail">
    <div class="container">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'expertInterrogation' }"
            >专家问诊</el-breadcrumb-item
          >
          <el-breadcrumb-item>专家详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content">
        <div class="left">
          <div class="expertInfoDetail-container">
            <expertInfoDetail></expertInfoDetail>
          </div>
          <div class="questionDetail-container">
            <miniQuestionDetailCard></miniQuestionDetailCard>
            <miniReplyDetailCard></miniReplyDetailCard>
            <miniReplyDetailCard></miniReplyDetailCard>
            <miniReplyDetailCard></miniReplyDetailCard>
          </div>
          <div class="recommendQues-container">
            <recommendReply></recommendReply>
          </div>
          <div class="add-inquire">
            <el-button
              style="padding: 10px 70px"
              type="success"
              round
              size="medium"
              >我要提问</el-button
            >
          </div>
        </div>
        <div class="right">
          <partOne></partOne>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import expertInfoDetail from "./questionDetailChildren/expertInfoDetail";
import miniReplyDetailCard from "./questionDetailChildren/miniReplyDetailCard";
import miniQuestionDetailCard from "./questionDetailChildren/miniQuestionDetailCard";
import recommendReply from "./questionDetailChildren/recommendReply";
import partOne from "./expertInterrogationChildren/partOne";
export default {
  data() {
    return {};
  },
  components: {
    expertInfoDetail,
    miniReplyDetailCard,
    miniQuestionDetailCard,
    recommendReply,
    partOne,
  },
};
</script>
<style lang="less" scoped>
/deep/ a:-webkit-any-link{
  text-decoration: none;
}
/deep/ .el-card.is-always-shadow{
    box-shadow: none;
  }
/deep/.block {
.el-carousel__container {
  height: 560px;
}
.el-carousel__indicators.el-carousel__indicators--horizontal {
  .el-carousel__button {
    background-color: #ccc;
  }
}
}
.questionDetail {
 /deep/ .container {
    width: 1150px;
    margin: auto;
    .breadcrumb{
    margin: 10px 0 10px 0;
    padding-bottom: 10px;;
    border-bottom: 2px solid #ccc;
  }
    .content {
      display: flex;
      .left {
        padding-right: 20px;
        flex: 3;
        .expertInfoDetail-container {
        }
        .questionDetail-container {
          margin-top: 20px;
        }
        .add-inquire {
          text-align: center;
          margin-bottom: 20px;
        }
      }
      .right {
        flex: 1;
      }
    }
  }
}
</style>