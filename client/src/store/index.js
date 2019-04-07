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
    test({commit, rootState}){
      return new Promise((resolve, reject) =>{
          axios.post('http://127.0.0.1:5000/test', {
 	            params: {
              }
 	  }).then(response => {
      console.log(response)
 		  resolve(response);
 		 }, error  => {
 			 reject(error)
 	      })
      })
     }
  },
  mutations:{
    setNavShowing(state){
      state.navShowing = !state.navShowing;
    }
  },
});
