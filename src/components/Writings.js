import React from 'react';
import ReactTypist from 'react-typist';
import '../styles/components/Writings.css';

const Writings = () => { 
  return (
    <div className="writings">
      <ReactTypist className="writings-desc" cursor={{ show: false }}>
      Writings
      </ReactTypist>
    </div>
  );
}

export default Writings;
