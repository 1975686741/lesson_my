// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    title: '我的Dream car  奥迪R8',
    car: 'https://p3.dcarimg.com/img/motor-article-img/9b9fb8fdbf3643ac9bf147d448343cd5~820x0.webp'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
setTimeout(() => {
  this.setData({
title:'奥迪R8 男人的梦想',
car:'https://p3.dcarimg.com/img/motor-article-img/993d4ed556174aa59ba85d30e185949e~1850x0.webp'
  })
},3000)
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
