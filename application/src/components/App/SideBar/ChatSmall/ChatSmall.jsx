import React, { Component } from 'react';
import styles from './ChatSmall.css';
import prof from "./../../../../../assets/DoggieDateApp.png";

class ChatSmall extends Component {
  render() {
    return (
      <div className='chatsmall'>
        <img src={prof} alt='pic' />
        <p>Profile Name</p>
      </div>
    );
  }
}

export default ChatSmall;
