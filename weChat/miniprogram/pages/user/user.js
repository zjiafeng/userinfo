// miniprogram/pages/user/user.js
const app = getApp();
// 获取数据库引用
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPhoto: "/images/user/user-unlogin.png",
    nickName: "admin",
    canIUse: false,
    disabled: true,
    id: ''
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
    wx.cloud.callFunction({
      name: 'login',
      data: {},
    }).then((res) => {
      let _openid = res.result.openid;
      db.collection('userinfo').where({
        _openid: _openid
      }).get().then((res) => {
        if (res.data.length) {
          app.userInfo = Object.assign(app.userInfo, res.data[0]);
          this.setData({
            userPhoto: app.userInfo.userPhoto,
            nickName: app.userInfo.nickName,
            canIUse: true
          })
        } else {
          this.setData({
            disabled: false
          })
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (app.userInfo.nickName) {
      this.setData({
        userPhoto: app.userInfo.userPhoto,
        nickName: app.userInfo.nickName
      })
    }
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
    let userInfo = e.detail.userInfo;
    if (!this.data.canIUse && userInfo) {
      db.collection('userinfo').add({
        data: {
          userPhoto: this.data.userPhoto,
          nickName: this.data.nickName,
          signature: '',
          phoneNumber: '',
          weixinNumber: '',
          links: 0,
          time: new Date(),
          isLocation: true,
          friendList : []
        }
      }).then((res) => {
        db.collection('userinfo').doc(res._id).get().then(res => {
          // res.data 包含该记录的数据
          console.log(res.data);
          app.userInfo = Object.assign(app.userInfo, res.data);
          this.setData({
            userPhoto: app.userInfo.userPhoto,
            nickName: app.userInfo.nickName,
            canIUse: true
          })
        })
      })
    }
  }
})