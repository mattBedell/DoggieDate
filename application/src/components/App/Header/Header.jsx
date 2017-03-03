import React, { Component } from 'react';
import styles from './Header.css';
import logo from "./../../../../assets/DoggieDateLogo.png";
import iconG from "./../../../../assets/icon-global.png";
import iconN from "./../../../../assets/icon-nearby.png";
import iconM from "./../../../../assets/icon-match.png";
import iconC from "./../../../../assets/icon-chat.png";
import iconP from "./../../../../assets/icon-profile.png";

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img id='logo' src={logo} alt='DoggieDate' />
        <input placeholder='search users' />
        <div className='nav'>
          <img className='icon' src={iconG} alt='Global' />
          <img className='icon' src={iconN} alt='Nearby' />
          <img className='icon' src={iconM} alt='Matches' />
          <img className='icon' src={iconC} alt='Chats' />
          <img className='icon' src={iconP} alt='Profile' />
        </div>
      </div>
    );
  }
}

export default Header;
