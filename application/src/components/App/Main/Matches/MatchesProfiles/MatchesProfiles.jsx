import React, { Component } from 'react';
import styles from './MatchesProfiles.css';
import { Link } from 'react-router';

class MatchesProfiles extends Component {
  render() {
    return (
      <div className='matchesprofiles'>
        <Link to="/member" id="matches-member-link"><img src='' /></Link>
      </div>
    );
  }
}

export default MatchesProfiles;
