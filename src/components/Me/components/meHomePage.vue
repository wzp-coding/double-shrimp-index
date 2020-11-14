<template>
  <div class="me-homepage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="所有订单" name="allOrder">
        <el-table :data="orderList" border style="width: 100%">
          <el-table-column prop="orderId" label="订单Id"> </el-table-column>
          <el-table-column prop="orderName" label="货品"> </el-table-column>
          <el-table-column prop="orderPayment" label="实付款" width="100">
          </el-table-column>
          <el-table-column prop="num" label="数量" width="60">
          </el-table-column>
          <el-table-column label="订单状态" width="100">
            <template slot-scope="scope">
              <el-tag :type="scope.row.orderStatusColor">
                {{ scope.row.orderStatus }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="收货详情">
            <template slot-scope="scope">
              <el-popover
                placement="top"
                title="地址详情"
                width="200"
                trigger="hover"
              >
                <p>
                  {{ scope.row.getGoodInfo }}
                </p>
                <el-button slot="reference">收货详情</el-button>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="orderCreated" label="时间"> </el-table-column>
          <el-table-column label="交易操作">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                style="color: red"
                @click="delOrder(scope.row.orderId)"
                >删除</el-button
              >
              <el-button
                type="text"
                size="small"
                @click="delOrder(scope.row.orderId)"
                >取消</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "allOrder",
      orderList: [],
      addressId: "1321474867186503680",
      address: "",
    };
  },
  created() {
    this.getAllOrder();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async delOrder(orderId) {
      try {
        const { data: res } = await this.reqM4Service(
          "/order/" + orderId,
          "",
          "delete"
        );
        if (res.code === 20000) {
          console.log(res);
          this.getAllOrder();
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
        console.log(error);
      }
    },
    // 获得所有订单消息
    async getAllOrder() {
      try {
        const { data: res } = await this.reqM4Service(
          "/order/search/1/1000",
          {
            userId: this.$store.state.userData.userId,
          },
          "post"
        );
        if (res.code === 20000) {
          this.orderList = res.data.rows.reverse();
          this.orderList.forEach((element) => {
            switch (element.orderStatus) {
              case 1:
                element.getGoodInfo = this.getAddressById(
                  element.addressId
                ).then((val) => {
                  element.orderStatus = "未付款";
                  element.orderStatusColor = "info";
                  element.getGoodInfo = val;
                });

                break;
              case 2:
                element.orderStatus = "已付款";
                element.orderStatusColor = "";
                // element.address = await this.getAddressById(element.addressId);
                break;
              case 3:
                element.orderStatus = "未发货";
                element.orderStatusColor = "warning";
                // element.address = await this.getAddressById(element.addressId);
                break;
              case 4:
                element.orderStatus = "已发货";
                element.orderStatusColor = "success";
                // element.address = await this.getAddressById(element.addressId);
                break;
              default:
                break;
            }
            // element.
          });
          console.log(this.orderList);
        } else {
          this.$message.error(res.message);
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
        console.log(error);
      }
    },
    // 获得地址
    async getAddressById(addressId) {
      try {
        const { data: res } = await this.reqM4Service(
          "/address/queryById/" + addressId,
          "",
          "get"
        );
        if (res.code === 20000) {
          let Address =
            "收货人：" +
            res.data.receiverName +
            " 联系方式：" +
            res.data.receiverPhone +
            " " +
            res.data.receiverProvince +
            res.data.receiverCity +
            res.data.receiverTown +
            res.data.receiverAddress;
          return Address;
        } else {
          this.$message.error(res.message);
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
        console.log(error);
      }
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