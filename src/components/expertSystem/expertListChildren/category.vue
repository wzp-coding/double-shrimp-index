<template>
  <div class="category">
    <div class="category-component">
        <div class="name">{{this.name}}</div>
      <el-radio-group v-model="radio" @change="changeLabel">
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
            radio:this.default,
            id: "0"
        }
    },
    props:[
        'labelList','default','name'
    ],
    methods:{
      changeLabel(){
        this.labelList.some(item=>{
          if(item.data == this.radio){
            this.id = item.id
          }
        })
        if(this.radio == this.default){
          this.id = "0"
        }
        this.$emit('changeLabel',{id:this.id})
      }
    }
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
        .el-radio-button:first-child .el-radio-button__inner,
        .el-radio-button:last-child .el-radio-button__inner{
          border-radius: 0;
        }
    }
}
</style>