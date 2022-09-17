import hzRequest from './index';
/**
 * @params {string} offset 从第几条数据开始请求
 * @params {number} limit 每次请求几条数据
 */
export function getMvList (offset, limit = 10) {
  return hzRequest.get("/top/mv",{
    offset,
    limit
  })
}
/**
 * 视频详情
 * @param {number} mvid 当前mv的id
 */
export function getMvDetail (mvid) {
  return hzRequest.get("/mv/detail", {
    mvid
  })
}

/**
 * 视频地址
 * @param {number} id mvid
 */
export function getMvUrl (id) {
  return hzRequest.get("/mv/url", {
    id
  })
}
/**
 * 相关视频
 * @param {*} id 
 */
export function getMvRelated (id) {
  return hzRequest.get("/related/allvideo", {
    id
  })
}
