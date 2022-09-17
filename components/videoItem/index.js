// components/videoItem/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(event){
      const id = event.currentTarget.dataset.item.id;
      wx.navigateTo({
        url: `/pages/detail-video/index?id=${id}`,
      })
    }
  }
})
