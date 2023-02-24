import Mock from 'mockjs'
import swiperList from './data/swiperList'
import videosList from './data/videosList'
import products from './data/shop';

// - 假接口满足什么? 数据 url
Mock.setup({
    timeout: '50-1000' // 随机的延迟时间, 模式请求耗时
})
// 轮播图 url /swiperList
Mock.mock(/\/swiperList/, 'get', () => {
    return {
      code: 0,
      result: swiperList
    }
})

Mock.mock(/\/videosList/, 'get', () => {
    return {
      code: 0,
      result: videosList
    }
})

// mock假冒服务器
Mock.mock(/\/products/, 'get', () => {
  return {
    code: 0,  // 没有错误发生 状态码为0
    result: products
    // code: 1
    // msg: '服务器出错了'
  }
})