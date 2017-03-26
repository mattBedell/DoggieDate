import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDog } from './../../../../reducers/index';
import './MemberDogs.css';
import MemberDogsInfo from './MemberDogsInfo/MemberDogsInfo.jsx';

const MemberDogs = (props) => {
  return (
    <div className='memberdogs'>
      <MemberDogsInfo {...props.profile} />
      <div className="dog-pic-box">
        <img src="" alt="dog pic" />
        <img src="" alt="dog pic" />
        <img src="" alt="dog pic" />
        <img src="" alt="dog pic" />
        <img src="" alt="dog pic" />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    profile: getDog(state, ownProps.match.params.id)
  }
}

export default connect(mapStateToProps)(MemberDogs);