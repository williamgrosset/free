import React, { Component } from 'react';
import About from './components/About';
import Change from './components/projects/Change';
import Fokus from './components/projects/Fokus';
import Ripe from './components/projects/Ripe';
import OSCAR from './components/projects/OSCAR';
import OSN from './components/projects/OSN';
import Contact from './components/Contact';
import Spacer from './components/Spacer';

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
        <Spacer height={7.5} />
        <Change windowWidth={width} windowHeight={height} />
        <Fokus />
        <Ripe />
        <OSCAR />
        <OSN />
        <Spacer height={13} />
        <Contact />
      </div>
    );
  }
}

export default App;
