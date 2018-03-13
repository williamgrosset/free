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
          Collabored on the revenue engineering team. Initially, I begun working on low priority assignments and
          quickly moved to high priority features, bug fixes, and daily code reviews of other engineers.
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
