import  axios  from "axios";

// 请求的默认前缀   方便切换到线上接口
axios.defaults.baseURL = 'http://localhost:3000'



// 相应拦截
axios.interceptors.response.use(data => {
    return data.data
})



export default  axios