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
          Black = content card
        </p>
      </div>
      <div className="sub-content">
        <p>
          Yellow = sub-content card
        </p>
        <p className="title">
          CHANGE
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
