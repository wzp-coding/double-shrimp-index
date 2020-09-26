import Vue from 'vue'
import VueRouter from 'vue-router'
import industryMarket from '../components/IndustryInformation/industryMarket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/industryMarket'
  },
  {
    path: '/industryMarket',
    component: industryMarket

  }
]

const router = new VueRouter({
  routes
})

export default router
