import { combineReducers } from 'redux';


const getUserIds = (data) =>
  data.map((user) => user.id)

const getUserObject = (data) => {
  const userObject = {};
  data.forEach((user) => {
    userObject[user.id] = user
  })
  return userObject;
}

const user_ids = (state = [], action) => {
  switch(action.type) {
    case 'RECIEVE_GLOBAL_USERS':
      return getUserIds(action.data)

    default:
      return state
  }
}

const data = (state = {}, action) => {
  switch(action.type) {
    case 'RECIEVE_GLOBAL_USERS':
      let users = Object.assign({}, )
  }
}

const users = (state = {
  isFetching: false,
  requestedAt: '',
  updatedAt: 'no update',
  data: []
}, action) => {
  switch(action.type) {
    case 'REQUEST_GLOBAL_USERS':
    return Object.assign({}, state, {
      isFetching: true,
      requestedAt: new Date()
    })
    case 'RECIEVE_GLOBAL_USERS':
    return Object.assign({}, state, {
      isFetching: false,
      updatedAt: new Date(),
      data: getUserObject(action.data)
    })
    case 'ERROR_GLOBAL_USERS':
    return Object.assign({}, state, {
      errorFetching: true,
      isFetching: false,
      updatedAt: 'not updated'
    })
    case 'AUTH_ERROR':
    default:
      return state;
  }
};
export default combineReducers({users, user_ids});

export const getGlobalUsers = (state) =>
  state.user_ids.map((userId) => {
    return state.users.data[userId];
  })
