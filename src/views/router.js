const router = new VueRouter()

router.map({
  '/': {
    name: 'home',
    component: require('./home.vue')
  },
  '/running': {
    name: 'running',
    component: require('./running/_root.vue'),
    subRoutes: {
      '/': {
        name: 'choose',
        component: require('./running/choose.vue')
      },
      '/before': {
        name: 'before',
        component: require('./running/before-running.vue')
      },
      '/run': {
        name: 'run',
        component: require('./running/running.vue')
      },
      '/after': {
        name: 'after',
        component: require('./running/after-running.vue')
      }
    }
  },
  '/done': {
    name: 'done',
    component: require('./done.vue')
  }
})

export default router
