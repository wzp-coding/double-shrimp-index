<template>
  <div class="articleManage">
    <div class="title">
      <h2>文章管理</h2>
      <div class="addArticle">
        <el-button
          type="primary"
          size="medium"
          @click="handleAdd"
          icon="el-icon-plus"
          >发表文章</el-button
        >
      </div>
    </div>
    <el-tabs
      type="border-card"
      v-loading="loading"
      v-model="tabIndex"
      @tab-click="handleClick"
    >
      <el-tab-pane label="文章管理">
        <el-table :data="articleList" style="width: 100%" max-height="500">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" class="demo-table-expand">
                <el-form-item label="文章id">
                  <span>: {{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="文章类型id">
                  <span>: {{ props.row.typeId }}</span>
                </el-form-item>
                <el-form-item label="标题">
                  <span>: {{ props.row.title }}</span>
                </el-form-item>
                <el-form-item label="概要">
                  <span>: {{ props.row.summary }}</span>
                </el-form-item>
                <el-form-item label="文章内容">
                  <div v-html="props.row.content"></div>
                </el-form-item>
                <el-form-item label="创建时间">
                  <span>: {{ props.row.creationTime }}</span>
                </el-form-item>
                <el-form-item label="审核状态">
                  <span>: {{ props.row.stateInfo }}</span>
                </el-form-item>
                <el-form-item label="点击量">
                  <span>: {{ props.row.clickNum }}</span>
                </el-form-item>
                <el-form-item label="推荐">
                  <span>: {{ props.row.recommend }}</span>
                </el-form-item>
                <el-form-item label="封面"
                  >:
                  <img :src="props.row.picture" alt="" />
                </el-form-item>
                <el-form-item label="作者">
                  <span
                    >:
                    {{
                      props.row.editor == "" ? "暂无" : props.row.editor
                    }}</span
                  >
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column fixed prop="creationTime" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="title" label="标题" width="400">
          </el-table-column>
          <el-table-column prop="stateInfo" label="审核状态" width="100">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, articleList)"
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
      <el-tab-pane label="删除历史">
        <el-table
          :data="deleteArticleList"
          style="width: 100%"
          max-height="500"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" class="demo-table-expand">
                <el-form-item label="文章id">
                  <span>: {{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="文章类型id">
                  <span>: {{ props.row.typeId }}</span>
                </el-form-item>
                <el-form-item label="标题">
                  <span>: {{ props.row.title }}</span>
                </el-form-item>
                <el-form-item label="概要">
                  <span>: {{ props.row.summary }}</span>
                </el-form-item>
                <el-form-item label="文章内容">
                  <div v-html="props.row.content"></div>
                </el-form-item>
                <el-form-item label="创建时间">
                  <span>: {{ props.row.creationTime }}</span>
                </el-form-item>
                <el-form-item label="审核状态">
                  <span>: {{ props.row.stateInfo }}</span>
                </el-form-item>
                <el-form-item label="点击量">
                  <span>: {{ props.row.clickNum }}</span>
                </el-form-item>
                <el-form-item label="推荐">
                  <span>: {{ props.row.recommend }}</span>
                </el-form-item>
                <el-form-item label="封面"
                  >:
                  <img :src="props.row.picture" alt="" />
                </el-form-item>
                <el-form-item label="作者">
                  <span
                    >:
                    {{
                      props.row.editor == "" ? "暂无" : props.row.editor
                    }}</span
                  >
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column fixed prop="creationTime" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="title" label="标题" width="520">
          </el-table-column>
          <el-table-column prop="stateInfo" label="审核状态" width="100">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- 修改对话框--开始 -->
    <el-dialog title="修改文章" :visible.sync="dialogFormVisibleUpdate">
      <el-row>
        <el-col :span="18">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item :label="label.id" prop="id">
              <el-input
                v-model.number="ruleForm.id"
                placeholder="请输入内容"
                disabled
              ></el-input>
            </el-form-item>
            <el-form-item :label="label.title" prop="title">
              <el-input
                type="textarea"
                autosize
                v-model="ruleForm.title"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item :label="label.editor" prop="editor">
              <el-input
                v-model="ruleForm.editor"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item :label="label.summary" prop="summary">
              <el-input
                type="textarea"
                autosize
                v-model="ruleForm.summary"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item
              :label="label.creationTime"
              prop="creationTime"
              style="display: none"
            >
              <el-input
                v-model="ruleForm.creationTime"
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
            <el-form-item :label="label.content" prop="content">
              <mq-editor
                v-model="ruleForm.content"
                upload-url="/information/upload"
                fileName="file"
              />
            </el-form-item>
            <el-form-item label="封面">
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
                  >点击上传封面</el-button
                >
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
          <div class="form-button">
            <el-button type="success" @click="submitForm('ruleForm')"
              >立即更新</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 修改对话框--结束 -->
    <!-- 添加对话框--开始 -->
    <el-dialog title="发表文章" :visible.sync="dialogFormVisibleAdd">
      <el-row>
        <el-col :span="18">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <!-- <el-form-item :label="label.id" prop="id">
              <el-input
                v-model.number="ruleForm.id"
                placeholder="请输入内容"
                disabled
              ></el-input>
            </el-form-item> -->
            <el-form-item :label="label.title" prop="title">
              <el-input
                type="textarea"
                autosize
                v-model="ruleForm.title"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item :label="label.editor" prop="editor">
              <el-input
                v-model="ruleForm.editor"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item :label="label.summary" prop="summary">
              <el-input
                type="textarea"
                autosize
                v-model="ruleForm.summary"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item
              :label="label.creationTime"
              prop="creationTime"
              style="display: none"
            >
              <el-input
                v-model="ruleForm.creationTime"
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
            <el-form-item :label="label.content" prop="content">
              <mq-editor
                v-model="ruleForm.content"
                upload-url="/information/upload"
                fileName="file"
              />
            </el-form-item>
            <el-form-item label="封面">
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
                  >点击上传封面</el-button
                >
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
          <div class="form-button" style="text-align: center">
            <el-button type="success" @click="submitForm('ruleForm')"
              >提交文章</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 添加改对话框--结束 -->
    <pagination
      :total="total"
      :size="size"
      :resetPage="resetPage"
      @pageChange="handlePageChange"
    ></pagination>
  </div>
</template>
<script>
import pagination from "../expertListChildren/pagination";
import mqEditor from "./expertManageChildren/mq-editor";
export default {
  data() {
    return {
      // 文章列表
      articleList: [],
      expertId: "",
      total: 50,
      page: 1,
      size: 5,
      // 重置换页
      resetPage: false,
      // 单篇文章，用于修改页面
      oneArticle: {},
      // 用于修改页面
      label: {
        id: "id",
        title: "标题",
        editor: "作者",
        summary: "概要",
        creationTime: "创建时间",
        typeId: "文章类型id",
        content: "正文",
      },
      // 用于上传图片
      fileList: [],
      // 用于修改页面的选择类型
      options: [],
      // 控制显示修改页面
      dialogFormVisibleUpdate: false,
      dialogFormVisibleAdd: false,
      // 绑定修改或者添加页面的内容
      ruleForm: {},
      // 标记是否是添加页面
      isAddBtn: false,
      // 校验规则
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        editor: [{ required: true, message: "请输入作者", trigger: "blur" }],
        typeId: [
          {
            required: true,
            message: "请选择技术文章id",
            trigger: "change",
          },
        ],
        content: [{ required: true, message: "请输入正文", trigger: "change" }],
      },
      deleteArticleList: [],
      loading: true,
      tabIndex: 0,
    };
  },
  components: {
    pagination,
    mqEditor,
  },
  methods: {
    // 切换tab栏
    handleClick() {
      console.log(this.tabIndex);
      if (this.tabIndex == 0) {
        // 根据expertId请求到相关的文章
        this.getArticleListByExpertId(this.expertId);
      } else if (this.tabIndex == 1) {
        this.getDeletedArticleList();
      }
      this.resetPage = true;
    },
    // 获取删除文章历史记录
    getDeletedArticleList(page = 1, size = 5) {
      this.reqM2Service(
        `/info/diseaseArticles/findDelete/${page}/${size}`,
        {},
        "get"
      ).then((res) => {
        res = res.data;
        if (res.code == 20000) {
          res = res.data;
          this.total = res.total;
          this.deleteArticleList = [];
          console.log("res: ", res);
          res.rows.forEach((item) => {
            // 处理状态state
            item.stateInfo = "已删除";
            // 处理时间格式
            item.creationTime = this.formatTime(item.creationTime);
            this.deleteArticleList.push(item);
          });
        } else {
          this.$message({
            message: res.message,
          });
        }
        this.loading = false;
      });
    },
    // 点击发表文章按钮
    handleAdd() {
      this.isAddBtn = true;
      this.dialogFormVisibleAdd = true;
      this.getTypes();
    },
    // 编辑文章
    async handleEdit(index, row) {
      this.dialogFormVisibleUpdate = true;
      let id = row.id;
      // console.log('id: ', id);
      // 获取文章信息
      await this.getArticleById(id);
      console.log("this.oneArticle: ", this.oneArticle);
      this.ruleForm = this.oneArticle;
      // 获取文章类型
      await this.getTypes();
      // console.log('this.options: ', this.options);
      this.fileList = [{ url: this.oneArticle.picture }];
    },
    // 根据文章id获取信息
    async getArticleById(id) {
      await this.reqM2Service(`/info/information/${id}`, {}, "get").then(
        (res) => {
          res = res.data;
          if (res.code == 20000) {
            console.log("res: ", res);
            res = res.data;
            this.oneArticle = res;
          } else {
            this.$message({
              message: "获取文章失败",
            });
          }
        }
      );
    },
    // 获取文章类型
    async getTypes() {
      await this.reqM2Service(`/info/diseaseArticlesTypes`, {}, "get")
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
          if (!this.isAddBtn) {
            // 处理一下初始时显示的typeid
            this.options.some((item) => {
              // console.log('item: ', item.id,'this.ruleForm.typeId: ', this.ruleForm.typeId);
              if (item.id == this.oneArticle.typeId) {
                this.ruleForm.typeId = item.name;
                return true;
              }
              return false;
            });
          }
        });
    },
    // 点击删除文章按钮
    deleteRow(index, rows) {
      // console.log('rows: ', rows);
      // console.log('index: ', index);
      let id = rows[index].id;
      console.log("id: ", id);
      this.$confirm("此操作将永久删除该信息，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.reqM2Service(`/info/diseaseArticles/delete/${id}`, {}, "delete")
            // this.$http
            //   .delete(
            //     `http://106.75.154.40:9012/info/diseaseArticles/delete/${id}`
            //   )
            .then((res) => {
              res = res.data;
              console.log("res: ", res);
              if (res.code == 20000) {
                this.$message({
                  message: res.message,
                });
                // 重新渲染文章
                this.getArticleListByExpertId(
                  this.expertId,
                  this.page,
                  this.size
                );
              } else {
                this.$message({
                  message: "删除失败",
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 处理换页请求
    handlePageChange({ page, size }) {
      // console.log("size: ", size);
      // console.log("page: ", page);
      if (this.tabIndex == 0) {
        this.getArticleListByExpertId(this.expertId, page, size);
      } else if (this.tabIndex == 1) {
        this.getDeletedArticleList(page, size);
      }
      // 取消重置换页
      this.resetPage = false;
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
          if (this.isAddBtn) {
            this.addArticle(this.ruleForm, this.expertId);
          } else {
            this.updateArticle(this.ruleForm);
          }
        } else {
          this.$message({
            message: "输入不合法!",
          });
          return false;
        }
      });
    },
    // 发表文章
    addArticle(oneArticle, expertId) {
      this.reqM2Service(
        `/info/diseaseArticles/add?expertsId=${expertId}`,
        oneArticle,
        "post"
      ).then((res) => {
        res = res.data;
        if (res.code == 20000) {
          this.dialogFormVisibleAdd = false;
          this.$message({
            type:"success",
            message: res.message,
          });
          // this.resetForm("ruleForm");
          // this.fileList=[];
        } else {
          this.$message({
            message: "提交失败!",
          });
        }
      });
    },
    // 修改文章
    updateArticle(oneArticle) {
      // this.$http
      //   .put(
      //     `http://106.75.154.40:9005/diseaseArticles/update/${oneArticle.id}`,
      //     oneArticle
      //   )
      this.reqM8Service(
        `/diseaseArticles/update/${oneArticle.id}`,
        oneArticle,
        "put"
      ).then((res) => {
        res = res.data;
        if (res.code == 20000) {
          // console.log('res: ', res);
          this.dialogFormVisibleUpdate = false;
          // 重新渲染文章
          this.getArticleListByExpertId(this.expertId, this.page, this.size);
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
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
    // 获取expertId
    async getExpertIdByUserId(id) {
      await this.reqM2Service(`/info/experts/findByUser/${id}`, {}, "get").then(
        (res) => {
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
        }
      );
    },
    //  根据expertId获取文章
    async getArticleListByExpertId(id, page = 1, size = 5) {
      this.page = page;
      this.size = size;
      // await this.reqM2Service(
      //     `/info/diseaseArticles/findByExperts/${id}/${page}/${size}`,
      //     {},
      //     "get"
      //   )
      await this.reqM2Service(
        `/info/diseaseArticles/${page}/${size}`,
        {},
        "post"
      ).then((res) => {
        res = res.data;
        if (res.code === 20000) {
          res = res.data;
          this.total = res.total;
          this.articleList = [];
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
            this.articleList.push(item);
          });
        } else {
          this.$message({
            message: "获取帖子信息失败",
          });
        }
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
    await this.getExpertIdByUserId(this.$store.state.userData.userId);
    // 根据expertId请求到相关的文章
    await this.getArticleListByExpertId(this.expertId);
    // console.log(JSON.parse(JSON.stringify(this.articleList)));
  },
};
</script>
<style  lang="less" scoped>
.articleManage {
  .title {
    position: relative;
    text-align: center;
    font-size: 18px;
    padding: 10px 0;
    font-weight: 500;
    .addArticle {
      position: absolute;
      bottom: 3px;
      right: 0;
    }
  }
}
</style>