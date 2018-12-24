/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Contact.css';

const Contact = ({ trackClickEvent }) => (
  <div className="contact">
    <p className="contact-desc contact-desc-media fade-in">
      <span>
        Get in touch.
        <span role="img" aria-label="''">
          {' '}
          🍻
        </span>
      </span>
      <br />
      <a
        className="contact-link"
        href="mailto:williamhgrosset@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClickEvent('Email')}
      >
        williamhgrosset@gmail.com
      </a>
      <br />
      <br />
      <a
        className="contact-link socicon-linkedin mrl"
        href="https://www.linkedin.com/in/williamgrosset/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClickEvent('LinkedIn social')}
      />
      <a
        className="contact-link socicon-twitter mrl"
        href="https://twitter.com/williamhgrosset"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClickEvent('Twitter social')}
      />
      <a
        className="contact-link socicon-github"
        href="https://github.com/williamgrosset"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClickEvent('Github social')}
      />
    </p>
  </div>
);

Contact.propTypes = { trackClickEvent: PropTypes.func.isRequired };

export default Contact;
