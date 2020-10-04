<template>
  <div class="me-homepage">
    <el-tabs v-model="activeName" @tab-click="handleClick" >
      <el-tab-pane label="所有订单" name="allOrder">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="date" label="货品" width="150">
          </el-table-column>
          <el-table-column prop="name" label="单价" width="120">
          </el-table-column>
          <el-table-column prop="province" label="数量" width="120">
          </el-table-column>
          <el-table-column prop="city" label="商品操作" width="120">
          </el-table-column>
          <el-table-column prop="address" label="实付款" width="300">
          </el-table-column>
          <el-table-column prop="zip" label="交易状态" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="交易操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick1(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待付款" name="waitPay">待付款</el-tab-pane>
      <el-tab-pane label="待发货" name="waitDelivery">待发货</el-tab-pane>
      <el-tab-pane label="待收货" name="waitReceive">待收货</el-tab-pane>
      <el-tab-pane label="已完成订单" name="accomplishOrder"
        >已完成订单</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "allOrder",
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
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClick1(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="less">
.me-homepage {
  .el-tabs {
    background-color: #f5f5f5;
    padding: 5px;
    .el-tabs__header {
      background-color: #fff;
    }
  }
}
</style>