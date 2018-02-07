import React from 'react';
import '../styles/components/Project.css';
import photo from '../images/better_world.png';

const Project = () => { 
  return (
    <div className="project">
      <div className="content">
        <img className="photo" src={photo} alt='Better world' />
      </div>
      <div className="sub-content">
        <p className="title">
          change.org 
        </p>
        <hr />
        <p className="subtitle">
          software engineer intern — 2017
        </p>
      </div>
    </div>
  );
}

export default Project;
