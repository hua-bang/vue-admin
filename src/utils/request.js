import axios from "axios"

//创建axios,赋给变量service
const service = axios.create();

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