import React, { Component } from 'react';
import GlobalProfiles from "./GlobalProfiles/GlobalProfiles.jsx";
import styles from './Global.css';
import { connect } from 'react-redux';
import { fetchGlobalUsers } from './../../../../actions/index.js';
import { getUsers } from './../../../../reducers/index.js';

class Global extends Component {

  componentDidMount() {
    this.props.fetchGlobalUsers('users')
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
    // users: [{name: 'matt', id: 1}, {name: 'charlie', id: 2}]
    users: getUsers(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGlobalUsers: () => dispatch(fetchGlobalUsers('users'))
  }
}
//
 export default connect(mapStateToProps, mapDispatchToProps)(Global);
//export default Global;
