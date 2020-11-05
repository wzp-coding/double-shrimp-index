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
      <div v-else-if="!isRefused">
        <h3>申请专家进度：审核中，请耐心等候···</h3>
      </div>
      <div v-else>
        <h3>
          申请专家进度：申请失败，请
          <el-button type="primary" @click="applyToBeExpert">重新申请</el-button
          >···
        </h3>
      </div>
    </div>
    <!-- 申请专家对话框--开始 -->
    <el-dialog title="申请专家" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="18">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item :label="label.userId" prop="userId">
              <el-input
                v-model.number="ruleForm.userId"
                placeholder="请输入内容"
                disabled
              ></el-input>
            </el-form-item>
            <el-form-item :label="label.name" prop="name">
              <el-input
                type="textarea"
                autosize
                v-model="ruleForm.name"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item :label="label.introduction" prop="introduction">
              <el-input
                v-model="ruleForm.introduction"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item :label="label.goodAt" prop="goodAt">
              <el-input
                type="textarea"
                autosize
                v-model="ruleForm.goodAt"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item :label="label.onlineTime" prop="onlineTime">
              <el-input
                v-model="ruleForm.onlineTime"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item :label="label.typeId" prop="typeId">
              <el-select v-model="ruleForm.typeId" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="label.address" prop="address">
              <el-input
                v-model="ruleForm.address"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item label="头像">
              <el-upload
                :span="2"
                class="upload-demo"
                action="http://106.75.154.40:9005/information/upload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button
                  size="small"
                  type="primary"
                  v-if="!fileList[0]"
                  class="btnTop"
                  >点击上传头像</el-button
                >
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
          <div class="form-button" style="text-align: center">
            <el-button type="success" @click="submitForm('ruleForm')"
              >提交申请</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 修改对话框--结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      isExpert: "",
      isNotApply: "",
      isRefused: "",
      userId: "",
      // 申请对话框
      label: {
        address: "地址",
        goodAt: "擅长",
        introduction: "简介",
        name: "名称",
        onlineTime: "在线时间",
        picture: "头像",
        typeId: "类型",
        userId: "用户",
      },

      // 用于上传图片
      fileList: [],
      // 用于修改页面的选择类型
      options: [],
      // 控制显示修改页面
      dialogFormVisible: false,
      // 绑定添加页面的内容
      ruleForm: {
        userId: "",
        name: "",
        introduction: "",
        goodAt: "",
        onlineTime: "",
        typeId: "",
        address: "",
      },
      // 校验规则
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        goodAt: [
          { required: true, message: "请输入擅长的技能", trigger: "blur" },
        ],
        onlineTime: [
          { required: true, message: "请输入在线时间", trigger: "blur" },
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        typeId: [
          {
            required: true,
            message: "请选择专家类型id",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    // 点击进入专家中心页面按钮
    toExpertManage() {
      this.$router.push("/expertSystemManage");
    },
    // 点击申请专家按钮
    async applyToBeExpert() {
      await this.getTypes();
      this.dialogFormVisible = true;
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
    // 根据userId判断该用户是否申请失败
    async judgeUserIsRefused(id) {
      let flag = false;
      await this.reqM2Service(`/info/experts/isRefused/${id}`, {}, "get").then(
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
    // 发送申请专家接口
    addExpertInfo(params) {
      this.reqM2Service("/info/experts/add", params, "post").then((res) => {
        res = res.data;
        if (res.code == 20000) {
          this.$message({
            type: "success",
            message: "已提交申请",
          });
          this.showWhatContent();
          this.dialogFormVisible = false;
        } else {
          this.$message({
            type: "error",
            message: "提交失败",
          });
        }
      });
    },
    // 提交表单内容
    submitForm(formName) {
      // 如果没有添加图片
      if (!this.fileList[0].url) {
        this.$message({
          message: "请添加图片",
        });
        return;
      }
      this.ruleForm.picture = this.fileList[0].url;
      console.log("this.ruleForm: ", this.ruleForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addExpertInfo(this.ruleForm);
        } else {
          this.$message({
            message: "输入不合法!",
          });
          return false;
        }
      });
    },
    // 移除图片
    handleRemove(file, fileList) {
      this.fileList = fileList;
    },
    // 预览
    handlePreview(file) {
      console.log(file);
    },
    // 成功上传图片
    handleSuccess(response, file, fileList) {
      if (response.flag) {
        //最后一个地址替换成新生成的
        this.fileList = [
          {
            url: fileList[0].response.data,
          },
        ];
      }
    },
    // 获取专家类型
    async getTypes() {
      await this.reqM2Service(`/info/expertsType`, {}, "get")
        .then((res) => {
          res = res.data;
          // console.log('res: ', res);
          if (res.code === 20000) {
            res = res.data;
            return res;
          } else {
            this.$message({
              message: "获取类型失败",
            });
          }
        })
        .then((options) => {
          this.options = options;
        });
    },
    // 判断显示什么内容
    async showWhatContent() {
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
        console.log("isApply: ", isApply);
        if (!isApply) {
          this.isNotApply = true;
        } else {
          // 如果申请过，判断申请中还是申请已经失败
          let isRefused = await this.judgeUserIsRefused(
            this.$store.state.userData.userId
          );
          console.log("isRefused: ", isRefused);
          this.isRefused = isRefused;
        }
      }
    },
  },
  async created() {
    this.userId = this.$store.state.userData.userId;
    this.ruleForm.userId = this.userId;
    console.log(this.$store.state.userData.userId);
    this.showWhatContent();
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