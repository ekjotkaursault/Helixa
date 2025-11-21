// client/src/pages/Login.jsx
import React from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful! 🚀");
    navigate("/chat");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src="/assets/helixa_smile.png" alt="Helixa Face" className="auth-avatar" />
        <h2 className="auth-title">Welcome Back 👋</h2>
        <p className="subtitle">Login to continue Helixa</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="switch-link">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
