import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectDetailsList from './ProjectDetailsList';
import '../styles/components/Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, subtitle, description, details, source } = this.props;

    return (
      <div className="project fade-in">
        <div className="project-content">
          <p className="project-title">{title}</p>
          <hr className="project-hr" />
          <div className="project-primary">
            <p className="project-subtitle">{subtitle}</p>
            <p className="project-desc" dangerouslySetInnerHTML={{ __html: description }} />
            <ProjectDetailsList detailsList={details} sourceURL={source} />
          </div>
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
  windowHeight: PropTypes.number.isRequired,
  windowWidth: PropTypes.number.isRequired,
};

export default Project;
