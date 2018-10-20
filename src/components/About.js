import React from 'react';
import '../styles/components/About.css';

const About = () => (
  <div className="about">
    <p className="about-desc about-desc-media fade-in">
      <div className="profile-row">
        <div className="column">
          <p className="about-name about-name-media">William Grosset.</p>
        </div>
        <div className="column">
          <img
            className="profile-photo"
            src="https://avatars3.githubusercontent.com/u/16131737?s=460&v=4"
            alt="William Grosset"
          />
        </div>
      </div>
      <span className="about-desc-sub">
        Creator of{' '}
        <a className="royal-link" href="https://github.com/williamgrosset/chapter">
          Chapter
        </a>.<br />
        Computer Science student at the{' '}
        <a className="royal-link" href="https://en.wikipedia.org/wiki/University_of_Victoria">
          University of Victoria
        </a>.<br />Previously research assistant and software engineer at{' '}
        <a className="royal-link" href="https://www.change.org">
          Change.org
        </a>.
      </span>
    </p>
  </div>
);

export default About;
