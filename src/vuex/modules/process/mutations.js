export function setProcess( state, processData ) {
  console.log( 'setProcess', processData );
  Object.assign( state, processData );
}
