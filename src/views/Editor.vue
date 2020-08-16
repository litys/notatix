<template>
  <div class="home">

    <div id="content-editor" contenteditable>
      Start writing!
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    menu: true
  }),
  methods: {
    // save(){
    //   this.test = document.getElementById('content-editor').textContent;
    // },
    // shortcuts(event) {
    //   if (event.key == "q"){
    //     alert('OK')
    //   }
    //   else if (event.key == "p"){
    //     alert('nie ok')
    //   }
    // }
  },
  // mounted() {
  //   alert('DONE')
  //   window.addEventListener('keyup', (event) => {
  //     this.shortcuts(event);
  //   })
  // },
  // destroyed() {
  //   window.removeEventListener('keyup', (event) => {
  //     this.shortcuts(event);
  //   })
  // }
}
</script>

<style lang="scss" scoped>
#content-editor {

}
[contenteditable]:focus {
  outline: none;
}
</style>
