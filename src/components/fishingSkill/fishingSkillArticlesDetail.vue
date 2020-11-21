<template>
  <div class="lxl-body">
    <div class="lxl-box">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="lxl-breadcrumb"
      >
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>渔技学堂</el-breadcrumb-item>

        <el-breadcrumb-item :to="{ path: '/fishingSkillArticles' }"
          >渔技文章</el-breadcrumb-item
        >
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div>
        <h1 style="text-align: center;">中国对虾</h1>
        <div class="someThing">
          <div class="lxl-1">
            <div>
              <h2><i class="el-icon-info"></i> {{ infoData[0].name }}</h2>
              <p style="margin-top: 3px" v-html="infoData[0].baseInfo"></p>
              <el-divider></el-divider>
              <h2><i class="el-icon-info"></i> {{ infoData[1].name }}</h2>
              <p style="margin-top: 3px" v-html="infoData[1].baseInfo"></p>
            </div>
            <div style="height: auto">
              <div class="block">
                <el-carousel>
                  <el-carousel-item v-for="item in 4" :key="item">
                    <el-image
                      style="width: 100%"
                      src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1859649482,4258972817&fm=26&gp=0.jpg"
                    ></el-image>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoData: [
        {
          name: "形态特征",
          baseInfo:
            "<p>全长：雌性成体180～235mm，雄性成体130～170mm。 体形长大，侧扁，甲壳较薄，表面光滑。 通常雌虾个体大于雄虾。对虾全身由20节组成，头部5节、胸部8节、腹部7节。除尾节外，各节均有附肢一对。有5对步足，前3对呈钳状，后2对呈爪状。头胸甲前缘中央突出形成额角。额角上下缘均有锯齿。额角细长，平直前伸，顶端稍超出第二触角鳞片的末缘，其基部上缘稍微隆起，末端尖细。上缘基部2/3或3/5具7～9齿，末端尖细部分无齿；下缘具3～5齿，下缘齿甚小。头胸甲具眼眶触角沟，颈沟及触角侧沟，无中央沟及额胃沟。触角侧沟仅延伸至胃上刺附近。肝沟细而明显，平直前伸；其下方无肝脊。额角后脊至头胸甲中部消失。眼胃脊明显，占据自眼眶边缘至肝刺间距离的3/5。头胸甲具触角刺、肝刺及胃上刺，眼眶角圆形无眼上刺，前侧角亦为圆形而无颊刺。腹部第4至第6节背部中央具有纵脊，第6节长约为高的1.5倍。尾节长度微短于第6节，其末端甚尖，两侧无活动刺。 头部6节与胸部的8节愈合成头胸部，并完全为头胸甲所覆盖。头部还包括额角和具柄的复眼，附肢从前到后依次为：第一触角、第二触角、大颚、第一小颚、第二小颚各1对。3对颚足和5对步足。腹部6节，前5节各具一对腹肢，第六节具一对尾肢，与尾节组成尾扇。腹部附肢发达适于游泳，每一体节包括一背板和一腹板。口位于头胸部腹面，由大颚、第一小颚、第二小颚及三对颚足共同形成口器。肛门位于尾节腹面基部。 第一触角上触鞭长度约为头胸甲的11/3倍，下触鞭长度约为头胸甲的2/3而与额角相等。第二触角鳞片末缘超出第一触角柄但不及额角的末端，其触鞭很长，约为体长的21/2倍。第一小颚的内肢由2节或3节构成，第一节基部内外缘皆有一突起，内缘末端有一硬刺及一细毛，第二节短小，若具第三节者，则更细小。第三颚足雌性较短，仅伸至第一触角柄第二节中部附近，其指节细小，长度仅为掌节的1/2；雄性较长，伸至第一触角柄末端或超出，其指节较雌性长，稍短于其掌节。5对步足皆具短小的外肢，前3对步足皆呈钳状，以第3对步为最长，伸至第一触角柄末端（雌）或第2触角鳞片末端（雄）附近；后2对步足伸至眼的中部附近。雄虾第1腹肢的内肢变形特化成交接器，略呈钟形，中部纵行卷曲，形成圆筒状，中叶的顶端稍尖，伸出到侧叶末缘之外；第2腹肢内肢内缘基部具一附属肢体，由两节构成，末节呈方圆形，其长度大于宽度。雌虾第4～5对步足基部的腹甲上，具有一圆盘状交接器，其长度略大于宽度，基部两侧各有1个小突起中央有纵行开口，开口的边缘向外卷曲，口内为一空囊，称之为纳精囊，开口前方有一较大圆形突起，上生密毛。</p><p>养殖品一般体长12-15厘米，体重20-40克。生命周期为一年，个别能活两三年。</p>",
        },
        {
          name: "生活习性",
          baseInfo:
            "<p>中国明对虾属广温、广盐性、一年生暖水性大型洄游虾类，雄虾俗称“黄虾”，一般体长155毫米，体重30－40克；雌虾俗称“青虾”，一般体长190毫米，体重75－85克。体色青中衬碧，玲珑剔透，长半尺许，故又叫大虾。平时在海底爬行，有时也在水中游泳。渤海湾对虾每年秋末冬初，便开始越冬洄游，到黄海东南部深海区越冬；翌年春北上，形成产卵洄游。4月下旬开始产卵，怀卵量30－100万粒，雌虾产卵后大部分死亡。卵经过数次变态成为仔虾，仔虾约18天经过数十次蜕皮后，变成幼虾，于6－7月份在河口附近摄食成长。5个月后，即可长成12厘米以上的成虾，9月份开始 向渤海中部及黄海北部洄游，形成秋收渔汛。其渔期在5月中旬至10月下旬，主要渔具为拖网、锚流网和张网等，改秋捕后规定开捕期自9月份以后。中国对虾的生活史包括受精卵、胚胎期、无节幼体、蚤状幼体、糠虾幼体、仔虾、幼虾和成虾等阶段。成熟的亲虾在近岸浅水水域产卵；胚胎发育阶段在卵膜内度过；孵化后为无节幼体、蚤状幼体、糠虾幼体在水中营浮游生活；发育到仔虾之后由浮游生活逐渐转营底栖生活并向河口、浅水区移动；幼虾在近岸水域、河口地区生活，随生长而渐移向外海深水区，待成熟后又游至近岸产卵。中国对虾有明显的季节性洄游习性，五、六月间新生的幼虾，到九、十月间体长与亲体大小相似，十月底雄虾发育成熟，开始交配。此时近岸区水温降低，虾群开始向外海集结，十二月逐渐游离渤海，陆续经山东半岛沿岸到黄海南部深水区越冬，称之为越冬洄游。翌年春季二、三月间又开始向北洄游，主群三、四月间经山东半岛沿岸进入渤海，到四月底五月初开始在莱州湾、渤海湾及辽东湾各大河口附近产卵繁殖，称之为产卵洄游。</p>",
        },
      ],
    };
  },
  methods: {
    getDiseaseInfo() {
      console.log(this.$router);
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
  margin-bottom: 40px;
}
.lxl-box {
  width: 1150px;
}
.someThing {
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: rgb(245, 245, 245);
  display: flex;
  .lxl-1 {
    display: inherit;
    flex-direction: row;
    font-size: 13px;
    line-height: 30px;
    > * {
      flex: 1;
      padding: 10px;
    }
  }
}
/deep/.el-carousel__button {
  background-color: rgb(204, 123, 18) !important;
}
</style>