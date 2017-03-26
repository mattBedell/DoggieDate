import { REQUEST_ATTRS,
         RECIEVE_ATTRS,
         ERROR_ATTRS } from './../actions/attributes.js';

export const attributes = (state = {
  allIds: [],
}, action) => {
  if (action.type === RECIEVE_ATTRS) {
    const attrTable = {};
    let allIds = [];

    action.data.forEach((attr) => {
      attrTable[attr.id] = attr;
    })

    allIds = Object.keys(attrTable);

    return Object.assign({}, state, { allIds }, attrTable);
  }
  return state;
};

export const attr_api_status = (state = {
  isFetching: false,
  errorFetching: false,
  requestedAt: '',
  updatedAt: 'no update',
}, action) => {
  switch(action.type) {
    case REQUEST_ATTRS:
      return Object.assign({}, state, {
        isFetching: true,
        errorFetching: false,
        requestedAt: new Date(),
      })
    case RECIEVE_ATTRS:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: false,
        updatedAt: new Date()
      })
    case ERROR_ATTRS:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: true
      })
    default:
      return state;
  }
}