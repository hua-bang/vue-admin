import axios from "axios"
import { Message } from 'element-ui';
//创建axios,赋给变量service
const BASEURL = process.env.NODE_ENV === 'production' ? 'http://web-jshtml.cn/productapi' : '/devApi';
const service = axios.create({
    baseURL: BASEURL,
    timeout: 10000
});

/**
 * 请求接口前，请求拦截器
 */
service.interceptors.request.use(function (config) {
    //发送请求前

    return config;
},function (error) {
    return Promise.reject(error)
});

/**
 * 请求接口后，返回数据的拦截相应拦截器
 */
service.interceptors.response.use(function (response){
    let data = response.data;
    if(data.resCode !== 0){
        Message.error(data.message)
        return Promise.reject(data)
    }else{
        return response
    }
},function (error){
    return Promise.reject(error)
});

export default service;