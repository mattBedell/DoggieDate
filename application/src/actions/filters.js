export const SET_VIEW_FILTER = 'SET_VIEW_FILTER';
export const SET_PARAM_FILTER = 'SET_PARAM_FILTER';

export const setViewFilter = (value) => {
  return {
    type: SET_VIEW_FILTER,
    value,
  };
};

export const setParamFilter = (value) => {
  return {
    type: SET_PARAM_FILTER,
    value,
  };
};

