import React, { Component } from 'react';
import { Link } from 'react-router';
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
        <input id="search" placeholder='search profiles' />
        <div className='nav'>
          <Link to="/global"><div id="global-icon"><img className='icon' src={iconG} alt='Global'/><div id="global-name"><p>global</p></div></div></Link>
          <Link to="/nearby"><div id="nearby-icon"><img className='icon' src={iconN} alt='Nearby'/><div id="nearby-name"><p>nearby</p></div></div></Link>
          <Link to="/matches"><div id="matches-icon"><img className='icon' src={iconM} alt='Matches' /><div id="matches-name"><p>matches</p></div></div></Link>
          <Link to="/chat"><div id="chats-icon"><img className='icon' src={iconC} alt='Chats' /><div id="chats-name"><p>chats</p></div></div></Link>
          <Link to="/profile"><div id="profile-icon"><img className='icon' src={iconP} alt='Profile' /><div id="profile-name"><p>profile</p></div></div></Link>
        </div>
      </div>
    );
  }
}

export default Header;
