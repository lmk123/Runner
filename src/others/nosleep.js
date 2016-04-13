import NoSleep from 'nosleep.js';

let noSleep;

export function enable() {
  if ( !noSleep ) {
    noSleep = new NoSleep();
  }
  noSleep.enable();
}

export function disable() {
  noSleep && noSleep.disable();
}
