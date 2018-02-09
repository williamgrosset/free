import React from 'react';
import '../styles/components/Navigation.css';

const Navigation = () => {
  return (
    <ul className="nav">
      <li><hr className="nav-hr" /><span style={{ marginLeft: '0' }}>about</span></li>
      <li>projects</li>
      <li>writings</li>
      <li>contact</li>
    </ul>
  );
}

export default Navigation;
