// pages/demo6/demo6.js
var urlArr =[];
var filePath = [];
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  clickBtn(){
    wx.chooseImage({
      success:res=>{
        console.log(res);
        filePath = res.tempFilePaths
        filePath.forEach((item,idx)=>{
          var filename=Date.now()+"_"+idx;
          this.cloudFile(filename,item)
        })
      }
    })
  },
  cloudFile(fileName,path){
    wx.showLoading({
      title: '上传中请等待...',
    })
    wx.cloud.uploadFile({
      cloudPath:fileName+".jpg",
      filePath:path
    }).then(res=>{
      urlArr.push(res.fileID)
      if(filePath.length==urlArr.length){
        this.setData({
          urlArr
        })
      }
      wx.hideLoading()
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