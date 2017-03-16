const auth = (state = {
  status: 'AUTHORIZED'
}, action) => {
  switch(action.type) {
    case 'BAD_TOKEN':
      return {
        status: 'NOT_AUTHORIZED'
      }

    case 'EXPIRED_TOKEN':
      return {
        status: action.type,
        expiredAt: action.expiredAt
      }
    case 'AUTHORIZED':
      return {
        status: action.type
      }

    default:
    return state
  }
}
export default auth;
