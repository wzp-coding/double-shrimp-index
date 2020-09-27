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
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item style="color: red" label="账号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item style="color: red" label="密码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button> 登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
        username: "zs111",
        password: "123222",
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
  height: 450px;
  width: 320px;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 2%;
}
.lxl-form {
  margin-top: 110px;
  margin-left: -10%;
  margin-right: 5%;
}
</style>