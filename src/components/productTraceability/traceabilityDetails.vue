<template>
  <div class="detail lxl-body">
    <!-- 面包屑导航区 -->
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item to="/productTraceability"
          >产品溯源</el-breadcrumb-item
        >
        <el-breadcrumb-item>溯源详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

      <el-card class="head">
        <!-- 头部区域 -->
        <el-row :gutter="10" class="h-top">
          <el-col :span="13">
            <div class="h-left">
              <h1>{{ base.baseName }}</h1>
              <p>{{ base.baseIntroduction }}</p>
            </div>
          </el-col>
          <el-col :span="8">
            <!-- 图片走马灯 -->
            <el-carousel height="220px" class="h-right">
              <el-carousel-item v-for="item in basePicture" :key="item">
                <el-image :src="item"></el-image>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="dashed">
          <el-col :span="10">
            <div class="mes">
              <p class="mes1">基地地址：</p>
              <p>{{ base.baseAddr }}</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="mes">
              <p class="mes1">创建时间：</p>
              <p>{{ base.createDate }}</p>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="10">
            <div class="mes">
              <p class="mes1">注册资金/万元：</p>
              <p>{{ base.funds }}</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="mes">
              <p class="mes1">营业范围：</p>
              <p>{{ base.scope }}</p>
            </div>
          </el-col>
        </el-row>
      </el-card>

      <el-card style="margin-top: 30px">
        <!-- 基地信息 -->
        <div class="bass">
          <!-- 标题区 -->
          <div class="title1">
            <div class="title2">
              <i class="el-icon-office-building"></i>
              <p>基地信息</p>
            </div>
            <el-divider></el-divider>
          </div>
          <!-- 内容区域 -->
          <div class="contain">
            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">基地名称：</p>
                  <p>{{ base.baseName }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">创建时间：</p>
                  <p>{{ base.createDate }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">基地地址：</p>
                  <p>{{ base.baseAddr }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">创建人：</p>
                  <p>{{ base.createBy }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">注册资金/万元：</p>
                  <p>{{ base.funds }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">营业执照注册号：</p>
                  <p>{{ base.registNumber }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">营业范围：</p>
                  <p>{{ base.scope }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row class="dashed">
              <el-col>
                <div class="mes">
                  <p class="mes1" style="width: 300px">基地简介：</p>
                  <p>{{ base.baseIntroduction }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row class="dashed">
              <el-col>
                <div class="mes">
                  <p class="mes1">基地图片：</p>
                  <div
                    class="image__preview"
                    v-for="item in basePicture"
                    :key="item.id"
                  >
                    <el-image
                      class="b-img"
                      :src="item"
                      :preview-src-list="srcList"
                    >
                    </el-image>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 虾苗来源 -->
        <div class="bass">
          <!-- 标题区 -->
          <div class="title1">
            <div class="title2">
              <i class="el-icon-receiving"></i>
              <p>虾苗来源</p>
            </div>
            <el-divider></el-divider>
          </div>
          <!-- 内容区域 -->
          <div class="contain">
            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">虾苗批次名称：</p>
                  <p>{{ shrimp.shrimpBatchName }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">虾苗品种：</p>
                  <p>{{ shrimp.shrimpSpecies }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">虾苗产地：</p>
                  <p>{{ shrimp.shrimpOrigin }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">虾苗供应商：</p>
                  <p>{{ shrimp.shrimpSupplier }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">放苗时间：</p>
                  <p>{{ shrimp.seedlingTime }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">捕捞时间：</p>
                  <p>{{ shrimp.fishingTime }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">审核人：</p>
                  <p>{{ shrimp.createBy }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">对虾规格(kg/尾)：</p>
                  <p>{{ shrimp.specification }}</p>
                </div>
              </el-col>
            </el-row>

            <div class="s-imgs">
              <el-row :gutter="0">
                <el-col :span="10" class="s-c-img">
                  <el-image
                    class="s-img"
                    :src="url"
                    :preview-src-list="srcList"
                  >
                  </el-image>
                </el-col>
                <el-col :span="10" class="s-c-img">
                  <el-image
                    class="s-img"
                    :src="url"
                    :preview-src-list="srcList"
                  >
                  </el-image>
                </el-col>
              </el-row>
            </div>

            <div class="s-imgs">
              <el-row :gutter="0">
                <el-col :span="10" class="s-c-img">
                  <el-image
                    class="s-img"
                    :src="url"
                    :preview-src-list="srcList"
                  >
                  </el-image>
                </el-col>
                <el-col :span="10" class="s-c-img">
                  <el-image
                    class="s-img"
                    :src="url"
                    :preview-src-list="srcList"
                  >
                  </el-image>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 投料信息 -->
        <div class="bass">
          <!-- 标题区 -->
          <div class="title1">
            <div class="title2">
              <i class="el-icon-tickets"></i>
              <p>投料信息</p>
            </div>
            <el-divider></el-divider>
          </div>
          <!-- 内容区域 -->
          <div class="contain">
            <el-table :data="shrimpFarmings" stripe>
              <el-table-column prop="suppliesName" label="农资名称">
              </el-table-column>
              <el-table-column prop="applicator" label="使用人">
              </el-table-column>
              <el-table-column prop="applyType" label="农资类型">
              </el-table-column>
              <el-table-column prop="deliveryVolume" label="投放量">
              </el-table-column>
              <el-table-column prop="applyTime" label="使用时间">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="success"
                    @click="handleDelete(scope.$index, scope.row)"
                    >查看农资</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageInfo.pagenum"
          :page-sizes="[4, 8, 16, 32]"
          :page-size="pageInfo.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          :hide-on-single-page="false"
          style="margin-top: 10px"
        >
        </el-pagination>
        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 加工信息 -->
        <div class="bass">
          <!-- 标题区 -->
          <div class="title1">
            <div class="title2">
              <i class="el-icon-setting"></i>
              <p>加工信息</p>
            </div>
            <el-divider></el-divider>
          </div>
          <!-- 内容区域 -->
          <div class="contain">
            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">加工厂名称：</p>
                  <p>{{ plant.plantName }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">加工厂地址：</p>
                  <p>{{ plant.plantAddress }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">产品名称：</p>
                  <p>{{ plant.productName }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">生产时间：</p>
                  <p>{{ plant.productionTime }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">负责人：</p>
                  <p>{{ plant.createBy }}</p>
                </div>
              </el-col>
            </el-row>

            <!-- 图片区域 -->
            <div class="p-imgs">
              <el-row>
                <el-col :span="8">
                  <div class="p-img">
                    <el-image
                      class="p-img-top"
                      :src="url"
                      :preview-src-list="srcList"
                    >
                    </el-image>
                    <p class="p-img-bottom">xxx图</p>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="p-img">
                    <el-image
                      class="p-img-top"
                      :src="url"
                      :preview-src-list="srcList"
                    >
                    </el-image>
                    <p class="p-img-bottom">xxx图</p>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="p-img">
                    <el-image
                      class="p-img-top"
                      :src="url"
                      :preview-src-list="srcList"
                    >
                    </el-image>
                    <p class="p-img-bottom">xxx图</p>
                  </div>
                </el-col>
              </el-row>
            </div>

            <!-- 步骤区域 -->
            <div class="p-tab">
              <el-tabs tab-position="left" style="height: 200px">
                <el-tab-pane label="用户管理">
                  <el-image
                    class="p-tab-img"
                    :src="url"
                    :preview-src-list="srcList"
                  >
                  </el-image>
                </el-tab-pane>
                <el-tab-pane label="配置管理">
                  <el-image
                    class="p-tab-img"
                    :src="url"
                    :preview-src-list="srcList"
                  >
                  </el-image>
                </el-tab-pane>
                <el-tab-pane label="角色管理">
                  <el-image
                    class="p-tab-img"
                    :src="url"
                    :preview-src-list="srcList"
                  >
                  </el-image>
                </el-tab-pane>
                <el-tab-pane label="定时任务补偿">
                  <el-image
                    class="p-tab-img"
                    :src="url"
                    :preview-src-list="srcList"
                  >
                  </el-image>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 冷库信息 -->
        <div class="bass">
          <!-- 标题区 -->
          <div class="title1">
            <div class="title2">
              <i class="el-icon-refrigerator"></i>
              <p>冷库信息</p>
            </div>
            <el-divider></el-divider>
          </div>
          <!-- 内容区域 -->
          <div class="contain">
            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">冷库名称：</p>
                  <p>{{ storage.storageName }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">冷库地址：</p>
                  <p>{{ storage.storageAddr }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">入库时间：</p>
                  <p>{{ storage.storageTime }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">出库时间：</p>
                  <p>{{ storage.outboundTime }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">冷库温度：</p>
                  <p>{{ storage.storageTemperature }}</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">负责人：</p>
                  <p>{{ storage.createBy }}</p>
                </div>
              </el-col>
            </el-row>

            <el-row class="l-imgs" gutter="30">
              <el-col :span="2"></el-col>
              <el-col :span="7">
                <el-image class="l-img" :src="url" :preview-src-list="srcList">
                </el-image>
              </el-col>
              <el-col :span="7">
                <el-image class="l-img" :src="url" :preview-src-list="srcList">
                </el-image>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 物流信息 -->
        <div class="bass">
          <!-- 标题区 -->
          <div class="title1">
            <div class="title2">
              <i class="el-icon-truck"></i>
              <p>物流信息</p>
            </div>
            <el-divider></el-divider>
          </div>
          <!-- 内容区域 -->
          <div class="contain">
            <!-- 订单信息列表区域 -->
            <el-table :data="logisticsList" border stripe>
              <!-- border： 加入边框线 -->
              <!-- type="index"： 索引列 -->
              >
              <el-table-column type="index"></el-table-column>
              <el-table-column label="出发">
                <el-table-column
                  prop="departureAddr"
                  label="地址"
                ></el-table-column>
                <el-table-column
                  prop="departureTime"
                  label="时间"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="抵达">
                <el-table-column
                  prop="arrivalAddr"
                  label="地址"
                ></el-table-column>
                <el-table-column
                  prop="arrivalTime"
                  label="时间"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="操作" width="240px">
                <template slot-scope="scope">
                  <!-- 查看物流信息 -->
                  <el-button
                    type="success"
                    icon="el-icon-location-information"
                    size="mini"
                    @click="
                      getLogisticsById(scope.row.adultShrimpId).then(() =>
                        init()
                      )
                    "
                    >物流信息</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>

        <!-- 展示物流信息 -->
        <el-dialog
          title="物流信息"
          :visible.sync="logisticsDialogVisible"
          width="50%"
        >
          <!-- 内容主题区 -->
          <div id="map"></div>
          <!-- 页脚 -->
          <span slot="footer" class="dialog-footer">
            <el-button @click="logisticsDialogVisible = false">关闭</el-button>
          </span>
        </el-dialog>

        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 养殖现场 -->
        <div class="bass">
          <!-- 标题区 -->
          <div class="title1">
            <div class="title2">
              <i class="el-icon-video-camera"></i>
              <p>养殖现场</p>
            </div>
            <el-divider></el-divider>
          </div>
          <!-- 内容区域 -->
          <!-- <div class="monitor">
          <div class="videoIframe">
            <p>监控设备位置：1</p>
            <iframe
              class="v-i"
              src="#"
              allowfullscreen
              height="300px"
              width="100%"
              frameborder="no"
              style="background: rgba(0, 0, 0, 0.2)"
            ></iframe>
          </div>
          <div class="videoIframe">
            <p>监控设备位置：1</p>
            <iframe
              src="#"
              allowfullscreen
              height="300px"
              width="100%"
              frameborder="no"
              style="background: rgba(0, 0, 0, 0.2)"
            ></iframe>
          </div>
          <div class="videoIframe">
            <p>监控设备位置：1</p>
            <iframe
              src="#"
              allowfullscreen
              height="300px"
              width="100%"
              frameborder="no"
              style="background: rgba(0, 0, 0, 0.2)"
            ></iframe>
          </div>
          <div class="videoIframe">
            <p>监控设备位置：1</p>
            <iframe
              src="#"
              allowfullscreen
              height="300px"
              width="100%"
              frameborder="no"
              style="background: rgba(0, 0, 0, 0.2)"
            ></iframe>
          </div>
          <div class="videoIframe">
            <p>监控设备位置：1</p>
            <iframe
              src="#"
              allowfullscreen
              height="300px"
              width="100%"
              frameborder="no"
              style="background: rgba(0, 0, 0, 0.2)"
            ></iframe>
          </div>
          <div class="videoIframe">
            <p>监控设备位置：1</p>
            <iframe
              src="#"
              allowfullscreen
              height="300px"
              width="100%"
              frameborder="no"
              style="background: rgba(0, 0, 0, 0.2)"
            ></iframe>
          </div>
        </div> -->
        </div>
        <!-- 分割线 -->
        <el-divider></el-divider>
      </el-card>
    </div>
  </div>
</template>

<script>
/* 引入溯源地址 (用于接口获取数据) */
import Turl from "../../router/url";
export default {
  data() {
    return {
      /* 成虾Id  （用于获取全部详情信息） */
      adultShrimpId: "",

      /* 存储基地信息 (基地信息)*/
      base: {},

      /* 存储虾苗信息 (虾苗来源)*/
      shrimp: {},

      /* 监控视频信息 (养殖现场) */
      monitorResult: {},

      /* 投料信息 (投料信息)*/
      shrimpFarmings: [],

      /* (物流信息) */
      logistics: [],

      /* (加工信息) */
      plant: {},

      /* (冷库信息) */
      storage: {},

      /* 基地图片 */
      basePicture: [],

      /* 分页数据 */
      // 用于控制分页的当前页码和条数
      pageInfo: {
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 4,
      },
      
      // 总条数
      total: 0,

      // 图
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
      // 表格数据
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],

      // 控制物流信息对话框的显示和隐藏
      logisticsDialogVisible: false,

      // 物流信息列表
      logisticsList: [],

      // 物流信息byid
      logisticsForm: {},

      /* 地图表格数据 */
    };
  },
  created() {
    /* 获取adultShrimpId (cookie处理)*/
    this.cookieByAdultShrimpId();
    /* 获取基地的所有信息 */
    this.getDetail().then(() => {
      /* 获取基地的虾苗信息 */
      this.getShrimpFarmings();
    });
  },
  methods: {
    /* 分页功能 */
    // 监听pagesize(每页显示条数)改变事件
    handleSizeChange(newSize) {
      this.pageInfo.pagesize = newSize;
      this.getShrimpFarmings();
    },

    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.pageInfo.pagenum = newPage;
      this.getShrimpFarmings();
    },

    // 地图
    init() {
      var This = this;
      // 经纬度设置
      This.startPos = new qq.maps.LatLng(
        This.logisticsForm.logisticsStartLatitude,
        This.logisticsForm.logisticsStartLongitude
      );
      This.endPos = new qq.maps.LatLng(
        This.logisticsForm.logisticsArrivalLatitude,
        This.logisticsForm.logisticsArrivalLongitude
      );
      // 开始画地图
      This.map = new qq.maps.Map(document.getElementById("map"), {
        // 地图的中心地理坐标，这里设为西安市。
        center: new qq.maps.LatLng(34.01, 108.41),
        zoom: 5,
      });
      // InfoWindow表示信息窗口
      This.infoWin1 = new qq.maps.InfoWindow({
        map: This.map,
      });
      This.infoWin2 = new qq.maps.InfoWindow({
        map: This.map,
      });
      This.infoWin1.open();
      This.infoWin1.setContent(
        '<div style="width:200px;padding-top:10px;">' +
          "离开地址:" +
          This.logisticsForm.departureAddr +
          "<br/>离开时间:" +
          This.logisticsForm.departureTime +
          "</div>"
      );
      This.infoWin1.setPosition(This.startPos);
      This.infoWin2.open();
      This.infoWin2.setContent(
        '<div style="width:200px;padding-top:10px;">' +
          "抵达地址:" +
          This.logisticsForm.arrivalAddr +
          "<br/>抵达时间:" +
          This.logisticsForm.arrivalTime +
          "</div>"
      );
      This.infoWin2.setPosition(This.endPos);
      This.mark1 = new qq.maps.Marker({
        position: This.startPos,
        map: This.map,
      });
      This.mark2 = new qq.maps.Marker({
        position: This.endPos,
        map: This.map,
      });
      This.polyline = new qq.maps.Polyline({
        path: [This.startPos, This.endPos],
        strokeColor: "#39bf3e",
        strokeWeight: 4,
        map: This.map,
      });
    },

    /* 获取adultShrimpId (cookie处理)*/
    cookieByAdultShrimpId() {
      /* 获取全部cookie */
      var strcookie = document.cookie;
      /* 获取目标cookie */
      //将多cookie切割为多个名/值对
      var arrcookie = strcookie.split("; ");
      //遍历cookie数组，处理每个cookie对
      for (var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        //找到名称为userId的cookie，并返回它的值
        if ("adultShrimpId" == arr[0]) {
          this.adultShrimpId = arr[1];
        }
      }
    },

    /* 获取基地的所有信息 */
    async getDetail() {
      const { data: res } = await this.$http.get(
        Turl.traceabilityUrl + "/adultShrimp/traceability/" + this.adultShrimpId
      );
      console.log(res);
      // 基地信息
      this.base = res.data.base;
      // 虾苗来源
      this.shrimp = res.data.shrimp;
      // // 投料信息
      // this.shrimpFarmings = res.data.shrimpFarmings;
      // 养殖现场
      this.monitorResult = res.data.monitorResult;
      // 物流信息
      this.logistics = res.data.others.logistics;
      // 加工信息
      this.plant = res.data.others.plant;
      // 冷库信息
      this.storage = res.data.others.storage;
      // 基地图片
      this.basePicture = res.data.base.basePic.split(";");
    },

    /* 获取基地投料信息 */
    async getShrimpFarmings() {
      const { data: res } = await this.$http.post(
        Turl.traceabilityUrl +
          `/shrimpFarming/search/${this.pageInfo.pagenum}/${this.pageInfo.pagesize}`, {
            shrimpId: this.shrimp.id
          }
      );
      this.total = res.data.total
      this.shrimpFarmings = res.data.rows
    },
  },
};
</script>

<style lang="less" scoped>
.lxl-body {
  display: flex;
  justify-content: center;
  .lxl-breadcrumb {
    margin-top: 25px;
    margin-left: 18px;
    margin-bottom: -10px;
  }
}
.lxl-box {
  width: 1150px;
}
.detail {
  width: 1150px;
  margin: 0 auto;
  font-size: 14px;
  .bread {
    margin: 20px 0;
    margin-left: 10px;
  }
}

.title1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.title2 {
  width: 150px;
  height: 30px;
  font-size: 22px;
  border-left: solid 12px #4f9cee;
  display: block;
  font-family: "Microsoft Yahei", SimHei, Verdana;
  font-weight: 500;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-left: 5px;
  }
}

.head {
  margin: 0 auto;
  margin-top: -10px;
  .h-top {
    margin-bottom: 20px;
    .h-left {
      h1 {
        font-size: 38px;
        font-weight: 400;
        margin-left: 20px;
        margin-bottom: 20px;
      }
      p {
        font-family: arial, tahoma, "Microsoft Yahei", "\5b8b\4f53", sans-serif;
        line-height: 2;
        padding-left: 20px;
        text-indent: 2em;
      }
    }
    .h-right {
      margin-top: 40px;
      margin-left: 30px;
      width: 400px;
    }
  }
}

.dashed {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: dashed 1px #e5e5e5;
}

/* 标头基本信息展示 */
.mes {
  display: flex;
  margin-left: 50px;
  .mes1 {
    font-weight: 700;
    margin-right: 20px;
  }
}

.image__preview {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;
}

.b-img {
  width: 150px;
  height: 150px;
  margin-right: 10px;
  border-radius: 4px;
}

.s-imgs {
  margin: 0 auto;
  width: 1000px;
  margin-top: 20px;
}

.s-img {
  width: 350px;
  height: 200px;
  margin-right: 10px;
  border-radius: 4px;
}

.s-c-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.p-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .p-img-top {
    width: 300px;
    height: 200px;
    border-radius: 4px;
  }
  .p-img-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

// 加工步骤盒子样式
.p-tab {
  margin-top: 30px;
}

// 加工步骤图样式
.p-tab-img {
  margin-left: 100px;
  width: 300px;
  height: 200px;
  border-radius: 4px;
}

// 冷库图盒子
.l-imgs {
  display: flex;
  margin-top: 30px;
}

// 冷库图
.l-img {
  width: 300px;
  height: 180px;
  border-radius: 4px;
}

// 养殖现场
.monitor {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  justify-content: space-evenly;
  width: 1000px;
  /* border: 1px solid black; */
  padding: 5px;
  margin-right: 10px;
  margin-top: 10px;
}
.monitor .videoIframe {
  width: 33%;
  font-weight: 700;
  border-radius: 4px;
}
.v-i {
  border-radius: 4px;
}
</style>