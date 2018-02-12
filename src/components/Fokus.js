import React from 'react';
import '../styles/components/Fokus.css';
import betterWorld from '../images/better_world.png';

const Fokus = () => { 
  return (
    <div className="project">
      <div className="ch-content">
        <img className="ch-photo" src={betterWorld} alt='Better world' />
      </div>
      <div className="ch-sub-content">
        <p className="ch-title">
          fokus
        </p>
        <hr className="ch-hr" />
        <p className="ch-subtitle">
          google chrome extension — 2017
        </p>
      </div>
    </div>
  );
}

export default Fokus;
