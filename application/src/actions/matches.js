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
    matches
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
    return fetch('/users/getChats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'myToken': token
      }
    })
    .then((r) => r.json())
    .then((matches) => {
      dispatch(recieveMatches(matches))
    })
    .catch((err) => {
      dispatch(errorMatches(err))
    })
  }
};

export {
  fetchMatches
};
