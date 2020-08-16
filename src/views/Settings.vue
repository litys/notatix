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
        General
      </v-tab>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Colors
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        Functions
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        About
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            Work in progress

            <v-switch
              v-model="dangerOptions"
              label="Turn on danger solutions"
            ></v-switch>
            <v-btn 
              :disabled="!dangerOptions"
              @click="factoryReset()"
            >Factory reset</v-btn>

          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- Colors -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- Functions -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            
            <div v-for="(item,index) in $store.state.action_items" :key="index">
              {{item.title}}
            </div>

          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dangerOptions: false
  }),
  methods: {
    factoryReset(){
      this.$store.dispatch('factoryReset');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
