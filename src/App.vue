<template>
  <div id="app">
    <NavNav></NavNav>
    <router-view></router-view>
    <!-- <FooterFooter></FooterFooter> -->
  </div>
</template>
<script>
import NavNav from "./components/login/nav.vue";
import FooterFooter from "./components/login/footer.vue";
export default {
  name: "app",
  components: { NavNav, FooterFooter },
};
</script>

