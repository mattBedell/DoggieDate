import React, { Component } from 'react';
import styles from './NearbyProfiles.css';
import { Link } from 'react-router';

class NearbyProfiles extends Component {
  render() {
    return (
      <div className='nearbyprofiles'>
        <Link to="/member" id="nearby-member-link"><img src='' /></Link>
      </div>
    );
  }
}

export default NearbyProfiles;
