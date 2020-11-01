<template>
  <div class="content lxl-body">
    <div class="lxl-box">
      <div class="Header">
        <!-- 面包屑导航区域 -->
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          class="lxl-breadcrumb"
        >
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item>电子商城</el-breadcrumb-item>
          <el-breadcrumb-item>主页</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 分割线 -->
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
      </div>

      <div class="mainNav">
        <!-- 主页菜单 -->
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="leftNav">
              <div class="navTitle">
                <i class="el-icon-s-order"></i>货品分类
              </div>
              <div class="product_sort fl">
                <div class="bd">
                  <div
                    v-for="(item, i) in cateGory"
                    :key="i"
                    class="item"
                    :class="[item.isParent ? '' : layer]"
                    @mouseover="item.isParent = false"
                    @mouseout="item.isParent = true"
                  >
                    <div class="title one">
                      <a href="javascript:0;">{{ item.categoryName }}</a>
                    </div>
                    <div class="list" v-if="item.children">
                      <span>
                        <a
                          href="javascript:0;"
                          @click="goToSearch(item.children[0])"
                          >{{ item.children[0].categoryName }}</a
                        >
                        <a
                          href="javascript:0;"
                          @click="goToSearch(item.children[1])"
                          >{{ item.children[1].categoryName }}</a
                        >
                      </span>
                    </div>
                    <div class="arrow">&gt;</div>
                    <div class="line"></div>
                    <div class="subitem">
                      <div class="inner">
                        <div
                          v-for="(navItem, index) in item.children"
                          :key="index"
                          class="tit"
                          :class="[index === 0 ? tit1 : '']"
                        >
                          <div class="name">{{ navItem.categoryName }}</div>
                          <ul>
                            <li v-for="(st, i) in navItem.children" :key="i">
                              <a href="javascript:0;" @click="goToSearch(st)">{{
                                st.categoryName
                              }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="19">
            <div class="mainPic">
              <el-image
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=701767331,2238872537&fm=26&gp=0.jpg"
              ></el-image>
            </div>
            <div class="fourPic">
              <el-row :gutter="10">
                <el-col :span="6" v-for="(item, i) in fourPicture" :key="i">
                  <el-image :src="item.src" class="pic-head"></el-image>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 选项卡区域 -->
      <div class="optionCard">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane
            v-for="(item, i) in cateGory"
            :key="i"
            :label="item.categoryName"
            :name="item.categoryName"
          >
            <el-row
              v-for="(childItem, i) in item.children"
              :key="i"
              class="cateRow"
            >
              <div separator="">
                <el-col :span="3" class="fishPaneTitle">
                  <span class="paneTitle">{{ childItem.categoryName }}</span>
                </el-col>
                <el-col :span="21" class="fishPaneSecondTitle">
                  <span
                    v-for="(nav, i) in childItem.children"
                    :key="i"
                    @click="goToSearch(nav)"
                    >{{ nav.categoryName }}</span
                  >
                </el-col>
              </div>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 分割线 -->
      <div class="divider">
        <el-divider></el-divider>
      </div>
      <div>
        <!-- 综合排序区域 -->
        <div class="Area">
          <el-row class="classOne" :gutter="20">
            <el-col :span="4" class="classOneLeft">
              <div class="classOneLeftBaseInfo">
                <h1 class="classOneLeftTitle">综合排序</h1>
                <!-- <span class="classOneLeftInfo">基地直供</span>
                <span>运输包活</span> -->
              </div>
              <!-- 排行榜区域 -->
              <div class="leaderboard">
                <ol>
                  <li @click="goToGoodsDetail(allOrder[0])">
                    <span> {{ allOrder[0].productTitle | ell8 }}</span>
                  </li>
                  <li @click="goToGoodsDetail(allOrder[1])">
                    <span> {{ allOrder[1].productTitle | ell8 }}</span>
                  </li>
                  <li @click="goToGoodsDetail(allOrder[2])">
                    <span> {{ allOrder[2].productTitle | ell8 }}</span>
                  </li>
                  <li @click="goToGoodsDetail(allOrder[3])">
                    <span> {{ allOrder[3].productTitle | ell8 }}</span>
                  </li>
                  <li @click="goToGoodsDetail(allOrder[4])">
                    <span> {{ allOrder[4].productTitle | ell8 }}</span>
                  </li>
                </ol>
              </div>
              <el-button type="warning" round @click="goToSearch(allOrder)"
                >查看更多<i class="el-icon-arrow-right"></i
              ></el-button>
              <!-- 分类区域 -->
              <div class="classButton">
                <el-button
                  v-for="(item, i) in allOrderTabs"
                  :key="i"
                  type="info"
                  round
                  :class="[i === 0 ? firstButton : '']"
                  >{{ item }}</el-button
                >
              </div>
            </el-col>
            <el-col :span="20">
              <el-row :gutter="20">
                <el-col
                  :span="5"
                  v-for="(item, i) in allOrder"
                  :key="i"
                  class="goods"
                >
                  <el-image
                    v-if="item.productImages"
                    :src="item.productImages[0]"
                    @click="goToGoodsDetail(item)"
                  ></el-image>
                  <div class="price">
                    <span class="sellPrice"
                      >{{ item.productPrice }}元{{ item.productUnit }}</span
                    >
                    <span class="totalCount"
                      >成交{{ item.productNum }}万元</span
                    >
                  </div>
                  <div class="titleArea" @click="goToGoodsDetail(item)">
                    <el-tag
                      effect="dark"
                      type="danger"
                      size="mini"
                      v-if="item.productNum > 50"
                      >优选</el-tag
                    >
                    <span class="title">{{
                      item.productTitle | ellipsis
                    }}</span>
                  </div>
                  <!-- 地址和图标 -->
                  <div>
                    <span class="goodsPosition">{{
                      item.productArea | e
                    }}</span>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 点赞区域 -->
      <div class="Area">
        <el-row class="classOne" :gutter="20">
          <el-col :span="4" class="classFruitLeft">
            <div class="classOneLeftBaseInfo">
              <h1 class="classOneLeftTitle">点赞最多</h1>
              <!-- <span class="classOneLeftInfo">产货地源</span>
              <span>一手价格</span> -->
            </div>

            <!-- 排行榜区域 -->
            <div class="leaderboard">
              <ol>
                <li @click="goToGoodsDetail(likeGoodsOrder[0])">
                  <span> {{ likeGoodsOrder[0].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(likeGoodsOrder[1])">
                  <span> {{ likeGoodsOrder[1].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(likeGoodsOrder[2])">
                  <span> {{ likeGoodsOrder[2].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(likeGoodsOrder[3])">
                  <span> {{ likeGoodsOrder[3].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(likeGoodsOrder[4])">
                  <span> {{ likeGoodsOrder[4].productTitle | ell8 }}</span>
                </li>
              </ol>
            </div>
            <el-button type="warning" round @click="goToSearch(likeGoodsOrder)"
              >查看更多<i class="el-icon-arrow-right"></i
            ></el-button>
            <!-- 分类区域 -->
            <div class="classButton">
              <el-button
                v-for="(item, i) in likeGoodsOrderTabs"
                :key="i"
                type="info"
                round
                :class="[i === 0 ? firstButton : '']"
                >{{ item }}</el-button
              >
            </div>
          </el-col>
          <el-col :span="20">
            <el-row :gutter="20">
              <el-col
                :span="5"
                v-for="(item, i) in likeGoodsOrder"
                :key="i"
                class="goods"
              >
                <el-image
                  v-if="item.productImages"
                  :src="item.productImages[0]"
                  @click="goToGoodsDetail(item)"
                ></el-image>
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
                  <span class="title">{{ item.productTitle | ellipsis }}</span>
                </div>
                <!-- 地址和图标 -->
                <div>
                  <span class="goodsPosition">{{ item.productArea | e }}</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <!-- 水产区域 -->
      <div class="Area">
        <el-row class="classOne" :gutter="20">
          <el-col :span="4" class="classSeaLeft">
            <div class="classOneLeftBaseInfo">
              <h1 class="classOneLeftTitle">价格升序</h1>
            </div>
            <!-- 排行榜区域 -->
            <div class="leaderboard">
              <ol>
                <li @click="goToGoodsDetail(priceUpOrder[0])">
                  <span> {{ priceUpOrder[0].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(priceUpOrder[1])">
                  <span> {{ priceUpOrder[1].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(priceUpOrder[2])">
                  <span> {{ priceUpOrder[2].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(priceUpOrder[3])">
                  <span> {{ priceUpOrder[3].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(priceUpOrder[4])">
                  <span> {{ priceUpOrder[4].productTitle | ell8 }}</span>
                </li>
              </ol>
            </div>
            <el-button type="warning" round @click="goToSearch(priceUpOrder)"
              >查看更多<i class="el-icon-arrow-right"></i
            ></el-button>
            <!-- 分类区域 -->
            <div class="classButton">
              <el-button
                v-for="(item, i) in priceUpOrderTabs"
                :key="i"
                type="info"
                round
                :class="[i === 0 ? firstButton : '']"
                >{{ item }}</el-button
              >
            </div>
          </el-col>
          <el-col :span="20">
            <el-row :gutter="20">
              <el-col
                :span="5"
                v-for="(item, i) in priceUpOrder"
                :key="i"
                class="goods"
              >
                <el-image
                  v-if="item.productImages"
                  :src="item.productImages[0]"
                  @click="item;"
                ></el-image>
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
                  <span class="title">{{ item.productTitle | ellipsis }}</span>
                </div>
                <!-- 地址和图标 -->
                <div>
                  <span class="goodsPosition">{{ item.productArea | e }}</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <!-- 农副加工区域 -->
      <div class="Area">
        <el-row class="classOne" :gutter="20">
          <el-col :span="4" class="classFarmLeft">
            <div class="classOneLeftBaseInfo">
              <h1 class="classOneLeftTitle">价格降序</h1>
              <!-- <span class="classOneLeftInfo">货源稳定</span>
              <span>量大优惠</span> -->
            </div>

            <div class="leaderboard">
              <ol>
                <li @click="goToGoodsDetail(priceDownOrder[0])">
                  <span> {{ priceDownOrder[0].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(priceDownOrder[1])">
                  <span> {{ priceDownOrder[1].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(priceDownOrder[2])">
                  <span> {{ priceDownOrder[2].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(priceDownOrder[3])">
                  <span> {{ priceDownOrder[3].productTitle | ell8 }}</span>
                </li>
                <li @click="goToGoodsDetail(priceDownOrder[4])">
                  <span> {{ priceDownOrder[4].productTitle | ell8 }}</span>
                </li>
              </ol>
            </div>
            <el-button type="warning" round @click="goToSearch(priceDownOrder)"
              >查看更多<i class="el-icon-arrow-right"></i
            ></el-button>
            <!-- 分类区域 -->
            <div class="classButton">
              <el-button
                v-for="(item, i) in priceDownOrderTabs"
                :key="i"
                type="info"
                round
                :class="[i === 0 ? firstButton : '']"
                >{{ item }}</el-button
              >
            </div>
          </el-col>
          <el-col :span="20">
            <el-row :gutter="20">
              <el-col
                :span="5"
                v-for="(item, i) in priceDownOrder"
                :key="i"
                class="goods"
              >
                <el-image
                  v-if="item.productImages"
                  :src="item.productImages[0]"
                  @click="goToGoodsDetail(item)"
                ></el-image>
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
                  <span class="title">{{ item.productTitle | ellipsis }}</span>
                </div>
                <!-- 地址和图标 -->
                <div>
                  <span class="goodsPosition">{{ item.productArea | e }}</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <!-- 最新推荐 -->
      <div class="lateAdvice">
        <div>最新推荐</div>
        <!-- 分割线 -->
        <div class="divider">
          <el-divider></el-divider>
        </div>
        <div class="advicePic">
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
                <span class="goodsPosition">{{ item.productArea }}</span>
              </div>
            </el-col>
          </el-row>
        </div>
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
      select: "",
      isActive: [],
      // 搜索信息
      searchInfo: {
        productTitle: "",
        level: "10",
      },
      cateGory: [
        {
          categoryId: 1,
          isActive: false,
          categoryName: "禽畜肉蛋",
          spanTitle: ["肉类", "活禽"],
          children: [
            {
              categoryId: "aaa",
              categoryName: "标题1",
              children: ["沙巴", "新加坡", "菲律宾", "沙巴", "文莱"],
            },
            {
              categoryId: "bbb",
              categoryName: "标题2",
              children: ["沙巴", "新加坡", "菲律宾", "沙巴"],
            },
          ],
        },
        {
          id: 2,
          isActive: false,
          title: "水果",
          spanTitle: ["核果仁果类", "浆果类"],
          navTitle: [
            {
              title: "标题1",
              secondTitle: ["沙巴", "新加坡", "菲律宾", "沙巴", "文莱"],
            },
            {
              title: "标题2",
              secondTitle: ["沙巴", "新加坡", "菲律宾", "沙巴"],
            },
          ],
        },
        {
          id: 3,
          isActive: false,
          title: "蔬菜",
          spanTitle: ["葱姜蒜类", "根茎菜类"],
          navTitle: [
            {
              title: "标题1",
              secondTitle: ["沙巴", "新加坡", "菲律宾", "沙巴", "文莱"],
            },
            {
              title: "标题2",
              secondTitle: ["沙巴", "新加坡", "菲律宾", "沙巴"],
            },
          ],
        },
        {
          id: 4,
          isActive: false,
          title: "农资农机",
          spanTitle: ["农用机械设备", "农药"],
          navTitle: [
            {
              title: "标题1",
              secondTitle: ["沙巴", "新加坡", "菲律宾", "沙巴", "文莱"],
            },
            {
              title: "标题2",
              secondTitle: ["沙巴", "新加坡", "菲律宾", "沙巴"],
            },
          ],
        },
        {
          id: 5,
          isActive: false,
          title: "水产",
          spanTitle: ["淡水鱼类", "蟹类"],
          navTitle: [
            {
              title: "标题1",
              secondTitle: ["沙巴", "新加坡", "菲律宾", "沙巴", "文莱"],
            },
            {
              title: "标题2",
              secondTitle: ["沙巴", "新加坡", "菲律宾", "沙巴"],
            },
          ],
        },
      ],
      // 全部子分类
      childrenOfCateGory: [],
      fish: [
        { title: "水产水苗", children: ["鱼苗", "虾苗"] },
        { title: "特种水产", children: [] },
        {
          title: "贝类",
          children: [
            "珍珠贝",
            "鲍鱼",
            "河蚌",
            "扇贝",
            "蛤蜊",
            "牡蛎",
            "青口",
            "海鲜贝类",
            "淡水贝类",
          ],
        },
        { title: "淡水鱼类", children: ["鲈鱼", "鲤鱼"] },
        { title: "海水鱼类", children: ["带鱼", "黄鱼"] },
      ],
      // 综合排序
      allOrder: [
        {
          productId: 1,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 2,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 3,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 4,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 5,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 6,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 7,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 8,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 9,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 10,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
      ],
      // 综合排序的标签
      allOrderTabs: [],
      // 点赞排序
      likeGoodsOrder: [
        {
          productId: 1,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 2,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 3,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 4,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 5,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 6,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 7,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 8,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 9,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 10,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
      ],
      // 点赞排序的标签
      likeGoodsOrderTabs: [],
      // 价格升序
      priceUpOrder: [
        {
          productId: 1,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 2,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 3,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 4,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 5,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 6,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 7,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 8,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 9,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 10,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
      ],
      // 价格升序的标签
      priceUpOrderTabs: [],
      // 价格降序
      priceDownOrder: [
        {
          productId: 1,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 2,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 3,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 4,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 5,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 6,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 7,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 8,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 9,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
        {
          productId: 10,
          productImages:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          productPrice: 18.0,
          productNum: 52.3,
          productUnit: "/斤",
          productTitle: "生态大闸蟹 大闸蟹",
          productArea: "兴化南",
        },
      ],
      // 价格降序的标签
      priceDownOrderTabs: [],
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
      isActive: false,
      layer: "layer",
      item: "item",
      tit1: "tit1",
      firstButton: "firstButton",
      activeName: "",
      fourPicture: [
        {
          id: 1,
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1353291390,705190916&fm=15&gp=0.jpg",
        },
        {
          id: 2,
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3864243818,1044960970&fm=15&gp=0.jpg",
        },
        {
          id: 3,
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=551329194,4246634910&fm=26&gp=0.jpg",
        },
        {
          id: 4,
          src:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1691171080,1028146513&fm=15&gp=0.jpg",
        },
      ],
    };
  },
  created() {
    this.getAllGoods();
    // 获取分类结构
    this.getQuery();
    // 获取最新推荐
    this.getHotRecommend();
    // 获取综合排序
    this.getAllOrder();
    // 获取点赞排序
    this.getLikeGoodsOrder();
    // 获取价格升序
    this.getPriceUpOrder();
    // 获取价格降序
    this.getPriceDownOrder();
  },
  methods: {
    goToSearch(item) {
      this.$router.push({
        path: "/emallSearch",
        name: "emallSearch",
        query: item,
      });
    },
    goToGoodsDetail(item) {
      this.$router.push({
        path: "/emallDetail",
        name: "emallDetail",
        query: item,
      });
    },
    goTo(title) {
      if (title === "") {
        return this.$message.error("请输入搜索内容");
      }
      this.searchInfo.productTitle = this.inputRuleForm.productTitle;
      this.goToSearch(this.searchInfo);
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
      this.cateGory = res.data;
      console.log(this.cateGory);
      this.activeName = this.cateGory[0].categoryName;
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
    // 获取所有商品
    async getAllGoods() {
      const { data: res } = await this.reqM4Service("/product", "", "get");
      // console.log(res);
    },
    // 获取综合排序
    async getAllOrder() {
      const { data: res } = await this.reqM4Service(
        "/product/commonSort/1/10",
        "",
        "get"
      );
      if (res.code !== 20000) {
        return this.$message.error("获取综合排序信息失败！");
      }
      // console.log(res);
      this.allOrder = res.data.content;
      this.allOrder.forEach((element) => {
        this.allOrderTabs.push(element.productName);
      });
      // 去除标签数组的重复项
      this.allOrderTabs = [...new Set(this.allOrderTabs)];
      this.allOrder.forEach((element) => {
        element.productImages = element.productImages.split(",");
      });
      console.log(this.allOrder);
    },
    // 获取点赞排序
    async getLikeGoodsOrder() {
      const { data: res } = await this.reqM4Service(
        "/product/stars/sort/1/10",
        "",
        "get"
      );
      if (res.code !== 20000) {
        return this.$message.error("获取综合排序信息失败！");
      }
      // console.log(res);
      this.likeGoodsOrder = res.data.content;
      this.likeGoodsOrder.forEach((element) => {
        this.likeGoodsOrderTabs.push(element.productName);
      });
      // 去除标签数组的重复项
      this.likeGoodsOrderTabs = [...new Set(this.likeGoodsOrderTabs)];
      this.likeGoodsOrder.forEach((element) => {
        element.productImages = element.productImages.split(",");
      });
    },
    // 获取价格升序
    async getPriceUpOrder() {
      const { data: res } = await this.reqM4Service(
        "/product/orderByPrice/1/10",
        "",
        "get"
      );
      if (res.code !== 20000) {
        return this.$message.error("获取综合排序信息失败！");
      }
      // console.log(res)
      this.priceUpOrder = res.data.content;
      this.priceUpOrder.forEach((element) => {
        if (element.productName.length < 5) {
          this.priceUpOrderTabs.push(element.productName);
        }
      });
      // 去除标签数组的重复项
      this.priceUpOrderTabs = [...new Set(this.priceUpOrderTabs)];
      this.priceUpOrder.forEach((element) => {
        element.productImages = element.productImages.split(",");
      });
    },
    // 获取价格降序
    async getPriceDownOrder() {
      const { data: res } = await this.reqM4Service(
        "/product/orderByPrice/desc/1/10",
        "",
        "get"
      );
      if (res.code !== 20000) {
        return this.$message.error("获取综合排序信息失败！");
      }
      this.priceDownOrder = res.data.content;
      this.priceDownOrder.forEach((element) => {
        if (element.productName.length < 5) {
          this.priceDownOrderTabs.push(element.productName);
        }
      });
      // 去除标签数组的重复项
      this.priceDownOrderTabs = [...new Set(this.priceDownOrderTabs)];
      this.priceDownOrder.forEach((element) => {
        element.productImages = element.productImages.split(",");
      });
    },
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 21) {
        return value.slice(0, 21) + "...";
      }
      return value;
    },
    e(position) {
      return position || "未知地址";
    },
    ell8(value) {
      if (!value) return "";
      if (value.length > 7) {
        return value.slice(0, 7) + "...";
      }
      return value;
    },
  },
};
</script>
<style  scoped>
*::before,
*::after {
  box-sizing: border-box;
}
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
}
.content {
  width: 1150px;
  margin: 0 auto;
}
.navPic >>> .el-image {
  width: 150px;
  margin-left: 20px;
}
.search {
  margin: 15px 0;
}
.mainNav {
  margin-top: 20px;
}
.leftNav {
  width: 200px;
  height: 550px;
  border-radius: 10px;
  margin-left: 20px;
}
.navTitle {
  background-color: #39bf3e;
  line-height: 40px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #fff;
}
.el-icon-s-order {
  padding: 0 8px 0 15px;
}

.search >>> .el-button {
  width: 100px;
}
.product_sort {
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 90;
}
.product_sort a {
  outline: none;
  text-decoration: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
.product_sort .bd {
  padding-bottom: 10px;
}
.product_sort .bd .item {
  border-bottom: solid 1px #eee;
  height: 60px;
  position: relative;
  margin: 4px 0;
}
.product_sort .bd .item .title {
  width: 226px;
  text-indent: 15px;
  height: 30px;
  overflow: hidden;
  line-height: 42px;
  font-size: 16px;
  color: #292929;
}
.product_sort .bd .item .title a {
  color: #000;
  position: relative;
}
.product_sort .bd .item .one a i {
  width: 19px;
  height: 19px;
  background-position: 0 0;
  left: -25px;
  top: -3px;
}
.product_sort .bd .item .title a i {
  position: absolute;
}
.product_sort .bd .item .list {
  width: 210px;
  padding-left: 15px;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
}
.product_sort .bd .item .list a {
  font-family: "Microsoft YaHei", Arial, sans-serif;
  margin-right: 10px;
  font-size: 14px;
  color: #aaa;
}
.product_sort .bd .item .list a:hover,
a:focus {
  color: #39bf3e;
}
.product_sort .bd .item .list a:hover {
  text-decoration: underline;
}
.product_sort .bd .item .arrow {
  font-family: "Microsoft YaHei", Arial, sans-serif;
  font-size: 20px;
  color: #aaa;
  position: absolute;
  right: 10px;
  top: 14px;
}
.product_sort .bd .item .line {
  position: absolute;
  right: -2px;
  top: 0px;
  width: 2px;
  height: 60px;
  background-color: #fff;
  z-index: 95;
  display: none;
}
.product_sort .bd .item .subitem {
  display: none;
}
.product_sort .bd .layer .line {
  display: block;
}
.product_sort .bd .layer .arrow {
  display: none;
}
.product_sort .bd .layer .subitem {
  width: 731px;
  background: #fff;
  border: solid 1px #39bf3e;
  border-left: none;
  font-family: "Microsoft YaHei", Arial, sans-serif;
  position: absolute;
  left: 212px;
  _left: 228px;
  top: -15px;
  z-index: 95;
  min-height: 60px;
  height: auto !important;
  height: 60px;
  padding: 5px 10px 15px 10px;
  display: block;
}
.product_sort .bd .layer .subitem .inner .tit {
  font-size: 12px;
  text-align: left;
  border-top: 1px dashed #d7d7d7;
  padding: 5px 0;
  line-height: 25px;
}
.product_sort .bd .layer .subitem .inner .tit1 {
  border-top: none;
}
.product_sort .bd .layer .subitem .inner .tit .name {
  display: block;
  width: 90px;
  color: #39bf3e;
  cursor: pointer;
  float: left;
  padding-top: 3px;
}
.product_sort .bd .layer .subitem .inner ul {
  overflow: hidden;
  zoom: 1;
  display: block;
  margin-left: 90px;
  width: 630px;
  height: 30px;
  line-height: 30px;
}
.product_sort .bd .layer .subitem .inner ul li {
  float: left;
  padding: 0 8px;
  height: 25px;
  list-style: none;
}
.product_sort .bd .layer .subitem .inner ul li a {
  color: #222;
  display: block;
}
.product_sort .bd .layer .subitem .inner ul li a:hover {
  color: #39bf3e;
  text-decoration: underline;
}
.paramsTitle {
  color: #000;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}
.el-icon-eleme {
  font-size: 17px;
  padding-right: 5px;
}
.optionCard {
  margin-top: 20px;
}
.optionCard >>> .el-tabs__item {
  width: 127px;
  text-align: center;
}
.cateRow {
  margin-top: 20px;
}
.fishPaneTitle .paneTitle {
  font-weight: 700;
  color: #333;
}
.fishPaneSecondTitle span {
  margin-right: 10px;
  cursor: pointer;
  color: #aaa;
}
.fishPaneSecondTitle span:hover {
  color: #39bf3e;
}
.classOne {
  height: 600px;
}
.classOneLeft {
  background-color: orange;
  color: #fff;
  height: 100%;
}
.classOneLeftBaseInfo {
  padding-left: 20px;
}
.classOneLeftTitle {
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 25px;
}
.classOneLeftInfo {
  margin-right: 10px;
}
.classOneLeft >>> .el-button {
  background: #fff;
  color: #ff9755;
}
.el-button.is-round {
  padding: 7px 15px;
  margin-top: 10px;
}
.place {
  height: 200px;
}
ol,
ul {
  list-style: none;
}
.leaderboard {
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 10px;
}
.leaderboard ol {
  counter-reset: leaderboard;
}
.leaderboard ol li {
  position: relative;
  z-index: 1;
  font-size: 14px;
  counter-increment: leaderboard;
  padding: 18px 10px 18px 50px;
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1, 1);
  transform: translateZ(0) scale(1, 1);
}
.leaderboard ol li::before {
  content: counter(leaderboard);
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #c24448;
  background: #fff;
  border-radius: 20px;
  text-align: center;
}
.leaderboard ol li span {
  z-index: 2;
  width: 100%;
  height: 100%;
  margin: 0;
  background: none;
  color: #fff;
}
.leaderboard ol li small {
  position: relative;
  z-index: 2;
  display: block;
  text-align: right;
}
.leaderboard ol li::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fa6855;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}
.leaderboard ol li:nth-child(1) {
  background: #fa6855;
}
.leaderboard ol li:nth-child(1)::after {
  background: #fa6855;
}
.leaderboard ol li:nth-child(2) {
  background: #e0574f;
}
.leaderboard ol li:nth-child(2)::after {
  background: #e0574f;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);
}
.leaderboard ol li:nth-child(2) span::before,
.leaderboard ol li:nth-child(2) span::after {
  border-top: 6px solid #ba4741;
  bottom: -7px;
}
.leaderboard ol li:nth-child(3) {
  background: #d7514d;
}
.leaderboard ol li:nth-child(3)::after {
  background: #d7514d;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11);
}
.leaderboard ol li:nth-child(3) span::before,
.leaderboard ol li:nth-child(3) span::after {
  border-top: 2px solid #b0433f;
  bottom: -3px;
}
.leaderboard ol li:nth-child(4) {
  background: #cd4b4b;
}
.leaderboard ol li:nth-child(4)::after {
  background: #cd4b4b;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);
}
.leaderboard ol li:nth-child(4) span::before,
.leaderboard ol li:nth-child(4) span::after {
  top: -7px;
  bottom: auto;
  border-top: none;
  border-bottom: 6px solid #a63d3d;
}
.leaderboard ol li:nth-child(5) {
  background: #c24448;
  border-radius: 0 0 10px 10px;
}
.leaderboard ol li:nth-child(5)::after {
  background: #c24448;
  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0 0 10px 10px;
}
.leaderboard ol li:nth-child(5) span::before,
.leaderboard ol li:nth-child(5) span::after {
  top: -9px;
  bottom: auto;
  border-top: none;
  border-bottom: 8px solid #993639;
}
.leaderboard ol li:hover {
  z-index: 2;
  overflow: visible;
}
.leaderboard ol li:hover::after {
  opacity: 1;
  -webkit-transform: scaleX(1.06) scaleY(1.03);
  transform: scaleX(1.06) scaleY(1.03);
}
.leaderboard ol li:hover span::before,
.leaderboard ol li:hover span::after {
  opacity: 1;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.classButton .el-button.is-round {
  padding: 7px 0px;
  width: 75px;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  border: none;
}
.firstButton {
  margin-left: 10px;
}
.el-col-5 {
  width: 20%;
}
.goods {
  margin: 15px 0;
}
.goods >>> .el-image {
  cursor: pointer;
  width: 175px;
  height: 175px;
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
.titleArea >>> .el-tag {
  padding: 0;
  margin-right: 5px;
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
.Area {
  margin-bottom: 20px;
}
.classFruitLeft {
  background: #39bf3e;
  color: #fff;
  height: 100%;
}
.classFruitLeft >>> .el-button {
  background: #fff;
  color: #39bf3e;
  border: none;
}
.classSeaLeft {
  background: #3fbbe7;
  color: #fff;
  height: 100%;
}
.classSeaLeft >>> .el-button {
  background: #fff;
  color: #3fbbe7;
  border: none;
}
.classFarmLeft {
  background: #6e92ff;
  color: #fff;
  height: 100%;
}
.classFarmLeft >>> .el-button {
  background: #fff;
  color: #6e92ff;
  border: none;
}
.lateAdvice {
  margin-top: 40px;
}
.mainPic {
  width: 100%;
  height: 400px;
  background-color: blue;
}
.mainPic >>> .el-image {
  width: 100%;
  height: 400px;
}
.fourPic {
  margin-top: 10px;
  height: 150px;

 
}
 .pic-head {
   height: 150px;
   width: 220px;
  }
</style>