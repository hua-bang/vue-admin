import Vue from "vue";
import Vuex from "vuex";
import Cookie from "cookie_js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
  },
  getters:{   //computed 计算属性
  },
  mutations: {  //更改state里面的值需要用到
    SET_COLLAPSE(state){
      state.isCollapse = !state.isCollapse

      //html5本地存储
      sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
      // Cookie.set('isCollapse',JSON.stringify(state.isCollapse))
    }
  },
  actions: {},
  modules: {}
});
