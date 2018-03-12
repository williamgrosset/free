import React, { Component } from 'react';
import Spacer from './components/Spacer';
import About from './components/About';
import Contact from './components/Contact';
import Change from './components/projects/Change';
import Fokus from './components/projects/Fokus';
import Ripe from './components/projects/Ripe';
import AdditionalProjectsContainer from './components/projects/AdditionalProjectsContainer';
import Writings from './components/Writings';

class App extends Component {
  // TOOD: Grab window height and pass down to components
  // TODO: Create helper lib for CSS animation functions
  render() {
    return (
      <div className="page">
        <About />
        <Spacer height={220} />
        <Change />
        <Spacer height={220} />
        <Fokus />
        <Spacer height={220} />
        <Ripe />
        <Spacer height={220} />
        <AdditionalProjectsContainer />
        <Spacer height={200} />
        <Writings />
        <Spacer height={160} />
        <Contact />
      </div>
    );
  }
}

export default App;
