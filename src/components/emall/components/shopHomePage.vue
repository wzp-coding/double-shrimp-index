<template>
  <div class="shop-homepage">
    <el-row class="shop-homepage-container">
      <el-col class="shop-homepage-introduce">
        <div class="shop-introduce">
          <p class="introduce-title">店铺介绍</p>
          <p class="introduce-desc">
            你好，我从事这个行业多年，自己养殖4000多亩的虾田，同样我也收附近亲戚朋友，农民伯伯的健康有活力的虾，阿巴阿巴阿巴
          </p>
        </div>
        <div class="businessLicence">
          <p class="licence-title">营业执照公示</p>
          <p class="licence-display">
            <img
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              alt=""
            />
          </p>
        </div>
      </el-col>
      <el-col class="shop-homepage-goods">
        <el-row class="goods-header">
          <i class="el-icon-s-goods" style="color: #00c9fd"></i>
          全部商品
        </el-row>
        <el-row class="goods-display" type="flex">
          <el-col class="goods-card">
            <el-row class="goods-img">
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                alt=""
              />
            </el-row>
            <el-row class="goods-price">
              <span class="price-num">25</span>元/斤
            </el-row>
            <el-row class="goods-desc">
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
            </el-row>
            <el-row class="goods-address"> 湛江市 </el-row>
          </el-col>
          <el-col class="goods-card">
            <el-row class="goods-img">
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                alt=""
              />
            </el-row>
            <el-row class="goods-price">
              <span class="price-num">25</span>元/斤
            </el-row>
            <el-row class="goods-desc">
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
            </el-row>
            <el-row class="goods-address"> 湛江市 </el-row>
          </el-col>
          <el-col class="goods-card">
            <el-row class="goods-img">
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                alt=""
              />
            </el-row>
            <el-row class="goods-price">
              <span class="price-num">25</span>元/斤
            </el-row>
            <el-row class="goods-desc">
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
            </el-row>
            <el-row class="goods-address"> 湛江市 </el-row>
          </el-col>
          <el-col class="goods-card">
            <el-row class="goods-img">
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                alt=""
              />
            </el-row>
            <el-row class="goods-price">
              <span class="price-num">25</span>元/斤
            </el-row>
            <el-row class="goods-desc">
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
            </el-row>
            <el-row class="goods-address"> 湛江市 </el-row>
          </el-col>
          <el-col class="goods-card">
            <el-row class="goods-img">
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                alt=""
              />
            </el-row>
            <el-row class="goods-price">
              <span class="price-num">25</span>元/斤
            </el-row>
            <el-row class="goods-desc">
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
            </el-row>
            <el-row class="goods-address"> 湛江市 </el-row>
          </el-col>
          <el-col class="goods-card">
            <el-row class="goods-img">
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                alt=""
              />
            </el-row>
            <el-row class="goods-price">
              <span class="price-num">25</span>元/斤
            </el-row>
            <el-row class="goods-desc">
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
            </el-row>
            <el-row class="goods-address"> 湛江市 </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.shop-homepage {
  .shop-homepage-container {
    // background-color: #eee;
    .shop-homepage-introduce {
      padding: 5px;
      background-color: #eee;
      width: 15%;
      .shop-introduce {
        width: 100%;
        background-color: #fff;
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
          font-size: 11px;
          color: #7f767b;
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
      width: 85%;
      padding: 5px;
      background-color: #eee;
      //   box-sizing: border-box;
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
            img {
              width: 100%;
              border-bottom: 1px solid #eee;
            }
          }
          .goods-price {
            padding: 10px 0 10px 10px;
            color: #ff5941;
            span {
              font-size: 20px;
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