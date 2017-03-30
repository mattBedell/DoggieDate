import { combineReducers } from 'redux';
import {REQUEST_GLOBAL_MEMBERS,
        RECIEVE_GLOBAL_MEMBERS,
        ERROR_GLOBAL_MEMBERS } from './../actions/members.js'


export const members = (state = {
  allIds: []
}, action) => {
  if(action.type === RECIEVE_GLOBAL_MEMBERS) {
    let membersTable = {};
    let allIds = [];

    action.data.forEach((item) => {
      membersTable[item.id] = item;
    })

    allIds = Object.keys(membersTable);
    return Object.assign({}, state, { allIds }, membersTable)
  }
  return state;
}


export const member_api_status = (state = {
  isFetching: false,
  errorFetching: false,
  requestedAt: '',
  updatedAt: 'no update',
}, action) => {
  switch(action.type) {
    case REQUEST_GLOBAL_MEMBERS:
      return Object.assign({}, state, {
        isFetching: true,
        errorFetching: false,
        requestedAt: new Date(),
      })
    case RECIEVE_GLOBAL_MEMBERS:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: false,
        updatedAt: new Date()
      })
    case ERROR_GLOBAL_MEMBERS:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: true
      })
    default:
      return state;
  }
}

// SELECTORS <--------------------------------

