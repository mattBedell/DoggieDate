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
        <Link to="/" id="home-link"><img id='logo' src={logo} alt='DoggieDate' /></Link>
        <input id="search" placeholder='search profiles' />
        <Link to="/search" id="search-link"><button>search</button></Link>
        <div className='nav'>
          <Link to="/global" className="icon-links"><div id="global-icon"><img className='icon' src={iconG} alt='Global'/><div id="global-name"><p>global</p></div></div></Link>
          <Link to="/nearby" className="icon-links"><div id="nearby-icon"><img className='icon' src={iconN} alt='Nearby'/><div id="nearby-name"><p>nearby</p></div></div></Link>
          <Link to="/matches" className="icon-links"><div id="matches-icon"><img className='icon' src={iconM} alt='Matches' /><div id="matches-name"><p>matches</p></div></div></Link>
          <Link to="/notifications" className="icon-links"><div id="chats-icon"><img className='icon' src={iconC} alt='Chats' /><div id="chats-name"><p>notifications</p></div></div></Link>
          <Link to="/profile" className="icon-links"><div id="profile-icon"><img className='icon' src={iconP} alt='Profile' /><div id="profile-name"><p>profile</p></div></div></Link>
        </div>
      </div>
    );
  }
}

export default Header;
