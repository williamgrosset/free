import React from 'react';
import ReactTypist from 'react-typist';
import '../styles/components/Writings.css';

const Writings = () => { 
  return (
    <div className="writings">
      <ReactTypist cursor={{ show: false }} className="writings-desc">
      Writings
      </ReactTypist>
    </div>
  );
}

export default Writings;
