import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDog } from './../../../../reducers/index';
import './MemberDogs.css';
import MemberDogsInfo from './MemberDogsInfo/MemberDogsInfo.jsx';

const nextDog = ({ dogIds, match, history }, direction) => {
  const dogInd = dogIds.indexOf(match.params.id);
  switch (direction) {

    case 'forward':
    if (dogInd >= 0 && dogInd + 1 < dogIds.length) {
      history.push(`/dog/${dogIds[dogInd+1]}`);
    };
    break;
    case 'back':
    if (dogInd >= 1) {
      history.push(`/dog/${dogIds[dogInd-1]}`);
    break;
    };
  };
};

const MemberDogs = (props) => {
  return (
    <div className='memberdogs'>
      <div className="nav-view">
        <div onClick={() => nextDog(props, 'back')}>{"<"}</div>
        <div onClick={() => nextDog(props, 'forward')}>{">"}</div>
      </div>
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
};

const mapStateToProps = (state, ownProps) => {
  return {
    profile: getDog(state, ownProps.match.params.id),
    dogIds: state.entities.dogs.allIds
  }
}

export default connect(mapStateToProps)(MemberDogs);