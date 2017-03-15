import React, { Component } from 'react';
import styles from './MyInfo.css';

class MyInfo extends Component {
  render() {
    return (
      <div className='myinfo'>
        <img src="" alt="prof. pic" />
        <div className="myinfo-text">
          <div className="myinfo-text-box"><p>Name:</p><p>name goes here</p></div>
          <div className="myinfo-text-box"><p>Username:</p><p>username goes here</p></div>
          <div className="myinfo-text-box"><p>Location:</p><p>zip code goes here</p></div>
        </div>
      </div>
    );
  }
}

export default MyInfo;
