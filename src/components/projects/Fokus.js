import React from 'react';
import ProjectDetailsList from './ProjectDetailsList';
import fokusBrowserPhoto from '../../images/fokus_browser.png';
import fokusLogo from '../../images/fokus_logo.png';
import googleLogo from '../../images/google_logo.png';
import '../../styles/components/projects/Fokus.css';

const Fokus = () => (
  <div className="project">
    <div className="fk-content">
      <img className="fk-photo" src={fokusBrowserPhoto} alt="Fokus browser" />
      <span className="fk-desc">
        <p className="fk-desc-txt">
          A google chrome extension for domain blocking and meditation. When visiting a blocked domain, take
          a short break to meditate and increase your productivity.<br /><br />
        </p>
      </span>
      <img className="fk-logo" src={fokusLogo} alt="Fokus logo" />
      <img className="google-logo" src={googleLogo} alt="Google logo" />
    </div>
    <div className="fk-sub-content">
      <p className="project-title">fokus</p>
      <hr className="project-hr" />
      <p className="project-subtitle">google chrome extension | jan. 2017</p>
    </div>
    <ProjectDetailsList
      detailsList={['JavaScript', 'store', 'source']}
      positionClass="fk-details-pos"
      sourceURL="https://github.com/williamgrosset/fokus"
      siteURL="https://chrome.google.com/webstore/detail/fokus/kapnmpfkldbacoamceiggkcoaepfgiea"
    />
  </div>
);

export default Fokus;
