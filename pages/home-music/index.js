// pages/home-music/index.js
import { getBannerList, getSoneMenu,getCategory } from "../../service/api_music"
import { getRect } from "../../utils/query-rect"
import { rankingStore } from "../../store/index"

Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    bannerList: [],
    swiperH: 0,
    recommondSong: [],
    hotList: [],
  },
  // 点击搜索跳到搜索页面
  handleSearch() {
    wx.navigateTo({
      url: '/pages/search-page/index',
    })
  },
  // 获取数据
  getPageData() {
    // 轮播图
    getBannerList(2).then(res => this.setData({bannerList: res.banners}));
    // 热门歌曲
    getSoneMenu().then(res => this.setData({hotList: res.playlists}));
    // getCategory().then(res => {
    //   console.log(res);
    // })
  },
  // 监听图片是否加载完成,拿到图片的高度，并赋值给轮播图容器，可以处理不同机型下轮播图的适配
  imgIsLoad() {
    // 此处需要做防抖/节流处理，否则调用次数太多，影响性能
    getRect('.swiper-item').then(res => {
      const rect = res[0].height;
      this.setData({swiperH: rect});
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPageData();
    // 发起共享数据请求
    rankingStore.dispatch("getRankingActions");
    // 拿到共享数据
    rankingStore.onState("hotRanking", res => {
      if(!res.length) return
      const recommondSong = res.slice(0, 6);
      this.setData({recommondSong});
    })
    // 拿到全局获取的屏幕宽度
    // console.log(getApp().globalData.screenWidth);
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