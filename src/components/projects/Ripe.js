import React from 'react';
import ProjectDetailsList from './ProjectDetailsList';
import '../../styles/components/projects/Ripe.css';

const Ripe = () => (
  <div className="project">
    <div className="rp-content">
      <p className="project-title">Major League Hacking</p>
      <hr className="project-hr" />
      <p className="project-subtitle">point-of-sale iOS app | mar. 2017</p>
      <p className="rp-desc-txt">A point-of-sale iOS application with produce image recognition.</p>
      <ProjectDetailsList
        detailsList={['Swift', 'Python', 'source', 'trophy']}
        positionClass="rp-details-pos"
        sourceURL="https://github.com/williamgrosset/ripe"
        siteURL="http://17w.hackuvic.com/"
      />
    </div>
  </div>
);

export default Ripe;
