import Fly from 'flyio'
const request = new Fly()

request.interceptors.request.use((request) => {
  // 封装wx请求cookie
  let cookie
  if(wx.getStorageSync('wx_cookie') && wx.getStorageSync('t0_cookie')){
    cookie = wx.getStorageSync('t0_cookie') + ';' + wx.getStorageSync('wx_cookie')
  }else if(wx.getStorageSync('wx_cookie')){
    cookie = wx.getStorageSync('wx_cookie')
  }else{
    cookie = wx.getStorageSync('t0_cookie')
  }

  if(cookie){
    request.headers.cookie = cookie
  }
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    if (response.headers['set-cookie']) {
      // 提取cookie，保存到storage中
      var setCookie = response.headers['set-cookie'].replace(new RegExp('Path=/'), '').split(',')
      var headStr = setCookie[0].startsWith('ft')
      if(headStr){
        wx.setStorageSync('wx_cookie', setCookie[0])
      }else{
        wx.setStorageSync('t0_cookie', setCookie[0])
      }
      // console.log('header:' + setCookie[0])
      // console.log('Set-Cookie & cookie:' + wx.getStorageSync('cookie')[0])
      // console.log('Set-Cookie & cookie:' + wx.getStorageSync('cookie')[1])
    }
    return promise.resolve(response.data)
  },
  (err, promise) => {
    return promise.reject(err)
  }
)
export default request
