<template>
  <div class="favorite">
    <div class="favorite-title-head">
      <p class="favorite-title">全部宝贝</p>
      <div>
        <p class="favorite-title" style="color: red">￥{{ totalMoneny }}</p>
        <el-button size="small" plain round @click="buyGoods">购买</el-button>
      </div>
    </div>
    <!-- 展示区 -->
    <div class="favorite-container">
      <div class="lxl-goods">
        <el-table
          :data="favoriteList"
          stripe
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="图片" width="120">
            <template slot-scope="scope">
              <el-image
                :src="scope.row.picture"
                style="width: 100px; height: 100px"
              >
              </el-image>
            </template>
          </el-table-column>
          <el-table-column prop="productName" label="商品名" width="120">
          </el-table-column>
          <el-table-column prop="price" label="商品价格" width="80">
          </el-table-column>
          <el-table-column prop="productTitle" label="商品介绍" width="220">
          </el-table-column>
          <el-table-column label="数量" width="200">
            <template slot-scope="scope">
              <el-input-number
                v-model="scope.row.num"
                @change="handleChange(scope)"
                :min="1"
                :max="10"
                label="描述文字"
                size="small"
              >
              </el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="移除">
            <template slot-scope="scope">
              <i class="el-icon-delete" @click="delShop(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 展示区结束 -->
    <!-- <div class="empty-list" v-if="favoriteList.length === 0">
        暂无收藏的商品
      </div> -->
    <el-dialog title="选择收货信息" :visible.sync="dialogVisible" width="30%">
      <span></span>
      <el-select
        style="width: 100%"
        v-model="value"
        placeholder="请选择已有地址"
        @change="getChangedAddressId($event)"
      >
        <el-option
          v-for="(item, i) in addressList"
          :key="i"
          :value="item.addressId"
        >
          {{ item.receiverAddress }}
        </el-option>
      </el-select>
      <el-tag @click="toAddress()">添加新地址</el-tag>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="success" @click="confirmBuy">确定购买</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      // 收藏列表
      favoriteList: [],
      // 被选中的收藏列表
      beSelectFavoriteList: [],
      // 被选中收藏列表的总金额
      totalMoneny: 0,
      checked: "",
      dialogVisible: false,
      addressList: [],
      addressNum: [],
      beChangedAddressId: "",
    };
  },
  created() {
    this.getShopByUserId();
  },

  methods: {
    // 
    toAddress(){
      this.$router.push(`/addressMan`)
    },
    //
    getChangedAddressId(item) {
      this.beChangedAddressId = item;
      console.log(this.beChangedAddressId);
    },
    // 获取被选中的所有的列
    handleSelectionChange(val) {
      this.beSelectFavoriteList = val;
      console.log(val);
      this.handleChange();
    },
    // 监控总价格，并改变
    handleChange(value) {
      this.totalMoneny = 0;
      this.beSelectFavoriteList.forEach((element) => {
        this.totalMoneny = this.totalMoneny + element.price * element.num;
      });
    },
    // 获得登录用户下的收藏夹列表
    async getShopByUserId() {
      try {
        const { data: res } = await this.reqM4Service(
          "/cart/" + this.$store.state.userData.userId,
          "",
          "get"
        );
        console.log(res.data);
        if (res.code === 20000) {
          this.favoriteList = res.data;
          // 监控总额
          this.handleChange();
        } else {
          this.$message.error("网络开小差了，请稍后重试 20001");
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
      }
    },
    // 移除该商品
    async delShop(shopDetail) {
      console.log(shopDetail);
      try {
        const { data: res } = await this.reqM4Service(
          "/cart/" + shopDetail.cartId,
          "",
          "delete"
        );
        if (res.code === 20000) {
          this.$message.success(res.message);
          //  更新
          this.getShopByUserId();
        } else {
          this.$message.error(res.message);
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
      }
    },
    //购买
    async buyGoods() {
      // 判断是否选择了商品
      if (this.beSelectFavoriteList != 0) {
        // 获取所有的地址信息
        let addressList = await this.getAddress();
        // 打开对话框选择地址
        this.dialogVisible = true;
      } else {
        this.$message.error("请选择购买的商品！");
      }
    },
    // 确认购买
    async confirmBuy() {
      console.log("this.beChangedAddressId");
      console.log(this.beChangedAddressId);
      if (
        this.beChangedAddressId != undefined &&
        this.beChangedAddressId != ""
      ) {
        this.dialogVisible = false;
        try {
          // 给每个商品添加地址id, 所有选中的商品附加上相同的地址
          this.beSelectFavoriteList.forEach((element, index) => {
            element.addressId = this.beChangedAddressId;
            // 底层实现是每个商品生成一个订单
            this.addOrder(element);
          });
        } catch (error) {
          this.$message.error("网络开小差了，请稍后重试19999");
        }
      } else {
        this.$message.error("请选择地址！");
        this.dialogVisible = true;
      }
    },
    // 生成订单
    async addOrder(orderInfo) {
      console.log("orderInfo");
      console.log(orderInfo);
      try {
        const { data: res } = await this.reqM4Service(
          "/order",
          {
            userId: this.$store.state.userData.userId,
            productId: orderInfo.productId,
            orderName: orderInfo.productName,
            num: orderInfo.num,
            addressId: orderInfo.addressId,
            orderPayment: orderInfo.num * orderInfo.price,
            orderPaymentType: "支付宝",
            orderStatus: 1,
          },
          "post"
        );
        if (res.code === 20000) {
          console.log(res);
          this.$message.success(res.message);
          //  更新
          // this.getShopByUserId();
        } else {
          this.$message.error(res.message);
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
      }
    },
    // 获得地址列表
    async getAddress() {
      if (this.$store.state.userData.userId === undefined) {
        return false;
      }
      try {
        const { data: res } = await this.reqM4Service(
          "/address/" + this.$store.state.userData.userId,
          "",
          "get"
        );
        console.log(res);
        if (res.code === 20000) {
          this.addressList = res.data.reverse();
          for (let i = 0; i < this.addressList.length; i++) {
            this.addressList[i].receiverAddress =
              "收货人：" +
              this.addressList[i].receiverName +
              " 联系方式：" +
              this.addressList[i].receiverPhone +
              " " +
              this.addressList[i].receiverProvince +
              this.addressList[i].receiverCity +
              this.addressList[i].receiverTown +
              this.addressList[i].receiverAddress;
          }
          return res.data.reverse();
        } else {
          this.$message.error(res.message);
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
      }
    },
    // 添加新的地址
  },
};
</script>

<style lang="less" scoped>
.lxl-p {
  font-size: 12px;
}
.lxl-goods {
  width: 100%;
  display: flex;
  flex-direction: column;
  .lxl-good {
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    margin-top: 5px;
    > * {
      display: flex;
      align-items: center;
      color: rgb(170, 171, 172);
    }
  }
}
.favorite {
  .favorite-title-head {
    display: flex;
    justify-content: space-between;
    .favorite-title {
      color: #4ecb5f;
      font-size: 20px;
      padding: 10px;
      font-weight: bold;
    }
    div {
      display: flex;
      flex-direction: row;
    }
  }
  .favorite-container {
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    min-height: 300px;
    margin: 10px auto;
    .empty-list {
      width: 100%;
      height: 300px;
      line-height: 300px;
      text-align: center;
      color: #4ecb5f;
      font-size: 25px;
      font-weight: bold;
    }
  }
}
.el-icon-delete:hover {
  color: red;
  cursor: pointer;
}
</style>