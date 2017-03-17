import React, { Component } from 'react';
import styles from './GlobalProfiles.css';
import { Link } from 'react-router';

class GlobalProfiles extends Component {
  render() {
    return (
      <div className='globalprofiles'>
        <Link to="/member" id="global-member-link"><img src='' /></Link>
      </div>
    );
  }
}

export default GlobalProfiles;
