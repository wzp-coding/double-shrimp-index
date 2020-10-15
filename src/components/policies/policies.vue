<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>政策法规</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

      <!-- 内容区 -->
      <div class="all">

        <!-- 左侧栏 -->
        <div class="left">

          <!-- 第一栏 -->
          <div class="lsec1">
            <!-- 第一栏左侧轮播图 -->
            <div class="rotationpics">
              <template>
                <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 3" :key="item">
                <h3>{{ item }}</h3>
                </el-carousel-item>
                </el-carousel>
              </template>
            </div>
            <!-- 第一栏右侧文字 -->
            <div class="lsec1rword">
              <ul>
                <div class="lsec1rword0">
                  <div class="lsec1rword1"><li><a href="#">国家统计局：判断中国经济走势要看三个“坐标”</a></li></div>
                  <div class="lsec1rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec1rword0">
                  <div class="lsec1rword1"><li><a href="#">千亿元“大礼包”减在何处？<br>————人社部、住建部官员详解国务院为企业减负新政</a></li></div>
                  <div class="lsec1rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec1rword0">
                  <div class="lsec1rword1"><li><a href="#">聚集养老金“十二进涨”：哪些群体会明显受益</a></li></div>
                  <div class="lsec1rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec1rword0">
                  <div class="lsec1rword1"><li><a href="#">七项指标支撑经济向好 中国经济首季迎“开门红”</a></li></div>
                  <div class="lsec1rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec1rword0">
                  <div class="lsec1rword1"><li><a href="#">数据更积极 向好有根基</a></li></div>
                  <div class="lsec1rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec1rword0">
                  <div class="lsec1rword1"><li><a href="#">《交通运输统计发展纲要解读》</a></li></div>
                  <div class="lsec1rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec1rword0">
                  <div class="lsec1rword1"><li><a href="#">每年减负超千亿元，降低企业负担再出实招</a></li></div>
                  <div class="lsec1rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec1rword0">
                  <div class="lsec1rword1"><li><a href="#">创业是更加积极的就业</a></li></div>
                  <div class="lsec1rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec1rword0">
                  <div class="lsec1rword1"><li><a href="#">详解CPI、PPI环比一降一升</a></li></div>
                  <div class="lsec1rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
              </ul>
            </div>
          </div>

          <!-- 第二栏 《专家》 -->
          <div class="lsec23">
            <!-- 标题区 -->
            <div class="lsec2head">
              <div class="lsec2headl">专家</div>
              <div class="lsec2headr"><a href="#">更多>></a></div>
            </div>
            <!-- 第二栏内容区 -->
            <div class="lsec23rword">
              <ul>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">详解CPI、PPI环比一降一升</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">以国家级经开区转型促进创新驱动发展</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">激发创新活力 服务国家战略</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">专访|《政府工作报告》起草组负责人、国务院研究室副主任苗守宏:《报告》强调要始终一民之所望为施政所向</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">积极营造全社会关心关爱特困人员氛围</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">对中国实现经济增速目标应持有信心————访德国国际问题专家辜学武教授</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">“最尖锐”的总理记者会透露出什么特大信号</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">为经济稳定健康发展提供澎湃动力</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
              </ul>
            </div>         
          </div>
        
          <!-- 第三栏 《媒体》 -->
          <div class="lsec3">
            <!-- 标题区 -->
            <div class="lsec3head">
              <div class="lsec3headl">媒体</div>
              <div class="lsec3headr"><a href="#">更多>></a></div>
            </div>
            <!-- 第三栏内容区 -->
            <div class="lsec23rword">
              <ul>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">国家统计局：判断中国经济走势要看三个“坐标”</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">聚集养老金“十二进涨”：哪些群体会明显受益</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">七项指标支撑经济向好 中国经济首季迎“开门红”</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">每年减负超千亿元，降低企业负担再出实招</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">卷款跑路没那么容易了</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">贫困户年可增收3000元</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">“一把手”是治安第一责任人</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
                <div class="lsec23rword0">
                  <div class="lsec23rword1"><li><a href="#">破除机制障碍 服务人才发展</a></li></div>
                  <div class="lsec23rword2"><li style="list-style-type:none;">2016-04-16</li></div>
                </div>
              </ul>
            </div>          
          </div>

        </div>


        <!-- 右侧栏 -->
        <div class="right">
          <!-- 右侧栏第一栏 -->
          <div class="rsec1">
            <!-- 标题区 -->
            <div class="rsec1head">
              <div class="rsec1headl">专家</div>
            </div>
            <!-- 内容区 -->
            <div class="rsec1rword0">
              <template>
              <div class="rsec1rword">
               <ul>
                <li><strong>·</strong>&nbsp;<a href="#">详解CPI、PPI环比一降一升</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">以国家级经开区转型促进创新驱动发展</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">激发创新活力 服务国家战略</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">《政府工作报告》起草组负责人、国务院研究室副主任苗守宏</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">积极营造全社会关心关爱特困人员氛围</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">对中国实现经济增速目标应持有信心————访德国国际问题专家辜学武教授</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">“最尖锐”的总理记者会透露出什么特大信号</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">为经济稳定健康发展提供澎湃动力</a></li>
               </ul>
              </div>

              <div class="rsec1rword">
               <ul>
                <li><h3 style="coler: black;"><strong>·</strong>&nbsp;<a href="#">4G进村百户村民脱贫路上赛跑</a></h3></li>
                <li><strong>·</strong>&nbsp;<a href="#">赤土花果园：脐橙、甜橙即将进入采摘季</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">湖南麻阳：90后“归雁创客”显身手 做脱贫路</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">精准卖货，他是农产品的“经纪人”</a></li>
                </ul>
              </div>

              <div class="rsec1rword">
               <ul>
                <li><h3 style="coler: black;"><strong>·</strong>&nbsp;<a href="#">中方葡萄成熟时 辛勤果农展笑颜</a></h3></li>
                <li><strong>·</strong>&nbsp;<a href="#">【邵阳市】茶冲村：金秋梨醉人</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">新邵县：益农信息社信息员运营培训圆满收官</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">工作手机银行 “美好家园饭” 倾情服务河南省重</a></li>
                </ul>
              </div>

              <div class="rsec1more">
              </div>
              </template>
            </div>
          </div>

          <!-- 右栏第二栏 -->
          <div class="rsec2">
            <!-- 查看更多 -->
            <div class="rsec2more">
              <a href="#">查看更多</a>
            </div>
            <!-- 内容区 -->
            <div class="rsec1rword0">
              <div class="rsec1rword">
              <ul>
                <li><h3 style="coler: black;"><strong>·</strong>&nbsp;<a href="#">惠农代卖：新手夫妇闯市场，一招</a></h3></li>
                <li><strong>·</strong>&nbsp;<a href="#">独家记忆|乘风破浪的90后姑娘：能成为果农眼</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">80后青年互联网上卖山货，助力家乡脱贫致富！</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">独家记忆|从一筹莫展到订单“接到手软”，这</a></li>
              </ul>
              </div>

              <div class="rsec1rword">
              <ul>
                <li><h3 style="coler: black;"><strong>·</strong>&nbsp;<a href="#">新宁“山鸡哥”李方友：单手开拓</a></h3></li>
                <li><strong>·</strong>&nbsp;<a href="#">惠农网农技专家库俊红：帮农友实现增产增收是</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">躺睡秘籍|惠农小店“拍了拍”你，来做副业吗</a></li>
                <li><strong>·</strong>&nbsp;<a href="#">刘迪敏：大山深处结缘电商，打通贫困山区农产品</a></li>
              </ul>
              </div>
            </div>
          </div>


            <!-- 右栏第三栏 -->
            <div class="rsec3">
              <!-- 查看更多 -->
              <div class="rsec2more">
                <a href="#">查看更多</a>
              </div>
              <!-- 右下按钮区 -->
              <div class="tage">
              <div class="tageson">
                <el-button size="medium" round>专家</el-button>
                <el-button size="medium" round>火参果资源</el-button>
                <el-button size="medium" round>橄榄</el-button>
                <el-button size="medium" round>红豆杉货源</el-button>
                <el-button size="medium" round>火鸡蛋</el-button>
                <el-button size="medium" round>豆芽货源</el-button>
                <el-button size="medium" round>洋葱货源</el-button>
                <el-button size="medium" round>红薯批发</el-button>
                <el-button size="medium" round>黄瓜货源</el-button>
                <el-button size="medium" round>猪货源</el-button>
              </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  </div>
 
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="less" scoped>
body {
  margin: 0;
  padding: 0;
}
a {
    text-decoration: none;
}
div a:hover {
  color: black;
}
li a:hover {
  color: #39b8ed;
}

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
  height: 100%;
}


// 内容区
.all {
  display: flex;
  margin: 25px 10px 25px 10px;
}

// 左栏
.left {
  flex: 75%;
  height: auto;
}

// 右栏
.right {
  flex: 25%;
  display: flex;
  flex-direction: column;
  margin: 0 3px 0 25px;
}
// 第一栏
.lsec1 {
  display: flex;
  height: 280px;
}

// 轮播图
.rotationpics {
  width: 35%;
  height: 200px;
  // background-image: url(img/1.jpg);
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

// 第一栏右栏
.lsec1rword {
  width: 65%;
  margin-left: 30px;
}
.lsec1rword0 {
  width: 516px;
  display: flex;
}
.lsec1rword1 {
  width: 85%;
  margin-left: 8px;
  font-size: 13px;
  line-height: 2.2em;
}
.lsec1rword1 a {
  color: #403a3e;
}
.lsec1rword2 {
  width: 15%;
  font-size: 8px;
  margin: 7px 0 0 5px;
  line-height: 2.1em;
  color: #b3b3b3;
}

// 第二栏
.lsec2 {
  width: 805px;
  margin-top: 20px;
}

// 第二栏标题
.lsec2head {
  width: 805px;
  display: flex;
  background-color: #f7f7f7;
  margin: 40px 3px 0 3px;
  border-bottom: 2px solid #004787;
}
.lsec2headl {
  height: 32px;
  width: 48px;
  background-color: #004787;
  text-shadow: 1px 2px 3px rgba(0,0,0,0.4);
  color: #f7f7f7;
  font-size: 16px;
  padding-top: 12px;
  padding-left: 12px;
  border-bottom: none;
  border-top-left-radius: 4px;     
  border-top-right-radius: 4px; 
}
.lsec2headr {
  margin-top: 10px;
  padding: 3px 15px 3px 680px;
  font-size: 13px;
}
.lsec2headr a{
  color: #7a776e;
}


// 第三栏
.lsec3 {
  width: 805px;
  margin-top: 20px;
  }

// 第三栏标题
.lsec3head {
  width: 805px;
  height: 44px;
  display: flex;
  background-color: #f7f7f7;
  margin: 20px 3px 0 3px;
  border-bottom: 2px solid #004787;
}
.lsec3headl {
  height: 34px;
  width: 48px;
  background-color: #004787;
  color: #f7f7f7;
  font-size: 16px;
  padding-top: 12px;
  padding-left: 14px;
  border-bottom: none;
  border-top-left-radius: 4px;     
  border-top-right-radius: 4px; 
  text-shadow: 1px 2px 3px rgba(0,0,0,0.4);
}
.lsec3headr {
  margin-top: 10px;
  padding: 3px 15px 3px 680px;
  font-size: 13px;
}
.lsec3headr a{
  color: #7a776e;
}


// 第二三栏内容区共用样式
.lsec23rword0 {
  width: 820px;
  margin: 20px 5px 20px 0;
  display: flex;
  // line-height: 1em;
}
.lsec23rword1{
  width: 90%;
  margin-left: 25px;
  font-size: 14px;
}
.lsec23rword1 a {
  color: #403a3e;
}
.lsec23rword2 {
  width: 10%;
  font-size: 9px;
  margin: 7px 0 0 5px;
  color: #b3b3b3;
}



// 右栏上
.rsec1 {
  width: 285px;
  flex: 50%;
  }

// 右栏上标题
.rsec1head {
  width: 285px;
  height: 32px;
  display: flex;
  background-color: #f7f7f7;
  border-bottom: 2px solid #004787;
}
.rsec1headl {
  height: 18px;
  width: 50px;
  background-color: #004787;
  color: #f7f7f7;
  font-size: 16px;
  padding: 6px 15px 8px 20px;
  border-bottom: none;
  border-top-left-radius: 4px;     
  border-top-right-radius: 4px; 
  text-shadow: 1px 2px 3px rgba(0,0,0,0.4);
}

// 右侧栏上
.rsec1rword0 {
  width: 255px;
  margin: 10px 3px 10px 10px;

  flex-direction: column;
}
.rsec1rword {
  font-size: 13px;
  line-height: 2.2em;
  margin-bottom: 20px;
}
.rsec1rword a {
  color: #403a3e;
}
.rsec1rword li {
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}


// 右栏第二栏
.rsec2 {
  width: 285px;
  flex: 25%;
  
}
.rsec2more {
  width: 285px;
  height: 20px;
  font-size: 12px;
  border-bottom: 1px solid #b7b7b5;
}
.rsec2more a{
  float: right;
  color: #b7b7b5;
}


// 右栏第三栏
.rsec3{
  width: 285px;
  flex: 25%;
}
.tage {
  width: 280px;
  margin: 20px 3px 10px 10px;
}
.el-button {
  background-color: rgb(240, 249, 235);
  color: green;
  margin: 0 5px 10px 10px;
}
</style>