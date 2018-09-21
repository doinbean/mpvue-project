import Vue from 'vue'
const state = {
  count: 0,
  logined:false // vuex控制登录态
}

const mutations = {
  INCREMENT: (state) => {
    const obj = state
    obj.count = 1
  },
  DECREMENT: (state) => {
    const obj = state
    obj.count -= 1
  },
  CHECK_LOGIN: (state) => {
    const obj = state
    obj.logined = true
  }
}

const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  checkLogin ({commit}) {
    commit('CHECK_LOGIN')
  },
  getProvince ({commit}, params = {}) {
    return Vue.iBox.http('globalUrl.getProvince', params)({method: 'get'})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
