import { combineReducers } from 'redux';
import * as dogs from './dogs.js';
import filter from './filter.js';


// This importing and exporting is for when things start to scale up

const entities = combineReducers({
  dogs: dogs.dogs
})

export default combineReducers({
  dogs: dogs.dog_api_status,
  filter,
  entities
})

export const getDogs = (state) => {
  return dogs.getDogs(state);
}
