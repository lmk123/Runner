export function setTrain( { dispatch }, train ) {
  dispatch( 'setTrain', train );
}

export function restart( { dispatch } ) {
  if ( confirm( '确定要重新开始吗?你的训练进度将会被清除,此操作不可恢复.' ) ) {
    dispatch( 'restart' );
  }
}
