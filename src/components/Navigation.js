import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation right-offset">
        <ul className="list">
          <li>About</li>
          <li>Projects</li>
          <li>Writings</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
