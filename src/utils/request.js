import axios from "axios";
import { getCookie } from './cookieUtils';
const service = axios.create({
  baseURL: '/api', //process.env.BASE_API
  timeout: 5000
})

service.defaults.headers.common['Authorization'] = getCookie("token")
// request拦截器
service.interceptors.request.use(config => {
  if (getCookie("token") != undefined) {
    config.headers['Authorization'] = getCookie("token") 
    // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

export default service