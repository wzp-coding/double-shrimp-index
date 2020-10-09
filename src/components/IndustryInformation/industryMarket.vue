<template>
  <div>
    <h1></h1>
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