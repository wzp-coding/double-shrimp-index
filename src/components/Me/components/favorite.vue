<template>
  <div class="favorite">
    <div class="favorite-title-head">
      <p class="favorite-title">全部宝贝</p>
      <div>
        <p class="favorite-title" style="color: red">￥2000</p>
        <el-button size="small" plain round>购买</el-button>
      </div>
    </div>
    <div class="favorite-container">
      <div class="lxl-goods">
        <el-table :data="favoriteList" stripe style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="productName" label="商品名" width="180">
          </el-table-column>
          <el-table-column prop="price" label="商品价格" width="180">
          </el-table-column>
          <el-table-column prop="productTitle" label="商品介绍">
          </el-table-column>
          <el-table-column label="移除">
            <template slot-scope="scope">
              <i class="el-icon-delete" @click="delShop(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
        <!-- <el-row :gutter="20">
            <el-col style="width:15rem">
              <el-checkbox v-model="checked">选中</el-checkbox>
            </el-col>
            <el-col :span="3">
              <el-image
                style="width: 60px; height: 60px"
                src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
              ></el-image>
            </el-col>
            <el-col :span="12">{{ item.productName }} </el-col>
            <el-col :span="3">￥{{ item.price }} </el-col>
            <el-col class="lxl-p" :span="36"> {{ item.productTitle }}</el-col>
            <el-col>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
            ></el-col>
            <el-col :span="4">
              <el-input-number
                v-model="item.num"
                @change="handleChange"
                :min="1"
                :max="10"
                label="描述文字"
                size="small"
              >
              </el-input-number>
            </el-col>
            <el-col><i class="el-icon-delete"></i></el-col>
          </el-row> -->
      </div>
    </div>
    <!-- <div class="empty-list" v-if="favoriteList.length === 0">
        暂无收藏的商品
      </div> -->
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
      favoriteList: [
        {
          num: 1,
          picture:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          price: 100,
          productName: "对虾饲料",
          productTitle:
            "国产蒸汽鱼粉，粉末袋装，主要成分是海鱼，含有60％的蛋白质，营养成分丰富，能够明显提高饲料利用率，适用于家禽鸡鸭鹅猪狗宠物虾磅蟹等，增加食欲，降低料耗，营养价值高，增强体质。",
        },
      ],
      num: 1,
      checked: "",
    };
  },
  created() {
    this.getShopByUserId();
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
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
        } else {
          this.$message.error("网络开小差了，请稍后重试 20001");
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
      }
    },
    delShop(shopDetail) {
      console.log(shopDetail)
    },
  },
};
</script>

<style lang="less" scoped>
.lxl-p {
  font-size: 12px;
}
@font-face {
  font-family: electronicFont;
  src: url("../../../fonts/KaneDemo-OVMZO.otf");
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
      font-family: electronicFont;
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