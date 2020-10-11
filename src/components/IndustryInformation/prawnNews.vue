<template>
  <div id="containter">
    <div class="top">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
        <el-breadcrumb-item style="opacity: 0.7">当前位置</el-breadcrumb-item>
        <el-breadcrumb-item style="opacity: 0.7">产业咨询</el-breadcrumb-item>
        <el-breadcrumb-item>对虾专题</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="search" style="display:flex;postion:relative">
        <form action="" method="post" style="display:inline">
          <input type="text" class="el-icon-search"  placeholder="搜索你想的农产品资讯"/>
          <img src="../../assets/fandajing.png" alt="" style="position:absolute;top:10px;right:1px">
        </form>
      </div>
    </div>
    <hr style="opacity: 0.8"/>
    <div class="zhuti">
    <div class="left">
      <div class="block">
        <div class="blockson">
          <el-image :src="src"></el-image>
          <span>水稻多少钱一斤</span>
        </div>
        <div class="blockson">
          <el-image :src="src"></el-image>
          <span>水稻多少钱一斤</span>
        </div>
        <div class="blockson">
          <el-image :src="src"></el-image>
          <span>水稻多少钱一斤</span>
        </div>
      </div>
      <div class="main">
        <div class="mainson">
          <el-image :src="src"></el-image>
          <div class="sonr">
            <h2>今日小麦行情如何？为何小麦价格持续走高</h2>
            <br />
            <p>
              农民朋友对粮食价格变化比较关系，因为粮食的价格上涨，就是农民朋友种植粮食最好
              的时候，就今年的小麦行情来看，总体出现了一路上涨的趋势，也有出现过短期价格...
              <span style="color: green">[详细]</span>
            </p>
            <p style="font-size: 13px; float: left">
              发布时间:2020-09-14 14:26<span style="margin-left: 15px"
                >阅读： 533</span
              >
            </p><p style="color:green;font-size:13px;float:right;padding-right:3px">财富手册</p><p style="font-size:13px;float:right">分类：</p>
          </div>
        </div>
        <div class="mainson">
          <el-image :src="src"></el-image>
          <div class="sonr">
            <h2>今日小麦行情如何？为何小麦价格持续走高</h2>
            <br />
            <p>
              农民朋友对粮食价格变化比较关系，因为粮食的价格上涨，就是农民朋友种植粮食最好
              的时候，就今年的小麦行情来看，总体出现了一路上涨的趋势，也有出现过短期价格...
              <span style="color: green">[详细]</span>
            </p>
            <p style="font-size: 13px; float: left">
              发布时间:2020-09-14 14:26<span style="margin-left: 15px">阅读： 533</span>
            </p><p style="color:green;font-size:13px;float:right;padding-right:3px">粮油米面</p><p style="font-size:13px;float:right">分类：</p>
          </div>
        </div>
        <div class="mainson">
          <el-image :src="src"></el-image>
          <div class="sonr">
            <h2>今日小麦行情如何？为何小麦价格持续走高</h2>
            <br/>
            <p style="padding-bottom:15px">
              农民朋友对粮食价格变化比较关系，因为粮食的价格上涨，就是农民朋友种植粮食最好
              的时候，就今年的小麦行情来看，总体出现了一路上涨的趋势，也有出现过短期价格...
              <span style="color: green">[详细]</span>
            </p>
            <p style="font-size: 13px; float: left">
              发布时间:2020-09-14 14:26<span style="margin-left: 15px">阅读： 533</span>
            </p> <p><span style="color:green;font-size:13px;float:right;padding-right:3px">财富手册</span><span style="font-size:13px;float:right">分类：</span></p>
          </div>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <div class="right">
      <div class="rtop">
        <br>
        <ul>
          <li style="font-size:18px;font-weight:800">4G进村百户农民脱贫路上赛跑</li>
          <li>4G进村百户农民脱贫路上赛跑</li>
          <li>4G进村百户农民脱贫路上赛跑</li>
          <li>4G进村百户农民脱贫路上赛跑</li>
        </ul>
        <br>
        <ul>
          <li style="font-size:18px;font-weight:800">4G进村百户农民脱贫路上赛跑</li>
          <li>4G进村百户农民脱贫路上赛跑</li>
          <li>4G进村百户农民脱贫路上赛跑</li>
          <li>4G进村百户农民脱贫路上赛跑</li>
        </ul>
        <p>查看更多</p>
        
      </div>
      <div class="rmid">
        <ul>
          <li style="font-size:18px;font-weight:800">80后青年互联网上卖山货，助力家</li>
          <li>80后青年互联网上卖山货，助力家。</li>
          <li>80后青年互联网上卖山货，助力家。</li>
          <li>80后青年互联网上卖山货，助力家。</li>
        </ul>
        <br>
        <ul>
          <li style="font-size:18px;font-weight:800">80后青年互联网上卖山货，助力家</li>
          <li>80后青年互联网上卖山货，助力家。</li>
          <li>80后青年互联网上卖山货，助力家。</li>
          <li>80后青年互联网上卖山货，助力家。</li>
        </ul>
        <h3><span style="border-left:6px  solid rgb(93,183,60);margin-right:5px"></span> 热门资讯</h3>
        <p>查看更多</p>
      </div>
      <div class="rbtm">
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
};
</script>
<style lang="less" scoped>
#containter {
  width: 78%;
  margin: auto;
  .zhuti{
    display: flex;
  }
}
.top {
  display: flex;
  width: 100%;
  position: relative;
  height: 44px;
  .el-breadcrumb {
    padding-top: 14px;
    float: left;
  }
  .search {
    position: absolute;
    float: right;
    padding-top: 4.5px;
    right: 100px;
    height: 27px;
    width: 190px;
  }
  input {
    padding-left: 16px;
    height: 32px;
    width: 180px;
    opacity: 0.8;
    outline: none;
    border-radius: 20px;
  }
}
.left {
  width: 70%;
  height: 1700px;
  .block {
    width: 100%;
    display: flex;
    flex-wrap: wrap; //溢出换行
    .blockson {
      width: 32%;
      margin: 5px 5px;
    }
  }
  .main {
    width: 100%;
    .mainson {
      width: 100%;
      padding:10px 0 10px 5px;
      display: flex;
      margin:5px 5px;

      border-bottom: 1px solid rgb(210, 210, 210);
      .el-image {
        height: 170px;
        width: 27%;
      }
      .sonr {
        width: 70%;
        margin: 10px 0 0 19px;
        span {
          padding-top: 10px;
        }
      }
    }
  }
  .el-pagination{
    margin:20px 0 0 160px;
  }
}
.right {
  float: right;
  height: 1700px;
  width: 30%;
  .rtop{
    height: 300px;
    border-bottom: 1px solid rgb(110, 110, 110);
    position: relative;
    float: right;
    right: 5;
    ul{
      padding-right: 34px;
    }
  }
  .rmid{
    height: 300px;
    border-bottom: 1px solid rgb(110, 110, 110);
    position: relative;
    float: right;
    h3{
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .rbtm{
    float: right;
    padding-top:20px;
    .el-button{
      margin-bottom: 8px;
      background-color:rgb(240,249,235);
      color:green;
    }
  }
  
  li{
    padding-top: 6px;
  }
  
  p{
    float: left;
    font-size: 14px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>