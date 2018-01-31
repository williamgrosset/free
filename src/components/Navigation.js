import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
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
}

export default Navigation;
