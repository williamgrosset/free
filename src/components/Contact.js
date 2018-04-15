/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../styles/components/Contact.css';

const Contact = () => (
  <div className="contact">
    <p className="contact-desc fade-in">
      Get in touch.<br />
      <a className="contact-link" href="mailto:williamhgrosset@gmail.com">
        williamhgrosset@gmail.com
      </a>
      <br />
      <br />
      <a className="contact-link socicon-linkedin mrl" href="https://www.linkedin.com/in/williamgrosset/" />
      <a className="contact-link socicon-hackernews mrl" href="https://news.ycombinator.com/user?id=williamgrosset" />
      <a className="contact-link socicon-twitter mrl" href="https://twitter.com/williamhgrosset" />
      <a className="contact-link socicon-github mrl" href="https://github.com/williamgrosset" />
    </p>
  </div>
);

export default Contact;
