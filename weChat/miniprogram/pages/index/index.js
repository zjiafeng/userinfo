// miniprogram/pages/index/index.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurls: ['/images/bg/iqiyi.png', '/images/bg/vr.png', '/images/bg/wx.png'],
    indicatorDots: true,
    circular: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    listData: [],
    current:'links'
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
    this.getListData();
    this.getBannerList();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getListData();
    this.getBannerList();
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
  handLinks(e) {
    let id = e.currentTarget.dataset.id._id;
    wx.cloud.callFunction({
      name : 'update',
      data : {
        collection : 'userinfo',
        doc: id,
        data : "{links : _.inc(1)}"
      }
    }).then((res)=>{
      let updated = res.result.stats.updated;
      if (updated){
        let cloneListData = [...this.data.listData];
        for (let i = 0; i < cloneListData.length;i++){
          if (cloneListData[i]._id == id ){
            cloneListData[i].links++;
          }
        }
        this.setData({
          listData : cloneListData
        });
      }
    });
  },
  handtab(e){
    let current = e.target.dataset.current;
    if(current == this.data.current){
      return false
    } 
    this.setData({
      current
    })
  },
  handDeatil(e){
    let id = e.currentTarget.dataset.id._id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },
  getListData(){
    db.collection('userinfo').field({
      nickName: true,
      links: true,
      userPhoto: true,
    }).get().then((res) => {
      // console.log(res.data)
      if (res.data) {
        this.setData({
          listData: res.data
        })
      }
    })
  },
  getBannerList(){
    db.collection('banner').get().then((res)=>{
      this.setData({
        imgurls:res.data
      })
    })
  }
})