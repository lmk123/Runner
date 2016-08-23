/**
 * 计算一次训练的总时间
 * @param train
 * @return {String|Number}
 */
export default function (train) {
  if (!train || !train.steps || !train.steps.length) return ''
  return train.steps.reduce((prevVal, step) => prevVal += step.time, 0) * train.repeat
}
