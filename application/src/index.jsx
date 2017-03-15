import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import rootReducer from './reducers/index.js';
import { fetchMatches } from './actions/index.js';

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
// import MemberProfile from './components/App/Main/MemberProfile/MemberProfile.jsx';

if (module.hot) {
    module.hot.accept()
}

const logger = createLogger();

const store = createStore(rootReducer,
    compose(applyMiddleware(thunk, logger))
);

// WILL GET TOKEN FROM LOCAL STORAGE
store.dispatch(fetchMatches('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFDb25rbGluIiwiaWF0IjoxNDg5NjA2NDk2LCJleHAiOjE0ODk2OTI4OTYsImlzcyI6IkRvZ2dpZSBEYXRlIn0.WYUvLqMDRwJWtrlohQbjJmptQfWb4DhAjLdYFJB-Crs'));


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
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root-container'));


