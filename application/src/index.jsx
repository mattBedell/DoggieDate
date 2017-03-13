import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import reducer from './src/reducers/index.js'

if (module.hot) {
    module.hot.accept()
}

//const store;

ReactDOM.render(
  <Provider store={store} >
    <div></div>
  </Provider>
  , document.getElementById('root-container'));
