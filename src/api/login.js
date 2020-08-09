import service from "@/utils/request";
/**
 * 获取验证码的接口
 */
export function getSms(data){
    return service.request({
        method: "post",
        url:'/getSms/',
        data
    })
}

/**
 * 获取用户角色
 */

/**
 * 登录
 */
export function login(data) {
    return service.request({
        url: '/login/',
        method: 'post',
        data
    })
}

/**
 * 注册
 */
export function register(data) {
    return service.request({
        url: '/register/',
        method: 'post',
        data
    })
}