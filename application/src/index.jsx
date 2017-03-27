import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store.js';
import routes from './routes.jsx';

import App from './components/App/App.jsx'
localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE0OTAwMzE2ODUsImV4cCI6MTUyMTU4OTI4NSwiaXNzIjoiRG9nZ2llIERhdGUifQ.K6OVH0Y2cEbLqDNLDtAuhxUhuaJ5ih_zQLYSw3O_IA0');

const rootContainer = document.getElementById('root-container');

const root = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route path="/" component={App} />
    </div>
  </ConnectedRouter>
);

render(
  <Provider store={store} >
    {root()}
  </Provider>
  , rootContainer);

if (module.hot) {
  module.hot.accept();
}
