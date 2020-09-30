import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://106.75.154.40:9003'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
