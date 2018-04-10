import React from 'react';
import ProjectDetailsList from './ProjectDetailsList';
import '../../styles/components/projects/OSCAR.css';

const OSCAR = () => (
  <div className="project">
    <div className="osc-content">
      <p className="project-title">OSCAR Medical</p>
      <hr className="project-hr" />
      <p className="project-subtitle">open source medical software — jan. to apr. 2017</p>
      <p className="osc-desc-txt">
        Automated auditing for the open source medical application{' '}
        <a className="royal-link" href="http://oscarcanada.org/">
          OSCAR
        </a>.
      </p>
      <ProjectDetailsList
        detailsList={['Java', 'source']}
        positionClass="osc-details-pos"
        sourceURL="https://github.com/williamgrosset/OSCAR-ConCert"
      />
    </div>
  </div>
);

export default OSCAR;
