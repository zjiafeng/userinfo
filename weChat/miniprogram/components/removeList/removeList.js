// components/removeList/removeList.js
const db = wx.cloud.database();
const app = getApp();
const _ = db.command;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    messageId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    userMessage: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleDelMessage() {
      wx.showModal({
        title: '提示信息',
        content: '删除消息',
        confirmText: '删除',
        success: (res) => {
          if (res.confirm) {
            this.removeMessage();
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    handleAddFriend() {
      wx.showModal({
        title: '提示信息',
        content: '申请好友',
        confirmText: '同意',
        success: (res) => {
          if (res.confirm) {
            db.collection('userinfo').doc(app.userInfo._id).update({
              data: {
                friendList: _.unshift(this.data.messageId)
              }
            }).then((res) => {});
            wx.cloud.callFunction({
              name: 'update',
              data: {
                collection: 'userinfo',
                doc: this.data.messageId,
                data: `{friendList: _.unshift('${app.userInfo._id}')}`
              }
            }).then((res) => {});
            this.removeMessage();
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    removeMessage() {
      db.collection('message').where({
        userId: app.userInfo._id
      }).get().then((res) => {
        console.log(res)
        let list = res.data[0].list;
        list = list.filter((val, i) => {
          return val != this.data.messageId
        });
        wx.cloud.callFunction({
          name: 'update',
          data: {
            collection: 'message',
            where: {
              userId: app.userInfo._id
            },
            data: {
              list
            }
          }
        }).then((res) => {
          this.triggerEvent('myevent', list);
        });
      });
    }
  },
  lifetimes: {
    attached: function () {
      console.log(this.data.messageId);
      // 在组件实例进入页面节点树时执行
      db.collection('userinfo').doc(this.data.messageId).field({
        userPhoto: true,
        nickName: true
      }).get().then((res) => {
        this.setData({
          userMessage: res.data
        });
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})