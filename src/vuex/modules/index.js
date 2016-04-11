import processState from './process/state';
import * as processMutations from './process/mutations';

import runningState from './running/state';
import * as runningMutations from './running/mutations';

export default {
  process: {
    state: processState,
    mutations: processMutations
  },
  running: {
    state: runningState,
    mutations: runningMutations
  }
};
