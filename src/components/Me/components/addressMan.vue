<template>
  <div class="address-man">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="address-form"
    >
      <el-row class="address-form-title">新增收货地址：</el-row>
      <el-form-item label="收货人" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="region">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号" required>
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" required>
        <el-input type="textarea" :rows="5" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
    <div class="address-detail">
      <el-alert
        :title="`已经保存了 ${addressNum} 条地址，还能保存20条`"
        type="success"
      >
      </el-alert>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
      addressNum: 0,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入收货人", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [{ required: true, message: "请选择地址", trigger: "change" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleClick(row) {
      console.log(row);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.address-man {
  min-height: 900px;
  .address-form {
    background-color: #fff;
    padding: 15px 10px;
    .address-form-title {
      color: #606260;
      margin: 10px 0 30px;
    }
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  .address-detail {
    width: 100%;
    height: 200px;
    margin: 10px 0;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ccc;
    .el-alert {
      width: 95%;
      margin: 10px auto;
    }
  }
}
</style>