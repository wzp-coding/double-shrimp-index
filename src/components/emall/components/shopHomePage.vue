<template>
  <div class="shop-homepage">
    <el-row class="shop-homepage-container">
      <el-col class="shop-homepage-introduce">
        <div class="shop-introduce">
          <p class="introduce-title">店铺介绍</p>
          <p class="introduce-desc">
            {{ shopInfo.merchantDesc }}
          </p>
        </div>
        <div class="businessLicence">
          <p class="licence-title">营业执照公示</p>
          <p class="licence-display">
            <img :src="shopInfo.merchantLicense" alt="" />
          </p>
        </div>
      </el-col>
      <el-col class="shop-homepage-goods">
        <el-row class="goods-header">
          <i class="el-icon-s-goods" style="color: #00c9fd"></i>
          全部商品
        </el-row>
        <el-row class="goods-display" type="flex">
          <el-col
            class="goods-card"
            v-for="item in goodsList"
            :key="item.productId"
          >
            <el-row class="goods-img">
              <img :src="item.productImages" alt="" />
            </el-row>
            <el-row class="goods-price" type="flex" align="middle" justify="space-between">
              <el-col
                ><span class="price-num">{{ item.productPrice }}</span
                >元/斤</el-col
              >
              <el-col class="goods-sell">
                销量: {{ item.productStars }}
              </el-col>
            </el-row>
            <el-row class="goods-desc">
              {{ item.productTitle }}
            </el-row>
            <el-row class="goods-address"> {{ item.productArea }} </el-row>
          </el-col>
          <!-- 分页 -->
          <div class="lxl-pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="pageInfo.pageSize"
              :total="totalElements"
              :current-page="pageInfo.pageNum"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 商品列表数据
      goodsList: [],
      // 总页数
      totalElements: 1,
      // 分页
      pageInfo: {
        // 每页显示条数
        pageSize: 8,
        // 当前页码
        pageNum: 1,
      },
    };
  },
  // 从父组件获取数据
  props: ["shopInfo", "shopId"],
  methods: {
    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      // 改变当前页码
      this.pageInfo.pageNum = newPage;
      // 刷新列表
      this.getShopGoods();
    },
    // 获取商品列表函数
    async getShopGoods() {
      const { data: res } = await this.reqM4Service(
        `/product/queryProducts/${this.shopId}/${this.pageInfo.pageNum}/${this.pageInfo.pageSize}`,
        "",
        "get"
      );
      // 获取商品列表数据
      this.goodsList = res.data.content;
      // 获取商品总数
      this.totalElements = res.data.totalElements;
    },
  },
  created() {
    // 调用获取商品列表函数
    this.getShopGoods();
  },
};
</script>

<style lang="less" scoped>
.lxl-pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}
.shop-homepage {
  .shop-homepage-container {
    // background-color: #eee;
    .shop-homepage-introduce {
      padding: 5px;
      width: 15%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      .shop-introduce {
        width: 100%;
        padding: 0 10px 15px;
        border-bottom: 2px solid #eee;
        box-sizing: border-box;
        .introduce-title {
          position: relative;
          padding: 15px 0;
          font-size: 14px;
          &::before {
            content: "";
            position: absolute;
            width: 0.3em;
            height: 1.2em;
            top: 1.2em;
            left: -0.7em;
            background-color: #00c9fd;
          }
        }
        .introduce-desc {
          font-size: 18px;
          color: #383838;
        }
      }
      .businessLicence {
        width: 100%;
        // height: 100px;
        background-color: #fff;
        padding: 0 10px 5px;
        box-sizing: border-box;
        .licence-title {
          position: relative;
          padding: 15px 0;
          font-size: 14px;
          &::before {
            content: "";
            position: absolute;
            width: 0.3em;
            height: 1.2em;
            top: 1.2em;
            left: -0.7em;
            background-color: #00c9fd;
          }
        }
        .licence-display {
          // background-color: red;
          img {
            width: 100%;
            height: 100%;
            border-radius: 3px;
            border: 1px solid #ccc;
            box-sizing: border-box;
          }
        }
      }
    }
    .shop-homepage-goods {
      margin-left: 10px;
      width: 83%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

      .goods-header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        font-weight: bold;
        background-color: #fff;
        padding-left: 20px;
        box-sizing: border-box;
      }
      .goods-display {
        width: 100%;
        padding: 0 20px;
        background-color: #fff;
        flex-wrap: wrap;
        .goods-card {
          width: 23%;
          border: 1px solid #eee;
          margin: 10px 15px 20px 0;
          .goods-img {
            width: 100%;
            height: 208px;
            img {
              width: 100%;
              height: 100%;
              border-bottom: 1px solid #eee;
            }
          }
          .goods-price {
            padding: 10px 0 10px 10px;
            color: #ff5941;
            span {
              font-size: 20px;
            }
            .goods-sell {
              padding-top:2px;
              font-size: 14px;
              color: #969a9d;
            }
          }
          .goods-desc {
            padding: 0 10px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .goods-address {
            font-size: 14px;
            padding: 15px 0 10px 10px;
            color: #969a9d;
          }
        }
      }
    }
  }
  margin-bottom: 10px;
}
</style>