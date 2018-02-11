import React from 'react';
import '../styles/components/Navigation.css';

const Navigation = () => {
  return (
    <ul className="nav">
      <li className="section"><hr className="nav-hr" /><span style={{ marginLeft: '0' }}>about</span></li>
      <li className="section">projects</li>
      <li className="section">writings</li>
      <li className="section">contact</li>
    </ul>
  );
}

export default Navigation;
