<template>
  <div class="lxl-login">
    <div class="lxl-page">
      <el-card class="box-card">
        <div class="avatar_box">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2308639883,2836006807&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="lxl-form">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginFormRules"
            label-width="80px"
          >
            <el-form-item style="color: red" label="用户名" prop="username">
              <el-input
                v-model="loginForm.username"
                prefix-icon="el-icon-user"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item style="color: red" label="密码" prop="password">
              <el-input
                v-model="loginForm.password"
                prefix-icon="el-icon-lock"
                show-password
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <div style="position: relative">
                <el-input style="width: 110px" placeholder="输入验证码">
                </el-input>
                <el-image
                  style="width: 100px; position: absolute; height: 42px"
                  :src="url"
                ></el-image>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="login()"> 登录</el-button>
            </el-form-item>
            <el-form-item> </el-form-item>
          </el-form>
        </div>
        <div style="display: flex; justify-content: flex-end">
          <el-link style="" @click="centerDialogVisible1 = true">
            注册
          </el-link>
          <el-divider direction="vertical"></el-divider>
          <el-link @click="centerDialogVisible2 = true"> 忘记密码 ？</el-link>
        </div>
      </el-card>
    </div>
    <!-- 注册 -->
    <el-dialog
      title="注册页面"
      :visible.sync="centerDialogVisible1"
      width="25%"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item style="color: red" label="用户名">
          <el-input
            v-model="form.name"
            placeholder="设置用户名"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item style="color: red" label="设置密码">
          <el-input v-model="form.name" placeholder="设置密码"></el-input>
        </el-form-item>
        <el-form-item style="color: red" label="确认密码">
          <el-input v-model="form.name" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <div style="position: relative">
            <el-input style="width: 110px"> </el-input>
            <el-image
              style="width: 100px; position: absolute; height: 42px"
              :src="url"
            ></el-image>
          </div>
        </el-form-item>
        <el-form-item> </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible1 = false">取 消</el-button>
        <el-button type="success" @click="centerDialogVisible1 = false"
          >注册</el-button
        >
      </span>
    </el-dialog>
    <!-- 忘记密码 -->
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible2"
      width="25%"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item style="color: red" label="用户名">
          <el-input v-model="form.name" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item style="color: red" label="账号">
          <el-input v-model="form.name" prefix-icon="el-icon-apple"></el-input>
        </el-form-item>
        <el-form-item style="color: red" label="密码">
          <el-input v-model="form.name" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <div style="position: relative">
            <el-input style="width: 110px"> </el-input>
            <el-image
              style="width: 100px; position: absolute; height: 42px"
              :src="url"
            ></el-image>
          </div>
        </el-form-item>
        <el-form-item> </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible2 = false">取 消</el-button>
        <el-button type="success" @click="centerDialogVisible2 = false"
          >注册</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible1: false,
      centerDialogVisible2: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      //登录表单数据
      loginForm: {
        username: "",
        password: "",
      },
      //表单验证规则
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 15,
            message: "长度在 5 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    login() {
      // 表单预验证
      this.$refs.loginForm.validate((valid) => {
        if (!valid) return;
        this.$http.post()
      });
    },
  },
};
</script>
<style lang="less" scoped>
.lxl-login {
  background-image: url("../../assets/131.jpg");
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lxl-page {
  height: 30rem;
}
.avatar_box {
  height: 100px;
  width: 100px;
  border: 1px solid rgb(255, 246, 246);
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgb(236, 236, 236);
  }
}
.box-card {
  height: 430px;
  width: 320px;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 2%;
}
.lxl-form {
  margin-top: 90px;
  margin-left: -6%;
  margin-right: 5%;
}
</style>