import { combineReducers } from 'redux';
import { matches } from './matches';

// This importing and exporting is for when things start to scale up

export default combineReducers({
  matches
});
