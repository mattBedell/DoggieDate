import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDog, getAttributes } from './../../../../reducers/index';
import { fetchAttributesById } from './../../../../actions/index'
import './MemberDogs.css';
import MemberDogsInfo from './MemberDogsInfo/MemberDogsInfo.jsx';

const nextDog = ({ dogIds, match, history }, direction) => {
  const dogInd = dogIds.indexOf(match.params.id);
  switch (direction) {
    case 'forward':
      if (dogInd >= 0 && dogInd + 1 < dogIds.length) {
        history.push(`/dog/${dogIds[dogInd+1]}`);
      }
      break;
    case 'back':
      if (dogInd >= 1) {
        history.push(`/dog/${dogIds[dogInd-1]}`);
      }
      break;
  }
};

class MemberDogs extends Component {

  componentDidMount() {
    this.props.fetchAttributesById(this.props.match.params.id);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id && this.props.dog_attrs.length <= 0) {
      this.props.fetchAttributesById(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div className='memberdogs'>
        <div className="nav-view">
          <div onClick={() => nextDog(this.props, 'back')}>{"<"}</div>
          <div onClick={() => nextDog(this.props, 'forward')}>{">"}</div>
        </div>
        <MemberDogsInfo 
          {...this.props.profile}
          attrs={this.props.dog_attrs} 
        />
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
}

const mapStateToProps = (state, ownProps) => {
  return {
    profile: getDog(state, ownProps.match.params.id),
    dog_attrs: getAttributes(state, ownProps.match.params.id),
    dogIds: state.entities.dogs.allIds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAttributesById: (id) => dispatch(fetchAttributesById('dog_attrs', id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberDogs);