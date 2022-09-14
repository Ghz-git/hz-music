const baseUrl = "http://123.207.32.32:9001";
class HZrequest {
  request(url, params, method) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        method: method,
        data: params,
        success: (res) => {
          resolve(res.data);
        },
        fail: reject,
      })
    })
  }
  get(url, params) {
    return this.request(url, params, "GET");
  }
}
const hzRequest = new HZrequest();
export default hzRequest;