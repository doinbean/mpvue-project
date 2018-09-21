import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import 'less/zanui/zanui.less'
import 'less/common.less'

Vue.config.productionTip = false

import IboxPlugin from '@/plugins/ibox'
Vue.use(IboxPlugin)

const app = new Vue({
  store,
  ...App
})

app.$mount()

export default {
  config: {
    pages: ['pages/index/index', 'pages/user/user'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      'backgroundColor': '#fff',
      'selectedColor': '#F13C74',
      'list': [{
        'pagePath': 'pages/index/index',
        'text': '首页',
        'iconPath': 'static/img/find.jpg',
        'selectedIconPath': 'static/img/find-selected.jpg'
      }, {
        'pagePath': 'pages/user/user',
        'text': '我的信息',
        'iconPath': 'static/img/myself.png',
        'selectedIconPath': 'static/img/myself-selected.png'
      }]
    }
  }
}
