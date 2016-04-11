import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

import modules from './modules';

export default new Vuex.Store( {
  modules
} );
