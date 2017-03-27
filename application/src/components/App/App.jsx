import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import Header from './../App/Header/Header.jsx';
import Main from './../App/Main/Main.jsx';
import SideBar from './../App/SideBar/SideBar.jsx';
import Footer from  './../App/Footer/Footer.jsx';
import styles from './App.css';
import Global from './Global/Global.jsx'
import MemberProfile from './MemberProfile/MemberProfile.jsx';
import MemberDogs from './MemberProfile/MemberDogs/MemberDogs.jsx';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <div className="center">
          <div className="main">
            <Route exact path="/" component={Global} />
            <Route path="/dog/:id" component={MemberDogs} />
          </div>
          <SideBar />
        </div>
        <Footer />
      </div>
      );
  }
}

export default App;
