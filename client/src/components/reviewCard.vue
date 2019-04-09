<template>
  <v-sheet :color="color" :style="{'padding':'4px', 'margin':'4px'}">
    <v-container>
      <v-layout justify-start>
      <h3>{{test.title}}</h3>
    </v-layout>
      <v-divider/>
      <v-layout justify-center align-center>
        <p>This is a blurb about the foob places and stuff.</p>
      </v-layout>
      <v-divider/>
      <v-layout justify-end>
      <v-rating
        v-model="rating"
        background-color="white"
        color="yellow accent-4"
        size="18"
      ></v-rating>
    </v-layout>
    </v-container>
</v-sheet>
</template>

<script>
export default{
  name:'reviewCard',
  props:['test'],
  data(){
    return {
      rating: 0,
      color:null,
    }
  },
  mounted(){
    this.rating = this.rating + Math.random() * (5 - 0)

    console.log("TEST: ", this.test.title, ": ", this.rating)
    if(this.rating < 3){this.color="red"}
    if(this.rating > 3){this.color="yellow"}
    if(this.rating >= 4){this.color="green"}
    //console.log("TEST: ", this.test.title, ": ", this.rating, ": ", this.color)
    //console.log("Rating for ", this.test.title, ": ", this.rating)
  }
}
</script>

<style>

</style>
