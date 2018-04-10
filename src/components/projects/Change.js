import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spacer from '../../components/Spacer';
import ProjectDetailsList from './ProjectDetailsList';
import '../../styles/components/projects/Change.css';

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

class Change extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="project">
        <div className="ch-content">
          <p className="project-title">Change.org</p>
          <hr className="project-hr" />
          <p className="project-subtitle">software engineer intern — may to dec. 2017</p>
          <Spacer height={4} />
          <p className="ch-desc-txt">
            Collabored on the revenue engineering team and produced high priority features, bug fixes, and quality code
            reviews on a daily basis.
          </p>
          <ProjectDetailsList
            detailsList={['Ruby', 'JavaScript', 'resume', 'recommendations']}
            positionClass="ch-details-pos"
            sourceURL="https://github.com/williamgrosset"
            siteURL="https://linkedin.com/in/williamgrosset"
          />
        </div>
      </div>
    );
  }
}

Change.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
}

export default Change;
