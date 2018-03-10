import React from 'react';
import '../styles/components/About.css';

const About = () => { 
  const uvicURL = 'https://www.google.ca/maps/place/University+of+Victoria/@49.6298867,-116.7198961,5z/data=!4m5!3m4!1s0x548f71575d850fbd:0xc039d0b85e1ede74!8m2!3d48.4634067!4d-123.3116935kadding-top: 5em';
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

      <p className="about-sub-desc">
        "And so the unfree man cotinues to dream, to condemn, and to remain where he is.
         There must be a better way."
      </p>
    </div>
  );
}

export default About;
