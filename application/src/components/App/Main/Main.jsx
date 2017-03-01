import React, { Component } from 'react';
import MainHeader from './MainHeader/MainHeader.jsx';
import Global from './Global/Global.jsx';
import styles from './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <MainHeader />
        <Global />
        {/*<Nearby />
        <Matches />
        <Chat />
        <Events />
        <MyProfile />
        <MemberProfile /> */}
      </div>
    );
  }
}

export default Main;
