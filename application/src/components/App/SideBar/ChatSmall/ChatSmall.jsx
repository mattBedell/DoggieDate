import React, { Component } from 'react';
import styles from './ChatSmall.css';

class ChatSmall extends Component {
  render() {
    return (
      <div className='chatsmall'>
        <img src='./../../../application/assets/icon-profile.png' alt='pic' />
        <p>Profile Name</p>
      </div>
    );
  }
}

export default ChatSmall;
