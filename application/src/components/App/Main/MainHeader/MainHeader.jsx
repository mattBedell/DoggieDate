import React, { Component } from 'react';
import styles from './MainHeader.css';

class MainHeader extends Component {
  render() {
    return (
      <div className='mainheader'>
        <h2>{this.props.filter}</h2>
      </div>
    );
  }
}

export default MainHeader;
