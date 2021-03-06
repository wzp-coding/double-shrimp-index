import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      loginId:"尚未登录",
      role:"游客",
      photo:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    },
    token: '',
    isLogin: false,
    ip:'',
    baseId: ''
  },
  mutations: {
    changeUserData(state, step) {
      state.userData = step
    },
    changeToken(state, step) {
      state.token = step
    },
    changeIsLogin(state, step) {
      state.isLogin = step
    },
    saveIp(state, step) {
      state.ip = step
    }
  },
  actions: {
    changeUserDataAsycn(content) {
      content.commit(
        "changeUserData",
        JSON.parse(window.sessionStorage.getItem("userData"))
      );
      content.commit(
        "changeToken",
        window.sessionStorage.getItem("token")
      );
      content.commit("changeIsLogin", true);
      content.commit("saveIp", window.localStorage.getItem("Ip"));
    },
    loginAsycn(content, step) {
      window.sessionStorage.setItem("token", step.headers.token);
      window.sessionStorage.setItem(
        "userData",
        JSON.stringify(step.data.data)
      );
      content.commit("changeToken", step.headers.token);
      content.commit("changeUserData", step.data.data);
      content.commit("changeIsLogin", true);
    }
  },

  getters: {
    getIsLogin: state => {
      return state.isLogin
    }
  }

})
