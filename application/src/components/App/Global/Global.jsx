import React, { Component } from 'react';
import GlobalProfiles from './GlobalProfiles/GlobalProfiles.jsx';
import styles from './Global.css';
import { connect } from 'react-redux';
import { fetchGlobalDogs, changeFilter } from './../../../actions/index.js';
import { getDogs } from './../../../reducers/index.js';
import { getFilter } from './../../../reducers/filter.js';
import MainHeader from './../MainHeader/MainHeader.jsx';


class Global extends Component {

  componentDidMount() {
    this.props.fetchGlobalDogs(),
    this.props.changeFilter('Global')
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
          router={this.props.router}
        />
       )
      })
    )
  }

  render() {
    return (
      <div className='global'>
        <MainHeader
          filter={this.props.filter}
        />
        <div className='global-profile-view'> {this.displayProfiles()} </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // dogs: [{name: 'matt', id: 1}, {name: 'charlie', id: 2}]
    dogs: getDogs(state),
    filter: getFilter(state),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGlobalDogs: () => dispatch(fetchGlobalDogs('dogs')),
    changeFilter: (filter) => dispatch(changeFilter(filter))
  }
}
//
 export default connect(mapStateToProps, mapDispatchToProps)(Global);
//export default Global;
