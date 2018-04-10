import React from 'react';
import Typist from 'react-typist';
import '../styles/components/Writings.css';
import '../styles/components/Typist.css';

const Writings = () => (
  <div className="writings">
    <Typist className="writings-desc code-font" cursor={{ show: false }} avgTypingDelay={80}>
      Writings
      <span className="royal">.</span>
    </Typist>
    <Typist className="writings-sub-desc" startDelay={2000} avgTypingDelay={120}>
      Coming soon
    </Typist>
  </div>
);

export default Writings;
