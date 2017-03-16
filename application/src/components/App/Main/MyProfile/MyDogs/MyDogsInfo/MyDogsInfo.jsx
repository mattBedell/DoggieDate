import React, { Component } from 'react';
import styles from './MyDogsInfo.css';

class MyDogsInfo extends Component {
  render() {
    return (
      <div className='mydogsinfo'>
        <div className="mydogsinfo-text">
          <div className="mydogsinfo-text-box"><p>Name:</p><p>name goes here</p></div>
          <div className="mydogsinfo-text-box"><p>Age:</p><p>age goes here</p></div>
          <div className="mydogsinfo-text-box"><p>Weight:</p><p>weight goes here</p></div>
          <div className="mydogsinfo-text-box"><p>Attributes:</p><p>attributes go here</p></div>
        </div>
        <img src="" alt="dog pic large" />
      </div>
    );
  }
}

export default MyDogsInfo;
