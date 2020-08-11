import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: false,
  },
  getters:{   //computed 计算属性
  },
  mutations: {  //更改state里面的值需要用到
    SET_COLLAPSE(state){
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {},
  modules: {}
});
