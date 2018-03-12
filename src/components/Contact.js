import React from 'react';
import '../styles/components/Contact.css';

const Contact = () => { 
  const emailURL = 'mailto:williamhgrosset@gmail.com';
  const twitterURL = 'https://twitter.com/williamhgrosset';
  const linkedinURL = 'https://www.linkedin.com/in/williamgrosset/';
  const hackernewsURL = 'https://news.ycombinator.com/user?id=williamgrosset';
  const githubURL = 'https://github.com/williamgrosset';

  return (
    <div className="contact">
      <p className="contact-desc">
        Get in touch. coffee? ball? running? beers? computer?<br />

        <a className="contact-link" href={emailURL}>@williamhgrosset@gmail.com</a>.<br /><br />
        <a className="contact-link socicon-twitter mrl" href={twitterURL} />
        <a className="contact-link socicon-linkedin mrl" href={linkedinURL} />
        <a className="contact-link socicon-github mrl" href={githubURL} />
        <a className="contact-link socicon-hackernews mrl" href={hackernewsURL} />
      </p>
    </div>
  );
}

export default Contact;
