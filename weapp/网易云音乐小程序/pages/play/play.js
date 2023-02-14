// pages/play/play.js

const myaudio = wx.createInnerAudioContext();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        //歌曲列表
        musiclist: [],
        // 当前歌曲下标
        nowIndex: "",
        // 当前歌曲数据
        music: {},
        // 歌曲id
        musicid: "",
        // 控制播放方法
        action: {
            "method" : "play"
        },
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取传过来的歌曲数据
        const eventChannel = this.getOpenerEventChannel()
        eventChannel.on('acceptDataFromOpenerPage', data => {
            // console.log(data.data)
            const nowIndex = data.data.nowIndex
            const musiclist = data.data.musiclist
            // 当前播放歌曲
            const music = musiclist[nowIndex]
            console.log(music);
            // 赋值
            this.setData({
                nowIndex: nowIndex,
                musiclist: musiclist,
                musicid:music.id
            })
        })
          // 调用获取歌曲详情方法
          this.getMusicDetail()
    },
      
        getMusicDetail: function() {
            wx.request({
              url: 'http://localhost:3000/song/detail?ids=' + this.data.musicid,
              success: (result) => {
                  console.log(result.data.songs[0]);
                  this.setData ({
                      music: result.data.songs[0]
                  })
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