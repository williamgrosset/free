import React from 'react';
import ProjectDetailsList from './ProjectDetailsList';
import '../../styles/components/projects/OSN.css';

const OSN = () => (
  <div className="project">
    <div className="osn-content">
      <p className="project-title">Operating Sys. & Networks</p>
      <hr className="project-hr" />
      <p className="project-subtitle">open source medical software — jan. to apr. 2017</p>
      <p className="osn-desc-txt">Projects exploring file systems, multi-threading, IP/TCP/HTTP, and more.</p>
      <ProjectDetailsList
        detailsList={['C', 'Python', 'source']}
        positionClass="osn-details-pos"
        sourceURL="https://github.com/williamgrosset?utf8=%E2%9C%93&tab=repositories&q=university&type=&language="
      />
    </div>
  </div>
);

export default OSN;
