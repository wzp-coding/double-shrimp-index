<template>
  <div class="expertAnswer">
    <el-tabs type="border-card" v-loading="loading" v-model="tabIndex" @tab-click="handleClick">
      <el-tab-pane label="我的提问" >
        <el-table :data="quesList" style="width: 100%" max-height="250">
          <el-table-column fixed prop="creationTime" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="title" label="帖子" width="450">
          </el-table-column>
          <el-table-column prop="stateInfo" label="审核状态" width="100">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, quesList)"
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
      <el-tab-pane label="我的回复" >
        <el-table :data="replyList" style="width: 100%" max-height="250">
          <el-table-column fixed prop="creationTime" label="日期" width="150">
          </el-table-column>
          <el-table-column prop="reply" label="回复" width="500">
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
    <pagination
      :total="total"
      :resetPage="resetPage"
      @pageChange="handlePageChange"
    ></pagination>
  </div>
</template>
<script>
import pagination from "../expertListChildren/pagination";
export default {
  data() {
    return {
      quesList: [],
      replyList: [],
      total: 50,
      resetPage: false,
      loading: true,
      userId: "1264238099769200640",
      expertId: "",
      tabIndex:0,
    };
  },
  components: {
    pagination,
  },  
  methods: {
    handleClick(){
      console.log(this.tabIndex)
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
      console.log("size: ", size);
      console.log("page: ", page);
      // 取消重置换页
      this.resetPage = false;
    },
    //  根据expertId获取帖子
    async getQuesListByExpertId(id, page = 1, size = 5) {
      await this.$http
        .get(
          `http://106.75.154.40:9012/info/post/findByExperts/${id}/${page}/${size}`
        )
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
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
            });
            this.quesList = res.rows;
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
      await this.$http
        .get(
          `http://106.75.154.40:9012/info/details/findByReplier/${id}/${page}/${size}`
        )
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
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
            });
            this.replyList = res.rows;
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
    await this.getExpertIdByUserId(this.userId);
    await this.getQuesListByExpertId(this.expertId);
    console.log(JSON.parse(JSON.stringify(this.quesList)));
  },
};
</script>
<style>
</style>