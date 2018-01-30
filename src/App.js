import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">William Grosset</h1>
        </header>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Writings</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default App;
