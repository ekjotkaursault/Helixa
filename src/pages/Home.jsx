// client/src/pages/Home.jsx

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h1 className="home-title">
          Welcome to <span className="brand">Helixa</span>
        </h1>
        <p className="home-subtitle">
          Your smart, multilingual AI support assistant for small businesses.
        </p>

        {/* Helixa image first */}
        <img
          src="/assets/helixa-ai.png"
          alt="Helixa AI Assistant"
          className="helixa-img"
        />

        {/* Button moved below image */}
        <div className="button-container">
          <Link to="/login" className="glow-button">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
