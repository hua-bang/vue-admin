import { login } from "@/api/login";

const app = {
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
    actions: {  //可以回调
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
}

export default app;