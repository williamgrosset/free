import React, { Component } from 'react';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Spacer from './components/Spacer';
import project from './data/project.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
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
    this.setState({
      height: window.innerHeight,
    });
  }

  render() {
    const { height } = this.state;

    return (
      <div className="page">
        <About />
        <Spacer height={14} />
        <Project
          title={project.change.title}
          subtitle={project.change.subtitle}
          description={project.change.description}
          details={project.change.details}
          source={project.change.source}
          windowHeight={height}
        />
        <Project
          title={project.fokus.title}
          subtitle={project.fokus.subtitle}
          description={project.fokus.description}
          details={project.fokus.details}
          source={project.fokus.source}
          windowHeight={height}
        />
        <Project
          title={project.ripe.title}
          subtitle={project.ripe.subtitle}
          description={project.ripe.description}
          details={project.ripe.details}
          source={project.ripe.source}
          windowHeight={height}
        />
        <Project
          title={project.oscar.title}
          subtitle={project.oscar.subtitle}
          description={project.oscar.description}
          details={project.oscar.details}
          source={project.oscar.source}
          windowHeight={height}
        />
        <Project
          title={project.osn.title}
          subtitle={project.osn.subtitle}
          description={project.osn.description}
          details={project.osn.details}
          source={project.osn.source}
          windowHeight={height}
        />
        <Spacer height={16} />
        <Contact />
      </div>
    );
  }
}

export default App;
