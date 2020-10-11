import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import baseUrl from './router/url'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.global = baseUrl
Vue.prototype.$http = axios
axios.defaults.baseURL = baseUrl
import store from './store'
import echarts from 'echarts'


Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://106.75.154.40:9003'
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
