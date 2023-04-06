import  {axios}  from './http'

export const getColumn = () => {
    return axios.get('/columns?currentPage=1&pageSize=3')
}