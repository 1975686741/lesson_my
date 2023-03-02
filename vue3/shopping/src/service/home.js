import axios from "./config.js"

const getSwiperList = () => {
  return axios.get('/swiperList')
}

// const getCategoryList = () => {
//   return axios.get('/CategoryList')
// }

export { getSwiperList }//, getCategoryList