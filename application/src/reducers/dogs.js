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

// export const getGlobaldogs = (state) =>
//   state.user_ids.map((userId) => {
//     return state.dogs.data[userId];
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
  //     case 'RECIEVE_GLOBAL_DOGS':
  //       return getUserIds(action.data)
  //
  //     default:
  //       return state
  //   }
  // }
  //
  // const data = (state = {}, action) => {
  //   switch(action.type) {
  //     case 'RECIEVE_GLOBAL_DOGS':
  //       let dogs = Object.assign({}, )
  //   }
  // }

  // const dogs = (state = {
  //   isFetching: false,
  //   requestedAt: '',
  //   updatedAt: 'no update',
  //   data: []
  // }, action) => {
  //   switch(action.type) {
  //     case 'REQUEST_GLOBAL_DOGS':
  //     return Object.assign({}, state, {
  //       isFetching: true,
  //       requestedAt: new Date()
  //     })
  //     case 'RECIEVE_GLOBAL_DOGS':
  //     return Object.assign({}, state, {
  //       isFetching: false,
  //       updatedAt: new Date()
  //     })
  //     case 'ERROR_GLOBAL_DOGS':
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
