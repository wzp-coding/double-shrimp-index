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
              @click="addQues"
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
    <!-- 我要提问 -->
    <addQuestion
      :show="show"
      @changeShow="changeShow"
      :expertId="expertId"
    ></addQuestion>
  </div>
</template>
<script>
import expertInfoDetail from "./questionDetailChildren/expertInfoDetail";
import recommendExpert from "./expertDetailChildren/recommendExpert";
import expertOwnReply from "./expertDetailChildren/expertOwnReply";
import partOne from "./expertInterrogationChildren/partOne";
import addQuestion from "./expertInterrogationChildren/addQuestion";
export default {
  data() {
    return {
      // 传入我要提问组件的属性
      show: false,
      expertId: "",
      // 本组件
      expertInfo: {},
      userExpertId:""
    };
  },
  components: {
    expertInfoDetail,
    recommendExpert,
    expertOwnReply,
    partOne,
    addQuestion
  },
  methods: {
    // 根据expertId获取专家信息expertInfo
    getExpertInfo(id) {
      this.reqM2Service(
        `/info/experts/findById/${id}`,
        {},
        "get"
      ).then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          this.expertInfo = res;
        }
      });
    },
    changeShow() {
      this.show = !this.show;
    },
    // 根据用户id获取用户的专家信息
    async getExpertInfoByUserId(id) {
      await this.reqM2Service(`/info/experts/findByUser/${id}`, {}, "get").then(
        (res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.userExpertId = res.id;
            // this.userExpertName = res.name;
            // console.log("this.userExpertName: ", this.userExpertName);
            // console.log("this.userExpertId: ", this.userExpertId);
          } else {
            this.$message({
              message: "获取用户专家信息失败",
            });
          }
          this.loading = false;
        }
      );
    },
    // 根据userId判断该用户是否是专家
    async judgeUserIsExpert(id) {
      let flag = false;
      await this.reqM2Service(`/info/experts/isExperts/${id}`, {}, "get").then(
        (res) => {
          res = res.data;
          if (res.code == 20000) {
            // console.log("res: ", res);
            flag = res.flag;
          }
        }
      );
      return flag;
    },
    // 点击我要提问按钮
    async addQues() {
      // 判断提问的专家是否是用户本身专家
      // 先判断登录的用户是否是专家
      let isExpert = await this.judgeUserIsExpert(
        this.$store.state.userData.userId
      );
      if (isExpert) {
        // 再判断该页面对应的专家是否是用户专家
        await this.getExpertInfoByUserId(this.$store.state.userData.userId);
        if (this.userExpertId == this.expertId) {
          // 如果登录用户专家id等于该页面的专家id，则不可以提问
          this.$message({
            message:'禁止自问自答'
          })
          return;
        }
      }
      // 判断用户登录了没
      if (this.judgeUserIsLogin()) {
        // 将被提问的专家id传入
        this.expertId = this.expertId;
        // 用户登录了
        this.show = true;
      } else {
        // 用户未登录，跳转到登录页面
        this.$router.push({ path: "/login" });
      }
    },
    // 判断用户是否登录了
    judgeUserIsLogin() {
      if (window.sessionStorage.getItem("token")) {
        return true;
      } else {
        this.$message({
          message: "用户未登录，请先登录",
        });
        return false;
      }
    },
    
  },
  async created() {
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