/**
 * 获取容器高度
 * @param {string} selector 目标容器
 */
const getRect = selector => {
  return new Promise(resolve => {
    const query = wx.createSelectorQuery();
    query.select(selector).boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(resolve)
  })
}
module.exports = {
  getRect,
}