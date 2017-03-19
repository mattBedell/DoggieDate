import { CALL_API } from './../utils/getDataMiddleware';

export const REQUEST_GLOBAL_USERS = 'REQUEST_GLOBAL_USERS';
export const RECIEVE_GLOBAL_USERS = 'RECIEVE_GLOBAL_USERS';
export const ERROR_GLOBAL_USERS = 'ERROR_GLOBAL_USERS';

export function fetchGlobalUsers() {
  return {
    [CALL_API]: {
      types: [REQUEST_GLOBAL_USERS, RECIEVE_GLOBAL_USERS, ERROR_GLOBAL_USERS],
      endpoint: 'users/',
      stateSlice: 'global_users'
    }
  }
}

// function requestGlobalUsers() {
//   return {
//     type: 'REQUEST_GLOBAL_USERS',
//     date: new Date(),
//   }
// };
//
// function receiveGlobalUsers(users) {
//   return {
//     type: 'RECEIVE_GLOBAL_USERS',
//     date: new Date(),
//     users: users
//   }
// };
//
// function errorGlobalUsers(err) {
//   return {
//     type: 'ERROR_GLOBAL_USERS',
//   }
// };
//
// function fetchGlobalUsers(token) {
//   return (dispach, getState) => {
//     dispach(requestGlobalUsers())
//     return fetch('/users/', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'myToken': token
//       }
//     })
//     .then((r) => r.json())
//     .then((data) => {
//       auth(data, receiveGlobalUsers, dispach)
//     })
//     .catch((err) => {
//       errorGlobalUsers(err)
//     })
//   }
// };
//
// export {
//   fetchGlobalUsers
// };
