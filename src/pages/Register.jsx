// client/src/pages/Register.jsx
import React from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully! ✅");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src="/assets/helixa_smile.png" alt="Helixa Face" className="auth-avatar" />
        <h2>Create Account 📝</h2>
        <p className="subtitle">Join Helixa and get started</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p className="switch-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
