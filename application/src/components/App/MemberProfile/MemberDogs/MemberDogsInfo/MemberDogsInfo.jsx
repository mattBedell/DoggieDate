import React, { Component } from 'react';
import styles from './MemberDogsInfo.css';
import iconM from "./../../../../../../assets/icon-match.png";


const toggleMatch = (e) => {
  e.target.classList.toggle('matched');
};

const mapAttributes = (props) =>
  props.attrs.map((attr) => <p key={`attr${props.id}${Math.random()}`}>{attr.attribute}</p>)

const MemberDogsInfo = (props) => {
  return (
    <div className='memberdogsinfo'>
      <img className="dog-prof" src={props.picture} alt="dog pic large" />
      <div className="memberdogsinfo-text">
        <div className="memberdogsinfo-text-box"><p>Name:</p><p>{props.name}</p></div>
        <div className="memberdogsinfo-text-box"><p>Age:</p><p>{props.age}</p></div>
        <div className="memberdogsinfo-text-box"><p>Weight:</p><p>{props.weight}</p></div>
        <div className="memberdogsinfo-text-box"><p>Attributes:</p><p>{mapAttributes(props)}</p></div>
      </div>
      <div className="match-box">
        <img id="match-button" onClick={(e) => toggleMatch(e)} src={iconM} alt="match" /></div>
    </div>
  )
}


export default MemberDogsInfo;
