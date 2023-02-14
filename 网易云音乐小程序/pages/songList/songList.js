// pages/songList/songList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: {},
        // 歌手
        singer: {},
        // 新音乐列表
        newMusiclist: []
    },
    // 获取banner 
    getBanner: function () {
        wx.request({
            url: 'http://localhost:3000/banner',
            dataType: "json",
            success: (result) => {
                // 设置给bg
                this.setData({
                    background: result.data.banners
                })
            },

        })
    },
    // 获取歌手
    getSinger: function () {
        wx.request({
            url: 'http://localhost:3000/top/artists',
            dataType: "json",
            success: (result) => {
                // console.log(result.data.artists)
                // 设置给bg
                this.setData({
                    singer: result.data.artists
                })
            },
        })
    },
    // 获取新音乐
    getnewMusic: function () {
        wx.request({
            url: 'http://localhost:3000/personalized/newsong',
            dataType: "json",
            success: (result) => {
                console.log(result.data.result)
                //
                this.setData({
                    newMusiclist: result.data.result
                })
            },
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 找到banner
        this.getBanner()
        // 找到歌手
        this.getSinger()
        // 获取新音乐
        this.getnewMusic()
    },
    // 点击热门歌手 
    hotlink: function (e) {
        // console.log(e.data.currentTarget.dataset.index);
        // 获取当前下标
        const index = e.currentTarget.dataset.index
        // 拿到当前数据
        const singer = this.data.singer
        // console.log(singer[index]);
        // 跳转页面和数据传递
        wx.navigateTo({
            url: '/pages/singerDetail/singerDetail',
            success: function (res) {
                res.eventChannel.emit('acceptDataFromOpenerPage', { data: singer[index] })
            }
        })
    },
    // 点击跳转play页面
    playlink: function (e) {
        // 拿到当前下标
        const index = e.currentTarget.dataset.index
        // 拿到播放列表数据
        const musicdata = this.data.newMusiclist
        // 获取歌曲id
        const mid = musicdata[index].id
        wx.request({
            url: 'http://localhost:3000/check/music?id=' + mid,
            success: (res) => {
                //   console.log(res.data);
                if (res.data.message === "ok") {
                    console.log("可以播放");
                    // 定义数据对象
                    const objdata = {}
                    // 存储列表数据
                    objdata.musiclist = musicdata
                    // 存储当前播放的歌曲下标
                    objdata.nowIndex = index
                    console.log(objdata);
                    wx.navigateTo({
                      url: '/pages/play/play',
                    //   events: events,
                      success: (result) => {
                        result.eventChannel.emit('acceptDataFromOpenerPage', { data: objdata })
                      },                   
                    })
                } else {
                    console.log("不能播放");
                    // 弹窗提示
                    wx.showModal({
                        title: '提示',
                      content: '歌曲没有版权，请选择其他歌曲播放',
                      showCancel: true
                    })
                }
            }
        })

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})