import modules from './modules'

const store = new Vuex.Store({ modules })

store.watch(state => state.history.list, val => {
  localStorage.setItem('history', JSON.stringify(val))
}, {
  deep: true
})

store.watch(state => state.train, val => {
  sessionStorage.setItem('train', JSON.stringify(val))
}, {
  deep: true
})

export default store
