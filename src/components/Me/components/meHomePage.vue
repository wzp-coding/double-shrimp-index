<template>
  <div class="me-homepage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="所有订单" name="allOrder">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="货品"> </el-table-column>
          <el-table-column prop="name" label="单价"> </el-table-column>
          <el-table-column prop="province" label="数量"> </el-table-column>
          <el-table-column prop="city" label="商品操作"> </el-table-column>
          <el-table-column prop="address" label="实付款"> </el-table-column>
          <el-table-column prop="zip" label="交易状态"> </el-table-column>
          <el-table-column label="交易操作">
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
      <el-tab-pane label="待付款" name="waitPay">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="货品"> </el-table-column>
          <el-table-column prop="name" label="单价"> </el-table-column>
          <el-table-column prop="province" label="数量"> </el-table-column>
          <el-table-column prop="city" label="商品操作"> </el-table-column>
          <el-table-column prop="address" label="实付款"> </el-table-column>
          <el-table-column prop="zip" label="交易状态"> </el-table-column>
          <el-table-column label="交易操作">
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
        </el-table></el-tab-pane
      >
      <el-tab-pane label="待发货" name="waitDelivery">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="货品"> </el-table-column>
          <el-table-column prop="name" label="单价"> </el-table-column>
          <el-table-column prop="province" label="数量"> </el-table-column>
          <el-table-column prop="city" label="商品操作"> </el-table-column>
          <el-table-column prop="address" label="实付款"> </el-table-column>
          <el-table-column prop="zip" label="交易状态"> </el-table-column>
          <el-table-column label="交易操作">
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
        </el-table></el-tab-pane
      >
      <el-tab-pane label="待收货" name="waitReceive">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="货品"> </el-table-column>
          <el-table-column prop="name" label="单价"> </el-table-column>
          <el-table-column prop="province" label="数量"> </el-table-column>
          <el-table-column prop="city" label="商品操作"> </el-table-column>
          <el-table-column prop="address" label="实付款"> </el-table-column>
          <el-table-column prop="zip" label="交易状态"> </el-table-column>
          <el-table-column label="交易操作">
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
        </el-table></el-tab-pane
      >
      <el-tab-pane label="已完成订单" name="accomplishOrder">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="货品"> </el-table-column>
          <el-table-column prop="name" label="单价"> </el-table-column>
          <el-table-column prop="province" label="数量"> </el-table-column>
          <el-table-column prop="city" label="商品操作"> </el-table-column>
          <el-table-column prop="address" label="实付款"> </el-table-column>
          <el-table-column prop="zip" label="交易状态"> </el-table-column>
          <el-table-column label="交易操作">
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
        </el-table></el-tab-pane
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
          address: "上海",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海",
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
    .el-table {
      margin-top: 0px;
    }
    .el-tabs__header {
      padding: 8px 0 0px 10px;
      background-color: #fff;
      margin-bottom: 3px;
    }
  }
}
</style>