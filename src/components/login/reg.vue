<template>
  <div class="lxl-login">
    <div class="lxl-page">
      <el-card class="box-card">
        <div class="lxl-title">
          <p style="font-size: 26px">注册页面</p>
        </div>
        <div class="lxl-form">
          <el-form
            ref="regForm"
            :model="regForm"
            label-width="80px"
            :rules="FormRules"
          >
            <el-form-item label="用户名" prop="userName">
              <el-input
                v-model="regForm.userName"
                placeholder="设置用户名"
                prefix-icon="el-icon-user"
              ></el-input>
            </el-form-item>
            <el-form-item label="设置密码" prop="password">
              <el-input
                v-model="regForm.password"
                placeholder="设置密码"
                prefix-icon="el-icon-lock"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkpassword">
              <el-input
                placeholder="确认密码"
                type="password"
                v-model="regForm.checkpassword"
                prefix-icon="el-icon-unlock"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha">
              <el-input style="width: 110px" v-model="regForm.captcha">
              </el-input>
              <el-image
                style="width: 100px; position: absolute; height: 42px"
                :src="url"
                @click="getCaptcha()"
              ></el-image>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input
                v-model="regForm.email"
                placeholder="请输入邮箱"
                prefix-icon="el-icon-message"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱验证" prop="emailCode">
              <el-input style="width: 110px" v-model="regForm.emailCode">
              </el-input>
              <el-button type="primary" @click="emailCode()"
                >发送验证码</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="register()">
                确认注册</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div style="display: flex; justify-content: flex-end">
          <router-link to="/login">登录</router-link>
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
    // 自定义表单校验
    var validatePass = (rule, value, callback) => {
      if (this.regForm.password === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.regForm.checkpassword !== "") {
          this.$refs.regForm.validateField("checkpassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (this.regForm.checkpassword === "") {
        callback(new Error("请再次输入密码"));
      } else if (this.regForm.checkpassword !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      url: "",
      cToken: "",
      regForm: {
        captcha: "",
        emailCode: "",
        userName: "",
        password: "",
        checkpassword: "",
        email: "",
      },
      //表单验证规则
      FormRules: {
        password: [
          {
            validator: validatePass,
            trigger: "blur",
            required: true,
          },
        ],
        checkpassword: [
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
        email: [
          {
            required: true,
            message: "请输入邮箱地址",
            trigger: "blur",
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
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
        emailCode: [
          { required: true, message: "请输入邮箱验证码", trigger: "blur" },
          {
            min: 6,
            max: 6,
            message: "长度为4个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    // 加载验证码
    this.getCaptcha();
  },
  methods: {
    // 获取验证码
    async getCaptcha() {
      const { data: res } = await this.$http.post("/captcha/getCaptcha");
      this.url = "data:image/png;base64," + res.data.img;
      this.cToken = res.data.cToken;
    },
    // 注册
    register() {
      this.$refs.regForm.validate(async (valid) => {
        if (!valid) return;
        const data = await this.$http.post(
          "/user/register/" +
            this.regForm.emailCode +
            "?captcha=" +
            this.regForm.captcha +
            "&cToken=" +
            this.cToken,
          {
            email: this.regForm.email,
            loginId: this.regForm.userName,
            password: this.regForm.password,
          }
        );
        // 过滤
        if (data.data.code === 20000) {
          // 提示登录词语
          this.$message.success(data.data.message);
          this.$router.push("/login");
        } else {
          this.$message({
            showClose: true,
            message: data.data.message,
            type: "error",
          });
        }
      });
    },
    // 发送邮箱验证码
    async emailCode() {
      const data = await this.$http.get("/email/" + this.regForm.email);
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
  height: 580px;
  width: 380px;
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
.lxl-title {
  display: flex;
  justify-content: center;
  margin: 10px;
  margin-bottom: 20px;
  color: rgb(95, 95, 95);
}
</style>