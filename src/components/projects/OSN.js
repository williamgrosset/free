import React from 'react';
import ProjectDetailsList from './ProjectDetailsList';
import '../../styles/components/projects/OSN.css';

const OSN = () => (
  <div className="project">
    <div className="osn-content">
      <p className="project-title">Systems & Networks</p>
      <hr className="project-hr" />
      <p className="project-subtitle">low-level academia projects — jan. to apr. 2018</p>
      <p className="osn-desc-txt">Research exploring file systems, multi-threading, and IP/TCP/UDP/HTTP protocols.</p>
      <ProjectDetailsList
        detailsList={['C', 'Python', 'source']}
        positionClass="osn-details-pos"
        sourceURL="https://github.com/williamgrosset?utf8=%E2%9C%93&tab=repositories&q=university&type=&language="
      />
    </div>
  </div>
);

export default OSN;
