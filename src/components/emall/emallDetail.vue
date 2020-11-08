<template>
    <div class="lxl-body">
      <div class="lxl-box">
        <!-- 面包屑导航区域 -->
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          class="lxl-breadcrumb"
        >
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/emall' }">电子商城</el-breadcrumb-item>
          <el-breadcrumb-item @click.native="goLastPage" style="cursor:pointer; font-weight: 700">返回上一级</el-breadcrumb-item>
          <el-breadcrumb-item>商品详情页面</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 商品图片介绍与购买 -->
        <div class="goodsIntroduceArea">
            <el-row :gutter="20">
          <!-- 左侧图片 -->
          <el-col :span="9">
            <div class="block">
              <el-carousel height="300px">
                <el-carousel-item v-for="(item, i) in cateItem.productImages" :key="i">
                  <el-image :src="item"></el-image>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>

          <!-- 右侧介绍 -->
          <el-col :span="15">
            <!-- 标题 -->
            <div>
              <el-tag effect="dark" type="danger" size="mini">优选</el-tag>
              <span class="goodsTitle">{{ cateItem.productTitle }}</span>
            </div>
            <!-- 更新时间 -->
            <div class="updateTime">更新时间：{{ cateItem.productUpdated }}</div>
            <!-- 价格 -->
            <div class="priceBackground">
              <span style="font-size: 14px; color: #aaa">价格</span>
              <span style="font-size: 24px; color: red">{{ cateItem.productPrice }}元</span>
            </div>
            <!-- 发货地址 -->
            <div class="address">
              <span style="color: #aaa">发货地址：</span>
              <span>{{ cateItem.productArea }}</span>
            </div>
            <el-divider></el-divider>
            <!-- 阅读量 -->
            <div>
              <el-row>
                <el-col :span="11" class="numInfo">获赞共<span class="number">{{ cateItem.productStars }}</span>次</el-col>
                <el-col :span="2" class="numInfo">|</el-col>
                <el-col :span="11" class="numInfo">累积评价<span class="number">{{ comment.length }}</span></el-col>
              </el-row>
            </div>
            <el-divider></el-divider>
            <!-- 规格选择 -->
            <!-- <div>
              <el-row>
                <el-col :span="3" style="font-size: 14px">规格选择：</el-col>
                <el-col :span="21" class="classButton">
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                    <el-button plain>朴素按钮</el-button>
                </el-col>
              </el-row>
            </div> -->
            <!-- 购买区域 -->
            <div class="buyButton">
              <el-button style="margin: 10px 20px 0 0" @click="addCart">加入购物车</el-button>
              <el-button type="primary" @click="buy">立即采购</el-button>
            </div>
          </el-col>

        </el-row>
        </div>
        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 商品详情 -->
        <div>
          <el-row>
            <el-col :span="5" class="card">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="font-weight: 700">优选商家</span>
                </div>
                <div class="userInfo">
                  <el-avatar :src="merchant.merchantLogo"></el-avatar>
                  <span style="cursor: pointer;" @click="goToShopDetail">{{ merchant.merchantName }}</span>
                </div>
                <div class="merchantInfo">
                  <div>
                    <span>商家简介：</span>
                    <span>{{ merchant.merchantDesc }}</span>
                  </div>
                  <div>
                    <span>所在地区：</span>
                    <span>{{ merchant.merchantProvince }}{{ merchant.merchantCity }}{{ merchant.merchantTown }}{{ merchant.merchantAddress }}</span>
                  </div>
                  <div>
                    <span>联系电话：</span>
                    <span>{{ merchant.merchantPhone }}</span>
                  </div>
                <div>
                </div>
                </div>
              </el-card>
              <el-card :body-style="{ padding: '5px' }">
                  <div slot="header" class="clearfix">
                    <span>商家还供应</span>
                  </div>
                  <div class="otherCard" v-for="(item, i) in merchantList" :key="i">
                    <img :src="goodsArray[0]" class="image" @click="goToGoodsDetail(item)">
                    <span @click="goToGoodsDetail(item)">{{ item.productTitle | ellipsis}}</span>
                    <div class="otherPrice">￥{{ item.productPrice }}元{{ item.productUnit }}</div>
                  </div>
                </el-card>
            </el-col>

            <!-- 商品详情 -->
            <el-col :span="19">
              <div class="goodsDetail">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                  <el-tab-pane label="商品详情" name="first">
                    <div class="goodsAttibute">
                      <h4 style="
                  margin-right: 5px;
                  border-left: 6px solid #409EFF;
                ">商品属性</h4>
                      <span>品种名：{{ cate.categoryName }}</span>
                      <span>库存： {{ cateItem.productNum }}</span>
                      <!-- <span>用途：食用</span>
                      <span>饲养方式：人工养殖</span> -->
                      <span>产地：{{ cateItem.productArea }}</span>
                      <h4 style="
                  margin-right: 5px;
                  margin-top: 25px;
                  border-left: 6px solid #409EFF;
                ">商品详情</h4>
                    <div class="productIntroduce">{{ cateItem.productTitle }}</div>
                    <el-image v-for="(item, i) in cateItem.productImages" :key="i" :src="item"></el-image>
                    </div>
                    
                  </el-tab-pane>
                  <el-tab-pane label="采购评价" name="second">
                    <div class="comment">
                      <el-divider></el-divider>
                      <el-row>
                        <el-col :span="3">
                          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        </el-col>
                        <el-col :span="21">111</el-col>
                      </el-row>
                    <el-divider></el-divider>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-dialog
          title="加入购物车"
          :visible.sync="cartDialogVisible"
          width="30%">
            <p>是否将该商品加入购物车？</p>
            <span slot="footer" class="dialog-footer">
              <el-button @click="cartDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="addToCart">确 定</el-button>
            </span>
        </el-dialog>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        cateItem: [],
        // 评论
        comment: [],
        // 所属种类
        cate: [],
        goodsArray: [],
        // 商家还供应的商品列表
        merchantList: [],
        // 商家信息
        merchant: [],
        imgUrl: [
            { url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' },
            { url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg' },
            { url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' },
            { url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' },
        ],
        ImgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        activeName: 'first',
        // 是否显示对话框
        flag: false,
        cartDialogVisible: false,
        // 购物车的对象
        cartItem: {
          productId: '',
          userId: '',
          num: 0,
          price: 1,
          picture: '',
          categoryId: ''
        }
      }
    },
    created() {
      this.getItem()
      // 获取评论
      this.getcomment()
      // 获取商家供应商品
      this.getMerchantGoods()
      // 获取商家信息
      this.getMerchant()
    },
    methods: {
      goLastPage() {
        this.$router.go(-1)
      },
      handleClick() {},
      getIndex(imgUrl){
        this.ImgUrl = imgUrl;
      },
      goToGoodsDetail(item) {
        this.$router.push({
          path: '/emallDetail',
          name: 'emallDetail',
          query: item
        })
        window.location.reload()
      },
      goToShopDetail() {
        this.$router.push({
          path: '/shopDetail',
          query: this.merchant
        })
      },
      async getItem() {
        this.cateItem = this.$route.query
        if (typeof this.cateItem.productImages == 'string') {
          this.cateItem.productImages = this.cateItem.productImages.split(",");
        }
        console.log(this.cateItem)
        // 获取品种
        const { data: res } = await this.reqM4Service(
          `/category/${this.cateItem.categoryId}`,
          "",
          "get"
        );
        // console.log(res)
        if (res.code !== 20000) {
          return this.$message.error("获取所属种类信息失败！");
        }
        this.cate = res.data
      },
      async getcomment() {
        const { data: res } = await this.reqM4Service(
          `/comment/${this.cateItem.productId}/1/10`,
          "",
          "get"
        );
        // console.log(res)
        if (res.code !== 20000) {
          return this.$message.error("获取评论信息失败！");
        }
        this.comment = res.data.content
      },
      // 获取商家相关商品
      async getMerchantGoods() {
        const { data: res } = await this.reqM4Service(
          `/product/queryProducts/${this.cateItem.merchantId}/1/3`,
          "",
          "get"
        );
        // console.log(res)
        if (res.code !== 20000) {
          return this.$message.error("获取商家供应商品列表失败！");
        }
        this.merchantList = res.data.content
        this.merchantList.forEach(element => {
          this.goodsArray = element.productImages.split(',')
        });
      },
      // 获取商家信息
      async getMerchant() {
        const { data: res } = await this.reqM4Service(
          `/merchant/${this.cateItem.merchantId}`,
          "",
          "get"
        );
        // console.log(res)
        if (res.code !== 20000) {
          return this.$message.error("获取商家信息失败！");
        }
        this.merchant = res.data
      },
      checkLogin() {
        const tokenStr = window.sessionStorage.getItem('token')
        if(tokenStr) {
          this.flag = true
        } else {
          this.flag = false
          var result = confirm('请先登录！')
          if (result === true) {
            this.$router.push('/login')
          }
        }
      },
      // 购买
      buy() {
        this.checkLogin()
      },
      // 打开加入购物车对话框
      addCart() {
        this.checkLogin()
        if (this.flag == true) {
          console.log(this.flag)
          this.cartDialogVisible = true
        }
      },
      // 加入购物车
      async addToCart() {
        this.cartItem.productId = this.cateItem.productId
        this.cartItem.userId = JSON.parse(window.sessionStorage.getItem('userData')).userId
        this.cartItem.price = this.cateItem.productPrice
        this.cartItem.picture = this.cateItem.productImages[0]
        this.cartItem.categoryId = this.cateItem.categoryId
        const { data: res } = await this.reqM4Service(
          `/cart`,
          this.cartItem,
          "post"
        );
        // console.log(res)
        if (res.code === 20000) {
          this.$message.success('加入购物车成功！')
        }
        this.cartDialogVisible = false
      }
    },
    filters: {
        ellipsis(value) {
          if (!value) return "";
          if (value.length > 25) {
            return value.slice(0, 25) + "...";
          }
          return value;
        }
      }
}
</script>

<style lang="less">
.ccy-drvider {
  margin: 10px 0 7px 0;
}
.lxl-body {
  display: flex;
  justify-content: center;
}
.lxl-breadcrumb {
  margin-top: 25px;
  margin-left: 18px;
  margin-bottom: -10px;
}
.lxl-box {
  width: 1150px;
  margin: 0 auto;
}
.goodsIntroduceArea {
  margin-bottom: 80px;
}
.little_img ul {
    list-style: none;
    li {
        float: left;
        margin-top: 20px;
        margin-right: 10px;
        cursor: pointer;
    }
}
.goodsTitle {
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;
}
.updateTime {
  font-size: 12px;
  color: #aaa;
  margin-top: 5px;
}
.moreButton {
  float: right;
}
.priceBackground {
  width: 100%;
  height: 120px;
  margin-top: 10px;
  background: #ddd;
  span {
    line-height: 120px;
    margin-left: 20px;
  }
}
.address {
  font-size: 14px;
  margin-top: 10px;
}
.numInfo {
  text-align: center;
  color: #aaa;
}
.number {
  color: orange
}
.classButton {
  .el-button {
    width: 170px;
    text-align: center;
    margin-left: 10px;
    margin-top: 10px;
  }
}
.buyButton {
  margin: 30px 0 0 80px;
  .el-button {
    width: 150px;
  }
}
.card {
  .el-card__header {
    padding: 5px 20px;
  }
}
.userInfo {
  height: 40px;
  span {
    vertical-align: middle;
    margin-left: 5px;
  }
}
.otherCard {
  margin-top: 20px;
  .otherPrice {
    color: red;
  }
  .image {
    width: 210px;
    cursor: pointer;
  }
  span {
    cursor: pointer;
  }
}
.goodsDetail {
  .el-tabs {
    margin-left: 20px;
  }
  .el-tabs__item {
    width: 200px;
    text-align: center;
  }
}
.goodsAttibute {
  span {
    display: inline-block;
    width: 200px;
    margin-right: 20px;
    margin-top: 20px;
  }
  .el-image {
    margin-top: 10px;
  }
}
.productIntroduce {
  margin-top: 20px;
  text-indent: 2em;
}
.merchantInfo {
  margin-top: 10px;
  span {
    font-size: 12px;
    color: #aaa;
  }
}
.comment {
  margin-top: 10px;
  margin-left: 20px;
}
.cTitle {
  font-weight: 700;
}
</style>
