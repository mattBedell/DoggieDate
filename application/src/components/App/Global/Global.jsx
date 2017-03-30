import React, { Component } from 'react';
import GlobalProfiles from './GlobalProfiles/GlobalProfiles.jsx';
import styles from './Global.css';
import { connect } from 'react-redux';
import { fetchGlobalDogs, fetchAttributes, fetchGlobalMembers } from './../../../actions/index.js';
import { getDogs, getViewFilter, getParamFilter, getProfiles } from './../../../reducers/index.js';
import MainHeader from './../MainHeader/MainHeader.jsx';


class Global extends Component {

  componentDidMount() {
    this.props.fetchGlobalDogs()
    this.props.fetchAttributes()
    this.props.fetchMembers()
  }

  displayProfiles() {
    return (
      this.props.profiles.map((profile) => {
      return (
        <GlobalProfiles
          key={`gProfile${profile.id}`}
          name={profile.name}
          picture={profile.picture}
          id={profile.id}
          history={this.props.history}
        />
      );
      })
    );
  }

  render() {
    return (
      <div className='global'>
        <MainHeader
        />
        <div className='global-profile-view'>
          {this.displayProfiles()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    viewFilter: getViewFilter(state),
    paramFilter: getParamFilter(state),
    profiles: getProfiles(state, getViewFilter(state).selected),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGlobalDogs: () => dispatch(fetchGlobalDogs()),
    fetchAttributes: () => dispatch(fetchAttributes()),
    fetchMembers: () => dispatch(fetchGlobalMembers()),
  };
};
//
export default connect(mapStateToProps, mapDispatchToProps)(Global);

