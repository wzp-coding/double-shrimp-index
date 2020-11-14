<template>
  <div class="expertOne" v-loading="loading">
    <div class="title">
      个人信息
      <div class="addArticle">
        <el-button type="primary" size="medium" @click="handleUpdate"
          >修改信息</el-button
        >
      </div>
    </div>
    <el-card shadow="always">
      <span>名字：{{ expertInfo.name }}</span>
    </el-card>
    <el-card shadow="always">
      <span>身份：{{ expertInfo.state == 1 ? "专家" : "" }}</span>
    </el-card>
    <el-card shadow="always">
      <span>认证情况：{{ expertInfo.state == 1 ? "已经认证为专家" : "" }}</span>
    </el-card>
    <el-card shadow="always">
      <span>擅长：{{ expertInfo.goodAt }}</span>
    </el-card>
    <el-card shadow="always">
      <span>在线时间：{{ expertInfo.onlineTime }}</span>
    </el-card>
    <el-card shadow="always">
      <span>地址：{{ expertInfo.address }}</span>
    </el-card>
    <!-- 修改对话框--开始 -->
    <el-dialog title="修改个人信息" :visible.sync="dialogFormVisibleUpdate">
      <el-row>
        <el-col :span="18">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item :label="label.userId" prop="id">
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
            <el-form-item
              :label="label.onlineTime"
              prop="onlineTime"
              style="display: none"
            >
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
          <div class="form-button" style="text-align:center;">
            <el-button type="success" @click="submitForm('ruleForm')"
              >立即更新</el-button
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
      userId: "1264238099769200640",
      loading: true,
      expertInfo: {},
      label: {
        address: "地址",
        goodAt: "擅长",
        introduction: "简介",
        name: "名称",
        onlineTime: "在线时间",
        picture: "头像",
        typeId: "类型",
        userId: "id",
      },

      // 用于上传图片
      fileList: [],
      // 用于修改页面的选择类型
      options: [],
      // 控制显示修改页面
      dialogFormVisibleUpdate: false,
      // 绑定修改或者添加页面的内容
      ruleForm: {},
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
          this.updateExpertInfo(this.ruleForm);
        } else {
          this.$message({
            message: "输入不合法!",
          });
          return false;
        }
      });
    },
    // 修改专家信息
    updateExpertInfo(expertInfo) {
      // this.$http
      //   .put(
      //     `http://106.75.154.40:9005/experts/updateExperts/${expertInfo.id}`,
      //     expertInfo
      //   )
      this.reqM8Service(`/experts/updateExperts/${expertInfo.id}`,expertInfo,'put')
        .then((res) => {
          res = res.data;
          if (res.code == 20000) {
            console.log('res: ', res);
            this.dialogFormVisibleUpdate = false;
            // 重新渲染信息
            this.getExpertInfoByUserId(this.userId);
            this.$message({
              message: res.message,
            });
          } else {
            this.$message({
              message: "修改失败!",
            });
          }
        });
    },
    // 点击修改按钮
    async handleUpdate() {
      await this.getTypes();
      this.dialogFormVisibleUpdate = true;
      this.ruleForm = this.expertInfo;
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
        // 处理一下初始时显示的typeid
        this.options.some((item) => {
          // console.log('item: ', item.id,'this.ruleForm.typeId: ', this.ruleForm.typeId);
          if (item.id == this.expertInfo.typeId) {
            this.ruleForm.typeId = item.name;
            return true;
          }
          return false;
        });
      });
  },
    // 根据用户id获取专家信息
    getExpertInfoByUserId(id) {
      this.reqM2Service
        (`/info/experts/findByUser/${id}`,{},'get')
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.expertInfo = res;
            this.fileList.push({url:this.expertInfo.picture})
            console.log('res: ', res);
          } else {
            this.$message({
              message: "获取专家信息失败",
            });
          }
          this.loading = false;
        });
    },
  },
  
  mounted() {
    this.getExpertInfoByUserId(this.userId);
  },
};
</script>
<style lang="less" scoped>
.expertOne {
  /deep/.title {
    position: relative;
    text-align: center;
    font-size: 18px;
    padding: 10px 0;
    font-weight: 500;
  }
  .addArticle {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>