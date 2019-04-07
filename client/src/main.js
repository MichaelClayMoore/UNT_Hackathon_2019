// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '../node_modules/leaflet/dist/leaflet.css'
import '../node_modules/leaflet-draw/dist/leaflet.draw.css'

Vue.config.productionTip = false
require('leaflet-draw')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
