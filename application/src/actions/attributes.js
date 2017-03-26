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