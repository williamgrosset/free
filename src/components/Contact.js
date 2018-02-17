import React from 'react';
import '../styles/components/Contact.css';

const Contact = () => { 
  const emailURL = 'https://www.change.org';
  const twitterURL = 'https://twitter.com/williamhgrosset';
  const linkedinURL = 'https://www.linkedin.com/in/williamgrosset/';
  const hackernewsURL = 'https://news.ycombinator.com/user?id=williamgrosset';
  const githubURL = 'https://github.com/williamgrosset';

  return (
    <div className="contact">
      <p className="contact-desc">
        You can reach me at<br />
        williamhgrosset@gmail.com<br /><br /><br />

        <a href={twitterURL}>Twitter.</a>&nbsp;
        <a href={linkedinURL}>LinkedIn.</a>&nbsp;
        <a href={hackernewsURL}>Hacker News.</a>&nbsp;
        <a href={githubURL}>GitHub.</a>
      </p>
    </div>
  );
}

export default Contact;
