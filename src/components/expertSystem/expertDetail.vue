<template>
  <div class="expertDetail lxl-body">
    <div class="container lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'wzp_expertInterrogation' }"
          >专家问诊</el-breadcrumb-item
        >
        <el-breadcrumb-item>专家详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div class="content">
        <div class="left">
          <div class="expertInfoDetail-container">
            <!-- 专家信息组件 -->
            <expertInfoDetail :expertInfo="expertInfo"></expertInfoDetail>
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
          <div class="expertDetail-container">
            <expertOwnReply :expertId="expertId"></expertOwnReply>
          </div>
          <div class="recommendExpert-container">
            <!-- 其他专家组件 -->
            <recommendExpert></recommendExpert>
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
import recommendExpert from "./expertDetailChildren/recommendExpert";
import expertOwnReply from "./expertDetailChildren/expertOwnReply";
import partOne from "./expertInterrogationChildren/partOne";
export default {
  data() {
    return {
      expertInfo: {},
      expertId: "",
    };
  },
  components: {
    expertInfoDetail,
    recommendExpert,
    expertOwnReply,
    partOne,
  },
  methods: {
    // 获取专家信息expertInfo
    getExpertInfo(id) {
      this.$http
        .get(`http://106.75.154.40:9012/info/experts/findById/${id}`)
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.expertInfo = res;
          }
        });
    },
  },
  created() {
    this.expertId = this.$route.params.id;
    console.log("this.expertId: ", this.expertId);
  },
  mounted() {
    this.getExpertInfo(this.expertId);
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
.expertDetail {
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
        .expertDetail-container {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
          padding: 20px;
          margin-top: 20px;
        }
        .recommendExpert-container {
          /deep/ .mini_expert_card .experts_item {
            .up {
              .info {
                .name_address {
                  .name {
                    font-size: 18px;
                  }

                  a {
                    font-size: 16px;
                  }
                }

                .address {
                  font-size: 14px;
                }
              }
            }

            .replies {
              .action {
                .action_num {
                  font-size: 16px;
                }
                .action_title {
                  font-size: 15px;
                }
              }
            }

            .major {
              font-size: 16px;
            }

            .onlineTime {
              font-size: 15px;
            }
          }
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