import { SET_VIEW_FILTER, SET_PARAM_FILTER } from './../actions/filters.js';
import { combineReducers } from 'redux';

export const view_type = (state = {
  selected: 'dogs',
  options: ['dogs', 'members', 'search'],
}, action) => {
  if (action.type === SET_VIEW_FILTER) {
    return Object.assign({}, state, { selected: action.value });
  }
  return state;
};

export const view_param = (state = {
  selected: 'all',
  options: ['all'],
}, action) => {
  if (action.type === SET_PARAM_FILTER) {
    return Object.assign({}, state, { selected: action.value });
  }
  return state;
};

export default combineReducers({
  view_type,
  view_param,
});

// SELECTORS ----------------------

export const getViewFilter = (state) => {
  return state.filters.view_type;
};

export const getParamFilter = (state) => {
  return state.filters.view_param;
};
