import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';

class App extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <Navigation />
      </div>
    );
  }
}

export default App;
