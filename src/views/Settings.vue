<template>
    <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <v-tabs
      show-arrows
    >
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Help
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        Settings
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            Work in progress
            <!-- App contain shortcuts.
            <ul>
              <li>Alt + Z -> Bold selected text</li>
            </ul> -->
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>

          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    // 
  }),
}
</script>

<style lang="scss" scoped>

</style>
