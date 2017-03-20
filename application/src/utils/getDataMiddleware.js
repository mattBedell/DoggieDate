export const CALL_API = 'API';

const retrieveLocalToken = () => {
  let token = localStorage.getItem('token') || 'none';
  return token;
}

const callApi = (endpoint, config = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': retrieveLocalToken()
  }
}) => {

  return fetch(`/api/${endpoint}`, config)
          .then((response) => response)
}

export default store => next => action => {
  const apiCall = action[CALL_API];
  const state = store.getState();

  // if the action object does not have an api call key then go to next middleware
  // and proceed as normal
  if(!apiCall) {
    return next(action);
  }
  // ADD CHECK FOR ISFETCHING TO PREVENT RACE CONDITIONS HERE <-----------------------------
  // console.log(state);
  // console.log(action[CALL_API].stateSlice);
  // if(state[action[CALL_API].stateSlice].isFetching) {
  //   return
  // }

  // get api call information from the action
  const { endpoint, types} = apiCall;
  // get action types to be used on fetch initiation/completion
  const [request, success, failure] = types;

  // generate action to be dispatched without API key and with correct type and data
  const makeDispatchAction = (data) => {
    // add data to original action
    const actionToDispatch = Object.assign({}, action, data);
    // remove API key from action so this middleware doesn't catch it and run again
    delete actionToDispatch[CALL_API];
    return actionToDispatch
  }

  // dispatch a request action with a request type
  next(makeDispatchAction({
    type: request
  }))

  // do the fetch call
  return callApi(endpoint).then((r) => r.json())
  .then((response) => {
    //dispatch an auth error action if the server failed the request auth
    if(response.authError) {
      return next(makeDispatchAction({
        type: 'AUTH_ERROR',
        message: response.authError.message
      }))
    }
    // dispatch a success action with requested data
    return next(makeDispatchAction({
      type: success,
      data: response
    }))
  })
}













//
