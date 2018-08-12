import React from 'react';
import '../styles/components/About.css';

const About = () => (
  <div className="about">
    <p className="about-desc about-desc-media fade-in">
      <p className="about-name about-name-media">William Grosset.</p>
      <span className="about-desc-sub">
        Computer Science student at the{' '}
        <a className="royal-link" href="https://en.wikipedia.org/wiki/University_of_Victoria">
          University of Victoria
        </a>.<br />Previously research assistant and software engineer at{' '}
        <a className="royal-link" href="https://www.change.org">
          Change.org
        </a>.<br />Creator of{' '}
        <a className="royal-link" href="https://github.com/williamgrosset/chapter">
          Chapter
        </a>.
      </span>
    </p>
  </div>
);

export default About;
