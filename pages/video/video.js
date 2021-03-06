// pages/video/video.js
const url = 'http://m10.music.126.net/20190530122322/1b63dbd89ceaf76451268f0f0c8c4ac3/ymusic/7a0a/0e2f/87ac/92a20ea5c429bb61e61bc5bc23f1f4c6.mp3'

const innerAudioContext = wx.createInnerAudioContext()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.configAudio()
  },

  /**
   * 音频初始化
   */
  configAudio() {
    innerAudioContext.src = url
    // innerAudioContext.autoplay = true
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })

  },
  /**
   * 开始或暂停按钮
   */
  startOrStop() {
    if (this.data.isPlaying) {
      innerAudioContext.pause()
    } else {
      innerAudioContext.play()
    }
    this.data.isPlaying = !this.data.isPlaying

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})