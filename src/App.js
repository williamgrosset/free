import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import About from './components/About';
import Spacer from './components/Spacer';

class App extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <Navigation />
        <Spacer />
        <About />
      </div>
    );
  }
}

export default App;
