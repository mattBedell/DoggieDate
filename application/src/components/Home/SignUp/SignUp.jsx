import React, { Component } from 'react';
import styles from './SignUp.css';
import { Link } from 'react-router';

class SignUp extends Component {
  render() {
    return (
      <div className='signup'>
        <h1>Sign Up</h1>
        <input placeholder='email'/>
        <input placeholder='password' />
        <Link to="/login"><button>Log In</button></Link>
      </div>
      );
  }
}

export default SignUp;
