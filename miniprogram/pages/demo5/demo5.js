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
      name:"demoGetList",
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



  // 点击将阅读数增加7
  clickRow(res){
    // 1.获取点击的id和索引值
    // 2.云函数进行更新操作
    // 3.前端连后端，将数据传输给后端，后端再返回数据
    // 4.重新渲染列表数据
    wx.showLoading({
      title: '数据加载中....',
    })
    var {id,idx} = res.currentTarget.dataset
    console.log(res);
    wx.cloud.callFunction({
      name:"demoUpList",
      data:{
        id:id
      }
    }).then(res=>{
      var newData = this.data.dataList
      newData[idx].num+=7
      this.setData({
        dataList:newData
      })
      wx.hideLoading()
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