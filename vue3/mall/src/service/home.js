import axios from './config.js' // 配置文件

export function getHomeData() {
   return axios.get('/index-infos')
}