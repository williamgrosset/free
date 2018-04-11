import React from 'react';
import ProjectDetailsList from './ProjectDetailsList';
import '../../styles/components/projects/Fokus.css';

const Fokus = () => (
  <div className="project">
    <div className="fk-content">
      <p className="project-title">Google</p>
      <hr className="project-hr" />
      <p className="project-subtitle">google chrome extension — jan. 2017</p>
      <p className="fk-desc-txt">
        <a
          className="royal-link"
          href="https://chrome.google.com/webstore/detail/fokus/kapnmpfkldbacoamceiggkcoaepfgiea"
        >
          Fokus
        </a>{' '}
        is a chrome extension for domain blocking and meditation. Block distracting websites, take a short break to meditate,
        and increase your productivity and well-being.<br />
        <br />
      </p>
      <ProjectDetailsList
        detailsList={['JavaScript', 'source']}
        positionClass="fk-details-pos"
        sourceURL="https://github.com/williamgrosset/fokus"
      />
    </div>
  </div>
);

export default Fokus;
