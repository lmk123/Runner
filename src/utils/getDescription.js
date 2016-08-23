/**
 * 根据训练计划返回一段描述此训练计划的字符串
 * @param train
 * @return {String}
 */
export default function (train) {
  if (!train) return ''
  if (train.description) {
    return train.description
  }
  let d = train.steps.reduce((prev, step) => {
    return prev + `${step.name} ${step.time} 分钟, `
  }, '')
  if (train.repeat !== 1) {
    d += `重复 ${train.repeat} 次`
  } else {
    d = d.slice(0, -1)
  }
  return d + '。'
}
