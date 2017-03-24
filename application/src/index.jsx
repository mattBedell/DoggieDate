import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { store } from './store.js';
import App from './components/App/App.jsx';
import routes from './routes.jsx';


localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE0OTAwMzE2ODUsImV4cCI6MTUyMTU4OTI4NSwiaXNzIjoiRG9nZ2llIERhdGUifQ.K6OVH0Y2cEbLqDNLDtAuhxUhuaJ5ih_zQLYSw3O_IA0');

const rootContainer = document.getElementById('root-container')

const root = () => (
  <Router history={browserHistory} key={Math.random()}>
    {routes()}
  </Router>
);

render(
  <Provider store={store} >
    {root()}
  </Provider>
  , rootContainer)

if (module.hot) {
  module.hot.accept();
}
