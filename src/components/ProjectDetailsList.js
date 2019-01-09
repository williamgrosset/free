/* eslint-disable react/no-array-index-key */
/* (only static content) */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/ProjectDetailsList.css';

const ProjectDetailsList = ({ detailsList, sourceURL, trackClickEvent }) => (
  <ul className="details-list details-list-media">
    {detailsList.map((detail, index) => {
      if (!sourceURL && detail === 'source') {
        return (
          <li key={index}>
            <span className="details-circle black" />
            <span className="opaque">View source</span>
          </li>
        );
      } else if (detail === 'source' || detail === 'resume') {
        return (
          <li key={index}>
            <span className="details-circle black" />
            <a
              className="royal-link"
              href={sourceURL}
              target="_blank"
              onClick={() => trackClickEvent(`Clicked Project Link: ${sourceURL}`)}
            >
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
  trackClickEvent: PropTypes.func.isRequired,
};

ProjectDetailsList.defaultProps = { sourceURL: '' };

export default ProjectDetailsList;
