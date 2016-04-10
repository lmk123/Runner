// import 'babel-polyfill';
import Vue from 'vue';
import VueTouch from 'vue-touch';
import 'vue-framework7';

Vue.use( VueTouch );

import './components';

import router from './pages/router';

router.start( require( './root.vue' ), 'body' );
