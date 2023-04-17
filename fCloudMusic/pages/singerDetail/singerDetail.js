// pages/singerDetail/singerDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 当前歌手数据
        singerdata: {},
        // 歌手详情
        singerdetail: {},
        // 歌手热门歌曲
        hotMusicList: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取页面传输过来的歌手基本数据，并进行存储
        const eventChannel = this.getOpenerEventChannel()
        eventChannel.on('acceptDataFromOpenerPage', data => {
            // console.log(data.data.id)
            this.setData({
                singerdata: data
            })
        })
        // 调用渲染页面的方法
        this.getdetail()
        // 调用热门歌曲
        this.gethotMusic()

    },
    //页面详情数据获取
    getdetail: function () {
        // 获取id
        const id = this.data.singerdata.data.id
        console.log(id);
        // 通过id来做数据请求
        wx.request({
            url: 'http://localhost:3000/artist/detail?id=' + id,
            success: (result) => {
                // console.log(result);
                this.setData({
                    singerdetail: result
                })
            },
        })
    },
    // 热门歌曲
    gethotMusic: function () {
        // 获取id
        const id = this.data.singerdata.data.id
        // console.log(id);
        // 通过id来做数据请求
        wx.request({
            url: 'http://localhost:3000/artist/top/song?id=' + id,
            success: (result) => {
                // console.log(result);
                this.setData({
                    hotMusicList: result
                })
            },
        })
    },
    // 点击跳转play页面
    playlink: function (e) {
        // 拿到当前下标
        const index = e.currentTarget.dataset.index
        // 拿到播放列表数据
        const musicdata = this.data.hotMusicList.data.songs
        // console.log(musicdata);


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
                            result.eventChannel.emit('acceptDataFromOpenerPage', {
                                data: objdata
                            })
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