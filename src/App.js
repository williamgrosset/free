import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Spacer from './components/Spacer';
import About from './components/About';
import Change from './components/Change';

class App extends Component {
  // TOOD: Grab window height and pass down to components
  // TODO: Create helper lib for CSS animation functions
  render() {
    return (
      <div className="page">
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
