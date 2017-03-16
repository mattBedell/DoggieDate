import React, { Component } from 'react';
import styles from './MyDogs.css';
import MyDogsInfo from './MyDogsInfo/MyDogsInfo.jsx';

class MyDogs extends Component {
  render() {
    return (
      <div className='mydogs'>
        <div className="dog-pic-box">
          <img src="" alt="dog pic" />
          <img src="" alt="dog pic" />
          <img src="" alt="dog pic" />
          <img src="" alt="dog pic" />
          <img src="" alt="dog pic" />
        </div>
        <MyDogsInfo />
      </div>
    );
  }
}

export default MyDogs;
