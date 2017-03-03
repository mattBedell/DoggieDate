import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img id='logo' src='./../../../application/assets/DoggieDateLogo.png' alt='DoggieDate' />
        <input placeholder='search users' />
        <div className='nav'>
        </div>
      </div>
    );
  }
}

export default Header;
