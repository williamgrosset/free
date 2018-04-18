import React from 'react';
import '../styles/components/About.css';

const About = () => (
  <div className="about">
    <p className="about-desc about-desc-media fade-in">
      My name is William Grosset.<br />
      Currently, I am studying Computer Science at the University of Victoria. Previously, I worked as a research
      assistant at the{' '}
      <a className="royal-link" href="https://en.wikipedia.org/wiki/University_of_Victoria">
        University
      </a>{' '}
      and as a software engineer at{' '}
      <a className="royal-link" href="https://www.change.org">
        Change.org
      </a>.
    </p>
  </div>
);

export default About;
