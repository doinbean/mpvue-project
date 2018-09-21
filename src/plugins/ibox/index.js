/**
 * Created by yuchen on 2018/7/13.
 */
import handleRequest from '@/store/flyio/request'
import utils from './utils'
import Data from './const'
import $wx from './wx'

export default {
  /**
   * 自定义方法
   * 组件内使用： this.Core.validator
   * 全局使用：Vue.Core.validator
   */
  install (Vue) {
    const Core = {
      ...utils,
      $http: handleRequest,
      const: Data,
      ...$wx
    }

    Vue.Core = Core
    Vue.prototype.Core = Core
  }
}
