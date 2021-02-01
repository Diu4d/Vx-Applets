// pages/demo5/demo5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    dataList:[]
  },
  getData(num=5,page=0){
    wx.cloud.callFunction({
      name:"demolist",
      data:{
        num:num,
        page:page
      }
    }).then(res=>{
      var oldData = this.data.dataList
      var newData=oldData.concat(res.result.data)
      //旧数组与新数组合并内容，并设置合并的内容为就数组继续合并
      console.log(res);
      this.setData({
        dataList:newData
      })
    })
  },


  onLoad: function (options) {
    this.getData()
  },
  onReachBottom: function () {
    var page = this.data.dataList.length
    this.getData(5,page)
    //获取dataList的长度从他的长度开始动态添加后面的数据,没有则停止
    console.log(this.data.dataList);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})