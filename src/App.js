import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Spacer from './components/Spacer';
import Introduction from './components/Introduction';
import About from './components/About';
import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Introduction />
        <Spacer />
        <About />
        <Spacer />
        <Project />
        <Spacer />
        <Project />
      </div>
    );
  }
}

export default App;
