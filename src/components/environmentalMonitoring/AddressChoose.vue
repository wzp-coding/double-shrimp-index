<template>
  <div>
    <el-form>

    <el-row style="paddingLeft: 20px">
      <el-col>
        <el-form-item prop="province" label="省份" style="margin:0">
          <el-select
            v-model="ResultObj.province"
            placeholder="请选择省份"
            @change="selectProvince($event)"
          >
            <el-option
              v-for="item in provinces"
              :key="item.ID"
              :value="item.ID"
              :label="item.AddName"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item prop="city" label="城市" style="margin:0">
          <el-select
            v-model="ResultObj.city"
            placeholder="请选择城市"
            @change="selectCity($event)"
          >
            <el-option
              v-for="item in citys"
              :key="item.ID"
              :value="item.ID"
              :label="item.AddName"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item prop="region" label="地区" style="margin-bottom:20px">
          <el-select
            v-model="ResultObj.region"
            placeholder="请选择地区"
            @change="selectResult"
          >
            <el-option
              v-for="item in areas"
              :key="item.ID"
              :value="item.AddName"
              :label="item.AddName"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    </el-form>
  </div>
</template>

<script>
import address from "./address";
export default {
  name: "AddressChoose",
  data() {
    return {
      provinces: [],
      citys: [],
      areas: [],
      ResultObj:{
        province:'广东省',
        city:'广州市',
        region:'海珠区',
        type: 1
      }
    };
  },
  mounted() {
    this.provinces = address.slice(0, 31); //截取31个省级数据
  },
  methods: {
    selectProvince(num) {
      this.citys = [];
      this.areas = [];
      this.ResultObj.province = this.provinces[num - 1].AddName;
      this.ResultObj.city = ''
      this.ResultObj.region = ''
      this.ResultObj.type = 1
      this.$emit("fatherMethods", this.ResultObj);

      address.map((list) => {
        if (list.TopID === num) {
          this.citys.push(list);
        }
      });
    },
    selectCity(num) {
      this.areas = [];
      this.ResultObj.city = address[num - 1].AddName;
      this.ResultObj.region = ''
      this.ResultObj.type = 2
      this.$emit("fatherMethods", this.ResultObj);
      address.map((list) => {
        if (list.TopID === num) {
          this.areas.push(list);
        }
      });
    },
    selectResult() {
      this.ResultObj.type = 3
      this.$emit("fatherMethods", this.ResultObj);
    },
  },
};
</script>

<style>
</style>