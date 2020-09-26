import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import baseUrl from './router/url'
Vue.config.productionTip = false
Vue.prototype.global = baseUrl

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
