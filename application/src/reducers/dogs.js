import { combineReducers } from 'redux';
import {REQUEST_GLOBAL_DOGS,
        RECIEVE_GLOBAL_DOGS,
        ERROR_GLOBAL_DOGS } from './../actions/dogs.js'


export const dogs = (state = {
  allIds: []
}, action) => {
  if(action.type === RECIEVE_GLOBAL_DOGS) {
    let dogsTable = {};
    let allIds = [];

    action.data.forEach((item) => {
      dogsTable[item.id] = item;
    })

    allIds = Object.keys(dogsTable);
    return Object.assign({}, state, { allIds }, dogsTable)
  }
  return state;
}


export const dog_api_status = (state = {
  isFetching: false,
  errorFetching: false,
  requestedAt: '',
  updatedAt: 'no update',
}, action) => {
  switch(action.type) {
    case REQUEST_GLOBAL_DOGS:
      return Object.assign({}, state, {
        isFetching: true,
        errorFetching: false,
        requestedAt: new Date(),
      })
    case RECIEVE_GLOBAL_DOGS:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: false,
        updatedAt: new Date()
      })
    case ERROR_GLOBAL_DOGS:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: true
      })
    default:
      return state;
  }
}

// SELECTORS <--------------------------------
export const getDogs = (state) =>
  state.entities.dogs.allIds.map((userId) => {
    return state.entities.dogs[userId];
  })

export const getDog = (state, id) =>
  state.entities.dogs[id];
