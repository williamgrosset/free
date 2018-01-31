import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="title">William</h1>
          <h1 className="title">Grosset</h1>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default App;
