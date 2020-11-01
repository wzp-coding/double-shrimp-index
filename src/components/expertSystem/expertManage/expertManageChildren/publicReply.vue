<template>
  <div>
    <!-- 对话框--开始 -->
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form
        :model="form"
        label-width="100px"
        :rules="rules"
        ref="formReply"
        class="demo-ruleForm"
      >
        <el-form-item label="回复内容" prop="reply">
          <el-input type="textarea" v-model="form.reply"></el-input>
        </el-form-item>
        <el-form-item label="上传图片" prop="images">
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmitReply">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 对话框--结束 -->
  </div>
</template>
<script>
export default {
  props: ["title", "type", "show", "info"],
  data() {
    return {
      dialogFormVisible: false,
      form: {
        reply: "",
        images: [],
      },
      formLabelWidth: "120px",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      oneReplyInfo: {},
      rules: {
        reply: [{ required: true, message: "请输入内容", trigger: "blur" }],
      },
    };
  },
  watch: {
    show() {
      if (this.show) {
        this.dialogFormVisible = true;
        if (this.type == "update") {
          // 如果是修改页面，先将数据渲染上去
          this.form.reply = this.info.reply;
          this.form.images = this.info.images;
          this.fileList=[];
          this.info.images.forEach(item=>this.fileList.push({url:item}));
        //   console.log('this.fileList: ', this.fileList);
        }else if(this.type == 'add'){
            this.fileList = [];
            this.form.reply = "";
            this.form.images = [];
        }
      }
    },
    dialogFormVisible() {
      if (!this.dialogFormVisible) {
        this.$emit("changeShow");
      }
    },
  },
  methods: {
    // 提交回复
    handleSubmitReply() {
      this.dialogFormVisible = false;
      this.oneReplyInfo = {
        images: this.form.images.join(","),
        postId: this.info.quesId,
        replier: this.info.replierId,
        replierName: this.info.replierName,
        reply: this.form.reply,
      };
      console.log(this.oneReplyInfo);
      if (this.type == "update") {
        this.putReplyById(this.info.replyId, this.oneReplyInfo);
      } else if (this.type == "add") {
        this.addReply(this.oneReplyInfo);
      }
    },
    // 添加回复
    addReply(params) {
      this.reqM2Service(`/info/details/reply`, params, "post").then((res) => {
        res = res.data;
        console.log("res: ", res);
        if (res.code === 20000) {
          this.$message({
            type: "success",
            message: "回复成功",
          });
          this.resetFields("formReply");
        } else {
          this.$message({
            type: "info",
            message: res.message,
          });
        }
      });
    },
    // 根据回复id提交修改
    putReplyById(id, params) {
      // this.reqM8Service(`/details/update/${id}`, params, "put")
      this.$http
        .put(`http://106.75.154.40:9005/details/update/${id}`, params)
        .then((res) => {
          res = res.data;
          console.log("res: ", res);
          if (res.code == 20000) {
            this.$message({
              type: "success",
              message: "修改成功",
            });
            this.resetFields("formReply");
          } else {
            this.$message({
              type: "info",
              message: "修改失败",
            });
          }
        })
        .then(() => {
          this.getReplyListByExpertId(this.expertId, this.page, this.size);
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
        // console.log('this.oneReplyInfo: ', this.oneReplyInfo);
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
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="less">
</style>