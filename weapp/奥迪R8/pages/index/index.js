// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
         slides:[{
            "id": 5,
            "header": "全新一代发现",
            "sub_header": "Discovery",
            "description": "全尺寸七座 SUV，现已接受预订。",
            "image": "https://p3.dcarimg.com/img/tos-cn-i-0000c0030/21408e88d9774e95a04ac06ef5371b79~1200x0.webp"
          },
          {
            "id": 3,
            "header": "全新揽胜星脉",
            "sub_header": "Range Rover",
            "description": "标新立异的前卫揽胜。",
            "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.w2IgvDRyo7k08FjJN1qjJgHaKO?pid=ImgDet&rs=1"
          },
          {
            "id": 6,
            "header": "发现神行",
            "sub_header": "Discovery",
            "description": "发现的绝佳时刻。",
            "image": "https://p3.dcarimg.com/img/motor-article-img/993d4ed556174aa59ba85d30e185949e~1850x0.webp"
          }]
  },
  testDrive() {
console.log('试驾一下，百公里2.9s');
  },
  readMore(event) {
      let id = event.target.dataset.id
    //   console.log(id);
    wx.navigateTo({
      url: `/pages/wehicles/show?id=${id}`
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
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
