import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory, IndexRedirect } from 'react-router';

import Home from './../../components/Home/Home.jsx';
import SignUp from './../../components/Home/SignUp/SignUp.jsx';
// import SetUp from './components/Home/SetUp/SetUp.jsx';
import LogIn from './../../components/Home/LogIn/LogIn.jsx';

import App from './../../components/App/App.jsx';
import Global from './../../components/App/Main/Global/Global.jsx';
// import Nearby from './components/App/Main/Nearby/Nearby.jsx';
// import Matches from './components/App/Main/Matches/Matches.jsx';
// import Chats from './components/App/Main/Chats/Chats.jsx';
// import MyProfile from './components/App/Main/MyProfile/MyProfile.jsx';
// import MemberProfile from './components/App/Main/MemberProfile/MemberProfile.jsx';
// import Events from './components/App/Main/Events/Events.jsx';

if (module.hot) {
    module.hot.accept()
}

const Routes = React.createClass({
    render(){
      return(
        <Router history={ browserHistory }>
        <Route path='/'>
          <IndexRoute component={Home} />
          <Route path='/signup' component={SignUp} />
          {/*<Route path='/setup' component={SetUp} />*/}
          <Route path='/login' component={LogIn} />
        </Route>
          <Route path='/app' >
            <IndexRoute component={App} />
            <Route path='/global' component={Global} />
            {/*<Route path='/nearby' component={Nearby} />
            <Route path='/matches' component={Matches} />
            <Route path='/chats' component={Chats} />
            <Route path='/profile' component={MyProfile} />
            <Route path='/member' component={MemberProfile} />
            <Route path='/events' component={Events} />*/}
          </Route>
        </Router>
        )
    }
});

ReactDOM.render(<Routes />, document.getElementById('root-container'));
