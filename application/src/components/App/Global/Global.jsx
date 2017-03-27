import React, { Component } from 'react';
import GlobalProfiles from './GlobalProfiles/GlobalProfiles.jsx';
import styles from './Global.css';
import { connect } from 'react-redux';
import { fetchGlobalDogs, fetchAttributes } from './../../../actions/index.js';
import { getDogs } from './../../../reducers/index.js';
import MainHeader from './../MainHeader/MainHeader.jsx';


class Global extends Component {

  componentDidMount() {
    this.props.fetchGlobalDogs()
    this.props.fetchAttributes()
  }

  displayProfiles() {
    return (
      this.props.dogs.map((profile) => {
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
        <div className='global-profile-view'> {this.displayProfiles()} </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: getDogs(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGlobalDogs: () => dispatch(fetchGlobalDogs('dogs')),
    fetchAttributes: () => dispatch(fetchAttributes('attributes')),
  };
};
//
export default connect(mapStateToProps, mapDispatchToProps)(Global);

