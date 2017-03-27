import { REQUEST_ATTRS,
         RECIEVE_ATTRS,
         ERROR_ATTRS,
         REQUEST_ATTRS_BY_ID,
         RECIEVE_ATTRS_BY_ID,
         ERROR_ATTRS_BY_ID } from './../actions/attributes.js';

// LOTS OF REPEATED CODE IN HERE CLEAN THIS UP <----------------------

export const attributes = (state = {
  allIds: [],
}, action) => {
  if (action.type === RECIEVE_ATTRS) {
    const attrTable = {};
    let allIds = [];

    action.data.forEach((attr) => {
      attrTable[attr.id] = attr;
    });

    allIds = Object.keys(attrTable);

    return Object.assign({}, state, { allIds }, attrTable);
  }
  return state;
};

export const dog_attrs = (state = {}, action) => {
  if (action.type === RECIEVE_ATTRS_BY_ID) {
    return Object.assign({}, state, action.data);
  }
  return state;
};

export const attr_api_status = (state = {
  isFetching: false,
  errorFetching: false,
  requestedAt: '',
  updatedAt: 'no update',
}, action) => {
  switch (action.type) {
    case REQUEST_ATTRS:
      return Object.assign({}, state, {
        isFetching: true,
        errorFetching: false,
        requestedAt: new Date(),
      });
    case RECIEVE_ATTRS:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: false,
        updatedAt: new Date(),
      });
    case ERROR_ATTRS:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: true,
      });
    default:
      return state;
  }
};

export const dog_attr_api_status = (state = {
  isFetching: false,
  errorFetching: false,
  requestedAt: '',
  updatedAt: 'no update',
}, action) => {
  switch (action.type) {
    case REQUEST_ATTRS_BY_ID:
      return Object.assign({}, state, {
        isFetching: true,
        errorFetching: false,
        requestedAt: new Date(),
      });
    case RECIEVE_ATTRS_BY_ID:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: false,
        updatedAt: new Date(),
      });
    case ERROR_ATTRS_BY_ID:
      return Object.assign({}, state, {
        isFetching: false,
        errorFetching: true,
      });
    default:
      return state;
  }
};

// ------------------------ SELECTORS
export const getAttributes = (state, id) => {
  if (state.entities.dog_attrs[id]) {
    return state.entities.dog_attrs[id].map((attrId) => {
      return state.entities.attributes[attrId]
    });
  }
  return [];
};
