// miniprogram/pages/editUserInfo/head/head.js
const app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPhoto: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      userPhoto: app.userInfo.userPhoto
    })
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

  },
  bindGetUserInfo(e) {
    wx.showLoading({
      title: '头像上传中',
    });
    let userPhoto = e.detail.userInfo.avatarUrl;
    db.collection('userinfo').doc(app.userInfo._id).update({
      data: {
        userPhoto: userPhoto
      }
    }).then((res) => {
      wx.showToast({
        title: '上传并更新成功',
      })
      app.userInfo.userPhoto = userPhoto;
      setTimeout(() => {
        wx.navigateBack();
      }, 1000);
    })
  },
  handUpdataimg() {
    let _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        _this.setData({
          userPhoto: tempFilePaths
        })
      }
    })
  },
  handbtn() {
    let _this = this;
    wx.showLoading({
      title: '头像上传中',
    });
    let cloudPath = "userinfo/" + app.userInfo._openid + Date.now() + ".png";
    wx.cloud.uploadFile({
      cloudPath: cloudPath, // 上传至云端的路径
      filePath: _this.data.userPhoto[0], // 小程序临时文件路径
    }).then((res) => {
      wx.hideLoading();
      wx.showToast({
        title: '头像上传成功',
      });
      // console.log(res)
      let fileID = res.fileID;
      if (fileID) {
        db.collection('userinfo').doc(app.userInfo._id).update({
          data: {
            userPhoto: fileID
          }
        }).then((res) => {
          wx.showToast({
            title: '上传并更新成功',
          })
          app.userInfo.userPhoto = fileID;
          setTimeout(() => {
            wx.navigateBack();
          }, 1000);
        })
      }
    })
  }
})