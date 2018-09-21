/**
 * Created by yuchen on 2018/7/13.
 */
// wx api的方法
const $wx = {
  toast: (msg) => {
    wx.showToast({
      title: msg,
      icon: 'none'
    })
  }
}
export default {
  $wx
}
