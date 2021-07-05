import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    withdrawalDisabled: false
  },
  mutations: {
    BtnReset (state, data) {
      state.withdrawalDisabled = data
    },
    BtnLoding (state, data) {
      state.withdrawalDisabled = data
    }
  },
  actions: {

  },
  modules: {
  }
})
