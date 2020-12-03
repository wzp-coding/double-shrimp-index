<template>
  <div class="waterfallReply" ref="waterfallReply">
    <h3
      style="
        display: flex;
        justify-content: space-between;
        margin: 15px 5px 5px 4px;
      "
    >
      <div>
        <span
          style="margin-right: 5px; border-left: 6px solid #409EFF"
        ></span>
        专家问答
      </div>
      <div
        style="
          font-size: 0.8rem;
          margin-top: 6px;
          color: rgb(93, 183, 60);
          cursor: pointer;
        "
        @click="toExpertList()"
      >
      </div>
    </h3>
    <el-divider class="ccy-drvider"></el-divider>
    <div class="waterfallReply_content" v-loading="loading">
      <el-row :gutter="20">
        <el-col :span="8">
          <div ref="col1">
            <transition-group name="list">
              <div
                class="item"
                v-for="item in dataList1"
                :key="!!item ? (item.id ? item.id : '') : ''"
              >
                <miniReplyCard :oneReply="item"></miniReplyCard>
              </div>
            </transition-group>
          </div>
        </el-col>
        <el-col :span="8"
          ><div ref="col2">
            <transition-group name="list">
              <div
                class="item"
                v-for="item in dataList2"
                :key="!!item ? (item.id ? item.id : '') : ''"
              >
                <miniReplyCard :oneReply="item"></miniReplyCard>
              </div>
            </transition-group>
          </div>
        </el-col>
        <el-col :span="8"
          ><div ref="col3">
            <transition-group name="list">
              <div
                class="item"
                v-for="item in dataList3"
                :key="!!item ? (item.id ? item.id : '') : ''"
              >
                <miniReplyCard :oneReply="item"></miniReplyCard>
              </div>
            </transition-group>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import miniReplyCard from "../expertInterrogationChildren/miniReplyCard";
export default {
  data() {
    return {
      replyList: [],
      dataList1: [],
      dataList2: [],
      dataList3: [],
      page: 1,
      size: 3,
      count: 0,
      loading:true
    };
  },
  components: {
    miniReplyCard,
  },
  methods: {
    // 通过一个帖子id获取一条回复(并发请求)
    async getOneReplyById(ids) {
      let httpTasks = [];
      ids.forEach((id) => {
        httpTasks.push(
          // this.$http.get
          this.reqM2Service
          (
            `/info/details/findByPost/${id}/1/1`,{},'get'
          )
        );
      });
      return this.$http.all(httpTasks);
    },
    // 发送请求获取帖子
    async getRepliesList(page = 1, size = 3) {
      this.page = page;
      this.size = size;
      await this.reqM2Service
        (`/info/post/findAll/${page}/${size}`,{},'get')
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
            if (res.rows.length == 0) {
              this.$message({
                message: "没有下一页数据了",
              });
              this.loading = false;
              return;
            }
            let ids = [];
            res.rows.forEach((item) => ids.push(item.id));
            this.getOneReplyById(ids).then(
              this.$http.spread((...data) => {
                data.forEach((item, index) => {
                  this.$set(
                    res.rows[index],
                    "reply",
                    item.data.data.rows?.[0]?.reply
                  );
                });
                this.replyList.push(...res.rows);
                this.loading = false;
                this.mountData(this.count);
                // 等渲染完再绑定滚动监听
                this.$refs.waterfallReply.ownerDocument.onscroll = this.reloadNextPage;
              })
            );
          } else {
            this.$message({
              message: "获取帖子信息失败",
            });
          }
          this.loading = false;
        });
    },
    // 递归挂载帖子
    mountData(count = 0) {
      this.count = count;
      if (this.replyList.length <= count) return;
      let listName = this.selectCol();
      this[listName].push(this.replyList[count]);
      this.$nextTick(() => this.mountData(count + 1));
    },
    // 选择高度比较小的列
    selectCol() {
      let getHeight = (col) => this.$refs[col]?.offsetHeight;
      let height1 = getHeight("col1"),
        height2 = getHeight("col2"),
        height3 = getHeight("col3");
      console.log(height1, height2, height3);
      switch (Math.min(height1, height2, height3)) {
        case height1:
          return "dataList1";
          break;
        case height2:
          return "dataList2";
          break;
        case height3:
          return "dataList3";
          break;
      }
    },
    // 难点：触底加载下一页
    reloadNextPage(e) {
      // console.log("scrollTop: " + e.target.scrollingElement.scrollTop);
      // console.log("scrollHeight: " + e.target.scrollingElement.scrollHeight);
      // console.dir("clientHeight: " + e.target.scrollingElement.clientHeight);
      // console.dir(e.target)
      // 滚动过的高度
      let scrollTop = e.target.scrollingElement.scrollTop;
      // 客户端的高度
      let clientHeight = e.target.scrollingElement.clientHeight;
      // 总的滚动高度
      let scrollHeight = e.target.scrollingElement.scrollHeight;
      // console.log('scrollHeight: ', scrollHeight);
      // console.log('scrollTop + clientHeight: ', scrollTop + clientHeight);
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        console.log("触底");
        // 先取消监听事件，防止重复触发
        e.target.onscroll = "";
        // 加载下一页
        this.loading = true;
        this.getRepliesList(this.page + 1, this.size);
      }
    },
  },
  async mounted() {
    await this.getRepliesList();
    // 监听根元素的滚动事件
    this.$refs.waterfallReply.ownerDocument.onscroll = this.reloadNextPage.bind(
      this
    );
  },
};
</script>
<style lang="less" scoped>
.ccy-drvider {
  margin: 10px 0 7px 0;
}
.waterfallReply {
  /deep/ .waterfallReply_content {
    display: flex;
    flex-direction: row;
    .ques_item {
      .up {
        .que_text a {
          text-decoration: none;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .mid {
        height: 100%;
        .que_text.reply_text .quetext.replytext {
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>