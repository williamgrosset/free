import React from 'react';
import '../../styles/components/projects/Fokus.css';
import fokusBrowser from '../../images/fokus_browser.png';
import fokusLogo from '../../images/fokus_logo.png';
import googleLogo from '../../images/google_logo.png';
import ProjectDetailsList from './ProjectDetailsList';

const Fokus = () => { 
  return (
    <div className="project">
      <div className="fk-content">
        <img className="fk-photo" src={fokusBrowser} alt='Fokus browser' />
        <img className="fk-logo" src={fokusLogo} alt='Fokus logo' />
        <img className="google-logo" src={googleLogo} alt='Google logo' />
      </div>
      <div className="fk-sub-content">
        <p className="project-title">
          fokus
        </p>
        <hr className="fk-hr" />
        <p className="project-subtitle mtz">
          google chrome extension | jan. 2017
        </p>
      </div>
      <ProjectDetailsList
        languages={["source", "store", "JavaScript"]}
        position="fk-languages-pos"
        sourceURL="https://github.com/williamgrosset/fokus"
      />
    </div>
  );
}

export default Fokus;
