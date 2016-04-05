import defaultState from '../others/default-state';

export function setTrain( state, train ) {
  Object.assign( state, train );
}

export function restart( state ) {
  Object.assign( state, defaultState );
}
