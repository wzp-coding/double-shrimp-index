<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/emall' }"
          >电子商城</el-breadcrumb-item
        >
        <el-breadcrumb-item>查询页面</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <!-- 搜索栏区域 -->
      <el-row :gutter="20">
        <!-- 左侧图片 -->
        <el-col :span="7" class="navPic">
          <el-image src=""></el-image>
        </el-col>
        <!-- 搜索框 -->
        <el-col :span="15" class="search">
          <el-input
            placeholder="搜索您要的货品"
            v-model="inputRuleForm.productTitle"
            prefix-icon="el-icon-search"
          >
            <div slot="append">
              <el-button
                @click="goTo(inputRuleForm.productTitle)"
                icon="el-icon-search"
                >搜索</el-button
              >
            </div>
          </el-input>
        </el-col>
      </el-row>
      <div class="menu" v-loading="loading">
        <el-row :gutter="20" v-for="(item, i) in menuItem" :key="i">
          <el-col :span="3">
            <el-button type="primary" @click="handleSelect(item.categoryId)">
              {{ item.categoryName }}</el-button
            >
          </el-col>
          <el-col :span="21">
            <el-button
              type="success"
              plain
              v-for="(nav, i) in item.children"
              :key="i"
              @click="handleSelect(nav.categoryId)"
              >{{ nav.categoryName }}</el-button
            >
          </el-col>
        </el-row>
      </div>
      <div class="goods">
        <el-row :gutter="20">
          <el-col :span="5" v-for="(item, i) in goods" :key="i">
            <el-image
              v-if="item.productImages"
              :src="item.productImages[0]"
              class="goodsImage"
              @click="goToGoodsDetail(item)"
            >
              <div slot="error" class="image-slot">
                <el-image
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg"
                ></el-image>
              </div>
            </el-image>
            <div class="price">
              <span class="sellPrice"
                >{{ item.productPrice }}元{{ item.productUnit }}</span
              >
              <span class="totalCount">库存：{{ item.productNum }}</span>
            </div>
            <div class="titleArea" @click="goToGoodsDetail(item)">
              <el-tag
                effect="dark"
                type="danger"
                size="mini"
                v-if="item.productNum > 50"
                >优选</el-tag
              >
              <span class="title">{{ item.productTitle | goodsName }}</span>
            </div>
            <!-- 地址和图标 -->
            <div>
              <span class="goodsPosition">{{ item.productArea | e }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="25"
          background
          layout="prev, pager, next, total, jumper"
          :total="goodsNum"
        >
        </el-pagination>
      </div>
      <!-- 同类推荐区域 -->
      <div class="sameAdvise">
        <el-card class="sameAdvise-card">
          <div slot="header" class="clearfix">
            <span>同类推荐</span>
          </div>
          <el-row :gutter="20">
            <el-col :span="4" v-for="item in sameRecommend" :key="item.id">
              <el-image
                v-if="item.productImages"
                :src="item.productImages[0]"
                class="goodsImage"
                @click="goToGoodsDetail(item)"
              >
                <div slot="error" class="image-slot">
                  <el-image
                    src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg"
                  ></el-image>
                </div>
              </el-image>
              <div class="price">
                <span class="sellPrice"
                  >{{ item.productPrice }}元{{ item.productUnit }}</span
                >
              </div>
              <div class="titleArea" @click="goToGoodsDetail(item)">
                <el-tag effect="dark" type="danger" size="mini">优选</el-tag>
                <span class="title">{{ item.productTitle | ellipsis }}</span>
              </div>
              <!-- 地址和图标 -->
              <div>
                <span class="goodsPosition">{{ item.productArea | e }}</span>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <!-- 最新推荐 -->
      <div class="sameAdvise">
        <el-card class="sameAdvise-card">
          <div slot="header" class="clearfix">
            <span>最新推荐</span>
          </div>
          <el-row :gutter="20">
            <el-col
              :span="4"
              v-for="(item, i) in hotRecommend"
              :key="i"
              class="goods"
            >
              <el-image
                v-if="item.productImages"
                :src="item.productImages[0]"
                @click="goToGoodsDetail(item)"
              >
                <div slot="error" class="image-slot">
                  <el-image
                    src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=386535230,3956809074&fm=26&gp=0.jpg"
                  ></el-image>
                </div>
              </el-image>
              <div class="price">
                <span class="sellPrice"
                  >{{ item.productPrice }}元{{ item.productUnit }}</span
                >
              </div>
              <div class="titleArea" @click="goToGoodsDetail(item)">
                <el-tag effect="dark" type="danger" size="mini">优选</el-tag>
                <span class="title">{{ item.productTitle | ellipsis }}</span>
              </div>
              <!-- 地址和图标 -->
              <div>
                <span class="goodsPosition">{{ item.productArea | e }}</span>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 加载
      loading: true,
      loading2: true,
      inputRuleForm: {
        productTitle: "",
      },
      // 输入框验证规则
      inputRules: {
        productTitle: [
          { required: true, message: "搜索内容不能为空", trigger: "blur" },
        ],
      },
      cateItem: [],
      input: "",
      // 搜索信息
      searchInfo: {
        productTitle: "",
        level: "10",
      },
      inputForm: {
        productTitle: "",
      },
      select: "",
      defaultActive: "",
      menuItem: [],
      // 商品列表
      goods: [],
      // 商品数目
      goodsNum: 0,
      // 商品页码
      goodsPage: 1,
      // 用于查询分类商品总数的对象
      params: {
        categoryId: "",
      },
      // 二级分类的Id
      allId: 0,
      currentPage: 0,
      // 同类推荐
      sameRecommend: [],
      // 最新推荐
      hotRecommend: [],
    };
  },
  created() {
    this.getQuery();
    this.getItem();
    // 获取最新推荐
    this.getHotRecommend();
  },
  methods: {
    searchGoods() {},
    async handleSelect(index) {
      this.defaultActive = index;
      const { data: res } = await this.reqM4Service(
        `/category/${index}`,
        "",
        "get"
      );
      // console.log(res)
      this.$router.push({
        path: "/emallSearch",
        name: "emallSearch",
        query: res.data,
      });
      this.getItem();
      // 获取最新推荐
      this.getHotRecommend();
      // window.location.reload();
    },
    bindIndex(Id) {
      this.allId = Id;
    },
    handleCurrentChange(newPage) {
      this.goodsPage = newPage;
      this.getItem();
    },
    goToGoodsDetail(item) {
      this.$router.push({
        path: "/emallDetail",
        name: "emallDetail",
        query: item,
      });
    },
    async goTo(title) {
      this.searchInfo.productTitle = this.inputRuleForm.productTitle;
      this.goToSearch(this.searchInfo);
    },
    goToSearch(item) {
      this.$router.push({
        path: "/emallSearch",
        name: "emallSearch",
        query: item,
      });
      this.getItem();
      // 获取最新推荐
      this.getHotRecommend();
    },
    async getItem() {
      this.cateItem = this.$route.query;
      // console.log(this.cateItem);
      if (this.cateItem.level == 3) {
        this.defaultActive = this.cateItem.parentId;
        // console.log(this.defaultActive)
        this.params.categoryId = this.defaultActive;
        this.getGoods();
      } else if (this.cateItem.level == 2 || this.cateItem.level == 1) {
        this.defaultActive = this.cateItem.categoryId;
        console.log(this.defaultActive);
        this.params.categoryId = this.defaultActive;
        this.getGoods();
      } else {
        this.inputForm.productTitle = this.cateItem.productTitle;
        const { data: res } = await this.reqM4Service(
          `/product/search/${this.goodsPage}/25`,
          this.inputForm,
          "post"
        );
        if (res.code !== 20000) {
          return this.$message.error("获取商品信息失败！");
        }
        console.log(res)
        if (res.data.total !== 0) {
          this.goods = res.data.rows;
        // console.log(this.goods)
          this.goodsNum = res.data.total;
          this.defaultActive = res.data.rows[0].categoryId;
          this.goods.forEach((element) => {
            element.productImages = element.productImages.split(",");
          });
        } else {
          this.$message.error('查无结果！')
        }
        this.loading2 = false
      }
      this.params.categoryId = this.defaultActive;
      // 获取同类推荐
      this.getSameRecommend();
    },
    // 获取前台树形结构
    async getQuery() {
      const { data: res } = await this.reqM4Service(
        "/category/queryAll",
        "",
        "get"
      );
      // console.log(res)
      if (res.code !== 20000) {
        return this.$message.error("获取分类信息失败！");
      }
      this.menuItem = res.data;
      this.loading = false;
      // console.log(this.menuItem)
    },
    // 获取对应类别商品
    async getGoods() {
      const { data: res } = await this.reqM4Service(
        `/product/queryBycategoryId/${this.defaultActive}/${this.goodsPage}/25`,
        "",
        "get"
      );
      console.log(res);
      if (res.code !== 20000) {
        return this.$message.error("获取商品信息失败！");
      }
      this.goods = res.data.rows;
      this.goodsNum = res.data.total;
      console.log(this.goods);
      this.goods.forEach((element) => {
        element.productImages = element.productImages.split(",");
      });
    },
    // 获取最新推荐
    async getHotRecommend() {
      const { data: res } = await this.reqM4Service(
        "/product/stars/sort/1/6",
        "",
        "get"
      );
      // console.log(res)
      if (res.code !== 20000) {
        return this.$message.error("获取最新推荐信息失败！");
      }
      this.hotRecommend = res.data.content;
      this.hotRecommend.forEach((element) => {
        element.productImages = element.productImages.split(",");
      });
    },
    // 获取同类推荐
    async getSameRecommend() {
      const { data: res } = await this.reqM4Service(
        `/product/queryBycategoryId/${this.defaultActive}/1/6`,
        "",
        "get"
      );
      // console.log(res)
      if (res.code !== 20000) {
        return this.$message.error("获取同类推荐信息失败！");
      }
      this.sameRecommend = res.data.rows;
      this.sameRecommend.forEach((element) => {
        element.productImages = element.productImages.split(",");
      });
    },
  },

  filters: {
    // 商品列表过滤器
    goodsName(value) {
      if (!value) return "";
      if (value.length > 28) {
        return value.slice(0, 28) + "...";
      }
      return value;
    },
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 20) {
        return value.slice(0, 20) + "...";
      }
      return value;
    },
    e(position) {
      return position || "未知地址";
    },
  },
};
</script>

<style lang="less">
.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
}
.lxl-box {
  width: 1150px;
  margin: 0 auto;
}
.navPic {
  .el-image {
    width: 150px;
    margin-left: 20px;
  }
}
.search {
  margin: 15px 0;
}
.el-icon-s-order {
  padding: 0 8px 0 15px;
}
.searchClass {
  border: 2px solid #39bf3e;
  border-radius: 20px;
  .el-input-group__prepend {
    border: none;
    background-color: transparent;
    padding: 0 10px 0 15px;
    color: #333;
  }
  .el-input-group__append {
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #39bf3e;
    color: #fff;
  }
  .el-input__inner {
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: transparent;
  }
  .el-icon-search {
    font-size: 20px;
  }
  .centerClass {
    height: 100%;
    line-height: 100%;
    display: inline-block;
    vertical-align: middle;
    text-align: right;
  }
  .line {
    width: 1px;
    height: 26px;
    margin-left: 14px;
  }
}
.searchClass:hover {
  .line {
    background-color: #d5e3e8;
  }
  .el-icon-search {
    color: #409eff;
    font-size: 16px;
  }
}
.search {
  .el-button {
    width: 100px;
  }
}
.menu {
  margin-top: 30px;
  .el-row {
    margin-bottom: 20px;
  }
}
.el-col-5 {
  width: 20% !important;
}
.goods {
  margin: 15px 0;
  .el-image {
    cursor: pointer;
    width: 100%;
    height: 175px;
  }
  .el-col {
    margin-top: 15px;
  }
}
.goodsImage {
  cursor: pointer;
  width: 100%;
  height: 120px;
}
.sellPrice {
  color: red;
  font-size: 15px;
  margin-left: 5px;
}
.totalCount {
  font-size: 10px;
  float: right;
  line-height: 20px;
  color: #aaa;
}
.titleArea {
  height: 42px;
  margin-bottom: 10px;
}
.titleArea {
  .el-tag {
    padding: 0;
    margin-right: 5px;
  }
}
.title {
  font-size: 14px;
  cursor: pointer;
}
.goodsPosition {
  float: right;
  font-size: 10px;
  color: #aaa;
}
.pagination {
  text-align: center;
  margin: 20px 0;
  .el-pagination.is-background .el-pager li:not(.disabled).active,
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    background-color: #39bf3e;
  }
}
.sameAdvise {
  .el-card__header {
    background: #eee;
  }
  margin-top: 20px;
}
</style>