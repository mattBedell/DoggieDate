import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>DoggieDate</h1>
        <input placeholder='search users' />
        <div className='nav'>
          <h3>Global</h3>
          <h3>Nearby</h3>
          <h3>Matches</h3>
          <h3>Chats</h3>
          <h3>Profile</h3>
        </div>
      </div>
    );
  }
}

export default Header;
