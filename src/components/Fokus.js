import React from 'react';
import '../styles/components/Fokus.css';
import fokusBrowser from '../images/fokus_browser.png';

const Fokus = () => { 
  return (
    <div className="project">
      <div className="fk-content">
        <img className="fk-photo" src={fokusBrowser} alt='Fokus' />
      </div>
      <div className="fk-sub-content">
        <p className="fk-title">
          fokus
        </p>
        <hr className="fk-hr" />
        <p className="fk-subtitle">
          google chrome extension — 2017
        </p>
      </div>
    </div>
  );
}

export default Fokus;
