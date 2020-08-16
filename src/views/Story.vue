<template>

  <v-card outlined>

    <div id="content-editor" contenteditable>
      Start writing!
    </div>

  </v-card>

</template>

<script>
export default {
  data: () => ({
    menu: true
  }),
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
