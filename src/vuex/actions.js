import { nextTrain } from './getters'
import { currentTrainIndex, trainStart } from './getters'

export function startTrain (store, index) {
  store.dispatch('setCurrentTrain', index)
  store.dispatch('setTrainStart', Date.now())
}

export function finishTrain (store) {
  const { state, dispatch } = store
  const train = nextTrain(state)
  dispatch('addHistory', {
    week: train.week,
    day: train.day,
    start: trainStart(state),
    end: Date.now(),
    index: currentTrainIndex(state)
  })
  dispatch('setCurrentTrain', -1)
  dispatch('setTrainStart', null)
}
