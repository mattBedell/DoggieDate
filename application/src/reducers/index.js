import { combineReducers } from 'redux';
import * as users from './users.js'

// This importing and exporting is for when things start to scale up

const entities = combineReducers({
  users: users.users
})

export default combineReducers({
  users: users.user_api_status,
  entities
})

export const getUsers = (state) => {
  return users.getUsers(state);
}
