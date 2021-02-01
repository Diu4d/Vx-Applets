const db = wx.cloud.database();
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:""
  },
  getData(){
    // db.collection("demolist")
    //多个字段的操作
    //满足其中一个条件即可取过来
    // .where(_.or([
    //   {
    //     num:_.lt(800)
    //   },
    //   {
    //     author:_.eq('张三')
    //   }
    // ])
    // -------------------------------
      // num:_.lt(400),
      // author:"张三"
      // num:_.or(_.gt(1000),_.lte(400))
      // 针对一个字段的操作
      //大于1000或小于等于400的字段
      //---------------------------
      // num:_.and(_.gt(300),_.lt(800))
      //获取num小于1000的字段
      //and用于表示逻辑"与"的关系
    // )
    db.collection('demolist').where({
      value:_.exists(true)
      //返回包含value的字段
    })
    db.collection('demolist').where({
      num:_.mod(2,0)
      // 找出2的倍数余数为0的字段
    })
    .get()
    .then(res=>{
      this.setData({
        dataList:res.data
      })
    })
  },
  upDate(){
    db.collection('demolist').doc('3b020ca36013675c0168703f3517ff5a')
    .update({
      data:{
        // title:'aaaaaa' 更新title为aaaaaa
        // num:_.inc(10) 自增10
        // ---------------------
        // style:_.set({
        //   color:'green',
        //   //字段内没有则添加，有则覆盖其中所有内容
        // })
        // ----------------------------
        // list:_.push('等某人')
        //有字段则添加，没有则创建个新数组
        // ------------------------------
        // list:_.pop()
        //删除字段的末尾元素
        // ---------------------------------
        // list:_.unshift('aaa','bbbb','cccc')
        //向数组字段的头部添加一个或多个元素
        // -------------------------------------
        // list:_.shift()
        //删除数组字段的头部元素
        // -----------------------------------
        // list:_.pull('bbbb')
        //给个常量删除字段内指定内容
        // --------------------------------------
        // list:_.pullAll(['cccc','[等某人]'])
        //和上面pull的区别在于一个指定常量，而pullall是指定数组
        // -----------------------------------------
        // list:_.addToSet('aaaa')
        list:_.push({
          each:['bbbb','cccc','ddddd'],
          position:1
          //addtoset可以添加一个元素或多个元素，each为字段
        })
        }
    })
    .then(res=>{
      console.log(res);
    })
  },

  onLoad: function (options) {

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