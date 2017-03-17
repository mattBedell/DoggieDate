import { combineReducers } from 'redux';
import { matches } from './matches';
import auth from './auth';

// This importing and exporting is for when things start to scale up

export default combineReducers({
  auth,
  matches
});
