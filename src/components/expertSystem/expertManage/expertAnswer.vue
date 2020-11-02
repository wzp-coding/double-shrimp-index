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
          <el-table-column prop="title" label="帖子" width="430">
          </el-table-column>
          <el-table-column prop="stateInfo" label="审核状态" width="140">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="60">
            <template slot-scope="scope">
              <el-button
                @click="handleReply(scope.$index, scope.row)"
                type="text"
                size="small"
                >回复</el-button
              >
            </template>
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
      <!-- 我的回复----结束 -->
      <el-tab-pane label="删除历史">
        <el-table :data="deleteReplyList" style="width: 100%" max-height="500">
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
                <el-form-item label="回复者">
                  <span>: {{ props.row.replierName }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column fixed prop="creationTime" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="reply" label="回复" width="520">
          </el-table-column>
          <el-table-column prop="stateInfo" label="审核状态" width="100">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- 修改或者添加回复对话框 -->
    <publicReply
      :info="dialogInfo"
      :title="dialogTitle"
      :type="dialogType"
      :show="show"
      @changeShow="changeShow"
    ></publicReply>
    <!-- 换页 -->
    <div class="pagination">
      <pagination
        :total="total"
        :size="size"
        :resetPage="resetPage"
        @pageChange="handlePageChange"
      ></pagination>
    </div>
    <!-- 换页 -->
  </div>
</template>
<script>
import pagination from "../expertListChildren/pagination";
import publicReply from "./expertManageChildren/publicReply";
export default {
  data() {
    return {
      // 传递给对话框组件的属性
      dialogTitle: "",
      dialogType: "",
      show: false,
      dialogInfo: {
        replyId: "",
        quesId: "",
        replierId: "",
        replierName: "",
        reply: "",
        images: "",
        experts: true,
      },
      // 传递给换页组件的属性
      total: 50,
      page: 1,
      size: 5,
      resetPage: false,
      // 本组件的属性
      quesList: [],
      replyList: [],
      deleteReplyList: [],
      loading: true,
      expertId: "",
      expertName: "",
      tabIndex: 0,
    };
  },
  components: {
    pagination,
    publicReply,
  },
  methods: {
    // 控制显示修改或者添加界面
    changeShow() {
      this.show = !this.show;
    },
    // 点击回复按钮
    handleReply(index, row) {
      // console.log(index, row);
      this.changeShow();
      this.dialogType = "add";
      this.dialogTitle = "添加回复";
      this.dialogInfo.quesId = row.id;
      this.dialogInfo.replierId = this.expertId;
      this.dialogInfo.replierName = this.expertName;
    },
    // 点击编辑按钮
    handleEdit(index, row) {
      // console.log(index, row);
      this.changeShow();
      this.dialogType = "update";
      this.dialogTitle = "修改回复";
      this.dialogInfo.replyId = row.id;
      this.dialogInfo.quesId = row.postId;
      this.dialogInfo.replierName = row.replierName;
      this.dialogInfo.replierId = row.replier;
      this.dialogInfo.reply = row.reply;
      this.dialogInfo.images = row.images;
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
          // 删除回复
          // this.$http
          //   .put(`http://106.75.154.40:9005/details/delete/${id}`)
          this.reqM8Service(`/details/delete/${id}`, {}, "put")
          .then(
            (res) => {
              res = res.data;
              console.log("res: ", res);
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
              }else{
                this.$message({
                  type: "info",
                  message: res.message,
                });
              }
            }
          );
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
      } else if (this.tabIndex == 2) {
        this.getDeletedReplyList();
      }
      this.resetPage = true;
    },
    // 获取expertId
    async getExpertIdByUserId(id) {
      await this.reqM2Service(`/info/experts/findByUser/${id}`, {}, "get").then(
        (res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            this.expertName = res.name;
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
    // 处理换页请求
    handlePageChange({ page, size }) {
      // console.log("size: ", size);
      // console.log("page: ", page);
      if (this.tabIndex == 0) {
        this.getQuesListByExpertId(this.expertId, page, size);
      } else if (this.tabIndex == 1) {
        this.getReplyListByExpertId(this.expertId, page, size);
      } else if (this.tabIndex == 2) {
        this.getDeletedReplyList(page, size);
      }
      // 取消重置换页
      this.resetPage = false;
    },
    //  根据expertId获取帖子
    async getQuesListByExpertId(id, page = 1, size = 5) {
      this.page = page;
      this.size = size;
      await this.reqM2Service(
        `/info/post/findByExperts/${id}/${page}/${size}`,
        {},
        "get"
      ).then((res) => {
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
    async getReplyListByExpertId(id, page = 1, size = 5) {
      this.page = page;
      this.size = size;
      await this.reqM2Service(
        `/info/details/findByReplier/${id}/${page}/${size}`,
        {},
        "get"
      ).then((res) => {
        res = res.data;
        // console.log('res: ', res);
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
          // console.log(JSON.parse(JSON.stringify(this.replyList)));
        } else {
          this.$message({
            message: "获取帖子信息失败",
          });
        }

        this.loading = false;
      });
    },
    // 获取删除回复历史记录
    getDeletedReplyList(page = 1, size = 5) {
      this.reqM2Service(
        `/info/details/findDelete/${page}/${size}`,
        {},
        "get"
      ).then((res) => {
        res = res.data;
        if (res.code == 20000) {
          res = res.data;
          this.total = res.total;
          this.deleteReplyList = [];
          // console.log('res: ', res);
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
              case 3:
                item.stateInfo = "已删除";
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
            this.deleteReplyList.push(item);
          });
        } else {
          this.$message({
            message: res.message,
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
    // 根据expertId请求到相关的帖子
    await this.getQuesListByExpertId(this.expertId);
    // console.log(JSON.parse(JSON.stringify(this.quesList)));
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