import React from 'react';
import '../../styles/components/projects/Change.css';
import betterWorld from '../../images/better_world.png';
import changeLogo from '../../images/change_logo.png';
import ProjectDetailsList from './ProjectDetailsList';

const Change = () => { 
  return (
    <div className="project">
      <div className="ch-content">
        <img className="ch-photo" src={betterWorld} alt='Better world' />
        <img className="ch-logo" src={changeLogo} alt='Change logo' />
      </div>
      <div className="ch-sub-content">
        <p className="project-title">
          change.org 
        </p>
        <hr className="ch-hr" />
        <p className="project-subtitle">
          software engineer intern — may to dec. 2017
        </p>
      </div>
      <ProjectDetailsList languages={["Ruby", "JavaScript"]} position="ch-languages-pos"/>
    </div>
  );
}

export default Change;
