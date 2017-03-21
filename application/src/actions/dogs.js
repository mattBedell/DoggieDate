import { CALL_API } from './../utils/getDataMiddleware';

export const REQUEST_GLOBAL_DOGS = 'REQUEST_GLOBAL_DOGS';
export const RECIEVE_GLOBAL_DOGS = 'RECIEVE_GLOBAL_DOGS';
export const ERROR_GLOBAL_DOGS = 'ERROR_GLOBAL_DOGS';

// request/recieve global users
export const fetchGlobalDogs = (stateSlice)  => {
  return {
    [CALL_API]: {
      types: [REQUEST_GLOBAL_DOGS, RECIEVE_GLOBAL_DOGS, ERROR_GLOBAL_DOGS],
      endpoint: 'dogs/doglist/',
      method: 'POST',
      stateSlice
    }
  }
}
