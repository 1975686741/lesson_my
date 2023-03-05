import axios from './config.js' // 配置文件

// 登录
export function login(params) {
   return axios.post('/user/login', params)
}

// 注册
export function register(params) {
  return axios.post('/user/register', params)
}