//路由守卫
import router from "@/router/index";
import { getToken } from "@/utils/app";
const whiteRouter = ['/login'];

router.beforeEach((to, from, next) => {
    if(getToken()){

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