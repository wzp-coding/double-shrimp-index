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
                    v-for="item in goodsCate"
                    :key="item.id"
                    class="item"
                    :class="[item.isActive ? layer : '']"
                    @mouseover="item.isActive = true"
                    @mouseout="item.isActive = false"
                  >
                    <div class="title one">
                      <a href="#"><i></i>{{ item.title }}</a>
                    </div>
                    <div class="list">
                      <span v-for="(st, i) in item.spanTitle" :key="i">
                        <a href="#">{{ st }}</a>
                      </span>
                    </div>
                    <div class="arrow">&gt;</div>
                    <div class="line"></div>
                    <div class="subitem">
                      <div class="inner">
                        <div
                          v-for="(navt, i) in item.navTitle"
                          :key="i"
                          class="tit"
                          :class="[i === 0 ? tit1 : '']"
                        >
                          <div class="name">{{ navt.title }}</div>
                          <ul>
                            <li v-for="(st, i) in navt.secondTitle" :key="i">
                              <a href="#">{{ st }}</a>
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
                src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
              ></el-image>
            </div>
            <div class="fourPic">
              <el-row :gutter="10">
                <el-col :span="6" v-for="item in fourPicture" :key="item.id">
                  <el-image :src="item.src"></el-image>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 选项卡区域 -->
      <div class="optionCard">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="全部分类" name="all">全部分类</el-tab-pane>
          <el-tab-pane label="水果" name="fruits">水果</el-tab-pane>
          <el-tab-pane label="蔬菜" name="vegetables">蔬菜</el-tab-pane>
          <el-tab-pane label="禽畜肉蛋" name="animal">禽畜肉蛋</el-tab-pane>
          <el-tab-pane label="水产" name="fish">
            <el-row v-for="(item, id) in fish" :key="id">
              <el-breadcrumb separator="">
                <el-col :span="3" class="fishPaneTitle">
                  <el-breadcrumb-item :to="{ path: '#' }">{{
                    item.title
                  }}</el-breadcrumb-item>
                </el-col>
                <el-col :span="21" class="fishPaneSecondTitle">
                  <el-breadcrumb-item
                    v-for="(itemChildren, i) in item.children"
                    :key="i"
                    @click="choseItem"
                    >{{ itemChildren }}</el-breadcrumb-item
                  >
                </el-col>
              </el-breadcrumb>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="农副加工" name="farm">农副加工</el-tab-pane>
          <el-tab-pane label="粮油米面" name="food">粮油米面</el-tab-pane>
          <el-tab-pane label="粮油米面" name="seed">种子种苗</el-tab-pane>
          <el-tab-pane label="苗木花草" name="flower">苗木花草</el-tab-pane>
          <el-tab-pane label="农资农机" name="farmChance">农资农机</el-tab-pane>
          <el-tab-pane label="中药材" name="medicine">中药材</el-tab-pane>
          <el-tab-pane label="土地流转" name="land">土地流转</el-tab-pane>
          <el-tab-pane label="包装" name="pack">包装</el-tab-pane>
          <el-tab-pane label="飞防服务" name="fly">飞防服务</el-tab-pane>
          <el-tab-pane label="农工服务" name="farmService"
            >农工服务</el-tab-pane
          >
          <el-tab-pane label="农业防治" name="farmCue">农业防治</el-tab-pane>
          <el-tab-pane label="农业检测" name="farmCheck">农业检测</el-tab-pane>
          <el-tab-pane label="租赁服务" name="rent">租赁服务</el-tab-pane>
        </el-tabs>
      </div>
      <!-- 分割线 -->
      <div class="divider">
        <el-divider></el-divider>
      </div>
      <div>
        <!-- 禽畜肉蛋区域 -->
        <div class="Area">
          <el-row class="classOne" :gutter="20">
            <el-col :span="4" class="classOneLeft">
              <div class="classOneLeftBaseInfo">
                <h1 class="classOneLeftTitle">禽畜肉蛋</h1>
                <span class="classOneLeftInfo">基地直供</span>
                <span>运输包活</span>
                <el-button type="warning" round
                  >查看更多<i class="el-icon-arrow-right"></i
                ></el-button>
              </div>

              <!-- 未知区域 -->
              <div class="place"></div>
              <!-- 分类区域 -->
              <div class="classButton">
                <el-button type="info" round class="firstButton"
                  >肉类</el-button
                >
                <el-button type="info" round>活禽</el-button>
                <el-button type="info" round>禽畜苗</el-button>
                <el-button type="info" round>活畜</el-button>
                <el-button type="info" round>蛋类</el-button>
                <el-button type="info" round>特种类</el-button>
              </div>
            </el-col>
            <el-col :span="20">
              <el-row :gutter="20">
                <el-col
                  :span="5"
                  v-for="item in animalCate"
                  :key="item.id"
                  class="goods"
                >
                  <el-image :src="item.img"></el-image>
                  <div class="price">
                    <span class="sellPrice">{{ item.price }}元/斤</span>
                    <span class="totalCount">成交{{ item.total }}万元</span>
                  </div>
                  <div class="titleArea">
                    <el-tag effect="dark" type="danger" size="mini"
                      >优选</el-tag
                    >
                    <span class="title">{{ item.title | ellipsis }}</span>
                  </div>
                  <!-- 地址和图标 -->
                  <div>
                    <span class="goodsPosition">{{ item.position }}</span>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 水果区域 -->
      <div class="Area">
        <el-row class="classOne" :gutter="20">
          <el-col :span="4" class="classFruitLeft">
            <div class="classOneLeftBaseInfo">
              <h1 class="classOneLeftTitle">水果</h1>
              <span class="classOneLeftInfo">产货地源</span>
              <span>一手价格</span>
              <el-button type="warning" round
                >查看更多<i class="el-icon-arrow-right"></i
              ></el-button>
            </div>

            <!-- 未知区域 -->
            <div class="place"></div>
            <!-- 分类区域 -->
            <div class="classButton">
              <el-button type="info" round class="firstButton"
                >核果仁果类</el-button
              >
              <el-button type="info" round>浆果类</el-button>
              <el-button type="info" round>热带水果类</el-button>
              <el-button type="info" round>柑橘类</el-button>
              <el-button type="info" round>瓜果类</el-button>
            </div>
          </el-col>
          <el-col :span="20">
            <el-row :gutter="20">
              <el-col
                :span="5"
                v-for="item in animalCate"
                :key="item.id"
                class="goods"
              >
                <el-image :src="item.img"></el-image>
                <div class="price">
                  <span class="sellPrice">{{ item.price }}元/斤</span>
                  <span class="totalCount">成交{{ item.total }}万元</span>
                </div>
                <div class="titleArea">
                  <el-tag effect="dark" type="danger" size="mini">优选</el-tag>
                  <span class="title">{{ item.title | ellipsis }}</span>
                </div>
                <!-- 地址和图标 -->
                <div>
                  <span class="goodsPosition">{{ item.position }}</span>
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
              <h1 class="classOneLeftTitle">水产</h1>
              <el-button type="warning" round
                >查看更多<i class="el-icon-arrow-right"></i
              ></el-button>
            </div>

            <!-- 未知区域 -->
            <div class="place"></div>
            <!-- 分类区域 -->
            <div class="classButton">
              <el-button type="info" round class="firstButton"
                >淡水鱼类</el-button
              >
              <el-button type="info" round>蟹类</el-button>
              <el-button type="info" round>贝类</el-button>
              <el-button type="info" round>虾类</el-button>
              <el-button type="info" round>水产种苗</el-button>
              <el-button type="info" round>螺类</el-button>
              <el-button type="info" round>特产水产</el-button>
              <el-button type="info" round>海水鱼类</el-button>
            </div>
          </el-col>
          <el-col :span="20">
            <el-row :gutter="20">
              <el-col
                :span="5"
                v-for="item in animalCate"
                :key="item.id"
                class="goods"
              >
                <el-image :src="item.img"></el-image>
                <div class="price">
                  <span class="sellPrice">{{ item.price }}元/斤</span>
                  <span class="totalCount">成交{{ item.total }}万元</span>
                </div>
                <div class="titleArea">
                  <el-tag effect="dark" type="danger" size="mini">优选</el-tag>
                  <span class="title">{{ item.title | ellipsis }}</span>
                </div>
                <!-- 地址和图标 -->
                <div>
                  <span class="goodsPosition">{{ item.position }}</span>
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
              <h1 class="classOneLeftTitle">农副加工</h1>
              <span class="classOneLeftInfo">货源稳定</span>
              <span>量大优惠</span>
              <el-button type="warning" round
                >查看更多<i class="el-icon-arrow-right"></i
              ></el-button>
            </div>

            <!-- 未知区域 -->
            <div class="place"></div>
            <!-- 分类区域 -->
            <div class="classButton">
              <el-button type="info" round class="firstButton">坚果</el-button>
              <el-button type="info" round>休闲速食品</el-button>
              <el-button type="info" round>水产加工</el-button>
              <el-button type="info" round>肉制品加工</el-button>
              <el-button type="info" round>干果</el-button>
              <el-button type="info" round>蔬菜加工</el-button>
              <el-button type="info" round>茶叶</el-button>
              <el-button type="info" round>传统滋补</el-button>
            </div>
          </el-col>
          <el-col :span="20">
            <el-row :gutter="20">
              <el-col
                :span="5"
                v-for="item in animalCate"
                :key="item.id"
                class="goods"
              >
                <el-image :src="item.img"></el-image>
                <div class="price">
                  <span class="sellPrice">{{ item.price }}元/斤</span>
                  <span class="totalCount">成交{{ item.total }}万元</span>
                </div>
                <div class="titleArea">
                  <el-tag effect="dark" type="danger" size="mini">优选</el-tag>
                  <span class="title">{{ item.title | ellipsis }}</span>
                </div>
                <!-- 地址和图标 -->
                <div>
                  <span class="goodsPosition">{{ item.position }}</span>
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
              v-for="item in advisePic"
              :key="item.id"
              class="goods"
            >
              <el-image :src="item.img"></el-image>
              <div class="price">
                <span class="sellPrice">{{ item.price }}元/斤</span>
              </div>
              <div class="titleArea">
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
      goodsCate: [
        {
          id: 1,
          isActive: false,
          title: "禽畜肉蛋",
          spanTitle: ["肉类", "活禽"],
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
        {
          id: 6,
          isActive: false,
          title: "农副加工",
          spanTitle: ["坚果", "休闲速食品"],
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
          id: 7,
          isActive: false,
          title: "粮油米面",
          spanTitle: ["谷类作物", "油料作物"],
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
          id: 8,
          isActive: false,
          title: "种子种苗",
          spanTitle: ["水果种苗", "蔬菜种子"],
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
      ],
      isActive: false,
      layer: "layer",
      item: "item",
      tit1: "tit1",
      activeName: "",
      fourPicture: [
        {
          id: 1,
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          id: 2,
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          id: 3,
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          id: 4,
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
      ],
    };
  },
  methods: {
    choseItem() {},
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
<style scoped>
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
.searchClass {
  border: 2px solid #39bf3e;
  border-radius: 20px;
  background: #f4f4f4;
}
.searchClass >>> .el-input-group__prepend {
  border: none;
  background-color: transparent;
  padding: 0 10px 0 15px;
  color: #333;
}
.searchClass >>> .el-input-group__append {
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #39bf3e;
  color: #fff;
}
.searchClass >>> .el-input__inner {
  height: 36px;
  line-height: 36px;
  border: none;
  background-color: transparent;
}
.searchClass >>> .el-icon-search {
  font-size: 20px;
}
.searchClass >>> .centerClass {
  height: 100%;
  line-height: 100%;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
}
.searchClass >>> .line {
  width: 1px;
  height: 26px;
  background-color: #c5c5c5;
  margin-left: 14px;
}
.searchClass:hover >>> .line {
  background-color: #d5e3e8;
}
.searchClass:hover >>> .el-icon-search {
  color: #409eff;
  font-size: 16px;
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
  text-indent: 20px;
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
.fishPaneTitle >>> .el-breadcrumb__item:last-child .el-breadcrumb__inner {
  font-weight: 700;
  color: #000;
}
.fishPaneTitle >>> .el-breadcrumb__item .el-breadcrumb__inner:active {
  color: #39bf3e;
}
.fishPaneSecondTitle >>> .el-breadcrumb__item .el-breadcrumb__inner,
.fishPaneSecondTitle >>> .el-breadcrumb__item:last-child .el-breadcrumb__inner {
  cursor: pointer;
}
.fishPaneSecondTitle >>> .el-breadcrumb__item .el-breadcrumb__inner:hover {
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
  background: #fff;
  margin: 5px 10px;
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
.centerClass >>> .el-select {
  border-radius: 12px;
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
}
</style>