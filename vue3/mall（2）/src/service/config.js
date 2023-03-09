import axios from 'axios'

axios.defaults.baseURL = 'https://www.fastmock.site/mock/88981878c98020caf347cfd2373e0a28/mail'
// use  拦截
// 结果后，最外层data自动脱落 响应拦截
// 一次配置，其他地方就不用再data.data了
axios.interceptors.response.use(res => {
    return res.data
})
export default axios