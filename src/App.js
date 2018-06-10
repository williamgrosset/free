import React from 'react';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Spacer from './components/Spacer';
import projects from './data/projects.json';

const App = () => (
  <div className="page">
    <About />
    <Spacer height={11} />
    {projects.map((project) =>
      <Project
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        details={project.details}
        source={project.source}
      />
    )}
    <Spacer height={11} />
    <Contact />
  </div>
);

export default App;
