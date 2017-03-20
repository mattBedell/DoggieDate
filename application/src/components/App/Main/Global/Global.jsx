import React, { Component } from 'react';
import GlobalProfiles from "./GlobalProfiles/GlobalProfiles.jsx";
import styles from './Global.css';
import { connect } from 'react-redux';
import { fetchGlobalUsers } from './../../../../actions/index.js';
 import { getGlobalUsers } from './../../../../reducers/index.js';


class Global extends Component {

  componentWillMount() {
    this.props.fetchGlobalUsers()
  }

  displayProfiles() {
    return (this.props.users.map((profile) => {
        return (
        <GlobalProfiles
          key={`gProfile${profile.username}`}
          username={profile.username}
          picture={profile.picture}
        />
         )
    }))
  }

  render() {
    return (
      <div
        className='global'>
        {this.displayProfiles()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getGlobalUsers(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGlobalUsers: () => dispatch(fetchGlobalUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Global);
