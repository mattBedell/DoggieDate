const global_users = (state = {
  isFetching: false,
  requestedAt: '',
  updatedAt: 'no update',
  data: []
}, action) => {
  switch(action.type) {
    case 'REQUEST_GLOBAL_USERS':
    return Object.assign({}, state, {
      isFetching: true,
      requestedAt: new Date()
    })
    case 'RECIEVE_GLOBAL_USERS':
    return Object.assign({}, state, {
      isFetching: false,
      updatedAt: new Date(),
      data: action.data
    })
    case 'ERROR_GLOBAL_USERS':
    return Object.assign({}, state, {
      errorFetching: true,
      isFetching: false,
      updatedAt: 'not updated'
    })
    case 'AUTH_ERROR':
    default:
      return state;
  }
};
export default global_users;

export const getGlobalUsers = (state) => {
  return state.global_users.data
}
