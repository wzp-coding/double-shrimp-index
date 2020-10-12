<template>
  <div class="detail lxl-body">
    <!-- 面包屑导航区 -->
    <div class="lxl-box">
      <el-breadcrumb separator-class="el-icon-arrow-right" class=" lxl-breadcrumb">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item to="/productTraceability">产品溯源</el-breadcrumb-item>
        <el-breadcrumb-item>溯源详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

      <el-card class="head">
        <!-- 头部区域 -->
        <el-row :gutter="10" class="h-top">
          <el-col :span="13">
            <div class="h-left">
              <h1>仲恺基地</h1>
              <p>
                仲恺基地，创办于1927年，是一所以伟大的爱国主义者、近代民主革命家廖仲恺先生名字命名，以现代农业科学为特色，农学、工学为优势，农、工、理、经、管、文、艺、法八大学科协调发展的广东省省属高水平应用型大学，是教育部本科教学评估优秀学校及全国首批卓越农林人才教育培养计划高校。学校办学历史悠久，文脉深厚，坐落在历史文化名城——广州。现有海珠校区、白云校区、番禺教学科研基地，占地面积2000余亩。校园集云山之神秀，汇珠水之灵气，是读书治学的理想地。
              </p>
            </div>
          </el-col>
          <el-col :span="8">
            <!-- 图片走马灯 -->
            <el-carousel height="220px" class="h-right">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="dashed">
          <el-col :span="10">
            <div class="mes">
              <p class="mes1">基地地址：</p>
              <p>广州海珠</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="mes">
              <p class="mes1">创建时间：</p>
              <p>2020.06.03</p>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="10">
            <div class="mes">
              <p class="mes1">注册资金：</p>
              <p>1000万元</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="mes">
              <p class="mes1">营业范围</p>
              <p>全世界</p>
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
                  <p>仲恺基地</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">创建时间：</p>
                  <p>2020.06.03</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">基地地址：</p>
                  <p>广州海珠</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">创建人：</p>
                  <p>李老板</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">注册资金：</p>
                  <p>1000万元</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">营业执照注册号：</p>
                  <p>1010101</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">营业范围：</p>
                  <p>全世界</p>
                </div>
              </el-col>
            </el-row>

            <el-row class="dashed">
              <el-col>
                <div class="mes">
                  <p class="mes1" style="width: 300px">基地简介：</p>
                  <p>
                    仲恺农业工程学院（Zhongkai University of Agriculture and
                    Engineering）简称仲恺，创办于1927年，是一所以伟大的爱国主义者、近代民主革命家廖仲恺先生名字命名，以现代农业科学为特色，农学、工学为优势，农、工、理、经、管、文、艺、法八大学科协调发展的广东省省属高水平应用型大学，是教育部本科教学评估优秀学校及全国首批卓越农林人才教育培养计划高校。学校办学历史悠久，文脉深厚，坐落在历史文化名城——广州。现有海珠校区、白云校区、番禺教学科研基地，占地面积2000余亩。校园集云山之神秀，汇珠水之灵气，是读书治学的理想地。
                  </p>
                </div>
              </el-col>
            </el-row>

            <el-row class="dashed">
              <el-col>
                <div class="mes">
                  <p class="mes1">基地图片：</p>
                  <div class="image__preview">
                    <el-image
                      class="b-img"
                      :src="url"
                      :preview-src-list="srcList"
                    >
                    </el-image>
                    <el-image
                      class="b-img"
                      :src="url"
                      :preview-src-list="srcList"
                    >
                    </el-image>
                    <el-image
                      class="b-img"
                      :src="url"
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
                  <p>斑节A1</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">虾苗品种：</p>
                  <p>斑节对虾</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">虾苗产地：</p>
                  <p>广东湛江</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">虾苗供应商：</p>
                  <p>李老板</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">放苗时间：</p>
                  <p>2020.03.19</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">捕捞时间：</p>
                  <p>2020.03.19</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">审核人：</p>
                  <p>李老板</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">对虾规格(kg/尾)：</p>
                  <p>30~40</p>
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
            <el-table :data="tableData" stripe>
              <el-table-column prop="date" label="农资信息"> </el-table-column>
              <el-table-column prop="name" label="使用人"> </el-table-column>
              <el-table-column prop="address" label="农资类型">
              </el-table-column>
              <el-table-column prop="address" label="投放量"> </el-table-column>
              <el-table-column prop="address" label="使用时间">
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
                  <p>加工厂A1</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">加工厂地址：</p>
                  <p>广东省广州市</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">产品名称：</p>
                  <p>小龙虾</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">生产时间：</p>
                  <p>2020.06.03</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">创建者：</p>
                  <p>李老板</p>
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
                  <p>冷库A1</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">冷库地址：</p>
                  <p>广东省广州市海珠区</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">入库时间：</p>
                  <p>2020.06.03</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">出库时间：</p>
                  <p>2020.06.03</p>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10" class="dashed">
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">冷库温度：</p>
                  <p>-10</p>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="mes">
                  <p class="mes1">负责人：</p>
                  <p>小明</p>
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
export default {
  data() {
    return {
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
  created() {},
  methods: {
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