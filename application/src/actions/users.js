import { CALL_API } from './../utils/getDataMiddleware';

export const REQUEST_GLOBAL_USERS = 'REQUEST_GLOBAL_USERS';
export const RECIEVE_GLOBAL_USERS = 'RECIEVE_GLOBAL_USERS';
export const ERROR_GLOBAL_USERS = 'ERROR_GLOBAL_USERS';

// request/recieve global users
export function fetchGlobalUsers(stateSlice) {
  return {
    [CALL_API]: {
      types: [REQUEST_GLOBAL_USERS, RECIEVE_GLOBAL_USERS, ERROR_GLOBAL_USERS],
      endpoint: 'users/',
      stateSlice
    }
  }
}
