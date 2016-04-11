import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

const router = new VueRouter();

router.map( {
  '/': {
    component: require( './home.vue' )
  },
  '/running': {
    component: require( './running.vue' ),
    subRoutes: {
      '/': {
        component: require( './running-index.vue' )
      },
      '/choose': {
        component: require( './running-choose.vue' )
      },
      '/start': {
        component: require( './running-start.vue' )
      },
      '/timer': {
        component: require( './running-timer.vue' )
      },
      '/end': {
        component: require( './running-end.vue' )
      }
    }
  }
} );

export default router;
