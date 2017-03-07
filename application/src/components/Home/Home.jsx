import React, { Component } from 'react';
import { Link } from 'react-router';
import SignUp from './SignUp/SignUp.jsx';
import LogIn from './LogIn/LogIn.jsx';
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <LogIn />
        {this.props.children}
      </div>
      );
  }
}

export default Home;
