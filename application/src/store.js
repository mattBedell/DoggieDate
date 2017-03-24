import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import throttle from 'lodash/throttle';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers/index.js';
import fetchMiddleware from './utils/getDataMiddleware.js';

export const history = createBrowserHistory();
const routerReduxMiddleware = routerMiddleware(history);

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
    composeEnhancers(applyMiddleware(thunk, fetchMiddleware, routerReduxMiddleware, logger))
);
store.subscribe(throttle(() => {
  saveLocalState(store.getState());
}, 1000));

export default store;

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index.js');
    store.replaceReducer(nextRootReducer);
  });
}
