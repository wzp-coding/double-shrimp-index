<template>
  <div id="main">
    <div class="top">
      <el-breadcrumb separator-class="el-icon-d-arrow-right" >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>产业咨询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="left" >   <!--左大部分-->
      <div class="header" >
        <div class="pictop" >
          <div class="block1">
            <el-image :src="src" ></el-image>
          </div>
          <div class="block2">
            <el-image class="pic1" :src="src" >          
            </el-image>
            <el-image class="pic2" :src="src" >  
            </el-image>
          </div>
        </div>
        <div class="topright" >
          <h3 style="display:inline"><span style="border-left:6px solid rgb(93,183,60)"></span>行情资讯 </h3>
          <hr style="opacity:0.6">
          <ul>
            <li ><span style="font-size:19px ;font-weight:800">今日小麦价格多少钱一斤?...</span></li>
            <li>今日小麦价格多少钱一斤? 2020年9月18...</li>
            <li>今日小麦价格多少钱一斤? 2020年9月11...</li>
            <li>今日全国各地小麦价格最新行情分析</li>
          </ul><br>
          <h3><span style="border-left:6px  solid rgb(93,183,60)"></span> 每周精品</h3>
          <hr style="opacity:0.6">
          <ul>
            <li ><span style="font-size:19px ;font-weight:800">今日小麦多少钱一斤? 2020...</span></li>
            <li>今日小麦价格多少钱一斤? 2020年9月18...</li>
            <li>今日小麦价格多少钱一斤? 2020年9月11...</li>
            <li>今日全国各地小麦价格最新行情分析</li>
            <li>今日全国各地小麦价格最新行情分析</li>
          </ul>
        </div>
        <div class="headerbot">
          <h3><span></span>行情资讯 </h3>
          <a href="">查看更多</a>
          
        </div>
      </div>

      <div class="one">
        <div class="block">   
          <div class="blockson1" >
            <el-image :src="src" ></el-image>
            <span>现在猕猴桃行情怎样</span>
          </div>      
          <div class="blockson1">
            <el-image :src="src"></el-image>
            <span>现在猕猴桃行情怎样</span>
          </div>        
        </div>
        <ul class="ul2">
          <li ><span>今日桃子多少钱一斤? 2020...</span></li>
          <li>今日小麦价格多少钱一斤? 2020年9月18...</li>
          <li>今日小麦价格多少钱一斤? 2020年9月11...</li>
          <li>下半年生猪肉会涨价吗</li>
        </ul>
        <div class="div1">
          <ul>
            <li ><span>今日菠萝多少钱一斤? 2020...</span></li>
            <li>今日小麦价格多少钱一斤? 2020年9月18...</li>
            <li>今日小麦价格多少钱一斤? 2020年9月11...</li>
            <li>今日全国各地小麦价格最新行情分析</li>
          </ul>
          <ul class="ul1">
            <li ><span>今日苹果多少钱一斤? 2020...</span></li>
            <li>今日小麦价格多少钱一斤? 2020年9月18...</li>
            <li>今日小麦价格多少钱一斤? 2020年9月11...</li>
            <li>今日全国各地小麦价格最新行情分析</li>
          </ul>
        </div>

        <div class="onemid"> 
        <h3><span></span>精彩专题</h3> 
        <span>查看更多</span>
        </div> 
        <div class="zhuangti">
          <div class="ztitop">
            <el-image :src="src"></el-image>
            <el-image :src="src"></el-image>
            <el-image :src="src"></el-image>
            <el-image :src="src"></el-image>
          </div>
          <div class="ztison">
            <el-image :src="src" ></el-image>
            <div class="ztisontext">
              <h3>选择、坚持、热爱,他们把货从农村卖向全国</h3>
            <p style="font-size:16px;padding-bottom:15px;padding-top:10px">编者按:“我与惠农网的故事”征文比赛已圆满结束，本次活动我们收到了482个真实故事，感谢你
              们用文字和图片记录下了与惠农网的“独家记忆”.中感谢你们在故事...<span style="color:green">[详细]</span>
            </p>
            <p style="font-size:15px;float:left">发布时间:2020-09-14 14:26阅读： 533</p> 
            <p style="color:green;font-size:13px;float:right;padding-right:3px">财富手册</p><p style="font-size:13px;float:right">分类：</p>
            </div>
          </div>
          <div class="ztison">
            <el-image :src="src"></el-image>
            <div class="ztisontext">
              <h3>选择、坚持、热爱,他们把货从农村卖向全国</h3>
            <p style="font-size:16px;padding-bottom:15px;padding-top:10px">编者按:“我与惠农网的故事”征文比赛已圆满结束，本次活动我们收到了482个真实故事，感谢你
              们用文字和图片记录下了与惠农网的“独家记忆”.中感谢你们在故事...<span style="color:green">[详细]</span>
            </p>
            <p style="font-size:15px;float:left">发布时间:2020-09-14 14:26阅读： 533</p> 
            <p style="color:green;font-size:13px;float:right;padding-right:3px">财富手册</p><p style="font-size:13px;float:right">分类：</p>
            </div>
          </div>
          <div class="ztison">
            <el-image :src="src"></el-image>
            <div class="ztisontext">
              <h3>选择、坚持、热爱,他们把货从农村卖向全国</h3>
            <p style="font-size:16px;padding-bottom:15px;padding-top:10px">编者按:“我与惠农网的故事”征文比赛已圆满结束，本次活动我们收到了482个真实故事，感谢你
              们用文字和图片记录下了与惠农网的“独家记忆”.中感谢你们在故事...<span style="color:green">[详细]</span>
            </p>
            <p style="font-size:15px;float:left">发布时间:2020-09-14 14:26阅读： 533</p> 
            <p style="color:green;font-size:13px;float:right;padding-right:3px">财富手册</p><p style="font-size:13px;float:right">分类：</p>
            </div>
          </div>
          <div class="ztison">
            <el-image :src="src"></el-image>
            <div class="ztisontext">
              <h3>选择、坚持、热爱,他们把货从农村卖向全国</h3>
            <p style="font-size:16px;padding-bottom:15px;padding-top:10px">编者按:“我与惠农网的故事”征文比赛已圆满结束，本次活动我们收到了482个真实故事，感谢你
              们用文字和图片记录下了与惠农网的“独家记忆”.中感谢你们在故事...<span style="color:green">[详细]</span>
            </p>
            <p style="font-size:15px;float:left">发布时间:2020-09-14 14:26阅读： 533</p> 
            <p style="color:green;font-size:13px;float:right;padding-right:3px">财富手册</p><p style="font-size:13px;float:right">分类：</p>
            </div>
          </div>
        </div>
      </div>
      
    
    </div>
    <div class="right">   <!--右半部分--->
      <h3><span style="border-left:6px  solid rgb(93,183,60)"></span> 热门资讯<span style="font-size:15px;background-color:red;border-radius:10px;color:#fff">NEW</span></h3>
      <div class="righttext">
        <ul style="margin-left:17px">
          <li><span style="font-size:19px ;font-weight:800 ">农村农业部关于完善农村...</span><span style="float:right">2天前</span></li>
          <li>农村干什么挣钱投资小?首要...<span style="float:right">2天前</span></li>
          <li>今日小麦价格多少钱一斤? 2020<span style="float:right">2天前</span></li>
          <li>今日全国各地小麦价格最新行情<span style="float:right">2天前</span></li>
          <li>农村干什么挣钱投资小?首要...<span style="float:right">2天前</span></li>
          <li>今日小麦价格多少钱一斤? 2020<span style="float:right">2天前</span></li>
          <li>今日全国各地小麦价格最新行情<span style="float:right">2天前</span></li>
          <li>农村干什么挣钱投资小?首要...<span style="float:right">2天前</span></li>
          <li>4G进村百户农民脱贫路上赛跑<span style="float:right">2天前</span></li>
        </ul>
        <br>
        <li><span style="font-size:15px ;font-weight:800 ">4G进村百户农民脱贫路上赛跑</span></li>
        <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
        <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
        <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
        <br><br>
        <li><span style="font-size:15px ;font-weight:800 ">4G进村百户农民脱贫路上赛跑</span></li>
        <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
        <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
        <li>赤土花果园:脐橙，甜柚即将进入采摘季</li>
        <br>
        <p style="float:right;opacity:0.6">查看更多</p>
      </div>
      <div class="rightmd" style="margin-top:20px;border-top:1px solid black;padding-top:12px">
        <ul style="margin-left:17px">
          <li style="font-size:16px ;font-weight:800">惠农代卖：新手夫妇闯市场，一招...</li>
          <li>独家记忆|乘风破浪的90后姑娘:能成为果农眼...</li>
          <li>80后青年互联网上卖山货，助力家乡脱贫致富！</li>
          <li>精准卖货，他是农产品的“经纪人”</li>
        </ul>
        <ul style="margin:10px 0 30px 16px">
          <li><span style="font-size:15px ;font-weight:800 ">惠农代卖：新手夫妇闯市场，一招...</span><span style="float:right">2天前</span></li>
          <li>独家记忆|乘风破浪的90后姑娘：能成为果农眼...</li>
          <li>80后青年互联网上卖山货，助力家乡脱贫致富！</li>
          <li>精准卖货，他是农产品的“经纪人”</li>
        </ul>
        <h3 style="display:inline"><span style="border-left:6px  solid rgb(93,183,60)"></span> 热门资讯</h3>
        <p style="float:right;padding-top:9px;opacity:0.6">查看更多</p>
      </div>
      <div class="tage" >
        <div class="tageson"><el-button  size="medium" round>专家</el-button>
        <el-button  size="medium" round>火参果资源</el-button>
        <el-button  size="medium" round>橄榄</el-button></div>
        <div class="tageson"><el-button  size="medium" round>红豆杉资源</el-button>
        <el-button  size="medium" round>火鸡蛋</el-button></div>
        <div class="tageson"><el-button  size="medium" round>豆芽货源</el-button>
        <el-button  size="medium" round>洋葱资源</el-button></div>
        <div class="tageson"><el-button  size="medium" round>红薯批发</el-button>
        <el-button  size="medium" round>黄瓜资源</el-button></div>
      </div>
    </div>
    <!-- 最底部 -->
    <div class="bot"><h5></h5>
      <p style="padding-top:25px;padding-bottom:3px">联系我们：15904960695 kabit@sina.com</p>
      <p>Copyright@2020.<span style="color:blue">对虾大数据云平台</span>All rights reserved</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    };
    
  },
  created() {
      console.log(this.global.baseUrl)
  },
};
</script>
<style lang="less" scoped>
  #main{
    position: relative;
    margin:3px auto ;
    width: 78%;
    padding: 1px;
    height: 1610px;
  }
  .el-breadcrumb{
    padding:10px 0 10px 0;
  }
  .header{
    width: 100%;
    height: 417px;
  }
  .block1 .el-image{
    width: 400px; height: 210px; 
    padding-top:8px;
  }
  .block2 .pic1{
    width:190px; 
    height:120px ;
    padding:10px 0 0 8x; 
  }
  .block2 .pic2{
   width:190px; 
   height:120px;
   padding:10px 0 0 20px; 
  }
  .headerbot{
    padding: 1px;
    h3{
      display: inline-block;
      padding-top: 16px;
      span{
        border-left:6px  solid rgb(93,183,60);
      }
    }
    a{
      float:right ;
      padding-top:22px;
      color:black;
      opacity:0.6;
    }
  }
  .pictop{
    width:450px ; 
    float:left;
    padding-bottom:5px;
  }
  .topright{
    float:left; 
    width:350px;
    padding-top:10px;
    ul{
      margin-left:20px;
    }
  }
  .top{
    border-bottom: 2px solid rgb(220,220,220);
    padding-bottom: 3px;
  }
  .left{
    float: left;
    width: 800px;
    padding-top: 16px;
  
  }
  .right{
    float: right;
    width: 330px;
    height: 800px;
    padding: 26px 0 0 16px;
    .righttext{
      border-top:1px solid black; 
      width:100%;
    }
  }
  .one{
    float:left;
    width: 100%;
    padding: 1px;
    border-top: 1px solid rgb(220,220,220);
    .block{
      display: inline-block;
      width: 400px;
      span{
          display: block;
        }
      height: 130px;
      .blockson1{
        width:180px ;
        float:left;
        height: 110px;
        padding-top: 10px;
        margin-right: 10px;
        .el-image{
            width:170px; 
            height:90px;
          }
      }
    }  
    ul li span{
      font-size: 19px;
      font-weight: 800;
    }
    .div2{
      float:left;
      
      margin-bottom:10px;
    }
    .ul1{
      margin-left:17px;
      float: left;
    }
    .div1{
      float:left;
      width: 800px;
      margin-bottom:10px;
      ul{
        float: left;
        padding: 10px 72px 0 20px;
      }
    }
    .onemid{
      h3{
        display:inline-block;
        padding-top:6px;
        span{
          border-left:6px  solid rgb(93,183,60);
        }
      }
      span{
        float:right;
        padding-top:3px;
        opacity:0.6;
      }
    }
    .ztitop{
      .el-image{
        width:190px; 
        height:115px;
      }
    }
    .ztison{
      .el-image{
        width:240px; 
        height:140px;
        float:left;
        margin-right:12px;
      }
    }
    .ul2{
      float: right;
      margin:10px 75px 0 0;
    }
  }
  li{
    padding:6px 0 3px 0;
  }
  ul{
    padding-bottom: 5px;
  }
  a{
    list-style: none;
    text-decoration: none;
  }
  .zhuangti{
    border-top: 1px solid rgb(220,220,220);
  }
  .ztitop .el-image{
    display: inline-block;
    margin:5px 10px 10px 0;
  }
  .ztison{
    clear: both;
    height: 150px;
    border-bottom: 1px solid rgb(220,220,220);
  }
  .bot{
    margin-top: 12px;
    width: 100%;
    height: 85px;
    position: absolute;
    bottom: 0;
    background-color: black;
  }
  .el-row{
    margin-top:20px;
  }
  .el-col{
    margin-right: 55px;
    
  }
  .bot p{
    color:white;
    text-align: center;
  }
  .rightmd li{
    font-size: 14.5px;
    font-weight: 400;
  }
  .tage{
    padding: 15px 0 0 8px;
    border-top:1px solid black;
    margin-top:4px;
    .tageson{
      margin-bottom: 12px;
      .el-button{
        background-color:rgb(240,249,235);
        color:green;
      }
    }
  }
  
</style>