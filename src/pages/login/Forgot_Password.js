import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  const handleLogin = () => {
    console.log('Login button clicked');
    navigate('/'); 
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {!submitted && (
        <p className="login-text">
          Already have an account?{' '}
          <span className="login-link" onClick={handleLogin}>
            Login
          </span>
        </p>
      )}
    </div>
  );
}

export default ForgotPassword;
