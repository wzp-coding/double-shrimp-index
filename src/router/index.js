import Vue from 'vue'
import VueRouter from 'vue-router'
import industryMarket from '../components/IndustryInformation/industryMarket.vue'
import emall from '../components/emall/emall.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/industryMarket'
  },
  {
    path: '/industryMarket',
    component: industryMarket
  },
  {
    path: '/emall',
    component: emall
  }
]

const router = new VueRouter({
  routes
})

export default router
