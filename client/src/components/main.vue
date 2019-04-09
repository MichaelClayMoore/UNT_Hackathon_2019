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
    <v-card :style="{'width':'75%','padding-top':'8px', 'margin-top':'8px'}">
      <v-card-actions>
        <v-text-field
            v-model='searchitem'
            label="Search"
            :style="{'padding-left':'25px','padding-right':'25px'}"
            :input="searchList"
          ></v-text-field>
        <v-divider/>
      </v-card-actions>
      <reviewCard :key="draw" v-for="item in viewableitems" :test="item"></reviewCard>
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
      draw:0,
      items: [
          { title: 'Wendys', icon: 'search' },
          { title: 'Chickfila', icon: 'account_box' },
          { title: 'UNT', icon: 'gavel' },
          {title: 'Arbies', icon: null}
        ],
      viewableitems: null
    }
  },
  mounted () {
    this.viewableitems = this.items
    console.log(this.viewableitems)
  },
  watch:{
    navShowing(val){
      this.showing = !this.showing
    },
    searchitem(){
      console.log("RAN searchitem")
      let temp = []
      for(var x = 0; x < this.items.length ; x = x+1)
      {
        if(this.items[x].title.toLowerCase().includes(this.searchitem.toLowerCase()))
        {
          console.log("DIS->",this.items[x].title)
          temp.push( {title:this.items[x].title, icon:this.items[x].icon} )
        }
      }

      for(var x = 0; x < temp.length ; x = x+1) {console.log("temp[",x,"] : ", temp[x])}
      console.log(temp)
      this.viewableitems = temp
      this.draw += 1;
    }
  },
  methods: {

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
