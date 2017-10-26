var util = require("../../utils/util.js");
//获取全局变量
var app = getApp();
// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "inTheaters":{},
    "comingSoon":{},
    "top250":{},
    "searchResult":{},
    "showCont":true,
    "showSearch":false
  },
  //跳转电影详情页面
  onDetailTap:function(event){
    var movieId = event.currentTarget.dataset.movieid;
    console.log(movieId);
    wx.navigateTo({
      url: "movie-details/movie-details?id="+movieId,
    })
  },

  //搜索框获取焦点响应
  onBindFocus:function(event){
    console.log("bind");
    this.setData({
      showCont:false,
      showSearch:true
    });
  },
  //取消按钮响应
  onXTap:function(event){
    this.setData({
      showCont: true,
      showSearch: false,
      searchResult:{}
    });
  },
  //设置搜索响应 使用回车或者将鼠标移出触发 
  onBindBlur:function(event){
    //获取搜索框内的文本
    var text=event.detail.value;
    var SearchUrl = app.globalData.douban +"/v2/movie/search?q="+text;
    this.onGetMovieInfo(SearchUrl,"searchResult","");
  },
  onMoreTap:function(event){
    var category =event.currentTarget.dataset.category;
    wx.navigateTo({
      url: "more/more?category="+category
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event) {
    var top250 = app.globalData.douban + "/v2/movie/top250" + "?start=0&count=3";
    var in_theaters = app.globalData.douban + "/v2/movie/in_theaters" + "?start=0&count=3";
    var coming_soon = app.globalData.douban + "/v2/movie/coming_soon" + "?start=0&count=3";
    this.onGetMovieInfo(in_theaters,"inTheaters","正在热映");
    this.onGetMovieInfo(coming_soon,"comingSoon","即将上映");
    this.onGetMovieInfo(top250,"top250","豆瓣TOP250");
  },
  //从豆瓣获取数据
  onGetMovieInfo(urlName,setKey,cateTitle) {
    var that = this;
    wx.request({
      url: urlName,
      data: {},
      method: 'GET',
      header: {
        "Content-Type": "application/xml"
      },
      success: function (res) {
        that.onDealData(res.data, setKey,cateTitle);
        // console.log(res);
      },
      fail: function (res) {

      },
      complete: function () {

      }
    })
  },
  //处理数据
  onDealData: function (douData, setKey, cateTitle) {
    var movieData = [];
    for (var idx in douData.subjects) {
      var subject = douData.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      var temp = {
        stars: util.transStars(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        movieimg: subject.images.large,
        movieid: subject.id,
      }
      movieData.push(temp);
    }
    var tempData={};
    tempData[setKey]={
      cateTitle: cateTitle,
      movies:movieData
    };
    this.setData(tempData);
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