import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Spacer from './components/Spacer';
import About from './components/About';
import Change from './components/Change';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Spacer />
        <About />
        <Spacer />
        <Change />
        <Spacer />
      </div>
    );
  }
}

export default App;
