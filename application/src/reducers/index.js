import { combineReducers } from 'redux';
import { global_users } from './users.js'

// This importing and exporting is for when things start to scale up

export default combineReducers({
  global_users
});
