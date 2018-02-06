import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Spacer from './components/Spacer';
import About from './components/About';
import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Spacer />
        <About />
        <Spacer />
        <Project />
        <Spacer />
        <Project />
        <Spacer />
      </div>
    );
  }
}

export default App;
