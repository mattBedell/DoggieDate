import auth from './auth.js';

function requestGlobalUsers() {
  return {
    type: 'REQUEST_GLOBAL_USERS',
    date: new Date(),
  }
};

function receiveGlobalUsers(users) {
  return {
    type: 'RECEIVE_GLOBAL_USERS',
    date: new Date(),
    users: users
  }
};

function errorGlobalUsers(err) {
  return {
    type: 'ERROR_GLOBAL_USERS',
  }
};

function fetchGlobalUsers(token) {
  return (dispach, getState) => {
    dispach(requestGlobalUsers())
    return fetch('/users/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'myToken': token
      }
    })
    .then((r) => r.json())
    .then((data) => {
      auth(data, receiveGlobalUsers, dispach)
    })
    .catch((err) => {
      errorGlobalUsers(err)
    })
  }
};

export {
  fetchGlobalUsers
};


