import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    execAction(state, action) {
      document.execCommand(action, false);
    }
  },
  actions: {
  },
  modules: {
  }
})
