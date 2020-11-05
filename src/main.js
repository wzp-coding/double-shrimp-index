import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import store from './store'
import echarts from 'echarts'
import { domain } from './router/url'
import commonUrl from './router/commonUrl'
// 播放插件
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

Vue.config.productionTip = false

Vue.use(commonUrl)

Vue.prototype.$http = axios
//配置axios
//->1,模块一接口,url地址
axios.defaults.baseM1URL = domain.Base_M1_URL
axios.defaults.baseM13URL = domain.Base_M13_URL
//->1,模块一接口,url地址
//->2,模块二接口,url地址
axios.defaults.baseM2URL = domain.Base_M2_URL
//->3,模块三接口,url地址
axios.defaults.baseM3URL = domain.Base_M3_URL
axios.defaults.baseM31URL = domain.Base_M31_URL
//->4,模块四接口,url地址
axios.defaults.baseM4URL = domain.Base_M4_URL
axios.defaults.baseM41URL = domain.Base_M41_URL

Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
