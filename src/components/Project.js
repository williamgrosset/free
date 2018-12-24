/* eslint-disable react/no-danger */
/* (only static content) */
import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import ProjectDetailsList from './ProjectDetailsList';
import '../styles/components/Project.css';

class Project extends Component {
  constructor() {
    super();
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
    const { title, subtitle, description, details, source, trackClickEvent } = this.props;
    const { isInWaypoint } = this.state;

    return (
      <Waypoint topOffset="20%" bottomOffset="26%" onEnter={this.showProjectPrimary} onLeave={this.hideProjectPrimary}>
        <div className="project fade-in">
          <div className="project-content project-content-media">
            <p className="project-title project-title-media">{title}</p>
            <hr className="project-hr" />
            <p
              className={`project-subtitle project-subtitle-media ${
                isInWaypoint ? 'project-subtitle-enter' : 'project-subtitle-leave'
              }`}
            >
              {subtitle}
            </p>
            <div className={`${isInWaypoint ? 'project-primary-enter-media' : 'project-primary-leave'}`}>
              <p className="project-desc project-desc-media" dangerouslySetInnerHTML={{ __html: description }} />
              <ProjectDetailsList detailsList={details} sourceURL={source} trackClickEvent={trackClickEvent} />
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
  trackClickEvent: PropTypes.func.isRequired,
};

export default Project;
