import React, { Component } from 'react';
import NearbyProfiles from "./NearbyProfiles/NearbyProfiles.jsx";
import styles from './Nearby.css';

class Nearby extends Component {
  render() {
    return (
      <div className='nearby'>
        <NearbyProfiles />
        <NearbyProfiles />
        <NearbyProfiles />
        <NearbyProfiles />
      </div>
    );
  }
}

export default Nearby;
