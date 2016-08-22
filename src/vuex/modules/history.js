// 这个文件用于纪录用户的训练纪录

let list

try {
  list = JSON.parse(localStorage.getItem('history'))
} catch (e) {}

if (!list) list = []

export default {
  mutations: {
    /**
     * 添加历史记录
     * @param state
     * @param history
     * @param history.week
     * @param history.day
     * @param history.index
     * @param history.start
     * @param history.end
     */
    addHistory (state, history) {
      state.list.push(history)
    }
  },
  state: {
    list
  }
}

