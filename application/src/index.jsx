import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import rootReducer from './reducers/index.js';
import { fetchGlobalUsers } from './actions/index.js';
import fetchMiddleware from './utils/getDataMiddleware.js'

import App from './components/App/App.jsx';
// import Home from './components/Home/Home.jsx';
// import LogIn from './components/Home/LogIn/LogIn.jsx';
// import SignUp from './components/Home/SignUp/SignUp.jsx';
import Main from './components/App/Main/Main.jsx';
import Global from './components/App/Main/Global/Global.jsx';
import Nearby from './components/App/Main/Nearby/Nearby.jsx';
import Matches from './components/App/Main/Matches/Matches.jsx';
import Chat from './components/App/Main/Chat/Chat.jsx';
import MyProfile from './components/App/Main/MyProfile/MyProfile.jsx';
import MemberProfile from './components/App/Main/MemberProfile/MemberProfile.jsx';
import Notifications from './components/App/Main/Notifications/Notifications.jsx';
import SearchResults from './components/App/Main/SearchResults/SearchResults.jsx';


if (module.hot) {
    module.hot.accept()
}

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk, fetchMiddleware, logger))
);


localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE0ODk3ODI0NjQsImV4cCI6MTUyMTM0MDA2NCwiaXNzIjoiRG9nZ2llIERhdGUifQ.3qa9K16KdFBPl_L2rzfyQIYXL_n3T_FLUV3AeHTgEek');

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <Route component={Main}>
          <IndexRoute component={Global} />
          <Route path='/global' component={Global} />
          <Route path='/nearby' component={Nearby} />
          <Route path='/matches' component={Matches} />
          <Route path='/chat' component={Chat} />
          <Route path='/profile' component={MyProfile} />
          <Route path='/member' component={MemberProfile} />
          <Route path='/notifications' component={Notifications} />
          <Route path="/search" component={SearchResults} />
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root-container'));
