<template>

  <v-card outlined>

    <div id="content-editor" contenteditable @input="updateText()"></div>

  </v-card>

</template>

<script>
export default {
  data: () => ({
    text: ''
  }),
  methods: {
    updateText(){
      this.text = document.getElementById('content-editor').innerHTML;
    }
  },
  mounted(){
    document.getElementById('content-editor').innerHTML = this.$store.state.story;
    this.text = this.$store.state.story;
  },
  beforeDestroy(){
    this.$store.commit('saveStory',this.text);
  },
  destroyed(){
    this.$store.commit('saveToStorage');
  }
}
</script>

<style lang="scss" scoped>
#content-editor {
  min-height: 500px;
}
[contenteditable]:focus {
  outline: none;
}
</style>
