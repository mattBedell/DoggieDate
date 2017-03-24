import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './ChatSmall.css';
import prof from "./../../../../../assets/DoggieDateApp.png";

class ChatSmall extends Component {
  render() {
    return (
      <div className='chatsmall'>
        {/*<Link to='/member' id="chat-member-link"><img src={prof} alt='pic' /></Link>
        <Link to='/chat' id="chat-link"><p>Profile Name</p></Link>*/}
      </div>
    );
  }
}

export default ChatSmall;
