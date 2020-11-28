<template>
  <div class="message-box">
    <el-row class="messageboxheader">基地邀请</el-row>
    <el-table :data="messageList">
      <!-- :data: 放入数据源 -->
      <!-- border： 加入边框线 -->
      <!-- type="index"： 索引列 -->
      >
      <el-table-column type="index"> </el-table-column>
      <el-table-column prop="baseName" label="基地名称"></el-table-column>
      <el-table-column prop="baseAddr" label="基地地址"></el-table-column>
      <el-table-column prop="createBy" label="创建人"></el-table-column>
      <el-table-column prop="scope" label="营业范围"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 修改按钮 -->
          <el-button
            type="primary"
            icon="el-icon-check"
            size="small"
            @click="invitationEnter(scope.row.id, 1)"
          ></el-button>
          <!-- 删除按钮 -->
          <!-- type="danger": 红色警告按钮 -->
          <el-button
            type="danger"
            icon="el-icon-close"
            size="small"
            @click="invitationEnter(scope.row.id, 0)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.pagenum"
      :page-sizes="[4, 6, 8, 10]"
      :page-size="pageInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { domain } from "../../../router/url";
export default {
  data() {
    return {
      token: "Bearer " + window.sessionStorage.getItem("token"),
      messageList: [],
      // 用于控制分页的当前页码和条数
      pageInfo: {
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 4,
      },

      // 总条数
      total: 0,
    };
  },
  methods: {
    async getMessageList() {
      const { data: res } = await this.$http.get(
        `${domain.Base_M9_URL}/user/invitation/1/4`,
        {
          headers: {
            Authorization: this.token,
          },
        }
      );
      this.total = res.data.total;
      this.messageList = res.data.rows;
      console.log(res);
    },
    // 监听pagesize(每页显示条数)改变事件
    handleSizeChange(newSize) {
      this.pageInfo.pagesize = newSize;
      this.getMessageList();
    },

    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.pageInfo.pagenum = newPage;
      this.getMessageList();
    },
    // 同意进入基地
    async invitationEnter(baseId, selection) {
      const { data: res } = await this.$http.put(
        `${domain.Base_M9_URL}/user/invitation/${baseId}/${selection}`,
        {},
        {
          headers: {
            Authorization: this.token,
          },
        }
      );
      console.log(res);
      if (res.message == "选择成功") {
        if (selection == 1) {
          this.$router.push('/basePage')
          return this.$message.success('同意成功！')
        } else if (selection == 0) {
          this.getMessageList();
          return this.$message.success('拒绝成功！')
        }
      }
    },
  },
  created() {
    this.getMessageList();
  },
};
</script>

<style lang="less" scoped>
.message-box {
  background-color: #fff;
  .messageboxheader {
    font-size: 20px;
    font-weight: bold;
    color: #5a5858;
    padding: 10px;
  }
}
</style>