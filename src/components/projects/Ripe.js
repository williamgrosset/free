import React from 'react';
import ProjectDetailsList from './ProjectDetailsList';
import '../../styles/components/projects/Ripe.css';

const Ripe = () => (
  <div className="project">
    <div className="rp-content">
      <p className="project-title">Major League Hacking</p>
      <hr className="project-hr" />
      <p className="project-subtitle">ios application — mar. 2017</p>
      <p className="rp-desc-txt">
        <a className="royal-link" href="https://github.com/williamgrosset/ripe">
          Ripe
        </a>{' '}
        is a checkout, point-of-sale iOS application with image recognition for produce. Achieved 2nd place at{' '}
        <a className="royal-link" href="http://17w.hackuvic.com/">
          Major League Hacking 2017
        </a>
        .
      </p>
      <ProjectDetailsList
        detailsList={['Swift', 'Python', 'source']}
        positionClass="rp-details-pos"
        sourceURL="https://github.com/williamgrosset/ripe"
      />
    </div>
  </div>
);

export default Ripe;
