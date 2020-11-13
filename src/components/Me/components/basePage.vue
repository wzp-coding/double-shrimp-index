<template>
  <div class="base-info">
    <div v-if="isShowApply">
      <el-row class="baseinfoheader"> 申请基地 </el-row>
      <el-form
        label-width="80px"
        label-position="left"
        :model="baseInfo"
        :rules="baseRule"
        ref="baseRule"
        class="baseapplyform"
        :hide-required-asterisk="true"
      >
        <el-form-item label="基地名称" prop="baseName">
          <el-input
            clearable
            v-model="baseInfo.baseName"
            placeholder="请输入基地名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="创建人" prop="createBy">
          <el-input
            clearable
            v-model="baseInfo.createBy"
            placeholder="请输入创建人名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="注册编码" prop="registNumber">
          <el-input
            clearable
            v-model="baseInfo.registNumber"
            placeholder="请输入基地注册编码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交申请</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="isShowEnter">
      <el-row class="baseinfoheader">查看基地</el-row>
      <div class="baseenterform">
        <div class="en-row">
          <label>基地编号：</label>
          <span>{{ baseEnterInfo.registNumber }}</span>
        </div>
        <div class="en-row">
          <label>基地名称：</label>
          <span>{{ baseEnterInfo.baseName }}</span>
        </div>
        <div class="en-row">
          <label>创建人：</label>
          <span>{{
            baseEnterInfo.createBy === null ? "暂无" : baseEnterInfo.createBy
          }}</span>
        </div>
        <div class="en-row">
          <label>申请状态：</label>
          <el-tag
            :type="baseEnterInfo.status === '未处理' ? 'danger' : 'info'"
            >{{ baseEnterInfo.status }}</el-tag
          >
        </div>
        <div class="en-row">
          <el-button
            type="primary"
            plain
            @click="toOrigin"
            v-if="isShowOriginButton"
            >进入溯源系统</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "Bearer " + window.sessionStorage.getItem("token"),
      userData: JSON.parse(window.sessionStorage.getItem("userData")),
      // 是否显示进入溯源系统按钮
      isShowOriginButton: false,
      // 未绑定基地，需要先申请基地
      isShowApply: false,
      // 绑定基地，显示直接进入基地界面
      isShowEnter: false,
      baseInfo: {
        baseName: "",
        registNumber: "",
        createBy: "",
      },
      // 查看基地页面基地信息
      baseEnterInfo: {},
      // 申请基地页面验证规则
      baseRule: {
        baseName: [
          { required: true, message: "请输入基地名称", trigger: "blur" },
        ],
        createBy: [
          { required: true, message: "请输入创建人名称", trigger: "blur" },
        ],
        registNumber: [
          { required: true, message: "请输入基地注册编号", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 进入溯源
    toOrigin() {
      window.location.href = "http://106.75.132.85:9002";
    },
    // 申请基地
    onSubmit() {
      this.$refs.baseRule.validate(async (valid) => {
        if (valid) {
          const { data: res } = await this.$http.put(
            "http://106.75.154.40:9012/authority/user/applyFor/addBase",
            {
              baseName: this.baseInfo.baseName,
              registNumber: this.baseInfo.registNumber,
              createBy: this.baseInfo.createBy,
            },
            {
              headers: {
                Authorization: this.token,
              },
            }
          );
        }
      });
    },
    // 判断是否绑定基地，是的话进入基地展示页面，否的话进入基地申请页面
    async isPassSuccess() {
      const { data: res } = await this.$http.get(
        "http://106.75.154.40:9012/authority/user/applyFor/addBase/status",
        {
          headers: {
            Authorization: this.token,
          },
        }
      );
      if (res.data === null) {
        this.isShowApply = true;
      } else {
        this.isShowEnter = true;
        this.baseEnterInfo = res.data;
        this.baseEnterInfo.status = res.message;
        if (res.message === "同意") this.isShowOriginButton = true;
      }
    },
  },
  created() {
    var This = this
    this.isPassSuccess();
    console.log(this.token);
    window.addEventListener(
      "message",
      function (e) {
        let loginInfo = {
          token: This.token,
          baseId: This.userData.baseId
        }
        if (e.source != window.parent) return;
        window.parent.postMessage(loginInfo, "*");
      },
      false
    );
  },
};
</script>

<style lang="less" scoped>
.base-info {
  background-color: #fff;
  .baseinfoheader {
    font-size: 20px;
    font-weight: bold;
    color: #5a5858;
    padding: 10px;
  }
  .baseapplyform {
    padding-left: 10px;
    padding-bottom: 1px;
    margin-top: 30px;
    .el-input {
      width: 300px;
    }
  }
  .baseenterform {
    width: 30%;
    margin: 0 auto;
    padding-left: 10px;
    .en-row {
      padding: 10px 0;
      label {
        font-size: 17px;
        color: #747679;
        display: inline-block;
        width: 100px;
      }
    }
  }
}
</style>