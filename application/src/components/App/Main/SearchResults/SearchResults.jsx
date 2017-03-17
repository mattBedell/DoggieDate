import React, { Component } from 'react';
import SearchProfiles from "./SearchProfiles/SearchProfiles.jsx";
import styles from './SearchResults.css';

class SearchResults extends Component {
  render() {
    return (
      <div className='searchresults'>
        <SearchProfiles />
        <SearchProfiles />
      </div>
    );
  }
}

export default SearchResults;
