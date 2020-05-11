// miniprogram/pages/detail/detail.js
const app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    isFriend: true,
    isHidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    let id = options.id;
    db.collection('userinfo').doc(id).get().then((res) => {
      this.setData({
        detail: res.data
      });
      let friendList = res.data.friendList;
      if (friendList.includes(app.userInfo._id)) {
        this.setData({
          isFriend: true
        });
      } else {
        this.setData({
          isFriend: false
        }, () => {
          if (id == app.userInfo._id) {
            this.setData({
              isFriend: true,
              isHidden: true
            });
          }
        });
      }
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