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
    this.getLocation();
    wx.cloud.callFunction({
      name: 'login',
      data: {},
    }).then((res) => {
      let _openid = res.result.openid;
      this.getMessage();
      db.collection('userinfo').where({
        _openid: _openid
      }).get().then((res) => {
        if (res.data.length) {
          app.userInfo = Object.assign(app.userInfo, res.data[0]);
          this.setData({
            userPhoto: app.userInfo.userPhoto,
            nickName: app.userInfo.nickName,
            canIUse: true,
            id: app.userInfo._id
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
          phone: '',
          weixin: '',
          links: 0,
          time: new Date(),
          friendList : [],
          isLocation: true,
          latitude:this.latitude,
          longitude:this.longitude,
          location: db.Geo.Point(this.longitude,this.latitude)
        }
      }).then((res) => {
        db.collection('userinfo').doc(res._id).get().then(res => {
          // res.data 包含该记录的数据
          console.log(res.data);
          app.userInfo = Object.assign(app.userInfo, res.data);
          this.setData({
            userPhoto: app.userInfo.userPhoto,
            nickName: app.userInfo.nickName,
            canIUse: true,
            id: app.userInfo._id
          })
        })
      })
    }
  },
  getMessage(){
    db.collection('message').where({
      userId : app.userInfo._id
    }).watch({
      onChange: function(snapshot) {
        // console.log(snapshot.docs[0]);
        if(snapshot.docs[0].list.length){
          wx.showTabBarRedDot({
            index: 2
          })
          app.userMessage = snapshot.docs[0].list;
        }else{
          wx.hideTabBarRedDot({
            index: 2
          })
          app.userMessage = [];
        }
      },
      onError: function(err) {
        console.error('the watch closed because of error', err)
      }
    })
  },
  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.latitude = res.latitude
        this.longitude = res.longitude
      }
    })
  }
})