import React from 'react';
import '../styles/components/Contact.css';

const Contact = () => { 
  const emailURL = "https://www.change.org";

  return (
    <div className="contact">
      <p className="contact-desc">
        You can reach me at<br />
        williamhgrosset@gmail.com<br /><br /><br />

        Twitter.
        LinkedIn.
        Hacker News.
        GitHub.
      </p>
    </div>
  );
}

export default Contact;
