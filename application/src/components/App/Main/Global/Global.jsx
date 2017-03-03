import React, { Component } from 'react';
import GlobalProfiles from "./GlobalProfiles/GlobalProfiles.jsx";
import styles from './Global.css';

class Global extends Component {
  render() {
    return (
      <div className='global'>
        <GlobalProfiles />
        <GlobalProfiles />
        <GlobalProfiles />
        <GlobalProfiles />
      </div>
    );
  }
}

export default Global;
