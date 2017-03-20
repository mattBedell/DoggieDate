import { combineReducers } from 'redux';
import usersReducer, * as users from './users.js'

// This importing and exporting is for when things start to scale up

export default usersReducer

export const getGlobalUsers = (state) => {
  return users.getGlobalUsers(state);
}
