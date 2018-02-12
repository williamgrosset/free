import React from 'react';
import Typist from 'react-typist';
import '../styles/components/About.css';

const About = () => { 
  const changeURL = "https://www.change.org";
  const uvicURL = "https://www.google.ca/maps/place/University+of+Victoria/@49.6298867,-116.7198961,5z/data=!4m5!3m4!1s0x548f71575d850fbd:0xc039d0b85e1ede74!8m2!3d48.4634067!4d-123.3116935kadding-top: 5em";
  const facebookURL = "https://www.facebook.com/WilliamGrosset";
  const twitterURL = "https://twitter.com/williamhgrosset";
  const linkedinURL = "https://www.linkedin.com/in/williamgrosset";
  const hackernewsURL = "https://news.ycombinator.com/user?id=williamgrosset";
  const githubURL = "https://github.com/williamgrosset";
  const resumeURL = "https://docs.google.com/document/d/1vaoFvK_89JEpctlfIfrw-Mb2VMdot88AVl7Mdowei44";

  return (
    <div className="about">
      <h2 className="name code-font">William Hamilton Grosset<span className="mustard">.</span></h2>
      <p className="about-desc">
        I am currently 21 years old and studying Computer Science at the <a href={uvicURL}>University of Victoria</a>.
        During 2017, I worked as a research assistant at the University and as a software engineer
        at <a href={changeURL}>Change.org</a>. I love to read, write, <span className="code-font">code</span>, and stay active.
        My interests are in networks, machine learning, beautiful interfaces, and building relationships.
        You can find me on <a href={facebookURL}>Facebook</a>, <a href={twitterURL}>Twitter</a>, <a href={linkedinURL}>
        LinkedIn</a>, <a href={hackernewsURL}>Hacker News</a>, and <a href={githubURL}>GitHub</a>. Also, you can view
        my <a href={resumeURL}>cv</a>. TODO: This needs more ermph to it and a style update.
      </p>
      <Typist className="about-desc code-font" cursor={{ show: false }} startDelay={1000} avgTypingDelay={30} stdTypingDelay={20}>
        I believe in hard work and persistence.<Typist.Delay ms={1000} /><br />
        I believe in relentlessly pursuing your goals.<Typist.Delay ms={1000} /><br />
        I believe in transforming everything around you.
      </Typist>
    </div>
  );
}

export default About;
