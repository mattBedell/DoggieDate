import React, { Component } from 'react';
import styles from './MemberDogsInfo.css';
import iconM from "./../../../../../../assets/icon-match.png";

class MemberDogsInfo extends Component {

  toggleMatch(e) {
    e.target.classList.toggle('matched');
  };

  render() {
    return (
      <div className='memberdogsinfo'>
        <img className="dog-prof" src="" alt="dog pic large" />
        <div className="memberdogsinfo-text">
          <div className="memberdogsinfo-text-box"><p>Name:</p><p>name goes here</p></div>
          <div className="memberdogsinfo-text-box"><p>Age:</p><p>age goes here</p></div>
          <div className="memberdogsinfo-text-box"><p>Weight:</p><p>weight goes here</p></div>
          <div className="memberdogsinfo-text-box"><p>Attributes:</p><p>attributes go here</p></div>
        </div>
        <div className="match-box"><img id="match-button" onClick={(e) => this.toggleMatch(e)} src={iconM} alt="match"/></div>
      </div>
    );
  }
}

export default MemberDogsInfo;
