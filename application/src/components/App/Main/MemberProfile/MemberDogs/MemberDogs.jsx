import React, { Component } from 'react';
import styles from './MemberDogs.css';
import MemberDogsInfo from './MemberDogsInfo/MemberDogsInfo.jsx';

class MemberDogs extends Component {
  render() {
    return (
      <div className='memberdogs'>
        <MemberDogsInfo />
        <div className="dog-pic-box">
          <img src="" alt="dog pic" />
          <img src="" alt="dog pic" />
          <img src="" alt="dog pic" />
          <img src="" alt="dog pic" />
          <img src="" alt="dog pic" />
        </div>
      </div>
    );
  }
}

export default MemberDogs;
