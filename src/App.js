import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import About from './components/About';
import Spacer from './components/Spacer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Introduction />
        <Spacer />
        <About />
        <Spacer />
      </div>
    );
  }
}

export default App;
