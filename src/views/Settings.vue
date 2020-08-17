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
          <v-card-actions>
            <v-btn
              @click="addFunction()"
              color="success"
              outlined
            >New function</v-btn>
          </v-card-actions>
          <v-card-text>

            <v-row>
              <v-col cols="12" lg="4" md="6" xs="12" 
                v-for="(item,index) in $store.state.action_items" :key="index"
              >
            
                <v-card @click="editFunction(index)">
                  <v-card-title><v-icon>{{ item.icon }}</v-icon>{{item.title}}</v-card-title>
                </v-card>

              </v-col>
            </v-row>

            <v-dialog
              v-model="editFunctionDialog"
              max-width="900"
              persistent
            >
              <v-card>
                <v-card-title></v-card-title>

                <v-card-text>
                  <v-text-field
                    v-model="edited.title"
                    label="Title"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="edited.icon"
                    label="Icon"
                    outlined
                  ></v-text-field>

                  <v-text-field
                    v-model="edited.action.name"
                    label="CommandName"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="edited.action.value"
                    label="ValueArgument"
                    outlined
                  ></v-text-field>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="warning"
                    text
                    @click="operationOnFunction('')"
                  >
                    Cancel
                  </v-btn>

                  <v-btn
                    v-if="edited_index != null"
                    color="error"
                    outlined
                    @click="operationOnFunction('DELETE')"
                  >
                    Delete
                  </v-btn>

                  <v-btn
                    v-if="edited_index != null"
                    color="success"
                    depressed
                    @click="operationOnFunction('UPDATE')"
                  >
                    Update
                  </v-btn>

                  <v-btn
                    v-else
                    color="success"
                    depressed
                    @click="operationOnFunction('NEW')"
                  >
                    Create
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dangerOptions: false,
    editFunctionDialog: false,

    edited_index: null,
    edited: {
      icon: '',
      title: '',
      action: {
        name: '',
        value: ''
      }
    }
  }),
  methods: {
    factoryReset(){
      this.$store.dispatch('factoryReset');
    },
    editFunction(index){
      this.edited_index = index;
      this.edited = Object.assign({}, this.$store.state.action_items[index])
      if(!!this.edited.action.value) // if value exist
        if(this.edited.action.value.length == 0) this.edited.action.value = ''; // resolving problem with index 0
      this.editFunctionDialog = true;
    },
    addFunction(){
      this.edited = {
        icon: '',
        title: '',
        action: {
          name: '',
          value: ''
        }
      }
      this.editFunctionDialog = true;
    },
    operationOnFunction(param) {
      switch(param) {
        case 'NEW':
          if(!!this.edited.action.value)
            if(this.edited.action.value.length == 0) delete this.edited.action.value;
          this.$store.commit('addFunction', this.edited)
          break;
        case 'UPDATE':
          if(!!this.edited.action.value)
            if(this.edited.action.value.length == 0) delete this.edited.action.value;
          this.edited.index = this.edited_index;
          this.$store.commit('updateFunction', this.edited)
          break;
        case 'DELETE':
          this.$store.commit('deleteFunction', this.edited_index);
      }
      this.editFunctionDialog = false;
      this.edited_index = null;
    }
  },
  destroyed(){
    this.$store.commit('saveToStorage');
  }
}
</script>

<style lang="scss" scoped>
</style>
