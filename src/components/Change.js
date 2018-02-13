import React from 'react';
import '../styles/components/Change.css';
import betterWorld from '../images/better_world.png';

const Change = () => { 
  return (
    <div className="project">
      <div className="ch-content">
        <img className="ch-photo" src={betterWorld} alt='Better world' />
      </div>
      <div className="ch-sub-content">
        <p className="ch-title">
          change.org 
        </p>
        <hr className="ch-hr" />
        <p className="ch-subtitle">
          software engineer intern — 2017
        </p>
      </div>
    </div>
  );
}

export default Change;