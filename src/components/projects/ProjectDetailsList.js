import React from 'react';
import PropTypes from 'prop-types';
import trophy from '../../images/trophy.png';
import '../../styles/components/projects/ProjectDetailsList.css';

const ProjectDetailsList = ({ languages, position, sourceURL }) => {
  const chromeStoreURL = "https://chrome.google.com/webstore/detail/fokus/kapnmpfkldbacoamceiggkcoaepfgiea";
  const MLH2017URL = "http://17w.hackuvic.com/";

  return (
    <ul className={`languages-list ${position}`}>
      {languages.map((language, index) => {
        {if (language == 'source') {
          return <li key={index}>
            <a className="code-font" href={sourceURL}>View source</a>
          </li>
        } else if (language == 'store') {
          return <li key={index}>
            <a className="code-font" href={chromeStoreURL}>Chrome store</a>
          </li>
        } else if (language == 'trophy') {
          return <li key={index}>
            <span><img className="trophy" src={trophy} /></span>
            <span className="code-font">Achieved 2nd at <a href={MLH2017URL}>MLH 2017</a></span>
          </li>
        } else {
          const languageColor = language.toLowerCase().replace(/\d+/g, '');

          return <li key={index}>
            <span className={`circle ${languageColor}`}></span>
            <span className="code-font">{language}</span>
          </li>
        }}
      })}
    </ul>
  );
}

ProjectDetailsList.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  position: PropTypes.string.isRequired,
  sourceURL: PropTypes.string,
};

export default ProjectDetailsList;
