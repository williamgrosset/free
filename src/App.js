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
        <Spacer height={230} />
        <Change />
        <Spacer height={300} />
        <Fokus />
        <Spacer height={280} />
        <Ripe />
        <Spacer height={280} />
        <AdditionalProjectsContainer />
        <Spacer height={260} />
        <Writings />
        <Spacer height={240} />
        <Contact />
      </div>
    );
  }
}

export default App;
