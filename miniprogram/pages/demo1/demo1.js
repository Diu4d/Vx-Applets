const db = wx.cloud.database();
var myvalue = '';
// pages/demo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr:''
  },
  updateValue(){
    db.collection('demolist').doc('1526e12a601366990134efb916f1b936').update({
      // db.collection('demolist').doc('1526e12a601366990134efb916f1b936').set
      //data对象内写更新的内容，更新至集合内删去除data对象内数据外的其他内容
      data:{
        author:"deng",
        posttime:"2021-1-1"
        //还可以往集合里增加字段
      }
    }).then(res=>{
      console.log(res);
    })
  },
  delData(){
    db.collection('demolist').doc(myvalue).remove()
    //从云数据库删除这个集合
    .then(res=>{
      console.log(res);
    })
  },
  inputValue(e){
    console.log(e);
    var value = e.detail.value
    myvalue = value
    //将res给外面的全局变量因为另一个函数访问不了局部变量
  },
  btnNum(){
    db.collection('demolist').count().then(res=>{
      console.log(res);
      //数据库有多少条字段
    })
  },
  getData(){
    db.collection("demolist")
    .get()
    .then(res=>{
      this.setData({
        dataArr:res.data
        //获取数据得到dataArr内
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    db.collection('demolist').watch({
      onChange:res=>{
        console.log(res);
        this.setData({
          dataArr:res.docs
          //监听事件
        })
      },
      onError:res=>{
        console.log(res);
      }
    })
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