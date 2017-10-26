var util = require("../../../utils/util.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据  
   */
  data: {
    categroyTitle: "",
    movies: {},
    setUrl: "",
    moviesCount: 0,
    isEmpty: true
  },
  //跳转详情页面
  onDetailTap: function (event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: "../movie-details/movie-details?id=" + movieId,
    })
  },
  // 下滑加载更多
  onScrollLower: function (event) {
    //此处由于请求是异步加载，可能出现start没有更新就获取数据出现重复数据的情况
    //将start在此处更新即可避免此问题
    this.data.moviesCount += 20;
    var newUrl = this.data.setUrl + "?start=" + this.data.moviesCount + "&count=20";
    util.http(newUrl, this.onDealData);
    wx.showNavigationBarLoading();
  },
  //下拉刷新 未触发。。。
  onPullDownRefresh:function(event){
    var newUrl = this.data.setUrl;
    util.http(newUrl, this.onDealData);
    wx.showNavigationBarLoading();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var category = options.category;
    this.data.categroyTitle = category;
    var dataUrl = "";
    switch (category) {
      case "正在热映":
        dataUrl = app.globalData.douban + "/v2/movie/in_theaters";
        break;
      case "即将上映":
        dataUrl = app.globalData.douban + "/v2/movie/coming_soon";
        break;
      case "豆瓣TOP250":
        dataUrl = app.globalData.douban + "/v2/movie/top250";
        break;
    }
    this.data.setUrl = dataUrl;
    util.http(dataUrl, this.onDealData);
  },
  onDealData: function (douData) {
    //某一次获取的数据
    var movieData = [];
    //全部获取的数据
    var totalData = [];
    //判断之前是否加载过数据
    var isEmpty = this.data.isEmpty;
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
    if (isEmpty) {
      totalData = movieData;
      this.data.isEmpty = false;
    }
    else {
      totalData = this.data.movies.concat(movieData);
    }
    var tempData = {};
    tempData = {
      movies: totalData
    };
    this.setData(tempData);
    wx.hideNavigationBarLoading()
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.categroyTitle
    })
  },
})