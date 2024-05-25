// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityname:"北京",
    goodsList: [],
    curPage:1,
    hasMoreData: true,
    list: [
      {
        foodname: "美容养颜",
        image: "/images/item1.jpg",
        type: 0
      },
      {
        foodname: "保健调养",
        image: "/images/item2.jpg",
        type: 1
      },
      {
        foodname: "补养",
        image: "/images/item3.jpg",
        type: 2
      },
      {
        foodname: "减肥",
        image: "/images/item4.jpg",
        type: 3
      },
      {
        foodname: "母婴",
        image: "/images/item5.jpg",
        type: 4
      },
      {
        foodname: "气节",
        image: "/images/item6.jpg",
        type: 5
      },
      {
        foodname: "常见食疗",
        image: "/images/item7.jpg",
        type: 6
      },
      {
        foodname: "维生素",
        image: "/images/item8.jpg",
        type: 7
      },
    ],

  },
  gotoSelectCityFn() {
    wx.navigateTo({
      url: '/pages/selectCity/selectCity',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //发起请求 请求商品数据
    // wx.request({
    //   url: 'http://localhost:5000/api/foods/list',
    //   data: {
    //     city: this.data.cityname,
    //     page: 1
    //   },
    //   success: res => {
    //     console.log("商品列表");
    //     console.log(res);
    //     this.setData({
    //       goodsList: res.data.list
    //     })
    //   }
    // })
  },
  gotoTypeDetail(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/typeDetail/typeDetail?id='+e.currentTarget.dataset.id,
    })
  },
  gotogoodsDetailFn(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?id='+e.currentTarget.dataset.id,
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
    wx.request({
      url: 'http://localhost:5000/api/foods/list',
      data: {
        city: this.data.cityname,
        page: this.data.curPage,
      },
      success: res => {
        console.log("商品列表");
        console.log(res);
        this.setData({
          goodsList: res.data.list
        })
      }
    })
  },
  getMoreFn(){
//  this.setData({
//    curPage:this.data.curPage+1
//  })
//  console.log("很爱很爱你");
//  console.log(curPage);
//  点击发起请求
 wx.request({
   url: 'http://localhost:5000/api/foods/list',
   data:{
    city:this.data.cityname,
    page:this.data.curPage
   },
   success:res=>{
    console.log(res);
    console.log(2222);
    this.setData({
      curPage:this.data.curPage+1,
      goodsList: res.data.list
    })
  }
 })
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
    console.log("哈哈，我触底了");
    wx.showLoading({
      title: '数据加载中....',
    })
    setTimeout(()=>{
  wx.hideLoading();
  wx.showToast({
    title: '加载成功',
  })
    },4000)
    // wx.showLoading({
    //   title: '正在加载....',
    // })

   
     wx.request({
       url: 'http://localhost:5000/api/foods/list',
       data:{
        city:this.data.cityname,
        page:this.data.curPage +1
       },
       success:res=>{
        console.log(res);
        console.log(2222);
        var goodsList1 = this.data.goodsList.concat(res.data.list)
        console.log(goodsList1);
        wx.showToast({
          title: '加载成功',
          duration:2000
        })
        this.setData({
          curPage:this.data.curPage+1,
          goodsList:goodsList1
          
        }),
       
        wx.hideLoading();
      }
     })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})