var postData = require('../../data/postData.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    simagePath: ["/images/s1.jpg", "/images/s2.jpg", "/images/s3.jpg"],
    post_key: [

    ]
  },
  onPostTap: function (event) {
    //获取每一个post模块的id
    var postId = event.currentTarget.dataset.postid;
    //子页面所以用navigateTo
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
    //console.log("this is postId: " + postId);
  },
  onSwiperTap: function (event) {
    //currentTarget是事件捕获的组件 target是当前点击的组件
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      post_key: postData.postkey
    });
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