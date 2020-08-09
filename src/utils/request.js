import axios from "axios"
import { Message } from 'element-ui';
//创建axios,赋给变量service
const BASEURL = process.env.NODE_ENV === 'production' ? 'http://web-jshtml.cn/productapi' : '/devApi';
const service = axios.create({
    baseURL: BASEURL,
    timeout: 10000
});

service.interceptors.request.use(function (config) {
    return config;
},function (error) {
    return Promise.reject(error)
});

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