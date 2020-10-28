<template>
  <div class="address-man">
    <el-form
      :model="addressForm"
      :rules="rules"
      ref="addressForm"
      label-width="100px"
      class="address-form"
    >
      <el-row class="address-form-title">新增收货地址：</el-row>
      <el-form-item label="收货人" prop="name">
        <el-input
          placeholder="请输入收货人姓名"
          v-model="addressForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号" required prop="photo">
        <el-input
          type="number"
          placeholder="请输入手机号"
          v-model="addressForm.photo"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-alert type="success" :closable="false">
          <p style="font-size: 1rem">
            {{ select.province }}
            <el-divider direction="vertical"></el-divider> {{ select.city }}
            <el-divider direction="vertical"></el-divider>{{ select.area }}
          </p>
        </el-alert>
      </el-form-item>
      <el-form-item label="地区">
        <VDistpicker
          @province="onChangeProvince"
          @city="onChangeCity"
          @area="onChangeArea"
          :province="select.province" :city="select.city" :area="select.area"
        ></VDistpicker>
      </el-form-item>
      <el-form-item label="详细地址" prop="addressDetail">
        <el-input
          placeholder="例如：河唇镇红湖农场天平街45号"
          v-model="addressForm.addressDetail"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-popconfirm
          title="是否添加成为新的地址"
          confirmButtonText="是的"
          icon="el-icon-plus"
          @onConfirm="addAddress()"
        >
          <el-button slot="reference" type="success">保存</el-button>
        </el-popconfirm>
      </el-form-item>
    </el-form>
    <div class="address-detail">
      <el-alert
        :title="`已经保存了 ${addressNum} 条地址，还能保存20条`"
        type="success"
      >
      </el-alert>
      <el-table :data="addressList" border style="width: 100%">
        <el-table-column prop="receiverName" label="收货人" width="100">
        </el-table-column>
        <el-table-column prop="receiverPhone" label="联系方式" width="170">
        </el-table-column>
        <el-table-column prop="receiverAddress" label="地址" width="350">
        </el-table-column>
        <el-table-column prop="receiverAddress" label="状态" width="70">
          <el-tag> 默认 </el-tag>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="130">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-delete"
              type="text"
              size="small"
              style="color: red"
              @click="delAddressById(scope.row)"
              >删除</el-button
            >
            <el-button
              icon="el-icon-view"
              @click="handleClick(scope.row)"
              type="text"
              size="small"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {
      select: { province: "广东省", city: "广州市", area: "海珠区" },
      // 地址列表数据
      addressList: [],
      addressNum: 0,
      addressForm: {
        name: "",
        photo: "",
        addressDetail: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入收货人", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        photo: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "长度11字符",
            trigger: "blur",
          },
        ],
        addressDetail: [
          { required: true, message: "请输入详细地址", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.getAddress();
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
    // 移除地址
    async delAddressById(row) {
      try {
        const { data: res } = await this.reqM4Service(
          "/address/" + row.addressId,
          "",
          "delete"
        );
        console.log(res);
        if (res.code === 20000) {
          this.$message.success(res.message);
          this.getAddress();
        } else {
          this.$message.error(res.message);
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
      }
    },
    // 获得地址列表
    async getAddress() {
      try {
        const { data: res } = await this.reqM4Service(
          "/address/" + this.$store.state.userData.userId,
          "",
          "get"
        );
        console.log(res);
        if (res.code === 20000) {
          this.addressList = res.data.reverse();
          this.addressNum = res.data.length;
          for (let i = 0; i < this.addressList.length; i++) {
            this.addressList[i].receiverAddress =
              this.addressList[i].receiverProvince +
              this.addressList[i].receiverCity +
              this.addressList[i].receiverTown +
              this.addressList[i].receiverAddress;
          }
        } else {
          this.$message.error(res.message);
        }
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
      }
    },
    // 添加新的地址
    async addAddress() {
      try {
        this.$refs.addressForm.validate(async (valid) => {
          if (!valid) return;
          const { data: res } = await this.reqM4Service(
            "/address",
            {
              userId: this.$store.state.userData.userId,
              receiverName: this.addressForm.name,
              receiverPhone: this.addressForm.photo,
              receiverProvince: this.select.province,
              receiverCity: this.select.city,
              receiverTown: this.select.area,
              receiverAddress: this.addressForm.addressDetail,
            },
            "post"
          );
          console.log(res);
          if (res.code === 20000) {
            this.$message.success(res.message);
            this.$refs.addressForm.resetFields();
            this.getAddress();
          } else {
            this.$message.error(res.message);
          }
        });
      } catch (error) {
        this.$message.error("网络开小差了，请稍后重试19999");
      }
    },
    // 三联地址选择器函数
    onChangeProvince(val) {
      this.select.province = val.value;
    },
    // 三联地址选择器函数
    onChangeCity(val) {
      this.select.city = val.value;
    },
    // 三联地址选择器函数
    onChangeArea(val) {
      this.select.area = val.value;
    },
  },
  components: { VDistpicker },
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
    // border: 1px solid #ccc;
  }
  .address-detail {
    width: 100%;
    height: 200px;
    margin: 10px 0;
    background-color: #fff;
    border-radius: 4px;
    // border: 1px solid #ccc;
    .el-alert {
      width: 95%;
      margin: 10px auto;
    }
  }
}
</style>