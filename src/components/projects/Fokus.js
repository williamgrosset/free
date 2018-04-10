import React from 'react';
import Spacer from '../../components/Spacer';
import ProjectDetailsList from './ProjectDetailsList';
import '../../styles/components/projects/Fokus.css';

const Fokus = () => (
  <div className="project">
    <div className="fk-content">
      <p className="project-title">Google</p>
      <hr className="project-hr" />
      <p className="project-subtitle">google chrome extension — jan. 2017</p>
      <Spacer height={6} />
      <p className="fk-desc-txt">
        Fokus is a google chrome extension for domain blocking and meditation. When distracted, take a short
        break to meditate and increase your productivity.<br />
        <br />
      </p>
      <ProjectDetailsList
        detailsList={['JavaScript', 'store', 'source']}
        positionClass="fk-details-pos"
        sourceURL="https://github.com/williamgrosset/fokus"
        siteURL="https://chrome.google.com/webstore/detail/fokus/kapnmpfkldbacoamceiggkcoaepfgiea"
      />
    </div>
  </div>
);

export default Fokus;
