import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/ProjectDetailsList.css';

const ProjectDetailsList = ({
 detailsList, positionClass, sourceURL, siteURL 
}) => (
  <ul className={`details-list ${positionClass}`}>
    {detailsList.map((detail, index) => {
      if (detail === 'source') {
        if (sourceURL) {
          return (
            <li key={index}>
              <span className="circle black" />
              <a className="code-font royal-link" href={sourceURL}>
                View source
              </a>
            </li>
          );
        }
        return (
          <li key={index}>
            <span className="circle black" />
            <span className="code-font line-through">View source</span>
            <span className="code-font"> (soon)</span>
          </li>
        );
      } else if (detail === 'store') {
        return (
          <li key={index}>
            <span className="circle black" />
            <a className="code-font royal-link" href={siteURL}>
              Chrome store
            </a>
          </li>
        );
      } else if (detail === 'resume') {
        return (
          <li key={index}>
            <span className="circle black" />
            <a className="code-font royal-link" href={sourceURL}>
              View resume
            </a>
          </li>
        );
      } else if (detail === 'recommendations') {
        return (
          <li key={index}>
            <span className="circle black" />
            <a className="code-font royal-link" href={siteURL}>
              View recommendations
            </a>
          </li>
        );
      }
      return (
        <li key={index}>
          <span className={`circle ${detail.toLowerCase().replace(/\d+/g, '')}`} />
          <span className="code-font">{detail}</span>
        </li>
      );
    })}
  </ul>
);

ProjectDetailsList.propTypes = {
  detailsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  positionClass: PropTypes.string.isRequired,
  sourceURL: PropTypes.string,
  siteURL: PropTypes.string,
};

ProjectDetailsList.defaultProps = {
  sourceURL: '',
  siteURL: '',
};

export default ProjectDetailsList;
