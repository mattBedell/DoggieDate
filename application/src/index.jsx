import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index.js';
import { fetchMatches } from './actions/index.js';

import App from './components/App/App.jsx';

if (module.hot) {
    module.hot.accept()
}

const logger = createLogger();

const store = createStore(rootReducer,
    compose(applyMiddleware(thunk, logger))
);

// WILL GET TOKEN FROM LOCAL STORAGE
store.dispatch(fetchMatches('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE0ODk2MjM5MTAsImV4cCI6MTUyMTE4MTUxMCwiaXNzIjoiRG9nZ2llIERhdGUifQ.RJrURUg0Wh60mFU92xicIs8ps3KjXdtNlwa5JEzTyNY'));


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root-container'));
