import { combineReducers } from 'redux';
import * as dogs from './dogs.js';
import * as attrs from './attributes.js';
import { routerReducer } from 'react-router-redux';


// This importing and exporting is for when things start to scale up

const entities = combineReducers({
  dogs: dogs.dogs,
  attributes: attrs.attributes,
  dog_attrs: attrs.dog_attrs,
});

export default combineReducers({
  dogs: dogs.dog_api_status,
  attributes: attrs.attr_api_status,
  dog_attrs: attrs.dog_attr_api_status,
  router: routerReducer,
  entities,
});

export const getDogs = (state) =>
  dogs.getDogs(state);

export const getDog = (state, id) => 
  dogs.getDog(state, id);

export const getAttributes = (state, id) => 
  attrs.getAttributes(state, id);