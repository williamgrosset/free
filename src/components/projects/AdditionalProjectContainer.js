import React from 'react';
import '../../styles/components/projects/AdditionalProjectContainer.css';
import ProjectDetailsList from './ProjectDetailsList';

const AdditionalProjectContainer = () => {
  const oscarURL = 'http://oscarcanada.org/';
  const reactURL = 'https://reactjs.org/';

  return (
    <div className="additional-project-container">
      <div className="additional-project">
        <p className="project-title code-font">oscar</p>
        <hr className="additional-project-hr" />
        <p className="project-subtitle additional-sub">Automated auditing for the open source medical application <a href={oscarURL}>OSCAR</a>.</p>
        <ProjectDetailsList
          detailsList={["source", "Java"]}
          positionClass="oscar-details-pos"
          sourceURL="https://github.com/williamgrosset/OSCAR-ConCert"
        />
      </div>
      <div className="additional-project">
        <p className="project-title code-font" style={{ marginRight: '10px' }}>operating systems & networks</p>
        <hr className="additional-project-hr" />
        <p className="project-subtitle additional-sub">Projects exploring processes, threads, TCP, HTTP, and more.</p>
        <ProjectDetailsList
          detailsList={["source", "C", "Python"]}
          positionClass="os-details-pos"
          sourceURL="https://github.com/williamgrosset/OSCAR"
        />
      </div>
      <div className="additional-project">
        <p className="project-title code-font">portfolio website</p>
        <hr className="additional-project-hr" />
        <p className="project-subtitle additional-sub">Built with <a href={reactURL}>React</a>.</p>
        <ProjectDetailsList
          detailsList={["source", "CSS3", "HTML5", "JavaScript"]}
          positionClass="website-details-pos"
          sourceURL="https://github.com/williamgrosset/free"
        />
      </div>
    </div>
  );
}

export default AdditionalProjectContainer;
