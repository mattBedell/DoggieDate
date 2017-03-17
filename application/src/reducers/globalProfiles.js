const fetchGlobalUsers = (state = {
  isFetching: false,
  requestedAt: '',
  updatedAt: '',
  data: []
}, action) => {
  switch(action.type) {
    case 'REQUEST_GLOBAL_USERS':
    return Object.assign({}, state, {
      isFetching: true,
      requestedAt: action.date
    })
    case 'RECEIVE_GLOBAL_USERS':
    return Object.assign({}, state, {
      isFetching: true,
      requestedAt: action.date,
      data: action.users
    })
    case 'ERROR_GLOBAL_USERS':
    return Object.assign({}, state, {
      errorFetching: true,
      isFetching: false,
      updatedAt: 'not updated'
    })

    default:
      return state;
  }
};

export {
  fetchGlobalUsers
};
