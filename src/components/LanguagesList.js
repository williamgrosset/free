import React from 'react';
import PropTypes from 'prop-types';
import trophy from '../images/trophy.png';
import '../styles/components/LanguagesList.css';

const LanguagesList = ({ languages, position }) => {
  const chromeStoreURL = "https://chrome.google.com/webstore/detail/fokus/kapnmpfkldbacoamceiggkcoaepfgiea";
  const MLH2017URL = "http://17w.hackuvic.com/";

  return (
    <ul className={`languages-list ${position}`}>
      {languages.map((language, index) => {
        {if (language == 'null') {
          return <li key={index}>
            <span className={`circle ${language}`}></span>
            <a className="code-font" href={chromeStoreURL}>Chrome store</a>
          </li>
        } else if (language == 'trophy') {
          return <li key={index}>
            <span><img className="trophy" src={trophy} /></span>
            <span className="code-font">Achieved 2nd at <a href={MLH2017URL}>MLH 2017</a></span>
          </li>
        } else {
          return <li key={index}>
            <span className={`circle ${language.toLowerCase()}`}></span>
            <span className="code-font">{language}</span>
          </li>
        }}
      })}
    </ul>
  );
}

LanguagesList.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  position: PropTypes.string.isRequired,
};

export default LanguagesList;
