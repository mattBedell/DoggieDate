import React, { Component } from 'react';
import MemberInfo from './MemberInfo/MemberInfo.jsx';
import MemberDogs from './MemberDogs/MemberDogs.jsx';
import styles from './MemberProfile.css';

class MemberProfile extends Component {
  render() {
    return (
      <div className='memberprofile'>
        <MemberDogs />
        <MemberInfo />
      </div>
    );
  }
}

export default MemberProfile;
