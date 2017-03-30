import { combineReducers } from 'redux';
import * as dogs from './dogs.js';
import * as attrs from './attributes.js';
import * as members from './members.js';
import filters, * as getFilters from './filters.js'
import { routerReducer } from 'react-router-redux';


// This importing and exporting is for when things start to scale up

const entities = combineReducers({
  dogs: dogs.dogs,
  attributes: attrs.attributes,
  members: members.members,
  dog_attrs: attrs.dog_attrs,
});

export default combineReducers({
  dogs: dogs.dog_api_status,
  attributes: attrs.attr_api_status,
  dog_attrs: attrs.dog_attr_api_status,
  members: members.member_api_status,
  router: routerReducer,
  filters,
  entities,
});

export const getDogs = (state) =>
  dogs.getDogs(state);

export const getDog = (state, id) => 
  dogs.getDog(state, id);

export const getProfiles = (state, filter) =>
  state.entities[filter].allIds.map((id) => {
    return state.entities[filter][id];
  });

export const getAttributes = (state, id) => 
  attrs.getAttributes(state, id);

export const getViewFilter = (state) =>
  getFilters.getViewFilter(state);

export const getParamFilter = (state) =>
  getFilters.getParamFilter(state);
