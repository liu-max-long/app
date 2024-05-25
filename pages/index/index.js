// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    currentIdx: 0,
    newsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //如果报错 请求不超过
    //1 你的后段端口地址,没有在小程序的管理后台域名管理界面设置(白名单设置)
    //2 协议https

    //开发阶段 使用服务器接口 

    //网络慢时提示数据加载中
    wx.showLoading({
      title: '数据加载中',
    })

    wx.request({
      url: "http://localhost:5000/api/banner",
      success: (res) => {
        console.log("轮播");
        console.log(res);
        this.setData({
          banners: res.data.data
        })
      }
    }),
      wx.request({
        url: 'http://localhost:5000/api/indexlist',
        success: (res) => {
          console.log("新闻列表");
          console.log(res);
          this.setData({
            newsList: res.data.list
          })
          //隐藏Loading
          setTimeout(() => {
            wx.hideLoading()
            //提示数据请求成功
            wx.showToast({
              title: '数据请求成功',
              icon: "success"
            })
          }, 500)
        }
      })
  },
  bannerChangeFn(e) {
    //当前滑到了第几张 
    // console.log(e.detail.current);
    this.setData({
      currentIdx: e.detail.current
    })
  },
  gotoDetailFn(e) {
    console.log(e);
    //通过api跳转
    wx.navigateTo({
      url: '/pages/newsDetail/newsDetail?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})