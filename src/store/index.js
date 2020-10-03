import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {},
    token: '',
    isLogin: false
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
