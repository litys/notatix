import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    action_items: [
      {
        title: 'Block',
        icon: 'mdi-format-bold',
        action: {
          name: 'fontSize',
          value: 7
        }
      },
    ]
  },
  mutations: {
    execAction(state, action) {
      console.log(action.value)
      if(!!action.value) document.execCommand(action.name, false, action.value);
      else document.execCommand(action.name, false);
    },
    loadFromStorage(state){
      let storageData = JSON.parse(localStorage.getItem('notatix'));
      state.action_items = storageData.action_items;
    }
  },
  actions: {
    factoryReset({state, commit}){
      let factoryData = {
        action_items: [
          {
            title: 'Block',
            icon: 'mdi-format-bold',
            action: {
              name: 'fontSize',
              value: 7
            }
          },
          {
            title: 'Bold',
            icon: 'mdi-format-bold',
            action: {
              name: 'bold'
            }
          },
        ]
      }

      localStorage.setItem('notatix', JSON.stringify(factoryData));

      commit('loadFromStorage');
    }
  },
  modules: {
  }
})
