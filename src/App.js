import React, { Component } from 'react';
import About from './components/About';
import Change from './components/projects/Change';
import Fokus from './components/projects/Fokus';
import Ripe from './components/projects/Ripe';
import OSCAR from './components/projects/OSCAR';
import Writings from './components/Writings';
import Contact from './components/Contact';
import Spacer from './components/Spacer';
import AdditionalProjectsContainer from './components/projects/AdditionalProjectsContainer';

// TODO: Create helper lib for CSS animation functions

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { height, width } = this.state;

    return (
      <div className="page">
        <About />
        <Spacer height={14} />
        <Change windowWidth={width} windowHeight={height} />
        <Spacer height={4} />
        <Fokus />
        <Spacer height={4} />
        <Ripe />
        <Spacer height={4} />
        <OSCAR />
        <Spacer height={20} />
        <AdditionalProjectsContainer />
        <Spacer height={15} />
        <Writings />
        <Spacer height={15} />
        <Contact />
      </div>
    );
  }
}

export default App;
