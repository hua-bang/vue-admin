//路由守卫
import router from "@/router/index";
import { getToken, removeToken, removeUsername } from "@/utils/app";
import store from "../store/index"

const whiteRouter = ['/login'];

router.beforeEach((to, from, next) => {
    if(getToken()){
        if(to.path === "/login"){
            removeToken()
            removeUsername()
            store.commit("app/REMOVE_TOKEN")
            store.commit("app/REMOVE_USERNAME")
            next();
        }else{
            //获取用户角色
            //动态分配路由权限
            next();
        }

    }else {
        if(whiteRouter.indexOf(to.path) !== -1){
            next();
        }else{
            next('/login')
        }
    }
    next()
    // token令牌验证是否有权限

})