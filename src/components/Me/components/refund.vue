<template>
  <div class="refund">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="货品" width="180"> </el-table-column>
      <el-table-column prop="name" label="退款金额" width="180"> </el-table-column>
      <el-table-column prop="address" label="申请时间"> </el-table-column>
      <el-table-column prop="address" label="类型"> </el-table-column>
      <el-table-column prop="address" label="退款状态"> </el-table-column>
      <el-table-column prop="address" label="订单操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.refund {
  width: 100%;
  // background-color: #fff;
}
</style>