import React, { Component } from 'react';
import styles from './SearchProfiles.css';
import { Link } from 'react-router';

class SearchProfiles extends Component {
  render() {
    return (
      <div className='searchprofiles'>
        <Link to="/member" id="search-member-link"><img src='' /></Link>
      </div>
    );
  }
}

export default SearchProfiles;
