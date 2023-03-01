import axios from 'axios';

// 相应拦截
axios.interceptors.response.use((data) => {
    return data.data
})

export default axios