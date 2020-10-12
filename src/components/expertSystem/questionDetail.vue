<template>
  <div class="questionDetail lxl-body">
    <div class="container lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'expertInterrogation' }"
          >专家问诊</el-breadcrumb-item
        >
        <el-breadcrumb-item>专家详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div class="content">
        <div class="left">
          <div class="expertInfoDetail-container">
            <expertInfoDetail></expertInfoDetail>
          </div>
          <div class="add-inquire">
            <el-button
              style="padding: 10px 70px"
              type="success"
              round
              size="medium"
              icon="el-icon-search"
              >我要提问</el-button
            >
          </div>
          <div class="questionDetail-container">
            <miniQuestionDetailCard></miniQuestionDetailCard>
            <el-divider class="ccy-drvider"></el-divider>
            <miniReplyDetailCard></miniReplyDetailCard>
          </div>
          <div class="recommendQues-container">
            <recommendReply></recommendReply>
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
.ccy-drvider {
  margin: 10px 0 7px 0;
}
.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
  margin-bottom: 40px;
}
.lxl-box {
  width: 1150px;
}
/deep/ a:-webkit-any-link {
  text-decoration: none;
}
/deep/ .el-card.is-always-shadow {
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
    .breadcrumb {
      margin: 10px 0 10px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #ccc;
    }
    .content {
      display: flex;
      margin-top: -20px;
      .left {
        padding-right: 20px;
        flex: 3;
        .questionDetail-container {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
          padding: 20px;
          margin-top: 20px;
        }
        .add-inquire {
          text-align: center;
          margin: 20px;
        }
      }
      .right {
        flex: 1;
      }
    }
  }
}
</style>