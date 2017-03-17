import React, { Component } from 'react';
import styles from './MemberInfo.css';
import iconM from "./../../../../../../assets/icon-match.png";

class MemberInfo extends Component {

  toggleMatch(e) {
    e.target.classList.toggle('matched');
  };

  render() {
    return (
      <div className='memberinfo'>
        <img className="profile-pic" src="" alt="prof. pic" />
        <div className="memberinfo-text">
          <div className="memberinfo-text-box"><p>Name:</p><p>name goes here</p></div>
          <div className="memberinfo-text-box"><p>Username:</p><p>username goes here</p></div>
          <div className="memberinfo-text-box"><p>Location:</p><p>zip code goes here</p></div>
        </div>
        <div className="match-box"><img id="match-button" onClick={(e) => this.toggleMatch(e)} src={iconM} alt="match"/></div>
      </div>
    );
  }
}

export default MemberInfo;
