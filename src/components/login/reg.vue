<template>
  <div class="lxl-login">
    <div class="lxl-page">
      <el-card class="box-card">
        <div class="lxl-form">
          <el-form
            ref="regForm"
            :model="regForm"
            label-width="80px"
            :rules="FormRules"
          >
            <el-form-item style="color: red" label="用户名" prop="userName">
              <el-input
                v-model="regForm.user.userName"
                placeholder="设置用户名"
                prefix-icon="el-icon-user"
              ></el-input>
            </el-form-item>
            <el-form-item style="color: red" label="设置密码" prop="pass">
              <el-input
                v-model="regForm.user.password"
                placeholder="设置密码"
                prefix-icon="el-icon-lock"
              ></el-input>
            </el-form-item>
            <el-form-item style="color: red" label="确认密码" prop="checkPass">
              <el-input
                placeholder="确认密码"
                type="password"
                v-model="regForm.user.checkpassword"
                prefix-icon="el-icon-unlock"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input style="width: 110px" v-model="regForm.captcha">
              </el-input>
              <el-image
                style="width: 100px; position: absolute; height: 42px"
                :src="url"
              ></el-image>
            </el-form-item>
            <el-form-item style="color: red" label="邮箱" prop="email2">
              <el-input
                v-model="regForm.user.email"
                placeholder="请输入邮箱"
                prefix-icon="el-icon-message"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱验证">
              <el-input style="width: 110px" v-model="regForm.captcha">
              </el-input>
              <el-button type="primary" @click="emailCode()"
                >发送验证码</el-button
              >
            </el-form-item>
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
  </div>
</template>
<script>
export default {
  data() {
    // 自定义表单校验
    var validatePass = (rule, value, callback) => {
      if (this.regForm.user.password === "") {
        callback(new Error("请输入密码"));
      } else if (
        this.regForm.user.password.length > 10 ||
        this.regForm.user.password.length < 2
      ) {
        callback(new Error("长度在 2 到 10 个字符"));
      } else {
        if (this.regForm.checkpassword !== "") {
          this.$refs.regForm.validateField("checkpassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (this.regForm.user.checkpassword === "") {
        callback(new Error("请再次输入密码"));
      } else if (
        this.regForm.user.checkpassword !== this.regForm.user.password
      ) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      photo1:
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2308639883,2836006807&fm=26&gp=0.jpg",
      url: "",
      cToken: "",
      regForm: {
        captcha: "",
        user: {
          userName: "",
          password: "",
          checkpassword: "",
          email: "",
        },
      },
      //表单验证规则
      FormRules: {
        pass: [
          {
            validator: validatePass,
            trigger: "blur",
            required: true,
          },
        ],
        checkPass: [
          { validator: validatePass2, required: true, trigger: "blur" },
        ],
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        email2: [
          {
            required: true, //是否必填
            message: "请输入邮箱地址", //错误提示信息
            trigger: "blur", //检验方式（blur为鼠标点击其他地方，）
          },
          {
            type: "email", //要检验的类型（number，email，date等）
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  created() {
    this.getCaptcha();
  },
  methods: {
    login() {
      // 表单预验证
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return;
        const data = await this.$http.post(
          "/user/login" +
            "?captcha=" +
            this.loginForm.captcha +
            "&cToken=" +
            this.cToken,
          {
            loginId: this.loginForm.userName,
            password: this.loginForm.password,
          }
        );
        // 过滤
        if (data.data.code === 20000) {
          // 提示登录词语
          this.$message.success(data.data.message);
          // 将用户数据存入vuex和sessionStorage
          this.$store.dispatch("loginAsycn", data);
          console.log(this.$store.state);
          // this.$router.push("/me");
        } else {
          this.$message({
            showClose: true,
            message: data.data.message,
            type: "error",
          });
        }
        console.log(data);
      });
    },
    // 获取验证码
    async getCaptcha() {
      const { data: res } = await this.$http.post("/captcha/getCaptcha");
      this.url = "data:image/png;base64," + res.data.img;
      this.cToken = res.data.cToken;
    },
    register() {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return;
        const data = await this.$http.post("/user/login", {
          cToken: "",
          captcha: "",
          loginId: this.loginForm.userName,
          password: this.loginForm.password,
        });
        // 过滤
        if (data.data.code === 20000) {
          // 提示登录词语
          this.$message.success(data.data.message);
          // 将用户数据存入vuex和sessionStorage
          this.$store.dispatch("loginAsycn", data);
          console.log(this.$store.state);
          // this.$router.push("/me");
        } else {
          this.$message({
            showClose: true,
            message: data.data.message,
            type: "error",
          });
        }
        console.log(data);
      });
    },
    async emailCode() {
      const { data: res } = await this.$http.get(
        "/email/" + this.regForm.user.email
      );
      console.log(res);
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
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 2%;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>