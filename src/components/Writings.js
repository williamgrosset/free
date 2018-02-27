import React from 'react';
import Typist from 'react-typist';
import '../styles/components/Writings.css';

const Writings = () => (
  <div className="writings">
    <Typist className="writings-desc" cursor={{ show: false }}>
      Empathy. 
    </Typist>
  </div>
);

export default Writings;
