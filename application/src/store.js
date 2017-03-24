import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import throttle from 'lodash/throttle';
import rootReducer from './reducers/index.js';
import fetchMiddleware from './utils/getDataMiddleware.js';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getSavedState = () => {
  try {
    const localState = localStorage.getItem('state');

    if (localState === null) {
      return undefined;
    }
    return JSON.parse(localState);
  } catch (err) {
    return undefined;
  }
};

const saveLocalState = (state) => {
  try {
    const stringState = JSON.stringify(state);
    localStorage.setItem('state', stringState);
  } catch (err) {
    //
  }
};

const store = createStore(rootReducer, getSavedState(),
    composeEnhancers(applyMiddleware(thunk, fetchMiddleware, logger))
);
store.subscribe(throttle(() => {
  saveLocalState(store.getState());
}));

export default store;

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index.js');
    store.replaceReducer(nextRootReducer);
  });
}
