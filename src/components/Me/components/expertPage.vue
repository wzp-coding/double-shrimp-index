<template>
  <div class="lxl-card">
    <div>
      <el-button v-if="isExpert" type="primary" @click="toExpertManage()" plain
        >进入专家管理中心</el-button
      >
      <el-button
        v-else-if="isNotApply"
        type="primary"
        @click="applyToBeExpert()"
        plain
        >申请成为专家</el-button
      >
      <div v-else>
        <h3>申请专家进度：审核中，请耐心等候···</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      isExpert: '',
      isNotApply: '',
    };
  },
  methods: {
    // 点击进入专家中心页面按钮
    toExpertManage() {
      this.$router.push("/expertSystemManage");
    },
    // 点击申请专家按钮
    applyToBeExpert() {},
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
    // 根据userId判断该用户是否申请过专家
    async judgeUserIsAppliedExpert(id) {
      let flag = false;
      await this.reqM2Service(`/info/experts/isApply/${id}`, {}, "get").then(
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
  },
  async created() {
    // console.log(this.$store.state.userData.userId)
    // 判断用户是否是专家
    let isExpert = await this.judgeUserIsExpert(
      this.$store.state.userData.userId
    );
    // console.log("isExpert: ", isExpert);
    if (isExpert) {
      // 如果是专家，可以跳转到专家中心
      this.isExpert = isExpert;
    } else {
      // 如果不是专家，则判断是否申请过专家
      let isApply = await this.judgeUserIsAppliedExpert(
        this.$store.state.userData.userId
      );
        console.log('isApply: ', isApply);
      if (!isApply) {
        // 如果没有申请过，显示申请进度
        this.isNotApply = true;
        // this.isNotApply = false;
      }
    }
  },
};
</script>
<style lang="less" scoped>
.lxl-card {
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 80px;
}
</style>