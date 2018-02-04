import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <Navigation />
        <About />
      </div>
    );
  }
}

export default App;
