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
            <div slot="prepend">
              <div>
                <el-select
                  v-model="select"
                  placeholder="供应"
                  style="width: 90px"
                >
                  <el-option label="餐厅" value="1"></el-option>
                  <el-option label="订单" value="2"></el-option>
                  <el-option label="用户" value="3"></el-option>
                </el-select>
              </div>
            </div>
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
      <!--  -->
      <div class="menu">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          v-for="(item, i) in menuItem"
          :key="i"
        >
          <el-menu-item index="0" disabled class="menuTitle">{{
            item.categoryName
          }}</el-menu-item>
          <el-menu-item
            v-for="(nav, i) in item.children"
            :key="i"
            :index="nav.categoryId"
            >{{ nav.categoryName }}</el-menu-item
          >
        </el-menu>
      </div>
      <!--  -->
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
              <span class="totalCount">成交{{ item.productNum }}万元</span>
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
        productTitle: '',
        level: "10"
      },
      inputForm: {
        productTitle: ''
      },
      select: "",
      defaultActive: "",
      menuItem: [
        {
          categoryId: 2,
          categoryName: "品种",
          children: ["近源新对虾", "日本车虾", "刀额新对虾"],
        },
        { id: 3, title: "饲养方式", navs: ["野生", "人工养植"] },
        {
          id: 4,
          title: "品种",
          navs: ["近源新对虾", "日本车虾", "刀额新对虾"],
        },
        {
          id: 5,
          title: "品种",
          navs: ["近源新对虾", "日本车虾", "刀额新对虾"],
        },
        {
          id: 6,
          title: "品种",
          navs: ["近源新对虾", "日本车虾", "刀额新对虾"],
        },
        {
          id: 7,
          title: "品种",
          navs: ["近源新对虾", "日本车虾", "刀额新对虾"],
        },
      ],
      // 商品列表
      goods: [
        {
          id: 1,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 14.4,
          total: 34.2,
          title: "法国3001带舌猪头,耳大头白，进口猪肉中的“劳力士”",
          position: "郑州",
        },
        {
          id: 2,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 17.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 3,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 17.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 4,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 17.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 5,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 18.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 6,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 18.0,
          total: 44.3,
          title: "测试测试测试测试测试",
          position: "广州东",
        },
        {
          id: 7,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 18.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 8,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 18.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 9,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 18.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 10,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 18.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
      ],
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
      sameRecommend: [
        {
          id: 1,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 14.4,
          total: 34.2,
          title: "法国3001带舌猪头,耳大头白，进口猪肉中的“劳力士”",
          position: "郑州",
        },
        {
          id: 2,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 17.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 3,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 17.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 4,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 17.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 5,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 18.0,
          total: 52.3,
          title: "生态大闸蟹 大闸蟹",
          position: "兴化南",
        },
        {
          id: 6,
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          price: 18.0,
          total: 44.3,
          title: "测试测试测试测试测试",
          position: "广州东",
        },
      ],
      // 最新推荐
      hotRecommend: [
        {
          id: 1,
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          price: 14.4,
          title: "法国3001带舌猪头,耳大头白，进口猪肉中的“劳力士”",
          position: "郑州",
        },
        {
          id: 2,
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          price: 14.4,
          title: "法国3001带舌猪头,耳大头白，进口猪肉中的“劳力士”",
          position: "郑州",
        },
        {
          id: 3,
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          price: 14.4,
          title: "法国3001带舌猪头,耳大头白，进口猪肉中的“劳力士”",
          position: "郑州",
        },
        {
          id: 4,
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          price: 14.4,
          title: "法国3001带舌猪头,耳大头白，进口猪肉中的“劳力士”",
          position: "郑州",
        },
        {
          id: 5,
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          price: 14.4,
          title: "法国3001带舌猪头,耳大头白，进口猪肉中的“劳力士”",
          position: "郑州",
        },
        {
          id: 6,
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          price: 14.4,
          title: "法国3001带舌猪头,耳大头白，进口猪肉中的“劳力士”",
          position: "郑州",
        },
      ],
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
      console.log(this.defaultActive)
      const { data: res } = await this.reqM4Service(
        `/category/${index}`,
        "",
        "get"
      );
      this.$router.push({
        path: "/emallSearch",
        name: "emallSearch",
        query: res.data,
      });

      // window.location.reload();
    },
    bindIndex(Id) {
      this.allId = Id;
    },
    handleCurrentChange(newPage) {
      this.goodsPage = newPage;
      this.getGoods();
    },
    goToGoodsDetail(item) {
      this.$router.push({
        path: "/emallDetail",
        name: "emallDetail",
        query: item,
      });
    },
    async goTo(title) {
      if (title === '') {
        return this.$message.error('请输入搜索内容')
      }
      this.searchInfo.productTitle = this.inputRuleForm.productTitle
      this.goToSearch(this.searchInfo)
    },
    goToSearch(item) {
      this.$router.push({
        path: "/emallSearch",
        name: "emallSearch",
        query: item,
      });
      window.location.reload();
    },
    async getItem() {
      this.cateItem = this.$route.query;
      console.log(this.cateItem);
      // if(this.cateItem instanceof Array) {
      //   // console.log(this.cateItem)
      //   this.defaultActive = this.cateItem[0].categoryId;
      //   this.goods = this.cateItem
      //   this.goodsNum = this.cateItem.length
      //   this.goods.forEach(element => {
      //     element.productImages = element.productImages.split(',')
      //   });
      //   // console.log(this.defaultActive)
      //   // 获取同类推荐
      //   this.getSameRecommend()
      // } else {
      if (this.cateItem.level == 3) {
        const { data: res } = await this.reqM4Service(
          `/category/${this.cateItem.parentId}`,
          "",
          "get"
        );
        if (res.code !== 20000) {
          return this.$message.error("获取所属分类信息失败！");
        }
        // console.log(res)
        this.defaultActive = res.data.categoryId;
        console.log(this.defaultActive)

        this.getGoods();
      } else if (this.cateItem.level == 2) {
        this.defaultActive = this.cateItem.categoryId;
        console.log(this.defaultActive)

        this.getGoods();
        
      } else {
        this.inputForm.productTitle = this.cateItem.productTitle;
        const { data: res } = await this.reqM4Service(
          "/product/search",
          this.inputForm,
          "post"
        );
        if (res.code !== 20000) {
          return this.$message.error("获取商品信息失败！");
        }
        this.goods = res.data;
        this.goodsNum = res.data.length;
        this.defaultActive = res.data[0].categoryId;
        console.log(this.defaultActive)
        this.goods.forEach(element => {
          element.productImages = element.productImages.split(',');
        });
      }
      this.params.categoryId = this.defaultActive;
      // 获取同类推荐
      this.getSameRecommend();
      // }
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
      // console.log(this.menuItem)
    },
    // 获取对应类别商品
    async getGoods() {
      const { data: res } = await this.reqM4Service(
        `/product/search/${this.goodsPage}/25`,
        this.params,
        "post"
      );
      // console.log(res)
      if (res.code !== 20000) {
        return this.$message.error("获取商品信息失败！");
      }
      this.goods = res.data.rows;
      this.goodsNum = res.data.total;
      // console.log(this.goods)
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
      this.sameRecommend = res.data;
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
  .el-menu-item {
    width: 100px;
    height: 40px !important;
    line-height: 40px !important;
    text-align: center;
    margin-right: 10px !important;
    margin-bottom: 10px !important;
  }
  .el-menu-item.is-disabled {
    padding-left: 0;
    color: #39bf3e;
    font-weight: 700;
    text-align: left;
    opacity: 1;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal > .el-menu-item.is-active {
    background: #39bf3e;
    border: none;
    color: #fff;
  }
  .el-menu.el-menu--horizontal {
    border: none;
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