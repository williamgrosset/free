import React, { Component } from 'react';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Spacer from './components/Spacer';
import projects from './data/projects.json';

class App extends Component {
  trackClickEvent = (event) => {
    window.analytics.track(event);
  }

  render() {
    return (
      <div className="page">
        <About trackClickEvent={this.trackClickEvent} />
        <Spacer height={10} />
        {projects.map(project => (
          <Project
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            details={project.details}
            source={project.source}
            trackClickEvent={this.trackClickEvent}
          />
        ))}
        <Spacer height={11} />
        <Contact />
      </div>
    );
  }
}

export default App;
