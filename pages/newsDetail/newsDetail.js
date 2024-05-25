// pages/newsDetail/newsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsObj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options); //{id  新闻id}
    // 发起请求 根据id去请求对应的新闻详情
    wx.request({
      url: 'http://localhost:5000/api/detail',
      data:{
        id:options.id
      },
      success:(res)=>{
        console.log("新闻详情");
        console.log(res);
        this.setData({
          newsObj:res.data.list
        }),
        //动态设置导航栏标题
        wx.setNavigationBarTitle({
          title: res.data.list.title
        })
      }
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