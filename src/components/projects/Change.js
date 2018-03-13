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
          Collabored on the revenue engineering team. Initially, I begun working on low priority assignments and
          quickly moved to high priority features, bug fixes, and daily code reviews of other engineers.
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
      detailsList={['Ruby', 'JavaScript', 'resume']}
      positionClass="ch-details-pos"
      sourceURL="https://github.com/williamgrosset"
    />
  </div>
);

export default Change;
