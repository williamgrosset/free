import React from 'react';
import '../../styles/components/projects/AdditionalProjectContainer.css';
import ProjectDetailsList from './ProjectDetailsList';

const AdditionalProjectContainer = () => {
  const reactURL = 'https://reactjs.org/';

  return (
    <div className="additional-project-container">
      <div className="additional-project">
        <p className="project-title code-font">oscar</p>
        <p className="project-subtitle additional-sub">Contribution to the open source clinical application.</p>
        <ProjectDetailsList languages={["source", "Java"]} position="oscar-details-pos" sourceURL="https://github.com/williamgrosset/OSCAR-ConCert" />
      </div>
      <div className="additional-project">
        <p className="project-title code-font" style={{ marginRight: '10px' }}>operating systems & networks</p>
        <p className="project-subtitle">Projects exploring processes, threads, TCP, HTTP, and more.</p>
        <ProjectDetailsList languages={["source", "C", "Python"]} position="os-details-pos" sourceURL="https://github.com/williamgrosset/OSCAR" />
      </div>
      <div className="additional-project">
        <p className="project-title code-font">portfolio website</p>
        <p className="project-subtitle additional-sub">Built with <a href={reactURL}>React</a> and love.</p>
        <ProjectDetailsList languages={["source", "CSS", "HTML", "JavaScript"]} position="website-details-pos" sourceURL="https://github.com/williamgrosset/free" />
      </div>
    </div>
  );
}

export default AdditionalProjectContainer;
