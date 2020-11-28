<template>
  <div class="lxl-login">
    <div class="lxl-page">
      <el-card class="box-card">
        <div class="avatar_box">
          <img :src="photo1" alt />
        </div>
        <div class="lxl-form">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="FormRules"
            label-width="80px"
          >
            <el-form-item label="用户名" prop="userName">
              <el-input
                v-model="loginForm.userName"
                prefix-icon="el-icon-user"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="loginForm.password"
                prefix-icon="el-icon-lock"
                show-password
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha">
              <el-input
                style="width: 110px"
                v-model="loginForm.captcha"
                placeholder="输入验证码"
              >
              </el-input>
              <el-image
                @click="getCaptcha()"
                style="width: 100px; position: absolute; height: 42px"
                :src="url"
              ></el-image>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="login()"> 登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div style="display: flex; justify-content: flex-end">
          <router-link to="/reg">注册</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/forgetPass">忘记密码 ？</router-link>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      photo1:
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2308639883,2836006807&fm=26&gp=0.jpg",
      url: "",
      cToken: "",
      //登录表单数据**
      loginForm: {
        captcha: "",
        userName: "",
        password: "",
      },
      //表单验证规则**
      FormRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        captcha: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          {
            min: 4,
            max: 4,
            message: "长度为4个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    // 初始化验证码**
    this.getCaptcha();
  },
  methods: {
    // 登录并把token储存**
    login() {
      // 表单预验证**
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return;
          const data = await this.$http.post(`http://106.75.154.40:9012/authority/user/login?captcha=${this.loginForm.captcha}`,{
            loginId: this.loginForm.userName,
            password: this.loginForm.password
          },{
            headers: {
              xip: window.localStorage.getItem('Ip')
            }
          })
          
          console.log(data);
          // 过滤
          if (data.data.code === 20000) {
            // 提示登录词语
            this.$message.success(data.data.message);
            // 将用户数据存入vuex和sessionStorage
            this.$store.dispatch("loginAsycn", data);
            console.log(this.$store.state);
            this.$router.push("/me");
          } else {
            this.$message({
              showClose: true,
              message: data.data.message,
              type: "error",
            });
          }
      });
    },
    // 获取验证码**
    async getCaptcha() {
      try {
        // const { data: res } = await this.reqM1Service(
        //   "/authority/captcha/getCaptcha",
        //   "",
        //   "post"
        // );
        const { data: res } = await this.$http.post(
          "http://106.75.154.40:9012/authority/captcha/getCaptcha",
          {},
          {
            headers: {
              xip: window.localStorage.getItem("Ip"),
            },
          }
        );
        this.url = "data:image/png;base64," + res.data.img;
        this.cToken = res.data.cToken;
      } catch (error) {
        this.$message.error("验证码出错");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.lxl-login {
  background-image: url("../../assets/131.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 50rem;
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
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>