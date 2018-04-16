/* eslint-disable react/no-danger */
/* (only static content) */
import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import ProjectDetailsList from './ProjectDetailsList';
import '../styles/components/Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { isInWaypoint: false };
    this.showProjectPrimary = this.showProjectPrimary.bind(this);
    this.hideProjectPrimary = this.hideProjectPrimary.bind(this);
  }

  showProjectPrimary() {
    this.setState({ isInWaypoint: true });
  }

  hideProjectPrimary() {
    this.setState({ isInWaypoint: false });
  }

  render() {
    const { title, subtitle, description, details, source } = this.props;
    const { isInWaypoint } = this.state;

    return (
      <Waypoint
        topOffset="300px"
        bottomOffset="300px"
        onEnter={this.showProjectPrimary}
        onLeave={this.hideProjectPrimary}
      >
        <div className="project fade-in">
          <div className="project-content project-media-content">
            <p className="project-title project-media-title">{title}</p>
            <hr className="project-hr" />
            <div className={`${isInWaypoint ? 'project-primary-enter' : 'project-primary-leave'}`}>
              <p className="project-subtitle project-media-subtitle">{subtitle}</p>
              <p className="project-desc project-media-desc" dangerouslySetInnerHTML={{ __html: description }} />
              <ProjectDetailsList detailsList={details} sourceURL={source} />
            </div>
          </div>
        </div>
      </Waypoint>
    );
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  source: PropTypes.string.isRequired,
};

export default Project;
