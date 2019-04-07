<template>
  <div class="main">
    <v-navigation-drawer
    class="blue lighten-3"
    dark
    clipped
    app
    v-model="showing"
    >
    <v-list>
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="run(item.title)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
<Map :style="{'padding':'5px'}"></Map>
<v-layout align-center justify-center>
<v-card :style="{'max-width':'500px', 'min-width':'100px'}">
  <v-card-title>test</v-card-title>
</v-card>
</v-layout>
  </div>
</template>

<script>
import Map from './map'
import { mapState } from 'vuex'
export default {
  name: 'main',
  components:{Map},
  computed: { ...mapState(['navShowing']),},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showing: true,
      items: [
          { title: 'Dashboard', icon: 'dashboard' },
          { title: 'Account', icon: 'account_box' },
          { title: 'Admin', icon: 'gavel' }
        ]
    }
  },
  created: {

  },
  watch:{
    navShowing(val){
      console.log("WHOOAOOA")
      this.showing = !this.showing
    }
  },
  methods: {
    doSomething()
    {
      console.log("TEST")
    },
    run(item)
    {
      console.log(this.navShowing)
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
