<template>
  <v-container id="containerBox" fluid pa-0 >

  <!--div class="mapbox" id="map" :style="{'height':'600px'}"></div-->

  <v-layout align-center justify-center>
  <v-card :style="{'width':'98%','height':'600px'}">
    <v-card-title>test</v-card-title>
    <v-card-actions>
      <div class="mapbox" id="map" :style="{'min-height':'500px', 'max-height':'1500px', 'width':'98%'}"></div>
    </v-card-actions>
  </v-card>
</v-layout>
</v-container>
</template>

<script>
import L from 'leaflet'
export default {
  name: 'map',
  data() {
    return {
      map: null,
    }
  },
  mounted () {
    this.map = L.map('map').setView([38.63, -90.23], 12);
    this.tileLayer = L.tileLayer(
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
      }
    );
    this.tileLayer.addTo(this.map);
  }
}
</script>


<style>

</style>
