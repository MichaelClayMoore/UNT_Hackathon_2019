import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
// add import statements for all modules

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    navShowing: true,
  },
  actions:{
  },
  mutations:{
    setNavShowing(state){
      state.navShowing = !state.navShowing;
    }
  },
});
