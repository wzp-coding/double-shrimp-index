<template>
  <div class="expertAnswer">
    <el-tabs
      type="border-card"
      v-loading="loading"
      v-model="tabIndex"
      @tab-click="handleClick"
    >
      <!-- 提问我的----开始 -->
      <el-tab-pane label="提问我的">
        <el-table :data="quesList" style="width: 100%" max-height="500">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" class="demo-table-expand">
                <el-form-item label="帖子id">
                  <span>: {{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="创建时间">
                  <span>: {{ props.row.creationTime }}</span>
                </el-form-item>
                <el-form-item label="审核状态">
                  <span>: {{ props.row.stateInfo }}</span>
                </el-form-item>
                <el-form-item label="帖子问题">
                  <span>: {{ props.row.title }}</span>
                </el-form-item>
                <!-- 预览图片有bug -->
                <el-form-item
                  label="图片说明"
                  v-if="props.row.images.length != 0"
                  >:
                  <div class="demo-image__preview" style="margin-top: 10px">
                    <el-image
                      v-for="(item, index) in props.row.images"
                      :key="index"
                      style="width: 100px; height: 100px; margin-right: 10px"
                      :src="item"
                      :preview-src-list="props.row.images"
                      fit="cover"
                    >
                    </el-image>
                  </div>
                </el-form-item>
                <el-form-item label="提问者">
                  <span
                    >:
                    {{
                      props.row.userName == "" ? "暂无" : props.row.userName
                    }}</span
                  >
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column fixed prop="creationTime" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="title" label="帖子" width="480">
          </el-table-column>
          <el-table-column prop="stateInfo" label="审核状态" width="140">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 提问我的----结束 -->
      <!-- 我的回复----开始 -->
      <el-tab-pane label="我的回复">
        <el-table :data="replyList" style="width: 100%" max-height="500">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" class="demo-table-expand">
                <el-form-item label="回帖id">
                  <span>: {{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="创建时间">
                  <span>: {{ props.row.creationTime }}</span>
                </el-form-item>
                <el-form-item label="审核状态">
                  <span>: {{ props.row.stateInfo }}</span>
                </el-form-item>
                <el-form-item label="回复内容">
                  <span>: {{ props.row.reply }}</span>
                </el-form-item>
                <el-form-item
                  label="图片说明"
                  v-if="props.row.images.length != 0"
                  >:
                  <div class="demo-image__preview" style="margin-top: 10px">
                    <el-image
                      v-for="(item, index) in props.row.images"
                      :key="index"
                      style="width: 100px; height: 100px; margin-right: 10px"
                      :src="item"
                      :preview-src-list="props.row.images"
                      fit="cover"
                    >
                    </el-image>
                  </div>
                </el-form-item>
                <el-form-item label="回复者">
                  <span>: {{ props.row.replierName }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column fixed prop="creationTime" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="reply" label="回复" width="400">
          </el-table-column>
          <el-table-column prop="stateInfo" label="审核状态" width="100">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, replyList)"
                type="text"
                size="small"
              >
                删除
              </el-button>
              <el-button
                @click="handleEdit(scope.$index, scope.row)"
                type="text"
                size="small"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- 我的回复----结束 -->
    <!-- 修改对话框--开始 -->
      <el-dialog title="修改回复" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="问题内容">
            <el-input type="textarea" v-model="form.title"></el-input>
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
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleSubmitQues">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 修改对话框--结束 -->
    <!-- 换页 -->
    <div class="pagination">
      <pagination
        :total="total"
        :resetPage="resetPage"
        @pageChange="handlePageChange"
      ></pagination>
    </div>
    <!-- 换页 -->
  </div>
</template>
<script>
import pagination from "../expertListChildren/pagination";
export default {
  data() {
    return {
      quesList: [],
      replyList: [],
      total: 10,
      page: 1,
      size: 2,
      resetPage: false,
      loading: true,
      userId: "1264238099769200640",
      expertId: "",
      tabIndex: 0,
      dialogFormVisible: false,
      form: {
        title: "",
        images: [],
      },
      formLabelWidth: "120px",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      oneQuesInfo: {},
      oneReplyInfo: {},
    };
  },
  components: {
    pagination,
  },
  methods: {
    // 提交帖子修改
    handleSubmitQues() {
      this.dialogFormVisible = false;
      this.oneQuesInfo.images = this.oneQuesInfo.images.join(",");
      console.log(this.oneQuesInfo);
      this.putQuesById(this.oneQuesInfo.id, this.oneQuesInfo);
    },
    // 根据帖子id提交修改
    putQuesById(id, data) {
      this.$http
        .put(`http://106.75.154.40:9005/post/update/${id}`, data)
        .then((res) => {
          res = res.data;
          // console.log("res: ", res);
          if (res.code == 20000) {
            this.$message({
              type: "success",
              message: "修改成功",
            });
          } else {
            this.$message({
              type: "info",
              message: "修改失败",
            });
          }
        });
    },
    // 删除图片
    handleRemove(file, fileList) {
      // console.log("file: ", file);
      let delUrl = file.response.data;
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
        this.oneQuesInfo.images.push(res);
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
    // 编辑帖子或者回复
    async handleEdit(index, row) {
      this.dialogFormVisible = true;
      let id = row.id;
      // console.log('id: ', id);
      await this.getQuesInfoById(id);
      console.log("this.fileList: ", this.fileList);
    },
    // 根据id请求单个问题的信息
    async getQuesInfoById(id) {
      await this.$http
        .get(`http://106.75.154.40:9012/info/post/findById/${id}`)
        .then((res) => {
          res = res.data;
          // console.log('res: ', res);
          if (res.code == 20000) {
            res = res.data;
            this.oneQuesInfo = res;
            this.form.title = res.title;
            if (!!res.images) {
              this.$set(this.form, "images", res.images.split(","));
              this.oneQuesInfo.images = res.images.split(",");
            } else {
              this.$set(this.form, "images", []);
              this.oneQuesInfo.images = [];
            }
            this.form.images.forEach((url) => {
              this.fileList.push({ url });
            });
          } else {
            this.$message({
              type: "info",
              message: "获取信息失败",
            });
          }
        });
    },
    // 删除帖子或者回复
    deleteRow(index, rows) {
      // console.log('rows: ', rows);
      // console.log('index: ', index);
      let id = rows[index].id;
      this.$confirm("此操作将永久删除该信息，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          if (this.tabIndex == 0) {
            // 删除帖子
            this.$http
              .delete(`http://106.75.154.40:9005/post/delete/${id}`)
              .then((res) => {
                res = res.data;
                if (res.code == 20000) {
                  this.$message({
                    type: "info",
                    message: "删除成功",
                  });
                  this.getQuesListByExpertId(
                    this.expertId,
                    this.page,
                    this.size
                  );
                }
              });
          } else if (this.tabIndex == 1) {
            // 删除回复
            this.$http
              .delete(`http://106.75.154.40:9005/details/delete/${id}`)
              .then((res) => {
                res = res.data;
                if (res.code == 20000) {
                  this.$message({
                    type: "info",
                    message: "删除成功",
                  });
                  this.getReplyListByExpertId(
                    this.expertId,
                    this.page,
                    this.size
                  );
                }
              });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 切换tab栏
    handleClick() {
      console.log(this.tabIndex);
      if (this.tabIndex == 0) {
        this.getQuesListByExpertId(this.expertId);
      } else if (this.tabIndex == 1) {
        this.getReplyListByExpertId(this.expertId);
      }
      this.resetPage = true;
    },
    // 获取expertId
    async getExpertIdByUserId(id) {
      await this.$http
        .get(`http://106.75.154.40:9012/info/experts/findByUser/${id}`)
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.expertId = res.id;
          } else {
            this.$message({
              message: "获取专家信息失败",
            });
          }
          this.loading = false;
        });
    },
    // 处理换页请求
    handlePageChange({ page, size }) {
      // console.log("size: ", size);
      // console.log("page: ", page);
      if (this.tabIndex == 0) {
        this.getQuesListByExpertId(this.expertId, page, size);
      } else if (this.tabIndex == 1) {
        this.getReplyListByExpertId(this.expertId, page, size);
      }
      // 取消重置换页
      this.resetPage = false;
    },
    //  根据expertId获取帖子
    async getQuesListByExpertId(id, page = 1, size = 2) {
      this.page = page;
      this.size = size;
      await this.$http
        .get(
          `http://106.75.154.40:9012/info/post/findByExperts/${id}/${page}/${size}`
        )
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.total = res.total;
            this.quesList = [];
            res.rows.forEach((item) => {
              // 处理状态state
              switch (item.state) {
                case 0:
                  item.stateInfo = "审核中";
                  break;
                case 1:
                  item.stateInfo = "审核通过";
                  break;
                case 2:
                  item.stateInfo = "审核失败";
                  break;
              }
              // 处理时间格式
              item.creationTime = this.formatTime(item.creationTime);
              // 处理图片字符串
              if (!!item.images) {
                this.$set(item, "images", item.images.split(","));
              } else {
                this.$set(item, "images", []);
              }
              this.quesList.push(item);
            });
          } else {
            this.$message({
              message: "获取帖子信息失败",
            });
          }
          this.loading = false;
        });
    },
    //  根据expertId获取回复
    async getReplyListByExpertId(id, page = 1, size = 2) {
      this.page = page;
      this.size = size;
      await this.$http
        .get(
          `http://106.75.154.40:9012/info/details/findByReplier/${id}/${page}/${size}`
        )
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.total = res.total;
            this.replyList = [];
            res.rows.forEach((item) => {
              // 处理状态state
              switch (item.state) {
                case 0:
                  item.stateInfo = "审核中";
                  break;
                case 1:
                  item.stateInfo = "审核通过";
                  break;
                case 2:
                  item.stateInfo = "审核失败";
                  break;
              }
              // 处理时间格式
              item.creationTime = this.formatTime(item.creationTime);
              // 处理图片字符串
              if (!!item.images) {
                this.$set(item, "images", item.images.split(","));
              } else {
                this.$set(item, "images", []);
              }
              this.replyList.push(item);
            });
          } else {
            this.$message({
              message: "获取帖子信息失败",
            });
          }
          console.log(JSON.parse(JSON.stringify(this.replyList)));

          this.loading = false;
        });
    },
    // 格式化时间
    formatTime(date) {
      //date是传入的时间
      const d = new Date(date);
      const month =
        d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
      const hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
      const min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
      const sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
      const times =
        d.getFullYear() +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        min +
        ":" +
        sec;
      return times;
    },
  },
  async mounted() {
    // 先获取expertId
    await this.getExpertIdByUserId(this.userId);
    // 根据expertId请求到相关的帖子
    await this.getQuesListByExpertId(this.expertId);
    console.log(JSON.parse(JSON.stringify(this.quesList)));
  },
};
</script>
<style scoped lang="less">
.expertAnswer {
  .pagination {
    text-align: center;
  }
}
</style>