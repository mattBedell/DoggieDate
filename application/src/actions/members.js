import { CALL_API } from './../utils/getDataMiddleware';

export const REQUEST_GLOBAL_MEMBERS = 'REQUEST_GLOBAL_MEMBERS';
export const RECIEVE_GLOBAL_MEMBERS = 'RECIEVE_GLOBAL_MEMBERS';
export const ERROR_GLOBAL_MEMBERS = 'ERROR_GLOBAL_MEMBERS';

// request/recieve global users
export const fetchGlobalMembers = () => {
  return {
    [CALL_API]: {
      types: [REQUEST_GLOBAL_MEMBERS, RECIEVE_GLOBAL_MEMBERS, ERROR_GLOBAL_MEMBERS],
      endpoint: 'users/',
      stateSlice: 'members',
    },
  };
};
