import hzRequest from './index';
/**
 * @params {string} type 资源类型
 */
export function getBannerList (type) {
  return hzRequest.get("/banner",{
    type,
  })
}

/**
 * 
 * @param {number} idx 请求的数据类型（飙升|热门|新歌|原创）
 */
export function getRanking (idx) {
  // return hzRequest.get("/top/list",{
  //   idx,
  // })
  // 此处应调用top/list接口，由于权限问题，先用别的借口替代
  return hzRequest.get("/top/playlist",{
    limit:idx
  })
}

export function getSoneMenu(cat="欧美", limit=6, offset=8) {
  return hzRequest.get("/top/playlist",{
    limit,
    cat,
    offset
  })
}

//分类
export function getCategory() {
  return hzRequest.get("/playlist/hot");
}