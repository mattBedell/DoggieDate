import React, { Component } from 'react';
import MainHeader from './MainHeader/MainHeader.jsx';
import styles from './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <MainHeader />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
