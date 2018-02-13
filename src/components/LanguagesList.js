import React from 'react';
import '../styles/components/LanguagesList.css';

const LanguagesList = ({ position }) => {
  return (
    <ul className={`languages ${position}`}>
      <li>
        <span className="circle ruby"></span>
        <span className="code-font">Ruby</span>
      </li>
      <li>
        <span className="circle javascript"></span>
        <span className="code-font">JavaScript</span>
      </li>
    </ul>
  );
}

export default LanguagesList;
