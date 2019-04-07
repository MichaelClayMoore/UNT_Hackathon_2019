<template>
  <div class="hello">
    <v-toolbar dark color="primary" fixed clipped-left app>
      <v-toolbar-side-icon @click="changeView()"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Access Map</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
  <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showing: true,
    }
  },
  methods:{
    changeView(){
      console.log("TEST")
      console.log(this.$store.state.navShowing)
      this.$store.commit('setNavShowing');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
