import axios from "axios"

//创建axios,赋给变量service
const BASEURL = process.env.NODE_ENV === 'production' ? 'http://web-jshtml.cn/productapi' : '/devApi';
const service = axios.create({
    baseURL: BASEURL,
    timeout: 1000
});

service.interceptors.request.use(function (config) {
    return config;
},function (error) {
    return Promise.reject(error)
});

service.interceptors.response.use(function (response){
    return response
},function (error){
    return Promise.reject(error)
});

export default service;