import React from 'react';
import '../styles/components/Contact.css';

const Contact = () => { 
  const emailURL = "https://www.change.org";

  return (
    <div className="contact">
      <p className="contact-desc">
        My name is William Hamilton Grosset.<br />
        I previously worked as a research assistant at the <a href={emailURL}>University of Victoria</a> and as a
        software engineer <br />I am currently studying Computer Science and
        seeking opportunities beginning in September 2018.
      </p>
    </div>
  );
}

export default Contact;
