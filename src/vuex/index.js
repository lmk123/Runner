import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

import state from './state';
import * as mutations from './mutations';
export default new Vuex.Store( {
  state,
  mutations
} );
