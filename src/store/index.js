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
    story: '',
    colors: {
      app: '#fff',
      toolbar: {
        color: '#1976D2',
        button: '#5AB55E'
      },
      textarea: '#fff',
      settings: '#1976D2'
    }
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
    },

    updateColor(state, data) {
      console.log(data)
      switch (data.title) {
        case 'app':
          state.colors.app = data.value;
          break;
        case 'toolbar_color':
          state.colors.toolbar.color = data.value;
          break;
        case 'toolbar_button':
          state.colors.toolbar.button = data.value;
          break;
        case 'editor':
          state.colors.textarea = data.value;
          break;
        case 'settings':
          state.colors.settings = data.value;
          break;
      }
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
        story: 'Start writing!',
        colors: {
          app: '#fff',
          toolbar: {
            color: '#1976D2',
            button: '#5AB55E'
          },
          textarea: '#fff',
          settings: '#1976D2'
        }
      }

      localStorage.setItem('notatix', JSON.stringify(factoryData));

      commit('loadFromStorage');
    }
  },
  modules: {
  }
})
