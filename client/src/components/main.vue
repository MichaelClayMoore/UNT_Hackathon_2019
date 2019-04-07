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
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>search</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Search</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
<Map :style="{'padding':'5px', 'padding-bottom':'8px'}" z-index='-1'></Map>
<div :style="{'height':'1000px'}">
  <v-layout align-center justify-center>
    <v-card :style="{'width':'75%','height':'600px','padding-top':'8px', 'margin-top':'8px'}">
      <v-card-actions>
        <v-text-field
            v-model='searchitem'
            label="Search"
            :style="{'padding-left':'25px','padding-right':'25px'}"
          ></v-text-field>
        <v-divider/>
        <h1>{{this.searchitem}}</h1>
      </v-card-actions>
      <reviewCard v-for="item in items" :test="item"></reviewCard>
    </v-card>
  </v-layout>
</div>
  </div>
</template>

<script>
import Map from './map'
import ReviewCard from './reviewCard'
import { mapState } from 'vuex'
export default {
  name: 'main',
  components:{Map,ReviewCard},
  computed: { ...mapState(['navShowing']),},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showing: true,
      searchitem:'',
      items: [
          { title: 'Wendys', icon: 'search' },
          { title: 'Chickfila', icon: 'account_box' },
          { title: 'UNT', icon: 'gavel' }
        ]
    }
  },
  created: {

  },
  watch:{
    navShowing(val){
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
