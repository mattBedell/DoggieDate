import auth from './auth.js'

function requestMatches() {
  return {
    type: 'REQUEST_MATCHES',
    date: new Date()
  }
};

function recieveMatches(matches) {
  return {
    type: 'RECIEVE_MATCHES',
    date: new Date(),
    matches: matches
  }
};

function errorMatches(err) {
  return {
    type: 'ERROR_MATCHES'
  }
};

function fetchMatches(token) {

  return (dispatch, getState) => {
    dispatch(requestMatches())
    return fetch('/users/getMatches', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'myToken': token
      }
    })
    .then((r) => r.json())
    .then((data) => {
      auth(data, recieveMatches, dispatch)
    })
    .catch((err) => {
      errorMatches(err)
    })
  }
};

export {
  fetchMatches
};
