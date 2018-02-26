import React from 'react';
import PropTypes from 'prop-types';
import trophyIcon from '../../images/trophy.png';
import '../../styles/components/projects/ProjectDetailsList.css';

const ProjectDetailsList = ({ detailsList, positionClass, sourceURL, siteURL }) => {
  return (
    <ul className={`details-list ${positionClass}`}>
      {detailsList.map((language, index) => {
        if (language === 'source') {
          return <li key={index}>
            <span className="circle black"></span>
            <a className="code-font" href={sourceURL}>View source</a>
          </li>
        } else if (language === 'store') {
          return <li key={index}>
            <span className="circle black"></span>
            <a className="code-font" href={siteURL}>Chrome store</a>
          </li>
        } else if (language === 'trophy') {
          return <li key={index}>
            <span><img className="trophy" src={trophyIcon} alt="Trophy logo"/></span>
            <span className="code-font">Achieved 2nd at <a href={siteURL}>MLH 2017</a></span>
          </li>
        } else {
          const languageColor = language.toLowerCase().replace(/\d+/g, '');

          return <li key={index}>
            <span className={`circle ${languageColor}`}></span>
            <span className="code-font">{language}</span>
          </li>
        }
      })}
    </ul>
  );
}

ProjectDetailsList.propTypes = {
  detailsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  positionClass: PropTypes.string.isRequired,
  sourceURL: PropTypes.string,
  siteURL: PropTypes.string,
};

export default ProjectDetailsList;
