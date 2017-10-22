//获取全局变量
var app = getApp();
// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event) {
    var top250 = app.globalData.douban + "/v2/movie/top250" + "?start=0&count=3";
    var in_theaters = app.globalData.douban + "/v2/movie/in_theaters" + "?start=0&count=3";
    var coming_soon = app.globalData.douban + "/v2/movie/coming_soon" + "?start=0&count=3";
    // this.onGetMovieInfo(top250);
    this.onGetMovieInfo(in_theaters);
    // this.onGetMovieInfo(coming_soon);
  },
  //从豆瓣获取数据
  onGetMovieInfo(urlName) {
    var that = this;
    wx.request({
      url: urlName,
      data: {},
      method: 'GET',
      header: {
        "Content-Type": "application/xml"
      },
      success: function (res) {
        that.onDealData(res.data);
      },
      fail: function (res) {

      },
      complete: function () {

      }
    })
  },
  //处理数据
  onDealData:function(douData){
    var movieData=[];
    for(var idx in douData.subjects){
      var subject=douData.subjects[idx];
      var title=subject.title;
      if(title.length>=6){
        title=title.substring(0,6)+"...";
      }
      var temp={
        title:title,
        average:subject.rating.average,
        movieimg:subject.images.large,
        movieid:subject.id
      }
      movieData.push(temp);
      console.log(movieData);
    }
    this.setData({
      movies:movieData
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