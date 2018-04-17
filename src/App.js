import React from 'react';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Spacer from './components/Spacer';
import projectData from './data/project.json';

const App = () => (
  <div className="page">
    <About />
    <Spacer height={3} />
    <Project
      title={projectData.change.title}
      subtitle={projectData.change.subtitle}
      description={projectData.change.description}
      details={projectData.change.details}
      source={projectData.change.source}
    />
    <Project
      title={projectData.fokus.title}
      subtitle={projectData.fokus.subtitle}
      description={projectData.fokus.description}
      details={projectData.fokus.details}
      source={projectData.fokus.source}
    />
    <Project
      title={projectData.ripe.title}
      subtitle={projectData.ripe.subtitle}
      description={projectData.ripe.description}
      details={projectData.ripe.details}
      source={projectData.ripe.source}
    />
    <Project
      title={projectData.oscar.title}
      subtitle={projectData.oscar.subtitle}
      description={projectData.oscar.description}
      details={projectData.oscar.details}
      source={projectData.oscar.source}
    />
    <Project
      title={projectData.osn.title}
      subtitle={projectData.osn.subtitle}
      description={projectData.osn.description}
      details={projectData.osn.details}
      source={projectData.osn.source}
    />
    <Spacer height={15} />
    <Contact />
  </div>
);

export default App;
