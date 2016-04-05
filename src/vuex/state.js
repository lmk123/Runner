import defaultState from '../others/default-state';

let state;

try {
  state = JSON.parse( localStorage.state );
}
catch ( e ) {
  state = defaultState;
}

export default state;
