<template>
  <div class="waterfallReply">
    <h3
      style="
        display: flex;
        justify-content: space-between;
        margin: 15px 5px 5px 4px;
      "
    >
      <div>
        <span
          style="margin-right: 5px; border-left: 6px solid rgb(93, 183, 60)"
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
        <span style="color: #9e9e9e"> 更多 </span>
        <i class="el-icon-caret-right"></i>
      </div>
    </h3>
    <el-divider class="ccy-drvider"></el-divider>
    <div class="waterfallReply_content">
      <el-row :gutter="20">
        <el-col :span="8">
          <div ref="col1">
            <transition-group name="list">
              <div
                class="item"
                v-for="item in dataList1"
                :key="item ? item.id : ''"
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
                :key="item ? item.id : ''"
              >
                <miniReplyCard :oneReply="item"></miniReplyCard>
              </div>
            </transition-group>
          </div>
        </el-col>
        <el-col :span="8"
          ><div ref="col3">
            <transition-group name="list">
              <div class="item" v-for="item in dataList3" :key="item.id">
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
      replyList: [
        {
          id: "1",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veritatis tempora sapiente dolores nobis in explicabo, sint fugiat dicta beatae.",
          reply:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, neque?",
          creationTime: "2020-08-03 10:40:40",
        },
        {
          id: "2",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nesciunt!",
          reply: "Lorem ipsum dolor sit amet.",
          creationTime: "2020-08-03 10:40:40",
        },
        {
          id: "3",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab aut, sunt earum tenetur officia hic ipsam error, aperiam, perspiciatis fugiat neque molestias modi nisi omnis inventore quasi? Repudiandae, dolorum.",
          reply:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, magnam! Quo soluta ipsum nisi, officiis voluptas maiores repudiandae nihil perspiciatis.",
          creationTime: "2020-08-03 10:40:40",
        },
        {
          id: "4",
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia distinctio officia, sed inventore nostrum repellat quisquam facilis quae iusto id?",
          reply:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque.",
          creationTime: "2020-08-03 10:40:40",
        },
        {
          id: "5",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, molestias. Soluta inventore nam nostrum!",
          reply:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil cupiditate.",
          creationTime: "2020-08-03 10:40:40",
        },
        {
          id: "6",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, molestias. Soluta inventore nam nostrum!",
          reply:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil cupiditate.",
          creationTime: "2020-08-03 10:40:40",
        },
        {
          id: "7",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, molestias. Soluta inventore nam nostrum!",
          reply:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil cupiditate.",
          creationTime: "2020-08-03 10:40:40",
        },
        {
          id: "8",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, molestias. Soluta inventore nam nostrum!",
          reply:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil cupiditate.",
          creationTime: "2020-08-03 10:40:40",
        },
        {
          id: "9",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, molestias. Soluta inventore nam nostrum!",
          reply:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil cupiditate.",
          creationTime: "2020-08-03 10:40:40",
        },
      ],
      dataList1: [],
      dataList2: [],
      dataList3: [],
    };
  },
  components: {
    miniReplyCard,
  },
  methods: {
    async getOneReplyById(ids) {
      let httpTasks = [];
      ids.forEach((id) => {
        httpTasks.push(
          this.$http.get(
            `http://106.75.154.40:9012/info/details/findByPost/${id}/1/1`
          )
        );
      });
      return this.$http.all(httpTasks);
    },
    async getRepliesList(page = 1, size = 9) {
      await this.$http
        .get(`http://106.75.154.40:9012/info/post/findAll/${page}/${size}`)
        .then((res) => {
          res = res.data;
          if (res.code === 20000) {
            res = res.data;
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

    mountData(count = 0) {
      if (this.replyList.length < count) return;
      let listName = this.selectCol();
      console.log(listName);
      this[listName].push(this.replyList[count]);
      this.$nextTick(() => this.mountData(count + 1));
    },
    selectCol() {
      let getHeight = (col) => this.$refs[col].offsetHeight;
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
  },
 async mounted() {
   this.mountData();
   await this.getRepliesList()
    console.log(this.replyList)
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