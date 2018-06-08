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
    <Project
      title={projects.change.title}
      subtitle={projects.change.subtitle}
      description={projects.change.description}
      details={projects.change.details}
      source={projects.change.source}
    />
    <Project
      title={projects.fokus.title}
      subtitle={projects.fokus.subtitle}
      description={projects.fokus.description}
      details={projects.fokus.details}
      source={projects.fokus.source}
    />
    <Project
      title={projects.ripe.title}
      subtitle={projects.ripe.subtitle}
      description={projects.ripe.description}
      details={projects.ripe.details}
      source={projects.ripe.source}
    />
    <Project
      title={projects.oscar.title}
      subtitle={projects.oscar.subtitle}
      description={projects.oscar.description}
      details={projects.oscar.details}
      source={projects.oscar.source}
    />
    <Project
      title={projects.chapter.title}
      subtitle={projects.chapter.subtitle}
      description={projects.chapter.description}
      details={projects.chapter.details}
      source={projects.chapter.source}
    />
    <Project
      title={projects.osn.title}
      subtitle={projects.osn.subtitle}
      description={projects.osn.description}
      details={projects.osn.details}
      source={projects.osn.source}
    />
    <Project
      title={projects.source.title}
      subtitle={projects.source.subtitle}
      description={projects.source.description}
      details={projects.source.details}
      source={projects.source.source}
    />
    <Spacer height={11} />
    <Contact />
  </div>
);

export default App;
