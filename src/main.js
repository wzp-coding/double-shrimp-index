import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://106.75.154.40:9003'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
