// pages/home-video/index.js
import { getMvList } from '../../service/api_video';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvList: [],
    hasMore: true,
  },

  /**
   * 封装请求数据函数
   */
  async getData(offset) {
    // 判断是否可以请求
    if(!this.data.hasMore && offset !== 0) return;
    // 请求数据
    const res = await getMvList(offset);
    // 设置数据
    if(offset === 0) {
      this.setData({mvList: res.data});
    }else {
      this.setData({mvList: this.data.mvList.concat(res.data)});
    }
    this.setData({hasMore: res.hasMore});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData(0);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.getData(0);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getData(this.data.mvList.length);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})