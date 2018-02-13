import React from 'react';
import '../styles/components/Ripe.css';
import ripeiOS from '../images/ripe_ios.png';
import LanguagesList from './LanguagesList';

const Ripe = () => { 
  return (
    <div className="project">
      <div className="rp-content">
        <img className="rp-photo" src={ripeiOS} alt='Ripe' />
      </div>
      <div className="rp-sub-content">
        <p className="project-title">
          ripe 
        </p>
        <hr className="rp-hr" />
        <p className="project-subtitle">
          point-of-sale iOS app — mar. 2017
        </p>
      </div>
      <LanguagesList languages={["swift", "python"]} position="rp-languages-pos" />
    </div>
  );
}

export default Ripe;
