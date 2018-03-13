import React from 'react';
import PropTypes from 'prop-types';
import trophyIcon from '../../images/trophy.png';
import '../../styles/components/projects/ProjectDetailsList.css';

const ProjectDetailsList = ({
  detailsList, positionClass, sourceURL, siteURL,
}) => (
  <ul className={`details-list ${positionClass}`}>
    {detailsList.map((detail, index) => {
      if (detail === 'source') {
        return (<li key={index}>
          <span className="circle black" />
          <a className="code-font royal-link" href={sourceURL}>View source</a>
        </li>);
      } else if (detail === 'store') {
        return (<li key={index}>
          <span className="circle black" />
          <a className="code-font royal-link" href={siteURL}>Chrome store</a>
        </li>);
      } else if (detail === 'resume') {
        return (<li key={index}>
          <span className="circle black" />
          <a className="code-font royal-link" href={sourceURL}>View resume</a>
        </li>);
      } else if (detail === 'trophy') {
        return (<li key={index}>
          <span><img className="trophy" src={trophyIcon} alt="Trophy logo" /></span>
          <span className="code-font">Achieved 2nd at <a className="royal-link" href={siteURL}>MLH 2017</a></span>
        </li>);
      }
        return (<li key={index}>
          <span className={`circle ${detail.toLowerCase().replace(/\d+/g, '')}`} />
          <span className="code-font">{detail}</span>
        </li>);
    })}
  </ul>
);

ProjectDetailsList.propTypes = {
  detailsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  positionClass: PropTypes.string.isRequired,
  sourceURL: PropTypes.string,
  siteURL: PropTypes.string,
};

export default ProjectDetailsList;
