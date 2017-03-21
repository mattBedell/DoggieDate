import { combineReducers } from 'redux';
import * as users from './users.js';
import * as dogs from './dogs.js';

// This importing and exporting is for when things start to scale up

const entities = combineReducers({
  users: users.users,
  dogs: dogs.dogs
})

export default combineReducers({
  users: users.user_api_status,
  dogs: dogs.dog_api_status,
  entities
})

export const getUsers = (state) => {
  return users.getUsers(state);
}
export const getDogs = (state) => {
  return dogs.getDogs(state);
}
