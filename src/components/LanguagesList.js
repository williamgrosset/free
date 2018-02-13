import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/LanguagesList.css';

const LanguagesList = ({ languages, position }) => {
  return (
    <ul className={`languages-list ${position}`}>
      {languages.map((language, index) => {
        return <li key={index}>
          <span className={`circle ${language}`}></span>
          <span className="code-font">{language.charAt(0).toUpperCase() + language.slice(1)}</span>
        </li>
      })}
    </ul>
  );
}

LanguagesList.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  position: PropTypes.string.isRequired,
};

export default LanguagesList;
