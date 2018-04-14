import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import ProjectDetailsList from './ProjectDetailsList';
import '../styles/components/Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInWaypoint: false,
    };
    this.showProject = this.showProject.bind(this);
    this.hideProject = this.hideProject.bind(this);
  }

  showProject() {
    this.setState({
      isInWaypoint: true,
    });
  }

  hideProject() {
    this.setState({
      isInWaypoint: false,
    });
  }

  render() {
    const { title, subtitle, description, details, source, windowHeight } = this.props;
    const { isInWaypoint } = this.state;

    return (
      <Waypoint onEnter={this.showProject} onLeave={this.hideProject}>
        <div className="project">
          <div className="project-content">
            <p className="project-title">{title}</p>
            <hr className="project-hr" />
            <div className={`project-primary ${isInWaypoint ? 'project-primary-enter' : 'project-primary-leave'}`}>
              <p className="project-subtitle">{subtitle}</p>
              <p className="project-desc" dangerouslySetInnerHTML={{ __html: description }} />
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
  windowHeight: PropTypes.number.isRequired,
};

export default Project;
