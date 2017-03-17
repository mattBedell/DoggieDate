import React, { Component } from 'react';
import GlobalProfiles from "./GlobalProfiles/GlobalProfiles.jsx";
import styles from './Global.css';
import { connect } from 'react-redux';
import { fetchGlobalUsers } from './../../../../actions/index.js';


class Global extends Component {

  componentWillMount() {
    fetchGlobalUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE0ODk3ODI0NjQsImV4cCI6MTUyMTM0MDA2NCwiaXNzIjoiRG9nZ2llIERhdGUifQ.3qa9K16KdFBPl_L2rzfyQIYXL_n3T_FLUV3AeHTgEek')
  }

  displayProfiles() {
    return (this.props.profiles.map((profile) => {
        return (
        <GlobalProfiles
            username={profile.username}
            picture={profile.picture}
         />
         )
    }))
  }

  render() {
    return (
      <div className='global'>
        {this.displayProfiles()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.fetchGlobalUsers.data
  }
}

export default connect(mapStateToProps)(Global);
