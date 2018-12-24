import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/About.css';

const About = ({ trackClickEvent }) => (
  <div className="about">
    <p className="about-desc about-desc-media fade-in">
      <div className="profile-row">
        <div className="column">
          <p className="about-name about-name-media">William Grosset</p>
        </div>
        <div className="column column-mobile">
          <img
            className="profile-photo"
            src="https://avatars3.githubusercontent.com/u/16131737?s=460&v=4"
            alt="William Grosset"
          />
        </div>
      </div>
      <span className="about-desc-sub">
        Computer Science student at the{' '}
        <a
          className="royal-link"
          href="https://en.wikipedia.org/wiki/University_of_Victoria"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClickEvent('UVic link')}
        >
          University of Victoria
        </a>.<br />Previously research assistant and software engineer at{' '}
        <a
          className="royal-link"
          href="https://www.change.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClickEvent('Change.org link')}
        >
          Change.org
        </a>.
      </span>
    </p>
  </div>
);

About.propTypes = { trackClickEvent: PropTypes.func.isRequired };

export default About;
