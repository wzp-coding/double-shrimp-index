<template>
  <div class="expertList">
    <div class="container">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'expertInterrogation' }"
            >专家问诊</el-breadcrumb-item
          >
          <el-breadcrumb-item>专家列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="sortWay">
          <category :default="'默认'" :labelList="sortList" :name="'排列方式'"></category>
      </div>
      <div class="expertSort">
          <category :default="'全部'" :labelList="expertCategoryList" :name="'分类'"></category>
      </div>
      <div class="pagination">
          <pagination></pagination>
      </div>
    </div>
  </div>
</template>
<script>
import category from './expertListChildren/category'
import pagination from './expertListChildren/pagination'
export default {
    data() {
        return {
            expertCategoryList:[
                {
                    id: '1',
                    data:'养殖施药'
                },
                {
                    id: '2',
                    data:'加工生产'
                },
                {
                    id: '3',
                    data:'冷链物流'
                },
                {
                    id: '4',
                    data:'施药配方'
                },
            ],
            sortList:[
                {
                    id: '1',
                    data:'咨询量从高到低'
                },
                {
                    id: '2',
                    data:'回复量从高到低'
                },
                {
                    id: '3',
                    data:'回复率从高到低'
                },
                {
                    id: '4',
                    data:'有用量从高到低'
                },
            ]
        }
    },
    components:{
        category,
        pagination
    }
};
</script>
<style lang="less" scoped>
</style>