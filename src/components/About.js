import React from 'react';
import '../styles/components/About.css';

const About = () => { 
  const uvicURL = 'https://en.wikipedia.org/wiki/University_of_Victoria'
  const changeURL = 'https://www.change.org';

  return (
    <div className="about">
      <p className="about-desc">
        My name is William Hamilton Grosset.<br />
        Currently, I am studying Computer Science at the University of Victoria.
        Previously, I worked as a research assistant at the <a className="royal-link" href={uvicURL}>University</a> and as a
        software engineer at <a className="royal-link" href={changeURL}>Change.org</a>.
      </p>
    </div>
  );
}

export default About;
