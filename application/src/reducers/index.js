import { combineReducers } from 'redux';
import { matches } from './matches';
import { fetchGlobalUsers } from './globalProfiles.js'
import auth from './auth';

// This importing and exporting is for when things start to scale up

export default combineReducers({
  auth,
  matches,
  fetchGlobalUsers
});
