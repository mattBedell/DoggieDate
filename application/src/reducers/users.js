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
