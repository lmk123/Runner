/**
 * 获取用户当前训练状态
 * @param state
 * @returns {{week: number, no: number, finished: boolean, date: number}}
 */
export function currentWork( state ) {
  return {
    week: state.week,
    no: state.no,
    finished: state.finished,
    date: state.date
  };
}

export function week( state ) {
  return state.week;
}

export function no( state ) {
  return state.no;
}
