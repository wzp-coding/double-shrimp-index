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
        <div class="lxl-good" v-for="item in 5" :key="item">
          <el-row :gutter="20">
            <el-col :span="3">
              <el-checkbox v-model="checked">选中</el-checkbox>
            </el-col>
            <el-col :span="3">{{ item }}</el-col>
            <el-col :span="3">
              <el-image
                style="width: 60px; height: 60px"
                src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
              ></el-image>
            </el-col>
            <el-col :span="4">name </el-col>
            <el-col :span="4">￥1231 </el-col>
            <el-col class="lxl-p">
              暂无收藏的商品暂无收藏的商无收藏的藏的商品</el-col
            >
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
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="10"
                label="描述文字"
                size="small"
              >
              </el-input-number>
            </el-col>
            <el-col><i class="el-icon-delete"></i></el-col>
          </el-row>
        </div>
      </div>
      <!-- <div class="empty-list" v-if="favoriteList.length === 0">
        暂无收藏的商品
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      favoriteList: [],
      num: 1,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
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