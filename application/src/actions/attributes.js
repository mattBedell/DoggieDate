import { CALL_API } from './../utils/getDataMiddleware.js';

export const REQUEST_ATTRS = 'REQUEST_ATTRS';
export const RECIEVE_ATTRS = 'RECIEVE_ATTRS';
export const ERROR_ATTRS = 'ERROR_ATTRS';

export const fetchAttributes =  (stateSlice) => {
  return {
    [CALL_API]: {
      types: [REQUEST_ATTRS, RECIEVE_ATTRS, ERROR_ATTRS],
      endpoint: 'attributes/',
      stateSlice,
    },
  };
};

export const REQUEST_ATTRS_BY_ID = 'REQUEST_ATTRS_BY_ID';
export const RECIEVE_ATTRS_BY_ID = 'RECIEVE_ATTRS_BY_ID';
export const ERROR_ATTRS_BY_ID = 'ERROR_ATTRS_BY_ID';

export const fetchAttributesById = (stateSlice, dogId) => {
  return {
    [CALL_API]: {
      types: [REQUEST_ATTRS_BY_ID, RECIEVE_ATTRS_BY_ID, ERROR_ATTRS_BY_ID],
      endpoint: `attributes/${dogId}`,
      stateSlice,
    },
  };
};
