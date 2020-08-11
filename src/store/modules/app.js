import { login } from "@/api/login";
import {setToken, getToken, setUsername, getUsername} from "@/utils/app";

const state = {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
    token: getToken() || '',
    username: getUsername() || ''
}

const getters = {   //computed 计算属性
    username: state => state.username
}

const mutations = {  //更改state里面的值需要用到
    SET_COLLAPSE(state){
        state.isCollapse = !state.isCollapse

        //html5本地存储
        sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
        // Cookie.set('isCollapse',JSON.stringify(state.isCollapse))
    },
    SET_TOKEN(state,value){
        state.token = value
    },
    SET_USERNAME(state,value){
        state.username = value
    }
}

const actions = {  //可以回调
    actionLogin(content,data){
        return new Promise((resolve, reject) => {
            login(data).then((response) => {
                let data = response.data.data
                content.commit('SET_TOKEN',data.token)
                content.commit('SET_USERNAME',data.username)
                setToken(data.token)
                setUsername(data.username)
                // token , username
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