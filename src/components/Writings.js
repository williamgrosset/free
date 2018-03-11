import React from 'react';
import Typist from 'react-typist';
import '../styles/components/Writings.css';
import '../styles/components/Typist.css';

const Writings = () => (
  <div className="writings">
    <Typist
      className="writings-desc"
      cursor={{ show: false }}
      avgTypingDelay={80}
    >
      Writings.
    </Typist>
    <Typist
      className="writings-sub-desc code-font"
      startDelay={1000}
      avgTypingDelay={120}
    >
      Coming soon
    </Typist>
  </div>
);

export default Writings;
