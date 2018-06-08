/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/ProjectDetailsList.css';

const ProjectDetailsList = ({ detailsList, sourceURL }) => (
  <ul className="details-list details-list-media">
    {detailsList.map((detail, index) => {
      if (detail === 'source' || detail === 'resume') {
        return (
          <li key={index}>
            <span className="details-circle black" />
            <a className="royal-link" href={sourceURL}>
              {detail === 'resume' ? 'View resume' : 'View source'}
            </a>
          </li>
        );
      }
      return (
        <li key={index}>
          <span
            className={`details-circle ${
              detail.includes('++') ? detail.toLowerCase().replace('++', 'plusplus') : detail.toLowerCase()
            }`}
          />
          <span>{detail}</span>
        </li>
      );
    })}
  </ul>
);

ProjectDetailsList.propTypes = {
  detailsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceURL: PropTypes.string,
};

ProjectDetailsList.defaultProps = { sourceURL: '' };

export default ProjectDetailsList;
