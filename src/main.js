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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
