Page({
  onTap: function () {
    //疑问：为什么在post页面加上tabBar后在此使用redirecTo和navigateTo不进行跳转
    //因为页面配置tabBar后就成为一个特殊的tabBar页面
    wx.switchTab({
      //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
      url: "../posts/posts"
    })
  }
})