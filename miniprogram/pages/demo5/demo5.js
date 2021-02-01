// pages/demo5/demo5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[]
  },
  getData(){
    wx.cloud.callFunction({
      name:"demolist",
      data:{
        num:5
      }
    }).then(res=>{
      console.log(res.result.data);
      this.setData({
        datalist:res.result.data
      })
    })
  },


  onLoad: function (options) {
    this.getData()
  },

  
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