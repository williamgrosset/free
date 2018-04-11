import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectDetailsList from './projects/ProjectDetailsList';
import '../styles/components/Project.css';

// create listener to see if a certain height is in the viewport
// once in the viewport, trigger smooth transform: translate3d(x, y, z)
// TODO:
// then trigger hr to appear and come out
// TODO:
// then trigger title and subtitle to appear
// TODO:
// then finally trigger ProjectDetailsList to appear
// TODO:
// leaving viewport?

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, subtitle, description, details, source } = this.props;

    return (
      <div className="project">
        <div className="project-content">
          <p className="project-title">{title}</p>
          <hr className="project-hr" />
          <p className="project-subtitle">{subtitle}</p>
          <p className="project-desc" dangerouslySetInnerHTML={{__html: description}} />
          <ProjectDetailsList
            detailsList={details}
            positionClass="project-details-pos"
            sourceURL={source}
          />
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
