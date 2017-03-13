
const REQUEST_CHATS = 'REQUEST_CHATS';
const RECIEVE_CHATS = 'RECIEVE_CHATS';
const token = '';

const requestChats = () => (
  {
    type: REQUEST_CHATS
  }
)
const recieveChats = (chats) => (
  {
    type: RECIEVE_CHATS,
    date: Date.now().getMinutes();
    chats
  }
)

export function fetchChats(token) {
  return function(dispatch) {
    dispatch(requestChats);

    return fetch('/api/getChats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'myToken': token
      }
    }).then((response) => response.json())
    .then((data) => dispatch(recieveChats(data)))
  }
}
