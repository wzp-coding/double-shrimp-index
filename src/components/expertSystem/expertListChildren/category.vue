<template>
  <div class="category">
    <div class="category-component">
        <div class="name">{{this.name}}</div>
      <el-radio-group v-model="radio">
        <el-radio-button :label="this.default"></el-radio-button>
        <el-radio-button v-for="item in labelList" :key="item.id" :label="item.data"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            radio:this.default
        }
    },
    props:[
        'labelList','default','name'
    ]
};
</script>
<style lang="less" scoped>
.category{
   /deep/ .category-component{
        .name{
          display: inline-block;
            font-size: 14px;
            padding: 10px 20px 10px 0;
            width: 60px;
            text-align: right;
        }
        .el-radio-button{
          margin-left: 10px;
          border: 1px solid #DCDFE6;
          .el-radio-button__inner{
            border: none;
          }
        }
    }
}
</style>