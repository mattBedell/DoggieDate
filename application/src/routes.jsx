import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App/App.jsx'
import Global from './components/App/Global/Global.jsx'
import Nearby from './components/App/Nearby/Nearby.jsx'
import Matches from './components/App/Matches/Matches.jsx'
import Chat from './components/App/Chat/Chat.jsx'
import MyProfile from './components/App/MyProfile/MyProfile.jsx'
import MemberProfile from './components/App/MemberProfile/MemberProfile.jsx'
import Notifications from './components/App/Nearby/Nearby.jsx'
import SearchResults from './components/App/SearchResults/SearchResults.jsx'

export default function(newApp = App) {
    return (
        <Route path='/' component={App} />
    );
}

        //     <Route path='/nearby' component={Nearby} />
        //     <Route path='/matches' component={Matches} />
        //     <Route path='/chat' component={Chat} />
        //     <Route path='/profile' component={MyProfile} />
        //     <Route path='/dog/:id' component={MemberProfile} />
        //     <Route path='/notifications' component={Notifications} />
        //     <Route path="/search" component={SearchResults} />
        // </Route>*/