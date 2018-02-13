import React, { Component } from 'react';
import Spacer from './components/Spacer';
import About from './components/About';
import Change from './components/Change';
import Fokus from './components/Fokus';
import Ripe from './components/Ripe';

class App extends Component {
  // TOOD: Grab window height and pass down to components
  // TODO: Create helper lib for CSS animation functions
  render() {
    return (
      <div className="page">
        <About />
        <Spacer />
        <Change />
        <Spacer />
        <Fokus />
        <Spacer />
        <Ripe />
        <Spacer />
      </div>
    );
  }
}

export default App;
