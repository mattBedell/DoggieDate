import React, { Component } from 'react';
import styles from './MemberInfo.css';


class MemberInfo extends Component {
  render() {
    return (
      <div className='memberinfo'>
        <div className="memberinfo-text">
          <div className="memberinfo-text-box"><p>My Hooman:</p></div>
          <div className="memberinfo-text-box"><p>Name:</p><p>name goes here</p></div>
          <div className="memberinfo-text-box"><p>Username:</p><p>username goes here</p></div>
          <div className="memberinfo-text-box"><p>Location:</p><p>zip code goes here</p></div>
        </div>
        <img className="profile-pic" src="" alt="prof. pic" />
      </div>
    );
  }
}

export default MemberInfo;
