import Flyio from './interceptors'
import {API, API_URL} from './apiUrl/home'
import Config from './config'
// 异常情况的错误处理
const errorFunction = (reqConfig, err) => {
  // 如果有异常需要提示
  if (!reqConfig.errorAction && reqConfig.isErrorDefaultTip) {
    Config.resError.tipShow(err)
  }
  // throw (err)
}

let promises = [] // 接收接口请求的promise数组
let loadingTimer = [] // loading的定时器

// 接口请求封装函数
const handleRequest = (url = '', data, configLoading = true) => {
  url = API[url]
  let _url = `${API_URL}${url}` || ''
  return (flyConfig = {}, defaultTipConfig = {}) => {
    let flyio = Flyio.request(_url, data, {
      ...Config.flyConfig,
      ...flyConfig
    })
    let tipConfig = {
      ...Config.reqConfig,
      ...defaultTipConfig
    }
    // 开启loading
    clearTimeout(loadingTimer) // 多个接口时需要清除上一个loading
    loadingTimer = setTimeout(() => {
      tipConfig.isLoading = configLoading
      tipConfig.isLoading && Config.loading.loadingShow()
    }, Config.loading.limitTime)

    // 计算当前的promise是否全部加载完成
    promises.push(flyio.catch(e => {}))
    Promise.all(promises).then(data => {
      if (data.length !== promises.length) return
      promises = [] // 所有请求完后清除promise数组
      clearTimeout(loadingTimer) // 当请求在xxxms内完成则直接清除loading计时器
    }).catch(() => {
      promises = [] // 请求异常完后清除promise数组
      clearTimeout(loadingTimer) // 请求异常则直接清除loading计时器
    })

    return flyio.then(res => {
      // 成功返回
      if (res[Config.resSuccess.key] === Config.resSuccess.value) {
        tipConfig.isLoading && Config.loading.loadingHide() // 当promise全部加载完成则隐藏loading
        return res
      } else {
        setTimeout(() => { errorFunction(tipConfig, res) }, 0)
      }
    }).catch(err => {
      setTimeout(() => { errorFunction(tipConfig, err) }, 0)
    })
  }
}

export default handleRequest
