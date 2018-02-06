import React from 'react';
import '../styles/components/Project.css';

const Project = () => { 
  return (
    <div className="project">
      <p>
        Green = entire card
      </p>
      <div className="content">
        <p>
          Blue = content card
        </p>
      </div>
      <div className="sub-content">
        <p>
          Yellow = sub-content card
        </p>
        <p>
          CHANGE
        </p>
        <hr />
        <p className="subtitle">
          Software Engineer Intern | 2017
        </p>
      </div>
    </div>
  );
}

export default Project;
