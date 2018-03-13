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
      Writings
      <span
        className="royal"
      >
        .
      </span>
    </Typist>
    <Typist
      className="writings-sub-desc code-font"
      startDelay={1000}
      avgTypingDelay={120}
    >
      Coming soon&nbsp;
        <Typist.Delay ms={1000} />
        .
        <Typist.Delay ms={1000} />
        .
        <Typist.Delay ms={1000} />
        .
        <Typist.Delay ms={1000} />
        &nbsp;I • VII • MMXVIII
    </Typist>
  </div>
);

export default Writings;
