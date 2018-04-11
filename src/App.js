import React, { Component } from 'react';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Spacer from './components/Spacer';
import data from './components/data';

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
        <Project
          title={data.change.title}
          subtitle={data.change.subtitle}
          description={data.change.description}
          details={data.change.details}
          source={data.change.source}
          windowWidth={width}
          windowHeight={height}
        />
        <Project
          title={data.fokus.title}
          subtitle={data.fokus.subtitle}
          description={data.fokus.description}
          details={data.fokus.details}
          source={data.fokus.source}
          windowWidth={width}
          windowHeight={height}
        />
        <Project
          title={data.ripe.title}
          subtitle={data.ripe.subtitle}
          description={data.ripe.description}
          details={data.ripe.details}
          source={data.ripe.source}
          windowWidth={width}
          windowHeight={height}
        />
        <Project
          title={data.oscar.title}
          subtitle={data.oscar.subtitle}
          description={data.oscar.description}
          details={data.oscar.details}
          source={data.oscar.source}
          windowWidth={width}
          windowHeight={height}
        />
        <Project
          title={data.osn.title}
          subtitle={data.osn.subtitle}
          description={data.osn.description}
          details={data.osn.details}
          source={data.osn.source}
          windowWidth={width}
          windowHeight={height}
        />
        <Spacer height={13} />
        <Contact />
      </div>
    );
  }
}

export default App;
