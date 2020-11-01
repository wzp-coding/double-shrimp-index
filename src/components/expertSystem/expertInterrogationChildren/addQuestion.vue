<template>
  <div>
    <!-- 修改对话框--开始 -->
    <el-dialog append-to-body title="发帖" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="16">
          <el-form
            :model="form"
            label-width="100px"
            :rules="rules"
            ref="formAdd"
            class="demo-ruleForm"
          >
            <el-form-item label="发帖内容" prop="ques">
              <el-input type="textarea" v-model="form.ques"></el-input>
            </el-form-item>
            <el-form-item label="帖子类型" prop="typeId">
              <el-select v-model="form.typeId" placeholder="请选择">
                <el-option
                  v-for="item in types"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="上传图片">
              <el-upload
                action="http://106.75.154.40:9005/information/upload"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleOnSuccess"
                :on-error="handleOnError"
                :file-list="fileList"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="" />
              </el-dialog>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmitQues">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改对话框--结束 -->
  </div>
</template>
<script>
export default {
  props: ["show", "expertId", "typeId"],
  data() {
    return {
      dialogFormVisible: false,
      form: {
        ques: "",
        images: [],
        typeId: "",
      },
      rules: {
        ques: [{ required: true, message: "请输入标题", trigger: "blur" }],
        typeId: [
          {
            required: true,
            message: "请选择类型",
            trigger: "change",
          },
        ],
      },
      formLabelWidth: "120px",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      oneQuesInfo: {},
      types: [],
      type: "",
    };
  },
  watch: {
    show() {
      if (this.show) {
        this.dialogFormVisible = true;
      }
    },
    dialogFormVisible() {
      if (!this.dialogFormVisible) {
        this.$emit("changeShow");
      }
    },
  },
  methods: {
    // 提交帖子问题
    async handleSubmitQues() {
      this.oneQuesInfo = {
        images: this.form.images.join(","),
        typeId: this.form.typeId,
        title: this.form.ques,
        expertsId: this.expertId,
        userId: this.$store.state.userData.userId,
        userName: this.$store.state.userData.userName,
      };
      console.log(this.oneQuesInfo);
      await this.addNewQues(this.oneQuesInfo);
      // 清空表单
      this.fileList = [];
      this.resetFields('formAdd')
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 获取帖子的typeId
    async getQuesTypeId() {
      await this.reqM2Service("/postTypes", {}, "get").then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          console.log("res: ", res);
          this.types = res;
        } else {
          this.$message({
            message: res.message,
          });
        }
      });
    },
    // 根据帖子信息发表帖子
    async addNewQues(params) {
      await this.reqM2Service(`/post/add`, params, "post").then((res) => {
        res = res.data;
        console.log("res: ", res);
        if (res.code == 20000) {
          this.$message({
            type: "success",
            message: "添加成功",
          });
          this.dialogFormVisible = false;
        } else {
          this.$message({
            type: "info",
            message: "添加失败",
          });
        }
      });
    },
    // 删除图片
    handleRemove(file, fileList) {
      console.log("file: ", file);
      let delUrl = file.response?.data;
      // console.log('delUrl: ', delUrl);
      this.deleteImgByDelUrl(delUrl);
    },
    // 根据delUrl删除图片
    deleteImgByDelUrl(delUrl) {
      this.$http
        .delete(
          `http://106.75.154.40:9012/education/file/delPic?delUrl=${delUrl}`
        )
        .then((res) => {
          // console.log('res: ', res);
          res = res.data;
          if (res.code == 20000) {
            this.$message({
              type: "success",
              message: "删除成功",
            });
          } else {
            this.$message({
              type: "info",
              message: "删除失败",
            });
          }
        });
    },
    // 图片预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 上传成功
    handleOnSuccess(res, file, fileList) {
      // console.log("file: ", file);
      // console.log("res: ", res);
      if (res.code == 20000) {
        res = res.data;
        this.form.images.push(res);
        this.$message({
          type: "success",
          message: "上传成功",
        });
        // console.log('this.oneQuesInfo: ', this.oneQuesInfo);
      } else {
        this.$message({
          type: "info",
          message: "上传失败",
        });
      }
    },
    // 上传图片失败
    handleOnError(err, file, fileList) {
      console.log("err: ", err);
      if (err) {
        this.$message({
          type: "info",
          message: "上传失败",
        });
      }
    },
  },
  async mounted() {
    await this.getQuesTypeId();
  },
};
</script>
<style lang="less">
</style>