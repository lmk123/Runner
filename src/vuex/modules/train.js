let state
try {
  state = JSON.parse(sessionStorage.getItem('train'))
}catch (e) {}

if (!state) {
  state = {
    start: null, // 开始训练的时间戳
    index: -1 // 用户正在进行的训练是第几个。-1 表明还没有开始训练
  }
}

export default {
  mutations: {
    setCurrentTrain (state, trainIndex) {
      state.index = trainIndex
    },
    setTrainStart (state, date) {
      state.start = date
    }
  },
  state
}
