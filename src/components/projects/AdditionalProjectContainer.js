import React from 'react';
import '../../styles/components/projects/AdditionalProjectContainer.css';
import ProjectDetailsList from './ProjectDetailsList';

const AdditionalProjectContainer = () => {
  const reactURL = 'https://reactjs.org/';

  return (
    <div className="additional-project-container">
      <div className="additional-project">
        <p className="project-title code-font">oscar</p>
        <p className="project-subtitle">Open source contribution.</p>
        <ProjectDetailsList languages={["source", "Java"]} position="" sourceURL="https://github.com/williamgrosset/OSCAR" />
      </div>
      <div className="additional-project">
        <p className="project-title code-font">operating systems & networks</p>
        <p className="project-subtitle">Concepts and projects.</p>
        <ProjectDetailsList languages={["source", "C", "Python"]} position="" sourceURL="https://github.com/williamgrosset/OSCAR" />
      </div>
      <div className="additional-project">
        <p className="project-title code-font">my website</p>
        <p className="project-subtitle">Built with <a href={reactURL}>React</a> and love.</p>
        <ProjectDetailsList languages={["source", "CSS", "HTML", "JavaScript"]} position="" sourceURL="https://github.com/williamgrosset/free" />
      </div>
    </div>
  );
}

export default AdditionalProjectContainer;
