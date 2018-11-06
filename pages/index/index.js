// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      is_shade:0,
      is_chat: 0,
      is_more:0
  },
  chat:function(){
      var that = this
    //   that.setData({ 'is_shade': 1, is_more: 1, 'text': '哈哈，还没开始呢！！'})
    wx.navigateTo({
        url: '../chat/index',
    })
  },
  more:function(){
      var that=this
      that.setData({ 'is_shade': 1, is_more: 1, 'text': '嘻嘻，更多精彩，敬请期待哦！！'})
  },
    close:function(){
        var that = this
        that.setData({ 'is_shade': 0, is_more: 0})
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})