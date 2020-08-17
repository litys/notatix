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
    ],
    story: ''
  },
  mutations: {
    execAction(state, action) {
      if(!!action.value) document.execCommand(action.name, false, action.value);
      else document.execCommand(action.name, false);
    },
    saveStory(state, text) {
      state.story = text;
    },
    
    loadFromStorage(state){
      let storageData = JSON.parse(localStorage.getItem('notatix'));
      state.action_items = storageData.action_items;
      state.story = storageData.story;
    },
    saveToStorage(state){
      let parseData = {
        action_items: state.action_items,
        story: state.story
      }
      localStorage.setItem('notatix', JSON.stringify(parseData))
    },

    addFunction(state, data) { // creating new function
      state.action_items.push(data);
    },
    updateFunction(state, data) { // updating already existing function
      state.action_items[data.index] = data;
      delete state.action_items[data.index].index;
    },
    deleteFunction(state, data) { // deleting existing function
      state.action_items.splice(data,1);
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
              valueSet: 7
            }
          },
          {
            title: 'Bold',
            icon: 'mdi-format-bold',
            action: {
              name: 'bold'
            }
          },
        ],
        story: 'Start writing!'
      }

      localStorage.setItem('notatix', JSON.stringify(factoryData));

      commit('loadFromStorage');
    }
  },
  modules: {
  }
})
