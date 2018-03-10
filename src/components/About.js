import React from 'react';
import '../styles/components/About.css';

const About = () => { 
  const uvicURL = 'https://en.wikipedia.org/wiki/University_of_Victoria'
  const changeURL = 'https://www.change.org';

  return (
    <div className="about">
      <p className="about-desc">
        My name is William Hamilton Grosset.<br />
        Currently, I am studying Computer Science at
        the <a href={uvicURL}>University of Victoria</a>.
        Previously, I worked as a research assistant at the University and as a
        software engineer at <a href={changeURL}>Change.org</a>.
      </p>
    </div>
  );
}

export default About;
