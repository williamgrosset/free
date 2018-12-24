import React, { Component } from 'react';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Spacer from './components/Spacer';
import projects from './data/projects.json';

class App extends Component {
  constructor(props) {
    super(props);
  }

  trackClickEvent() {
    window.analytics.track('Test event');
  }

  render() {
    return (
      <div className="page">
        <About />
        <Spacer height={10} />
        {projects.map(project => (
          <Project
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            details={project.details}
            source={project.source}
          />
        ))}
        <Spacer height={11} />
        <Contact />
      </div>
    );
  }
}

export default App;
