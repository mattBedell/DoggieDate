import React, { Component } from 'react';
import styles from './MemberDogsInfo.css';

class MemberDogsInfo extends Component {
  render() {
    return (
      <div className='memberdogsinfo'>
        <div className="memberdogsinfo-text">
          <div className="memberdogsinfo-text-box"><p>Name:</p><p>name goes here</p></div>
          <div className="memberdogsinfo-text-box"><p>Age:</p><p>age goes here</p></div>
          <div className="memberdogsinfo-text-box"><p>Weight:</p><p>weight goes here</p></div>
          <div className="memberdogsinfo-text-box"><p>Attributes:</p><p>attributes go here</p></div>
        </div>
        <img src="" alt="dog pic large" />
      </div>
    );
  }
}

export default MemberDogsInfo;
