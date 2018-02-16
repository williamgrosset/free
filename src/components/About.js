import React from 'react';
import '../styles/components/About.css';

const About = () => { 
  const changeURL = "https://www.change.org";
  const uvicURL = "https://www.google.ca/maps/place/University+of+Victoria/@49.6298867,-116.7198961,5z/data=!4m5!3m4!1s0x548f71575d850fbd:0xc039d0b85e1ede74!8m2!3d48.4634067!4d-123.3116935kadding-top: 5em";

  return (
    <div className="about">
      <p className="about-desc">
        My name is William Hamilton Grosset.<br />
        I previously worked as a research assistant at the <a href={uvicURL}>University of Victoria</a> and as a
        software engineer at <a href={changeURL}>Change.org</a>.<br />I am currently studying Computer Science and
        seeking opportunities beginning in Fall 2018.
      </p>
    </div>
  );
}

export default About;
