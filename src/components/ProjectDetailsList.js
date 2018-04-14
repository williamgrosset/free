import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/ProjectDetailsList.css';

const ProjectDetailsList = ({ detailsList, sourceURL }) => (
  <ul className="details-list project-details-pos">
    {detailsList.map((detail, index) => {
      if (detail === 'source' || detail === 'resume') {
        return (
          <li key={index}>
            <span className="details-circle black" />
            <a className="code-font royal-link" href={sourceURL}>
              {detail === 'resume' ? 'View resume' : 'View source'}
            </a>
          </li>
        );
      }
      return (
        <li key={index}>
          <span className={`details-circle ${detail.toLowerCase().replace(/\d+/g, '')}`} />
          <span className="code-font">{detail}</span>
        </li>
      );
    })}
  </ul>
);

ProjectDetailsList.propTypes = {
  detailsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceURL: PropTypes.string,
};

ProjectDetailsList.defaultProps = {
  sourceURL: '',
};

export default ProjectDetailsList;
