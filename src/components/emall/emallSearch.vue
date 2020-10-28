<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/emall' }">电子商城</el-breadcrumb-item>
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
            v-model="input"
            class="searchClass"
            prefix-icon="el-icon-search"
          >
            <div slot="prepend">
              <div class="centerClass">
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
            <el-button slot="append">搜索</el-button>
          </el-input>
        </el-col>
      </el-row>
      <div class="menu">
        <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          v-for="item in menuItem"
          :key="item.id"
        >
          <el-menu-item index="0" disabled class="menuTitle">{{
            item.title
          }}</el-menu-item>
          <el-menu-item index="1">不限</el-menu-item>
          <el-menu-item
            :index="index"
            v-for="(nav, index) in item.navs"
            :key="index"
            >{{ nav }}</el-menu-item
          >
        </el-menu>
      </div>
      <div class="goods">
        <el-row :gutter="20">
          <el-col :span="5" v-for="item in animalCate" :key="item.id">
            <el-image :src="item.img" class="goodsImage" @click="goToGoodsDetail"></el-image>
            <div class="price">
              <span class="sellPrice">{{ item.price }}元/斤</span>
              <span class="totalCount">成交{{ item.total }}万元</span>
            </div>
            <div class="titleArea" @click="goToGoodsDetail">
              <el-tag effect="dark" type="danger" size="mini">优选</el-tag>
              <span class="title">{{ item.title | ellipsis }}</span>
            </div>
            <!-- 地址和图标 -->
            <div>
              <span class="goodsPosition">{{ item.position }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="100"
          background
          layout="prev, pager, next, total, jumper"
          :total="400"
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
            <el-col :span="4"  v-for="item in sameAdvise" :key="item.id">
                <el-image :src="item.img" @click="goToGoodsDetail"></el-image>
            <div class="price">
              <span class="sellPrice">{{ item.price }}元/斤</span>
              <span class="totalCount">成交{{ item.total }}万元</span>
            </div>
            <div class="titleArea" @click="goToGoodsDetail">
              <el-tag effect="dark" type="danger" size="mini">优选</el-tag>
              <span class="title">{{ item.title | ellipsis }}</span>
            </div>
            <!-- 地址和图标 -->
            <div>
              <span class="goodsPosition">{{ item.position }}</span>
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
            <el-col :span="4"  v-for="item in advisePic" :key="item.id">
                <el-image :src="item.img" @click="goToGoodsDetail"></el-image>
            <div class="price">
              <span class="sellPrice">{{ item.price }}元/斤</span>
              <span class="totalCount">成交{{ item.total }}万元</span>
            </div>
            <div class="titleArea" @click="goToGoodsDetail">
              <el-tag effect="dark" type="danger" size="mini">优选</el-tag>
              <span class="title">{{ item.title | ellipsis }}</span>
            </div>
            <!-- 地址和图标 -->
            <div>
              <span class="goodsPosition">{{ item.position }}</span>
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
      input: "",
      select: "",
      menuItem: [
        {
          id: 2,
          title: "品种",
          navs: ["近源新对虾", "日本车虾", "刀额新对虾"],
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
      animalCate: [
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
      currentPage: 0,
      sameAdvise: [
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
        }],
      advisePic: [
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
      ] 
    };
  },
  methods: {
    handleSelect() {},
    handleSizeChange() {},
    handleCurrentChange() {},
    goToGoodsDetail() {
      this.$router.push('/emallDetail')
    }
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 23) {
        return value.slice(0, 23) + "...";
      }
      return value;
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
}
.goodsImage {
  cursor: pointer;
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