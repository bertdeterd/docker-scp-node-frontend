<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>My SAP App {{userinfo.username}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat icon color="blue" @click.native="logout">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content class="pa-0">
      <Main/>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "app",
  components: {
    Main
  },

    data: function() {
    return {
      userinfo: {}
    };
  },

  async created() {
    let response = await this.$http.get("/uaa/userinfo");
    this.userinfo = response.data;
  },

   methods: {
    logout: function(event) {
      //this.$http.get('/logout')
       window.location.replace('/logout');
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
