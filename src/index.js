import Vue from 'vue';
import VueTouch from 'vue-touch';

Vue.use(VueTouch);

import './components';

import router from './pages/router';

router.start( require( './root.vue' ), 'body' );
