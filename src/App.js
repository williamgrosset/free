import React, { Component } from 'react';
import Spacer from './components/Spacer';
import About from './components/About';
import Change from './components/projects/Change';
import Fokus from './components/projects/Fokus';
import Ripe from './components/projects/Ripe';
import AdditionalProjectsContainer from './components/projects/AdditionalProjectsContainer';
import Writings from './components/Writings';
import Contact from './components/Contact';

class App extends Component {
  // TOOD: Grab window height and pass down to components
  // TODO: Create helper lib for CSS animation functions
  render() {
    return (
      <div className="page">
        <About />
        <Spacer height={20} />
        <Change />
        <Spacer height={20} />
        <Fokus />
        <Spacer height={20} />
        <Ripe />
        <Spacer height={20} />
        <AdditionalProjectsContainer />
        <Spacer height={20} />
        <Writings />
        <Spacer height={20} />
        <Contact />
      </div>
    );
  }
}

export default App;
