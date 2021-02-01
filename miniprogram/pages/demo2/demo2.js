var db = wx.cloud.database()
// pages/demo2/demo2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  btnClick(){
    db.collection('demolist').limit(5).skip(3).field({
      title:true,
      author:true
      //field内写的内容表示其中的字段是否返回
    }).orderBy('title','asc').get()
    //orderBy('name','asc')排序
    //orderBy('name','desc')
    //limit一次获取多少条数据
    //skip跳过数据
    .then(res=>{
      console.log(res);
    })
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