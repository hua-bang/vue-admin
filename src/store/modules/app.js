import { login } from "@/api/login";

const state = {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
}

const getters = {   //computed 计算属性
}

const mutations = {  //更改state里面的值需要用到
    SET_COLLAPSE(state){
        state.isCollapse = !state.isCollapse

        //html5本地存储
        sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
        // Cookie.set('isCollapse',JSON.stringify(state.isCollapse))
    }
}

const actions = {  //可以回调
    actionLogin(content,data){
        return new Promise((resolve, reject) => {
            login(data).then((response) => {
                resolve(response)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};