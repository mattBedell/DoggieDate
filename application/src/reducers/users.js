import { combineReducers } from 'redux';
import {REQUEST_GLOBAL_USERS,
        RECIEVE_GLOBAL_USERS,
        ERROR_GLOBAL_USERS } from './../actions/users.js'


export const users = (state = {
  allIds: []
}, action) => {
  if(action.type === RECIEVE_GLOBAL_USERS) {
    let userTable = {};
    let allIds = [];

    action.data.forEach((item) => {
      userTable[item.id] = item;
    })

    allIds = Object.keys(userTable);
    return Object.assign({}, state, { allIds }, userTable)
  }
  return state;
}


export const user_api_status = (state = {
  isFetching: false,
  errorFetching: false,
  requestedAt: '',
  updatedAt: 'no update',
}, action) => {
  switch(action.type) {
    case REQUEST_GLOBAL_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        errorFetching: false,
        requestedAt: new Date(),
      })
    case RECIEVE_GLOBAL_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: false,
        updatedAt: new Date()
      })
    case ERROR_GLOBAL_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: true
      })
    default:
      return state;
  }
}

// SELECTORS <--------------------------------
export const getUsers = (state) =>
  state.entities.users.allIds.map((userId) => {
    return state.entities.users[userId];
  })

// export const getGlobalUsers = (state) =>
//   state.user_ids.map((userId) => {
//     return state.users.data[userId];
//   })



  // const getUserIds = (data) =>
  //   data.map((user) => user.id)
  //
  // const getUserObject = (data) => {
  //   const userObject = {};
  //   data.forEach((user) => {
  //     userObject[user.id] = user
  //   })
  //   return userObject;
  // }
  //
  // const user_ids = (state = [], action) => {
  //   switch(action.type) {
  //     case 'RECIEVE_GLOBAL_USERS':
  //       return getUserIds(action.data)
  //
  //     default:
  //       return state
  //   }
  // }
  //
  // const data = (state = {}, action) => {
  //   switch(action.type) {
  //     case 'RECIEVE_GLOBAL_USERS':
  //       let users = Object.assign({}, )
  //   }
  // }

  // const users = (state = {
  //   isFetching: false,
  //   requestedAt: '',
  //   updatedAt: 'no update',
  //   data: []
  // }, action) => {
  //   switch(action.type) {
  //     case 'REQUEST_GLOBAL_USERS':
  //     return Object.assign({}, state, {
  //       isFetching: true,
  //       requestedAt: new Date()
  //     })
  //     case 'RECIEVE_GLOBAL_USERS':
  //     return Object.assign({}, state, {
  //       isFetching: false,
  //       updatedAt: new Date()
  //     })
  //     case 'ERROR_GLOBAL_USERS':
  //     return Object.assign({}, state, {
  //       errorFetching: true,
  //       isFetching: false,
  //       updatedAt: 'not updated'
  //     })
  //     case 'AUTH_ERROR':
  //     default:
  //       return state;
  //   }
  // };
