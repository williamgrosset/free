import React from 'react';
import '../../styles/components/projects/Ripe.css';
import ripePhoto from '../../images/ripe_ios.png';
import ProjectDetailsList from './ProjectDetailsList';

const Ripe = () => { 
  return (
    <div className="project">
      <div className="rp-content">
        <img className="rp-photo" src={ripePhoto} alt="Ripe iOS" />
      </div>
      <div className="rp-sub-content">
        <p className="project-title">
          ripe 
        </p>
        <hr className="rp-hr" />
        <p className="project-subtitle">
          point-of-sale iOS app | mar. 2017
        </p>
      </div>
      <ProjectDetailsList
        detailsList={["source", "Swift", "Python", "trophy"]}
        positionClass="rp-details-pos"
        sourceURL="https://github.com/williamgrosset/ripe"
        siteURL="http://17w.hackuvic.com/"
      />
    </div>
  );
}

export default Ripe;
