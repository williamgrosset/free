import React from 'react';
import '../styles/components/Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation right-offset">
      <ul className="list">
        <li>about</li>
        <li>projects</li>
        <li>writings</li>
        <li>contact</li>
      </ul>
    </div>
  );
}

export default Navigation;
