// app.js
App({
  onLaunch() {
    wx.getSystemInfo({
      success: (result) => {
        this.globalData.screenWidth = result.screenWidth;
      },
    });
  },
  globalData: {
    // 屏幕宽度
    screenWidth: 0
  }
})
