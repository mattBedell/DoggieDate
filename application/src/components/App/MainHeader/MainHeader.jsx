import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getViewFilter, getParamFilter } from './../../../reducers/index';
import { setViewFilter, setParamFilter} from './../../../actions/index';
import './MainHeader.css';

const generateOptions = (optArr) =>
  optArr.map((opt) => <option key={`viewDrop${opt}`}>{opt}</option>)

const MainHeader = (props) => (
  <div className='mainheader'>
    <select onChange={(e) => props.setViewFilter(e.target.value)}>
      {generateOptions(props.viewFilter.options)}
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    viewFilter: getViewFilter(state),
    paramFilter: getParamFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setViewFilter: (value) => dispatch(setViewFilter(value)),
    setParamFilter: (value) => dispatch(setParamFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
