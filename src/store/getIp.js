// 获取ip存到vuex
import store from './index.js'
setTimeout(() => {
    store.dispatch("changeUserDataAsycn")
}, 1000);