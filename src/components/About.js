import React from 'react';
import '../styles/components/About.css';

const About = () => { 
  const changeLink = "https://www.change.org";
  const uvicLink = "https://www.google.ca/maps/place/University+of+Victoria/@49.6298867,-116.7198961,5z/data=!4m5!3m4!1s0x548f71575d850fbd:0xc039d0b85e1ede74!8m2!3d48.4634067!4d-123.3116935kadding-top: 5em";

  return (
    <div className="about">
      <p>
        I am currently studying Computer Science
        at the <a href={uvicLink}>University of Victoria</a>. During 2017, I worked as a research assistant at the
        University and as a software engineer at <a href={changeLink}>Change.org</a>. I love to read, write, code, and stay active. My interests are in distributed
        systems, machine learning, and building beautiful interfaces.
      </p>
      <p>
        I believe in hard work and persistence.<br />I believe in
        relentlessly pursuing your goals.<br />I believe in transforming everything around you.
      </p>
      <p>
        Links to Facebook, Twitter, LinkedIn, GitHub, HackerNews, Resume
      </p>
    </div>
  );
}

export default About;
