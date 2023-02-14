// app.js
App({
  nLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  addToCart(obj) {
    // 之前买过不？ 数量加 + 1
    // 加入cartList 
    //  es6 
    const oldInfo = this.globalData.cartList
      .find(item => item.iid === obj.iid );
    console.log(oldInfo, '????');
    if (oldInfo) {
      oldInfo.count++;
    } else {
      obj.count = 1
      obj.checked = true // 默认勾选
      this.globalData.cartList.push(obj)
    }
    wx.setStorage({
      key: 'cart',
      data:  this.globalData.cartList
    })
  },
  globalData: {
    cartList: []
  }
})
