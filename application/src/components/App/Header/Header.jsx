import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img id='logo' src='./../../../application/assets/DoggieDateLogo.png' alt='DoggieDate' />
        <input placeholder='search users' />
        <div className='nav'>
          <img className='icon' src='./../../../application/assets/icon-global.png' alt='Global' />
          <img className='icon' src='./../../../application/assets/icon-nearby.png' alt='Nearby' />
          <img className='icon' src='./../../../application/assets/icon-match.png' alt='Matches' />
          <img className='icon' src='./../../../application/assets/icon-chat.png' alt='Chats' />
          <img className='icon' src='./../../../application/assets/icon-profile.png' alt='Profile' />
        </div>
      </div>
    );
  }
}

export default Header;
