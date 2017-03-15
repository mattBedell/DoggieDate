import React, { Component } from 'react';
import MyInfo from './MyInfo/MyInfo.jsx';
import MyDogs from './MyDogs/MyDogs.jsx';
import styles from './MyProfile.css';

class MyProfile extends Component {
  render() {
    return (
      <div className='myprofile'>
        <MyInfo />
        <MyDogs />
      </div>
    );
  }
}

export default MyProfile;
