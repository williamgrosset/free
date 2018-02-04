import React, { Component } from 'react';
import '../static/components/About.css';

class About extends Component {
  render() {
    const changeLink = "https://change.org";
    const uvicLink = "//www.google.ca/maps/place/University+of+Victoria/@49.6298867,-116.7198961,5z/data=!4m5!3m4!1s0x548f71575d850fbd:0xc039d0b85e1ede74!8m2!3d48.4634067!4d-123.3116935kadding-top: 5em";

    return (
      <div className="about">
        <p>
          Hello, I’m William. I am currently studying Computer Science. I previously worked at <a href={changeLink}>Change.org</a> and as a
          research assistant at the <a href={uvicLink}>University of Victoria</a>. My interests are in networks, , and building beautiful interfaces.
        </p>
        <p>
          I love to read, write, and stay active. I believe in hard work and never giving up.
        </p>
      </div>
    );
  }
}

export default About;
