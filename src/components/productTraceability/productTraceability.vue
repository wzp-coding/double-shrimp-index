<template>
  <div class="s-foot lxl-body">
    <div class="lxl-box">
      <div>
        <div class="demo-image__placeholder">
          <div class="ljc-img">
            <div class="ljc-imgs">
              <div>
                <el-image
                  class="ljc-image"
                  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2996214293,1686881207&fm=26&gp=0.jpg"
                ></el-image>
                <el-image
                  class="ljc-image"
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2811493416,3498467370&fm=26&gp=0.jpg"
                ></el-image>
                <el-image
                  class="ljc-image"
                  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2580755058,304570169&fm=26&gp=0.jpg"
                ></el-image>
              </div>
              <div>
                <el-image
                  class="ljc-image"
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2522888179,1460929736&fm=26&gp=0.jpg"
                ></el-image>
                <el-image
                  class="ljc-image"
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1199888204,3885688818&fm=26&gp=0.jpg"
                ></el-image>
                <el-image
                  class="ljc-image"
                  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1525733984,3023991847&fm=26&gp=0.jpg"
                ></el-image>
              </div>
            </div>
            <div class="lxl-clu">
              <div class="ljc-text">
                食品安全连万家<br />
                溯源惠及你我他
              </div>
              <div class="search-wrapper active">
                <div class="input-holder">
                  <input
                    type="text"
                    class="search-input"
                    placeholder="请输入溯源码"
                    v-model="source"
                  />
                  <button class="search-icon" @click="toDetail()">
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-row justify align class="ljc-body">
        <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="contain">
            <img src="http://www.zhenyuanma.com/img/zymsyy.png" alt="" />
            <h3>真源码溯源云</h3>
            <p>溯源云扶贫平台，从源头保障产品的安全，让消费者更放心。</p>
          </div>
        </el-col>
        <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="contain">
            <img src="http://www.zhenyuanma.com/img/zhny.png" alt="" />
            <h3>智慧渔业物联网</h3>
            <p>
              支持按需添加物联网模块：温度、海拔、湿度、风力、水质、土然、灌溉水源流量、水位等物联网模块支持自定义添加。
            </p>
          </div>
        </el-col>
        <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="contain">
            <img src="http://www.zhenyuanma.com/img/ytzb.png" alt="" />
            <h3>源头直播摄像机</h3>
            <p>
              自主研发，是安防监控也是网红农货营销工具打开手机，随时看基地以及顾客访问记录顾客留言。客户看得见的真源头直播。支持24小时直播，真实货源看得见。支持分享摄像机画面给亲人给客户。
            </p>
          </div>
        </el-col>
        <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="contain">
            <img src="http://www.zhenyuanma.com/img/dkgl.png" alt="" />
            <h3>地块管理</h3>
            <p>
              采用最先进的深度学习技术，在高分辨率遥感影像上，根据耕地的纹理、种类等特征，实时地确定地块位置、识别地块分界、测算地块和种植面积，并在云端存储。
            </p>
          </div>
        </el-col>
        <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="contain">
            <img src="http://www.zhenyuanma.com/img/nydsj.png" alt="" />
            <h3>渔业大数据</h3>
            <p>
              智慧农业大数据平台高效的将自然环境数据与种植数据根据季节和生长周期进行融合计算。
            </p>
          </div>
        </el-col>
        <el-col :span="8" :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="contain">
            <img src="http://www.zhenyuanma.com/img/fch.png" alt="" />
            <h3>防串货</h3>
            <p>
              对产品的流通进行有效的监管，帮助厂家进行销售区域的管理和跟踪查看。
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "../../assets/xia.jpg",
      // 溯源码
      source: "1304076717681414144",
    };
  },
  created() {},
  methods: {
    // 详情页
    async toDetail() {
      // try {
        const { data: res } = await this.reqM1Service(
          "/traceability/adultShrimp/traceability/" + this.source,
          {},
          "get"
        );
        console.log(res);
        if (res.code === 20000) {
          this.$message.success(res.message);
          // 将溯源码存入
          window.localStorage.setItem("adultShrimp", JSON.stringify(res.data));
          this.$router.push("/traceabilityDetails");
        } else {
          return this.$message.error("查询错误！！");
        }
      // } catch (error) {
        // this.$message.error("网络开小差了，请稍后尝试！！");
      // }
    },
  },
};
</script>
<style lang="less" scoped>
.s-foot {
  display: flex;
  justify-content: center;
  .lxl-box {
    width: 1150px;
  }
}
.ljc-img {
  height: 100%;
  width: 1150px;
  background-image: linear-gradient(to right, rgb(208, 204, 241) , rgb(189, 234, 252));
  // background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn037.yun-img.com%2Fstatic%2Fupload%2Fdfgly%2Fteam%2F20180829092258_46735.jpg&refer=http%3A%2F%2Fcdn037.yun-img.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619192580&t=c2abc3eae01badbe8e76245c400f6f4b");
  height: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  .ljc-text {
    color: rgb(255, 255, 255);
    font-size: 4rem;
    margin-top: -800px;
    margin-left: 540px;
  }
  .ljc-imgs {
    display: flex;
    flex-direction: row;

    div {
      margin: 10px;
      margin-top: 35px;
      display: inherit;
      flex-direction: column;
      align-items: center;
    }
  }
  .lxl-clu {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.ljc-image {
  width: 180px;
  height: 180px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30%;
  opacity: 0.9;
}
.ljc-body {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
/*搜索框*/
.contain {
  width: 300px;
  margin: 0 15px;
  padding: 0 15px;
  img {
    width: 96px;
    height: 96px;
    margin-top: 25px;
  }
  h3 {
    margin: 10px 0px;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
    max-width: 335px;
    color: #333;
  }
}
.search-wrapper {
  position: absolute;
  margin-left: 550px;
  margin-top: -200px;
}
.search-wrapper .input-holder {
  height: 70px;
  width: 70px;
}
.search-wrapper.active .input-holder {
  width: 450px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
}
.search-wrapper .input-holder .search-input {
  width: 100%;
  height: 50px;
  padding: 0px 70px 0 20px;
  position: absolute;
  top: 0px;
  left: 0px;
  background: transparent;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(255, 255, 255);
  transform: translate(0, 60px);
  transition: all 0.3s cubic-bezier(0, 0.105, 0.035, 1.57);
  transition-delay: 0.3s;
}
.search-wrapper.active .input-holder .search-input {
  opacity: 1;
  transform: translate(0, 10px);
}
.search-wrapper .input-holder .search-icon {
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 6px;
  background: #fff;
  padding: 0px;
  outline: none;
  position: relative;
  z-index: 2;
  float: right;
  cursor: pointer;
}
.search-wrapper.active .input-holder .search-icon {
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 30px;
}
.search-wrapper .input-holder .search-icon span {
  width: 22px;
  height: 22px;
  display: inline-block;
}
.search-wrapper.active .input-holder .search-icon span {
  transform: rotate(-45deg);
}
.search-wrapper .input-holder .search-icon span::before,
.search-wrapper .input-holder .search-icon span::after {
  position: absolute;
  content: "";
}
.search-wrapper .input-holder .search-icon span::before {
  width: 4px;
  height: 11px;
  left: 9px;
  top: 18px;
  border-radius: 2px;
  background: #4ecb5f;
}
.search-wrapper .input-holder .search-icon span::after {
  width: 14px;
  height: 14px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  border: 4px solid #4ecb5f;
}
</style>