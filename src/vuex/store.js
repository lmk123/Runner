import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

import modules from './modules';

export default new Vuex.Store( {
  modules,
  middlewares: [
    {
      onMutation ( mutation, state ) {
        if ( mutation.type === 'setProcess' ) {
          localStorage.process = JSON.stringify( state.process );
        }
      }
    }
  ]
} );
