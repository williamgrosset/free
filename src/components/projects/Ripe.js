import React from 'react';
import ProjectDetailsList from './ProjectDetailsList';
import ripePhoto from '../../images/ripe_ios.png';
import '../../styles/components/projects/Ripe.css';

const Ripe = () => (
  <div className="project">
    <div className="rp-content">
      <img className="rp-photo" src={ripePhoto} alt="Ripe iOS" />
      <span className="rp-desc">
        <p className="rp-desc-txt">
          A point-of-sale iOS application with photo image recognition for grocery owners.<br /><br />
          Won 2nd place at Major League Hacking 2017, sponsored by GitHub, Hootsuite, and more.
        </p>
      </span>
    </div>
    <div className="rp-sub-content">
      <p className="project-title">ripe</p>
      <hr className="project-hr" />
      <p className="project-subtitle">point-of-sale iOS app | mar. 2017</p>
    </div>
    <ProjectDetailsList
      detailsList={['Swift', 'Python', 'source', 'trophy']}
      positionClass="rp-details-pos"
      sourceURL="https://github.com/williamgrosset/ripe"
      siteURL="http://17w.hackuvic.com/"
    />
  </div>
);

export default Ripe;
