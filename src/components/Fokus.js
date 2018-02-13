import React from 'react';
import '../styles/components/Fokus.css';
import fokusBrowser from '../images/fokus_browser.png';
import fokusLogo from '../images/fokus_logo.png';
import googleLogo from '../images/google_logo.png';

const Fokus = () => { 
  return (
    <div className="project">
      <div className="fk-content">
        <img className="fk-photo" src={fokusBrowser} alt='Fokus' />
        <img className="fk-logo" src={fokusLogo} alt='Fokus' />
        <img className="google-logo" src={googleLogo} alt='Fokus' />
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
