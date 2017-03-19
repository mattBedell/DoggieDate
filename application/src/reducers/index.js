import { combineReducers } from 'redux';
import global_users, * as users from './users.js'

// This importing and exporting is for when things start to scale up

export default combineReducers({
  global_users
});

export const getGlobalUsers = (state) => {
  return users.getGlobalUsers(state);
}
