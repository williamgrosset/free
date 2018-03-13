import React from 'react';
import ProjectDetailsList from './ProjectDetailsList';
import betterWorldPhoto from '../../images/better_world.png';
import changeLogo from '../../images/change_logo.png';
import '../../styles/components/projects/Change.css';

const Change = () => (
  <div className="project">
    <div className="ch-content">
      <img className="ch-photo" src={betterWorldPhoto} alt="Better world" />
      <span className="ch-desc">
        <p className="ch-desc-txt">
          Quickly exceeded expectations of the intern role and produced high priority features, bug fixes,
          and quality code reviews on a daily basis.
        </p>
      </span>
      <img className="ch-logo" src={changeLogo} alt="Change logo" />
    </div>
    <div className="ch-sub-content">
      <p className="project-title">change.org</p>
      <hr className="project-hr" />
      <p className="project-subtitle">software engineer intern | may to dec. 2017</p>
    </div>
    <ProjectDetailsList
      detailsList={['Ruby', 'JavaScript', 'resume', 'recommendations']}
      positionClass="ch-details-pos"
      sourceURL="https://github.com/williamgrosset"
      siteURL="https://linkedin.com/in/williamgrosset"
    />
  </div>
);

export default Change;
