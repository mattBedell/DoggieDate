import React, { Component } from 'react';
import Notification from "./Notification/Notification.jsx";
import styles from './Notifications.css';

class Notifications extends Component {
  render() {
    return (
      <div className='notifications'>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </div>
    );
  }
}

export default Notifications;
