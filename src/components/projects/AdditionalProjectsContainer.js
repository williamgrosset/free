import React from 'react';
import '../../styles/components/projects/AdditionalProjectsContainer.css';
import ProjectDetailsList from './ProjectDetailsList';

const AdditionalProjectsContainer = () => {
  const oscarURL = 'http://oscarcanada.org/';
  const reactURL = 'https://reactjs.org/';

  return (
    <div className="additional-project-container">
      <div className="additional-project">
        <p className="project-title code-font">
          oscar
        </p>
        <hr className="additional-project-hr" />
        <p className="project-subtitle additional-sub">
          Automated auditing for the open source medical application <a className="royal-link" href={oscarURL}>OSCAR</a>.
        </p>
        <ProjectDetailsList
          detailsList={["Java", "source"]}
          positionClass="oscar-details-pos"
          sourceURL="https://github.com/williamgrosset/OSCAR-ConCert"
        />
      </div>
      <div className="additional-project">
        <p className="project-title code-font">
          operating systems & networks
        </p>
        <hr className="additional-project-hr" />
        <p className="project-subtitle additional-sub">
          Projects exploring processes, threads, TCP, HTTP, and more.
        </p>
        <ProjectDetailsList
          detailsList={["C", "Python", "source"]}
          positionClass="os-details-pos"
          sourceURL="https://github.com/williamgrosset/OSCAR"
        />
      </div>
      <div className="additional-project">
        <p className="project-title code-font">
          website portfolio
        </p>
        <hr className="additional-project-hr" />
        <p className="project-subtitle additional-sub">
          Built with <a className="royal-link" href={reactURL}>React</a>.
        </p>
        <ProjectDetailsList
          detailsList={["CSS3", "HTML5", "JavaScript", "source"]}
          positionClass="website-details-pos"
          sourceURL="https://github.com/williamgrosset/free"
        />
      </div>
    </div>
  );
}

export default AdditionalProjectsContainer;
