<template>
  <div class="partTwo">
    <div class="title">专家问答</div>
    <div class="expertReply">
      <miniReplyCard></miniReplyCard>
      <miniReplyCard></miniReplyCard>
      <miniReplyCard></miniReplyCard>
    </div>
  </div>
</template>
<script>
import miniReplyCard from "./miniReplyCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    miniReplyCard,
  },
};
</script>
<style lang="less">
.partTwo {
    .title{
        
    }
    .expertReply{
        display: flex;
        flex-direction: column;
    }
}
</style>