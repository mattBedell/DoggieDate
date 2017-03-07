import React, { Component } from 'react';
import styles from './LogIn.css';
import { Link } from 'react-router';

class LogIn extends Component {
  render() {
    return (
      <div className='login'>
        <h1>Log In</h1>
        <input placeholder='username' />
        <input placeholder='password' type='password'/>
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/app"><button>Log In</button></Link>
      </div>
      );
  }
}

export default LogIn;
