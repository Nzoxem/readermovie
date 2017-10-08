Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postData = {
      date: ["Sep 27 2017","Sep 28 2017"],
      title: ["夏目友人帐","Enjoy Your Life"],
      simagePath: ["/images/s1.jpg", "/images/s2.jpg", "/images/s3.jpg"],
      iconPath: ["/images/star.png", "/images/eye.png"],
      himagePath: ["/images/h1.jpg", "/images/h2.jpg"],
      description: ["《夏目友人帐》是绿川幸的漫画作品。夏目贵志从外祖母夏目玲子的遗物中得到了那些契约书所做成的“友人帐”，他决定将友人帐中妖怪们的名字一一归还。在夏目身边，开始聚集起各种各样的妖怪们。能看到妖怪的少年夏目贵志，与招财猫外表的妖怪斑一起，为大家讲述一个个奇异、悲伤、怀念、令人感动的温馨故事。电视动画已经播出五季，第六季《夏目友人帐陆》于2017年4月播出。","Even if you love your work, you probably have days when almost nothing goes right. Bestselling author Dale Carnegie shows you how to make every day more exciting and rewarding -- how you can get more done, and have more fun doing it."]
    }
    this.setData(postData);
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