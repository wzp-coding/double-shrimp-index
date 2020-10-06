<template>
  <div class="category">
    <div class="category-component">
        <span class="name">{{this.name}}</span>
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
<style lang="less">
.category{
    .category-component{
        .name{
            font-size: 14px;
            padding: 10px 20px;
            width: 100px;
            text-align: right;
        }
    }
}
</style>