import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Spacer from './components/Spacer';
import About from './components/About';
import Contact from './components/Contact';
import Change from './components/projects/Change';
import Fokus from './components/projects/Fokus';
import Ripe from './components/projects/Ripe';
import AdditionalProjectContainer from './components/projects/AdditionalProjectContainer';
import Writings from './components/Writings';

class App extends Component {
  // TOOD: Grab window height and pass down to components
  // TODO: Create helper lib for CSS animation functions
  render() {
    return (
      <div className="page">
        <Navigation />
        <About />
        <Spacer />
        <Change />
        <Spacer />
        <Fokus />
        <Spacer />
        <Ripe />
        <Spacer />
        <AdditionalProjectContainer />
        <Spacer />
        <Writings />
        <Contact />
      </div>
    );
  }
}

export default App;
