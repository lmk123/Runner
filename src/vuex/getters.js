import plan from '../plan'

/**
 * 返回用户最后一次训练纪录。
 * @param state
 */
export function lastTrain (state) {
  const { list }  = state.history
  return list[list.length - 1]
}

/**
 * 根据最有一次训练记录返回这一次要训练的计划是第几周第几课
 * @param state
 */
export function nextTrain (state) {
  const last = lastTrain(state)
  const { plans } = plan
  // 若还未开始训练
  if (!last) {
    return {
      week: 0,
      day: 0,
      trains: _.get(plans, [0, 0])
    }
  }

  let { week, day }  = last

  let trains
  // 尝试读取当周的下一次训练计划
  day += 1
  if ((trains = _.get(plan.plans, [week, day]))) {
    return {
      week,
      day,
      trains
    }
  }
  // 尝试读取下一周的第一次训练计划
  week += 1
  day = 0
  if ((trains = _.get(plan.plans, [week, day]))) {
    return {
      week,
      day,
      trains
    }
  }
  // 返回 null 说明当前计划已经完成了
  return null
}

/**
 * 获取当前执行的计划的索引
 * @param state
 * @return {Number}
 */
export function currentTrainIndex (state) {
  return state.train.index
}

/**
 * 获取当前训练的开始时间
 * @param state
 * @return {Number}
 */
export function trainStart (state) {
  return state.train.start
}

/**
 * 获取当前执行的训练计划
 * @param state
 */
export function currentTrain (state) {
  const next = nextTrain(state)
  if (!next) return null
  return next.trains[currentTrainIndex(state)]
}
