import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index.js';
import { fetchGlobalUsers } from './actions/index.js';
import fetchMiddleware from './utils/getDataMiddleware.js'

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk, fetchMiddleware, logger))
);


if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index.js');
      store.replaceReducer(nextRootReducer);
    })
}