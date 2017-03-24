import React, { Component } from 'react';
import styles from './GlobalProfiles.css';
import { Link } from 'react-router';

class GlobalProfiles extends Component {
  render() {
    return (
      <div className='globalprofiles'>
        <div onClick={() => this.props.history.push(`/dog/${this.props.id}`)} id="img-member-link"><img src={this.props.picture} /></div>
        <div onClick={() => this.props.history.push(`/dog/${this.props.id}`)} id="text-member-link"><p className="globalusername">{this.props.name}</p></div>
        <div className="online"></div>
      </div>
    );
  }
}

export default GlobalProfiles;
