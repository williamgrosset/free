import React from 'react';
import '../styles/components/Contact.css';

const Contact = () => { 
  const emailURL = 'mailto:williamhgrosset@gmail.com';
  const twitterURL = 'https://twitter.com/williamhgrosset';
  const linkedinURL = 'https://www.linkedin.com/in/williamgrosset/';
  const hackernewsURL = 'https://news.ycombinator.com/user?id=williamgrosset';
  const githubURL = 'https://github.com/williamgrosset';
  const resumeURL = '';

  return (
    <div className="contact">
      <p className="contact-desc">
        Reach me at <a href={emailURL}>williamhgrosset@gmail.com</a><br /><br />

        Get in touch. coffee? ball? running? beers? computer?<br /><br />

        <a href={twitterURL}>@Twitter.</a>&nbsp;
        <a href={linkedinURL}>@LinkedIn.</a>&nbsp;
        <a href={hackernewsURL}>@HNews.</a>&nbsp;
        <a href={githubURL}>@GitHub.</a>&nbsp;
        <a href={resumeURL}>@CV.</a>
      </p>
    </div>
  );
}

export default Contact;
