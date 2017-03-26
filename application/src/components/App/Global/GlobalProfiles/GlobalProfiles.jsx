import React from 'react';
import './GlobalProfiles.css';

const GlobalProfiles = (props) => (
  <div className="globalprofiles">
    <div onClick={() => props.history.push(`/dog/${props.id}`)} id="img-member-link"><img src={props.picture} /></div>
    <div onClick={() => props.history.push(`/dog/${props.id}`)} id="text-member-link"><p className="globalusername">{props.name}</p></div>
    <div className="online"></div>
  </div>
);

export default GlobalProfiles;
