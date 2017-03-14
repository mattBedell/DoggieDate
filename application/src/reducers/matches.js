
const matches = (state = {
  isFetching: false,
  requestedAt: 'not requested',
  updatedAt: 'not updated',
  matches: []
}, action) => {
  switch(action.type) {
    case 'REQUEST_MATCHES':
      return Object.assign({}, state, {
        isFetching: true,
        requestedAt: action.date
      })
    case 'RECIEVE_MATCHES':
      return Object.assign({}, state, {
        isFetching: false,
        updatedAt: action.date,
        matches: action.matches
      })
    case 'ERROR_MATCHES':
      return Object.assign({}, state, {
        errorFetchingMatches: true,
        isFetching: false,
        updatedAt: 'not updated'
      })
    default:
      return state;
  }
};

export {
  matches
};
