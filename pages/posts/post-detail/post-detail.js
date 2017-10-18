var detailData = require("../../../data/postData.js");
var postId =
  Page({
    data: {

    },
    onLoad: function (options) {
      var postId = options.id;
      //用于保存页面id在其他函数中使用
      this.data.currentId = postId;
      var thisData = detailData.postkey[postId];
      this.setData(thisData);

      //设置页面收藏缓存
      //每个页面都有记录自己的缓存情况对应postId
      var postCollect = wx.getStorageSync("post-collect");
      if (postCollect) {
        var tempCollect = postCollect[postId];
        this.setData({
          collect: tempCollect
        });
      }
      else {
        //若该页面收藏缓存不存在则创建
        postCollect = {};
        postCollect[postId] = false;
        wx.setStorageSync("post-collect", postCollect);
      }
    },
    onTap: function (event) {
      var id = this.data.currentId;
      //获取缓存
      var postCollect = wx.getStorageSync("post-collect");
      //获取当前页面的COLLECT情况并翻转
      var tmpcollect = postCollect[id];
      tmpcollect = !tmpcollect;
      postCollect[id] = tmpcollect;
      //更新缓存值
      wx.setStorageSync("post-collect", postCollect);
      //更新数据绑定
      this.setData({
        collect: postCollect[id]
      });
      //交互反馈
      wx.showToast({
        title: tmpcollect ? "收藏成功" : "取消成功",
        duration: 1000,
        mask: true,
        icon: "success"
      })
    },
    onShare: function (event) {
      var list = [
        "分享到QQ好友",
        "分享到微信好友",
        "分享到朋友圈",
        "分享到微博",
      ]
      wx.showActionSheet({
        itemList: list,
        itemColor: "#405f80",
        success: function (res) {
          wx.showModal({
            title: "用户" + list[res.tapIndex],
            content: "em...."
          })
        }
      })
    }
  })