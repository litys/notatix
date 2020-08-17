<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      flat
      dark
      height="35px"
    >
      <v-app-bar-nav-icon v-if="!prohibitedPath" @click="action_menu=!action_menu" small></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn
        small
        depressed
        style="margin-right: 15px"
        color="success"
        @click="saveProgress()"
      >SAVE</v-btn>
      <v-app-bar-nav-icon @click="menu=!menu" small></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

    <v-navigation-drawer
      app
      v-model="menu"
      right
      fixed
    >

      <h2>NOTATIX</h2>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.url"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-if="!prohibitedPath"
      app
      v-model="action_menu"
      fixed
    >

      <h2>Functions</h2>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in action_items"
          :key="item.title"
          @click="$store.commit('execAction' ,item.action)"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menu: null,
    items: [
      { 
        title: 'Home', 
        icon: 'mdi-open-in-new',
        url: '/'
      },
      { 
        title: 'Story', 
        icon: 'mdi-open-in-new',
        url: '/story'
      },
      { 
        title: 'Settings', 
        icon: 'mdi-open-in-new',
        url: '/settings'
      },
    ],
    action_menu: null,
    // action_items: [
    //   {
    //     title: 'Italic',
    //     icon: 'mdi-open-in-new',
    //     action: 'italic'
    //   },
    //   {
    //     title: 'Underline',
    //     icon: 'mdi-open-in-new',
    //     action: 'underline'
    //   },
    //   {
    //     title: 'StrikeThrough',
    //     icon: 'mdi-open-in-new',
    //     action: 'strikeThrough'
    //   },

    //   {
    //     title: 'justify Left',
    //     icon: 'mdi-open-in-new',
    //     action: 'justifyLeft'
    //   },
    //   {
    //     title: 'justifyCenter',
    //     icon: 'mdi-open-in-new',
    //     action: 'justifyCenter'
    //   },
    //   {
    //     title: 'justifyRight',
    //     icon: 'mdi-open-in-new',
    //     action: 'justifyRight'
    //   },

    //   {
    //     title: 'insertOrderedList',
    //     icon: 'mdi-open-in-new',
    //     action: 'insertOrderedList'
    //   },
    //   {
    //     title: 'insertUnorderedList',
    //     icon: 'mdi-open-in-new',
    //     action: 'insertUnorderedList'
    //   },

    //   {
    //     title: 'insertHorizontalRule',
    //     icon: 'mdi-open-in-new',
    //     action: 'insertHorizontalRule'
    //   },

    //   {
    //     title: 'undo',
    //     icon: 'mdi-open-in-new',
    //     action: 'undo'
    //   },
    //   {
    //     title: 'removeFormat',
    //     icon: 'mdi-open-in-new',
    //     action: 'removeFormat'
    //   },
    // ]
  }),
  computed: {
    prohibitedPath(){
      if(this.$route.path == '/' || this.$route.path == '/settings') return true;
      else return false;
    },
    action_items(){
      return this.$store.state.action_items;
    }
  },
  methods: {
    saveProgress(){
      this.$store.commit('saveToStorage');
    }
  },
  mounted(){
    if(!!localStorage.getItem('notatix')) this.$store.commit('loadFromStorage');
    else this.$store.dispatch('factoryReset'); // First run
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
