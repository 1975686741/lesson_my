// app.js
// require 关键字
const WXAPI = require('apifm-wxapi'); // 第三方模块
console.log(WXAPI);
const {merchantId,subDomain} = require('config.js');  // 自建模块
console.log(merchantId,subDomain);
App({
  onLaunch() {
    // 刚启动时
    // 初始化一下 WXAPI
    // 文档
    WXAPI.init(subDomain);
    WXAPI.setMerchantId(merchantId);
    // 测试一下请求
    // // 商品分类接口  异步
    // WXAPI.goodsCategory()
    // // 等http请求完成后
    // .then( data => {
    //     // 拿到数据并打印
    //     console.log(data);
    // })
  },
  globalData: {
    userInfo: null
  }
})
