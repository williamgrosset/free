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
          quickly moved to higher priority features, bug fixes, and thorough code reviews for other engineers.<br /><br />
          From fixing payment issues, creating features in the new React tech stack, my experience as an engineer and
          familarity around the platform quickly matured. as I begun to voice my opinions on features and presenting at product development demos.
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
