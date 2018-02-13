import React from 'react';
import '../styles/components/Ripe.css';
import ripeiOS from '../images/ripe_ios.png';

const Ripe = () => { 
  return (
    <div className="project">
      <div className="rp-content">
        <img className="rp-photo" src={ripeiOS} alt='Ripe' />
      </div>
      <div className="rp-sub-content">
        <p className="rp-title">
          ripe 
        </p>
        <hr className="rp-hr" />
        <p className="rp-subtitle">
          point-of-sale iOS app — 2017
        </p>
      </div>
    </div>
  );
}

export default Ripe;
