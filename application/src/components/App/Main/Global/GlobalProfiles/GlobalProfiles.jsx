import React, { Component } from 'react';
import styles from './GlobalProfiles.css';
import { Link } from 'react-router';

class GlobalProfiles extends Component {
  render() {
    return (
      <div className='globalprofiles'>
        <Link to="/member" id="global-member-link"><img src={this.props.picture} /></Link>
        <p className="globalusername">{this.props.username}</p>
        <div className="online"></div>
      </div>
    );
  }
}

export default GlobalProfiles;
