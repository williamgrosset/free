import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectDetailsList from './ProjectDetailsList';
import '../styles/components/Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, subtitle, description, details, source } = this.props;

    return (
      <div className="project fade-in">
        <div className="project-content">
          <p className="project-title">{title}</p>
          <hr className="project-hr" />
          <p className="project-subtitle">{subtitle}</p>
          <p className="project-desc" dangerouslySetInnerHTML={{ __html: description }} />
          <ProjectDetailsList detailsList={details} sourceURL={source} />
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  source: PropTypes.string.isRequired,
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
};

export default Project;
