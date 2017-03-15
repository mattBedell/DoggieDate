import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './ChatSmall.css';
import prof from "./../../../../../assets/DoggieDateApp.png";

class ChatSmall extends Component {
  render() {
    return (
      <Link to='/chat'><div className='chatsmall'>
        <img src={prof} alt='pic' />
        <p>Profile Name</p>
      </div></Link>
    );
  }
}

export default ChatSmall;
